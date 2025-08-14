import {
  EDIT,
  MODAL_CENTER,
  MODAL_SMALL,
  QUERY_KEYS,
  ROLE,
  statusClasses,
  statusLabels,
} from '@/types/consts';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import type { Schedule } from '@/types/types';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { deleteCalendar } from '@/api/calendar';

interface Props {
  closeModal: () => void;
  openModal?: (modal: string) => void;
  data: Schedule;
}

const DisplayCalendar = ({ closeModal, openModal, data }: Props) => {
  const role = useSelector((state: any) => state.auth.role);
  const mutation = useCustomMutation(deleteCalendar, [QUERY_KEYS.CALENDAR]);

  const handleDelete = async () => {
    try {
      const result = confirm('¿Seguro que desea eliminar el horario?');
      if (result) {
        await mutation.mutateAsync(data._id);
        closeModal();
      }
    } catch (error: any) {}
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Servicio" closeModal={closeModal} />

        <DisplaySection title="Información General" isLast>
          <DisplaySubsection>
            <DisplayInfo label="Folio" value={data.service.folio} />
            <DisplayInfo
              label="Status"
              value={statusLabels[data.service.status]}
              statusColor={statusClasses[data.service.status]}
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Fecha" value={dayjs(data.date).format('DD-MM-YYYY')} />
            <DisplayInfo label="Hora" value={`${data.startTime} - ${data.endTime}`} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Cliente" value={data.service.client} />
            <DisplayInfo label="Instalador" value={data.installer.name} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo
              label="Tienda"
              value={
                <>
                  {'#'}
                  {data.store.numStore}&nbsp;{data.store.name}
                </>
              }
            />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          {openModal && role === ROLE.LOCAL && (
            <div className={`flex gap-5`}>
              <Button text="Editar" type="button" variant="edit" onClick={() => openModal(EDIT)} />
              <Button text="Eliminar" type="button" variant="delete" onClick={handleDelete} />
            </div>
          )}
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayCalendar;

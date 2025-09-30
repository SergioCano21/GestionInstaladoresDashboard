import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import type { Schedule } from '@/types/types';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import dayjs from 'dayjs';

interface Props {
  closeModal: () => void;
  data: Schedule;
}

const DisplayBlock = ({ closeModal, data }: Props) => {
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Horario Bloqueado" closeModal={closeModal} />

        <DisplaySection title="Información General" isLast>
          <DisplaySubsection>
            <DisplayInfo label="Fecha" value={dayjs(data.date).format('DD-MM-YYYY')} />
            <DisplayInfo label="Hora" value={`${data.startTime} - ${data.endTime}`} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Instalador" value={data.installer.name} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Descripcion" value={data.description ?? 'Sin descripción'} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayBlock;

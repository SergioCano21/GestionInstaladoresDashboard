import { EDIT, MODAL_CENTER, MODAL_SMALL, statusClasses, statusLabels } from '@/types/consts';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import type { Service } from '@/types/types';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  closeModal: () => void;
  openModal?: (modal: string) => void;
  data: Service;
}

const DisplayService = ({ closeModal, openModal, data }: Props) => {
  const handleDelete = () => {
    const result = confirm('¿Seguro que desea cancelar el servicio?');
    if (result) {
      alert('Eliminado correctamente');
      closeModal();
    }
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Servicio" closeModal={closeModal} />

        <DisplaySection title="Información General">
          <DisplaySubsection>
            <DisplayInfo label="Folio" value={data.folio} />
            <DisplayInfo
              label="Status"
              value={statusLabels[data.status]}
              statusColor={statusClasses[data.status]}
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Cliente" value={data.client} />
            <DisplayInfo label="Instalador" value={data.installerId.name} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo
              label="Tienda"
              value={
                <>
                  {'#'}
                  {data.storeId.numStore}&nbsp;{data.storeId.name}
                </>
              }
            />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          {openModal && (
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

export default DisplayService;

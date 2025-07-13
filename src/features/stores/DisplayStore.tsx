import type { Store } from '@/types/types';
import { EDIT, MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  closeModal: () => void;
  openModal: (modal: string) => void;
  data: Store;
}

const DisplayStore = ({ closeModal, openModal, data }: Props) => {
  const handleDelete = () => {
    const result = confirm('¿Seguro que desea eliminar la tienda?');
    if (result) {
      alert('Eliminado correctamente');
      closeModal();
    }
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles de la Tienda" closeModal={closeModal} />
        <DisplaySection title="Información General" isLast>
          <DisplaySubsection>
            <DisplayInfo label="ID" value={data.numStore} />
            <DisplayInfo label="Nombre" value={data.name} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Teléfono" value={data.phone} />
            <DisplayInfo label="Distrito" value={data.district} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Dirección" value={data.address} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Estado" value={data.state} />
            <DisplayInfo label="País" value={data.country} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          <div className={`flex gap-5`}>
            <Button text="Editar" type="button" variant="edit" onClick={() => openModal(EDIT)} />
            <Button text="Eliminar" type="button" variant="delete" onClick={handleDelete} />
          </div>
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayStore;

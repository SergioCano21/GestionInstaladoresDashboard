import type { Store } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { DISPLAY, MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import FormStore from './FormStore';

interface Props {
  closeModal: () => void;
  data: Store;
  openModal: (modal: string) => void;
}

const EditStore = ({ closeModal, data, openModal }: Props) => {
  const [formData, setFormData] = useState<Store>(data);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Tienda Editada Correctamente');
    closeModal();
  };
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Editar Tienda" closeModal={closeModal} />
        <form action={handleSubmit} id="editStoreForm">
          <FormStore
            formData={formData}
            handleChange={handleChange}
            closeModal={() => openModal(DISPLAY)}
            submitText={'Aceptar'}
            closeText={'Regresar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditStore;

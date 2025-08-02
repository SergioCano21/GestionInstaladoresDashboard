import { useState } from 'react';
import type { Store } from '@/types/types';
import { storeTemplate } from '@/types/templates';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import FormStore from './FormStore';

interface Props {
  closeModal: () => void;
}

const AddStore = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Store>(storeTemplate);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    closeModal();
    alert('Tienda creada');
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Nueva Tienda" closeModal={closeModal} />
        <form action={handleSubmit} id="addStoreForm">
          <FormStore
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            submitText={'Agregar'}
            closeText={'Cerrar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddStore;

import { useState, type FormEvent } from 'react';
import type { Store } from '@/types/types';
import { storeTemplate } from '@/types/templates';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import FormStore from './FormStore';
import { addStore } from '@/api/stores';
import { useCustomMutation } from '@/hooks/useCustomMutation';

interface Props {
  closeModal: () => void;
}

const AddStore = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Store>(storeTemplate);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addStore, QUERY_KEYS.STORES);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Nueva Tienda" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="addStoreForm">
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

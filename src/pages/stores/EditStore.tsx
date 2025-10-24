import type { Store } from '@/types/types';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { DISPLAY, MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import FormStore from './FormStore';
import { updateStore } from '@/api/stores';
import { useCustomMutation } from '@/hooks/useCustomMutation';

interface Props {
  closeModal: () => void;
  data: Store;
  openModal: (modal: string) => void;
}

const EditStore = ({ closeModal, data, openModal }: Props) => {
  const [formData, setFormData] = useState<Store>(data);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(updateStore, [QUERY_KEYS.STORES]);

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
        <ModalHeader title="Editar Tienda" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="editStoreForm">
          <FormStore
            formData={formData}
            handleChange={handleChange}
            closeModal={() => openModal(DISPLAY)}
            submitText={'Aceptar'}
            closeText={'Regresar'}
            loading={mutation.isPending}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditStore;

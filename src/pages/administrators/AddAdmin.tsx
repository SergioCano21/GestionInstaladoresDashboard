import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { useFormHandler } from '@/hooks/useFormHandler';
import { MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import { useState, type FormEvent } from 'react';
import FormAdmin from './FormAdmin';
import { adminTemplate } from '@/types/templates';
import type { Administrator } from '@/types/types';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { addAdmin } from '@/api/administrators';

interface Props {
  closeModal: () => void;
}

const AddAdmin = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Administrator>(adminTemplate);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addAdmin, QUERY_KEYS.ADMINS);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Agregar Nuevo Administrador" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="addAdminForm">
          <FormAdmin
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            closeText={'Cerrar'}
            submitText={'Agregar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddAdmin;

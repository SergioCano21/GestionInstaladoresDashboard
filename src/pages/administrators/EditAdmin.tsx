import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { useFormHandler } from '@/hooks/useFormHandler';
import { MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import { useState, type FormEvent } from 'react';
import FormAdmin from './FormAdmin';
import type { Administrator } from '@/types/types';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { updateAdmin } from '@/api/administrators';

interface Props {
  closeModal: () => void;
  data: Administrator;
}

const EditAdmin = ({ closeModal, data }: Props) => {
  const [formData, setFormData] = useState<Administrator>(data);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(updateAdmin, QUERY_KEYS.ADMINS);

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
        <ModalHeader title="Editar Administrador" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="edirAdminForm">
          <FormAdmin
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            closeText={'Regresar'}
            submitText={'Aceptar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditAdmin;

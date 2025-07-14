import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { useFormHandler } from '@/hooks/useFormHandler';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import { useState } from 'react';
import FormAdmin from './FormAdmin';
import { adminTemplate } from '@/types/templates';
import type { Administrator } from '@/types/types';

interface Props {
  closeModal: () => void;
}

const AddAdmin = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Administrator>(adminTemplate);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Admin creado');
    closeModal();
  };

  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Agregar Nuevo Administrador" closeModal={closeModal} />
        <form action={handleSubmit} id="addAdminForm">
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

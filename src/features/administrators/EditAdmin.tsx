import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { useFormHandler } from '@/hooks/useFormHandler';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import { useState } from 'react';
import FormAdmin from './FormAdmin';
import type { Administrator } from '@/types/types';

interface Props {
  closeModal: () => void;
  data: Administrator;
}

const EditAdmin = ({ closeModal, data }: Props) => {
  const [formData, setFormData] = useState<Administrator>(data);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Admin creado');
    closeModal();
  };

  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Editar Administrador" closeModal={closeModal} />
        <form action={handleSubmit} id="edirAdminForm">
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

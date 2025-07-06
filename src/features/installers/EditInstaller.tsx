import type { Installer } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import FormInstaller from './FormInstaller';
import ModalHeader from '@components/ui/ModalHeader';
import Modal from '@components/ui/Modal';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';

interface Props {
  closeModal: () => void;
  data: Installer;
}

const EditInstaller = ({ closeModal, data }: Props) => {
  const [formData, setFormData] = useState<Installer>(data);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Instalador Editado');
    closeModal();
  };
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Editar Instalador" closeModal={closeModal} />
        <form action={handleSubmit} id="editInstallerForm">
          <FormInstaller
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            buttonText={'Aceptar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditInstaller;

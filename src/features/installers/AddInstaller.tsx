import type { Installer } from '../../types/types';
import { useState } from 'react';
import { useFormHandler } from '../../hooks/useFormHandler';
import FormInstaller from './FormInstaller';
import { installerTemplate } from '../../types/templates';
import ModalHeader from '../../components/ui/ModalHeader';
import Modal from '../../components/ui/Modal';
import { MODAL_CENTER, MODAL_SMALL } from '../../types/consts';

interface Props {
  closeModal: () => void;
}

const AddInstaller = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Installer>(installerTemplate);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Instalador Agregado');
    closeModal();
  };
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Instalador" closeModal={closeModal} />
        <form action={handleSubmit} id="addInstallerForm">
          <FormInstaller
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            button={'Agregar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddInstaller;

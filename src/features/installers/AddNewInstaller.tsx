import type { Installer } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import FormInstaller from './FormInstaller';
import { installerTemplate } from '@/types/templates';

interface Props {
  closeModal: () => void;
  goBack: () => void;
}

const AddNewInstaller = ({ closeModal, goBack }: Props) => {
  const [formData, setFormData] = useState<Installer>(installerTemplate);
  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    alert('Instalador Agregado');
    closeModal();
  };

  return (
    <>
      <form action={handleSubmit} id="addInstallerForm">
        <FormInstaller
          formData={formData}
          handleChange={handleChange}
          closeModal={goBack}
          closeText={'Regresar'}
          submitText={'Agregar'}
        />
      </form>
    </>
  );
};

export default AddNewInstaller;

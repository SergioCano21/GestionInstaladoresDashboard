import type { Installer } from '@/types/types';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import FormInstaller from './FormInstaller';
import { installerTemplate } from '@/types/templates';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { addNewInstaller } from '@/api/installers';
import { QUERY_KEYS } from '@/types/consts';

interface Props {
  closeModal: () => void;
  goBack: () => void;
}

const AddNewInstaller = ({ closeModal, goBack }: Props) => {
  const [formData, setFormData] = useState<Installer>(installerTemplate);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addNewInstaller, [QUERY_KEYS.INSTALLERS]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="addInstallerForm">
        <FormInstaller
          formData={formData}
          handleChange={handleChange}
          closeModal={goBack}
          closeText={'Regresar'}
          submitText={'Agregar'}
          loading={mutation.isPending}
        />
      </form>
    </>
  );
};

export default AddNewInstaller;

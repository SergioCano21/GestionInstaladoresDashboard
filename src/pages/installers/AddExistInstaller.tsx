import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import Button from '@/components/ui/button/Button';
import ButtonSection from '@/components/ui/button/ButtonSection';
import FormSection from '@/components/ui/form/FormSection';
import FormSubsection from '@/components/ui/form/FormSubsection';
import FormInput from '@/components/ui/form/FormInput';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { addExistingInstaller } from '@/api/installers';
import { QUERY_KEYS } from '@/types/consts';

interface Props {
  closeModal: () => void;
  goBack: () => void;
}

const AddExistInstaller = ({ closeModal, goBack }: Props) => {
  const [formData, setFormData] = useState({ installerId: '' });
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addExistingInstaller, [QUERY_KEYS.INSTALLERS]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData.installerId);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="addInstallerForm">
        <FormSection isLast>
          <FormSubsection>
            <FormInput
              label="ID"
              id="installerId"
              name="installerId"
              type="number"
              placeholder="ID"
              value={formData.installerId}
              onChange={handleChange}
            />
          </FormSubsection>
        </FormSection>

        <ButtonSection>
          <Button text="Regresar" type="button" variant="close" onClick={goBack} />
          <Button text="Registrar" type="submit" variant="primary" />
        </ButtonSection>
      </form>
    </>
  );
};

export default AddExistInstaller;

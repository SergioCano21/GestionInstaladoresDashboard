import type { Installer } from '@/types/types';
import FormSection from '@/components/ui/FormSection';
import FormSubsection from '@/components/ui/FormSubsection';
import FormInput from '@/components/ui/FormInput';
import ButtonSection from '@/components/ui/ButtonSection';
import Button from '@/components/ui/Button';

interface Props {
  formData: Installer;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  buttonText: string;
}

const FormInstaller = ({ formData, handleChange, closeModal, buttonText }: Props) => {
  return (
    <>
      <FormSection>
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
          <FormInput
            label="Nombre"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
          />
        </FormSubsection>
        <FormSubsection>
          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Teléfono"
            id="phone"
            name="phone"
            type="number"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormSubsection>
        <FormSubsection>
          <FormInput
            label="Nombre de la Empresa"
            id="company"
            name="company"
            type="text"
            placeholder="Empresa"
            value={formData.company}
            onChange={handleChange}
          />
        </FormSubsection>
      </FormSection>

      <ButtonSection>
        <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
        <Button text={buttonText} type="submit" variant="primary" />
      </ButtonSection>
    </>
  );
};

export default FormInstaller;

import type { Installer } from '@/types/types';
import FormSection from '@/components/ui/form/FormSection';
import FormSubsection from '@/components/ui/form/FormSubsection';
import FormInput from '@/components/ui/form/FormInput';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  formData: Installer;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  submitText: string;
  closeText: string;
  loading: boolean;
}

const FormInstaller = ({
  formData,
  handleChange,
  closeModal,
  submitText,
  closeText,
  loading,
}: Props) => {
  return (
    <>
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
            type="tel"
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
        <Button text={closeText} type="button" variant="close" onClick={closeModal} />
        <Button text={submitText} type="submit" variant="primary" loading={loading} />
      </ButtonSection>
    </>
  );
};

export default FormInstaller;

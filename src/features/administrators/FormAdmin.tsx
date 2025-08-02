import Button from '@/components/ui/button/Button';
import ButtonSection from '@/components/ui/button/ButtonSection';
import FormInput from '@/components/ui/form/FormInput';
import FormSection from '@/components/ui/form/FormSection';
import FormSelect from '@/components/ui/form/FormSelect';
import FormSubsection from '@/components/ui/form/FormSubsection';
import { countryOptions, districtOptions, ROLE, roleOptions } from '@/types/consts';
import type { Administrator } from '@/types/types';

interface Props {
  formData: Administrator;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  closeText: string;
  submitText: string;
}

const FormAdmin = ({ formData, handleChange, closeModal, closeText, submitText }: Props) => {
  return (
    <>
      <FormSection isLast>
        <FormSubsection>
          <FormInput
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <FormInput
            label="Nombre"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre Completo"
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
          <FormSelect
            label="Rol"
            id="role"
            name="role"
            value={formData.role}
            options={roleOptions}
            onChange={handleChange}
            getOptionLabel={(role) => role.label}
            getOptionValue={(role) => role.value}
          />
        </FormSubsection>

        <FormSubsection>
          {formData.role == ROLE.LOCAL && (
            <FormSelect
              label="Tienda"
              id="storeId"
              name="storeId"
              value={formData.storeId?.numStore}
              options={roleOptions}
              onChange={handleChange}
              getOptionLabel={(role) => role.label}
              getOptionValue={(role) => role.value}
            />
          )}
          {formData.role == ROLE.DISTRICT && (
            <FormSelect
              label="Distrito"
              id="district"
              name="district"
              value={formData.district}
              options={districtOptions}
              onChange={handleChange}
              getOptionLabel={(district) => district}
              getOptionValue={(district) => district}
            />
          )}
          {formData.role == ROLE.NATIONAL && (
            <FormSelect
              label="País"
              id="country"
              name="country"
              value={formData.country}
              options={countryOptions}
              onChange={handleChange}
              getOptionLabel={(country) => country}
              getOptionValue={(country) => country}
            />
          )}
        </FormSubsection>
      </FormSection>

      <ButtonSection>
        <Button text={closeText} type="button" variant="close" onClick={closeModal} />
        <Button text={submitText} type="submit" variant="primary" />
      </ButtonSection>
    </>
  );
};

export default FormAdmin;

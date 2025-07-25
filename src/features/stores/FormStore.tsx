import type { Store } from '@/types/types';
import FormSection from '@/components/ui/form/FormSection';
import FormSubsection from '@/components/ui/form/FormSubsection';
import FormInput from '@/components/ui/form/FormInput';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import FormSelect from '@/components/ui/form/FormSelect';
import { statesMex } from '@/types/consts';

interface Props {
  formData: Store;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  submitText: string;
  closeText: string;
}

const FormStore = ({ formData, handleChange, closeModal, submitText, closeText }: Props) => {
  return (
    <>
      <FormSection isLast>
        <FormSubsection>
          <FormInput
            label="ID"
            id="numStore"
            name="numStore"
            type="number"
            placeholder="ID"
            value={formData.numStore}
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
            label="Teléfono"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormInput
            label="Distrito"
            id="district"
            name="district"
            type="text"
            placeholder="Distrito"
            value={formData.district}
            onChange={handleChange}
          />
        </FormSubsection>

        <FormSubsection>
          <FormInput
            label="Dirección"
            id="address"
            name="address"
            type="text"
            placeholder="Dirección Completa"
            value={formData.address}
            onChange={handleChange}
          />
        </FormSubsection>

        <FormSubsection>
          <FormSelect
            label="Estado"
            id="state"
            name="state"
            value={formData.state}
            options={statesMex}
            getOptionValue={(state) => state}
            getOptionLabel={(state) => state}
            onChange={handleChange}
          />
          <FormInput
            label="País"
            id="country"
            name="country"
            type="text"
            placeholder="País"
            value={formData.country}
            onChange={handleChange}
          />
        </FormSubsection>
      </FormSection>

      <ButtonSection>
        <Button text={closeText} type="button" variant="close" onClick={closeModal} />
        <Button text={submitText} type="submit" variant="primary" />
      </ButtonSection>
    </>
  );
};

export default FormStore;

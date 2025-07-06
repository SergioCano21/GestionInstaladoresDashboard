import type { Service } from '@/types/types';
import FormInput from '@/components/ui/FormInput';
import FormSubsection from '@/components/ui/FormSubsection';
import FormTextArea from '@/components/ui/FormTextArea';
import FormSection from '@/components/ui/FormSection';
import FormSelect from '@/components/ui/FormSelect';

import { options } from '@/mock';
import ButtonSection from '@/components/ui/ButtonSection';
import Button from '@/components/ui/Button';

interface Props {
  formData: Service;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  buttonText: string;
}

const FormService = ({ formData, handleChange, closeModal, buttonText }: Props) => {
  return (
    <>
      <FormSection>
        <FormSubsection>
          <FormInput
            label="Folio"
            id="folio"
            name="folio"
            type="number"
            placeholder="Folio"
            value={formData.folio}
            onChange={handleChange}
          />
          <FormSelect
            label="Asignar Instalador"
            id="installerId"
            name="installerId"
            value={formData.installerId.installerId}
            onChange={handleChange}
            options={options}
          />
        </FormSubsection>
        <FormSubsection>
          <FormInput
            label="Nombre del Cliente"
            id="client"
            name="client"
            type="text"
            placeholder="Cliente"
            value={formData.client}
            onChange={handleChange}
          />
          <FormInput
            label="Teléfono del Cliente"
            id="phone"
            name="clientPhone"
            type="number"
            placeholder="Teléfono"
            value={formData.clientPhone}
            onChange={handleChange}
          />
        </FormSubsection>
        <FormSubsection>
          <FormInput
            label="Dirección del Cliente"
            id="address"
            name="address"
            type="text"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
        </FormSubsection>
      </FormSection>

      <FormSection>
        <FormSubsection>
          <FormInput
            label="Cantidad de Unidades"
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Cantidad"
            isJobDetail={true}
            value={formData.jobDetails[0].quantity}
            onChange={handleChange}
          />
          <FormInput
            label="Costo del Servicio"
            id="installationServiceFee"
            name="installationServiceFee"
            type="number"
            placeholder="Costo"
            isJobDetail={true}
            value={formData.jobDetails[0].installationServiceFee}
            onChange={handleChange}
          />
        </FormSubsection>

        <FormSubsection>
          <FormTextArea
            label="Descripción del Servicio"
            id="description"
            name="description"
            placeholder="Descripción"
            rows={3}
            isJobDetail={true}
            value={formData.jobDetails[0].description}
            onChange={handleChange}
          />
        </FormSubsection>
      </FormSection>

      <FormSubsection>
        <FormTextArea
          label="Comentarios Adicionales"
          id="additionalComments"
          name="additionalComments"
          placeholder="Comentarios"
          rows={4}
          value={formData.additionalComments}
          onChange={handleChange}
        />
      </FormSubsection>

      <ButtonSection>
        <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
        <Button text={buttonText} type="submit" variant="primary" />
      </ButtonSection>
    </>
  );
};

export default FormService;

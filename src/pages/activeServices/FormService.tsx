import type { Installer, Service } from '@/types/types';
import FormInput from '@/components/ui/form/FormInput';
import FormSubsection from '@/components/ui/form/FormSubsection';
import FormTextArea from '@/components/ui/form/FormTextarea';
import FormSection from '@/components/ui/form/FormSection';
import FormSelect from '@/components/ui/form/FormSelect';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import { useQuery } from '@tanstack/react-query';
import { getInstallers } from '@/api/installers';
import { QUERY_KEYS } from '@/types/consts';

interface Props {
  formData: Service;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  submitText: string;
  closeText: string;
  loading?: boolean;
}

const FormService = ({
  formData,
  handleChange,
  closeModal,
  submitText,
  closeText,
  loading,
}: Props) => {
  const { data: installers } = useQuery<Installer[]>({
    queryKey: [QUERY_KEYS.INSTALLERS],
    queryFn: getInstallers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

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
            value={formData.installerId}
            getOptionValue={(installer) => installer._id}
            getOptionLabel={(installer) => `${installer.installerId} - ${installer.name}`}
            onChange={handleChange}
            options={installers ?? []}
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
            type="tel"
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
            value={formData.jobDetails.quantity}
            onChange={handleChange}
          />
          <FormInput
            label="Costo del Servicio"
            id="installationServiceFee"
            name="installationServiceFee"
            type="number"
            placeholder="Costo"
            isJobDetail={true}
            value={formData.jobDetails.installationServiceFee}
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
            value={formData.jobDetails.description}
            onChange={handleChange}
          />
        </FormSubsection>
      </FormSection>

      <FormSection isLast>
        <FormSubsection>
          <FormTextArea
            label="Comentarios Adicionales"
            id="additionalComments"
            name="additionalComments"
            placeholder="Comentarios"
            rows={4}
            value={formData.additionalComments}
            required={false}
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

export default FormService;

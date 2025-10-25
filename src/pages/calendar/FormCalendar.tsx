import { getServices } from '@/api/services';
import Button from '@/components/ui/button/Button';
import ButtonSection from '@/components/ui/button/ButtonSection';
import FormInput from '@/components/ui/form/FormInput';
import FormSection from '@/components/ui/form/FormSection';
import FormSelect from '@/components/ui/form/FormSelect';
import FormSubsection from '@/components/ui/form/FormSubsection';
import { availableHours, QUERY_KEYS } from '@/types/consts';
import type { Schedule, Service } from '@/types/types';
import { useQuery } from '@tanstack/react-query';

interface Props {
  formData: Schedule;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  closeText: string;
  submitText: string;
  closeModal: () => void;
  loading: boolean;
}

const FormCalendar = ({
  formData,
  handleChange,
  closeText,
  submitText,
  closeModal,
  loading,
}: Props) => {
  const { data: activeServices } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    queryFn: () => getServices('active'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const services = activeServices?.filter(
    (service) =>
      !service.schedule ||
      Object.keys(service.schedule).length === 0 ||
      service._id === formData.serviceId,
  );
  console.log('Active Services:', activeServices);

  console.log('Form Data:', formData);
  return (
    <>
      <FormSection isLast>
        <FormSubsection>
          <FormSelect
            label="Servicio"
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            options={services ?? []}
            getOptionLabel={(option) =>
              `Folio: ${option.folio} - Instalador: ${option.installer.name}`
            }
            getOptionValue={(option) => option._id}
          />
        </FormSubsection>
        <FormSubsection>
          <FormInput
            label="Fecha"
            id="date"
            name="date"
            type="date"
            placeholder=""
            value={formData.date}
            onChange={handleChange}
          />
          <FormSelect
            label="Hora Inicio"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            options={availableHours}
            getOptionLabel={(option) => option.label.toString()}
            getOptionValue={(option) => option.value}
          />
          <FormSelect
            label="Hora Fin"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            options={availableHours}
            getOptionLabel={(option) => option.label.toString()}
            getOptionValue={(option) => option.value}
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

export default FormCalendar;

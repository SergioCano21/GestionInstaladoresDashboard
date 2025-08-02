import Button from '@/components/ui/button/Button';
import ButtonSection from '@/components/ui/button/ButtonSection';
import FormInput from '@/components/ui/form/FormInput';
import FormSection from '@/components/ui/form/FormSection';
import FormSelect from '@/components/ui/form/FormSelect';
import FormSubsection from '@/components/ui/form/FormSubsection';
import { availableHours } from '@/types/consts';
import type { Schedule } from '@/types/types';

interface Props {
  formData: Schedule;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  closeText: string;
  submitText: string;
  closeModal: () => void;
}

const FormCalendar = ({ formData, handleChange, closeText, submitText, closeModal }: Props) => {
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
            options={[
              { label: '1234 - Cliente: Juan Perez', value: 1234 },
              { label: '5678 - Cliente: Maria Gomez', value: 5678 },
            ]}
            getOptionLabel={(option) => option.label.toString()}
            getOptionValue={(option) => option.value}
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
        <Button text={submitText} type="submit" variant="primary" />
      </ButtonSection>
    </>
  );
};

export default FormCalendar;

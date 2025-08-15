import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import FormCalendar from './FormCalendar';
import type { Schedule } from '@/types/types';
import { scheduleTemplate } from '@/types/templates';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@/hooks/useFormHandler';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { addCalendar } from '@/api/calendar';

interface Props {
  closeModal: () => void;
}

const AddCalendar = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Schedule>(scheduleTemplate);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addCalendar, [
    [QUERY_KEYS.CALENDAR],
    [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
  ]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Asignar Horario a Servicio" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="addCalendarForm">
          <FormCalendar
            formData={formData}
            handleChange={handleChange}
            closeText={'Cerrar'}
            submitText={'Agregar'}
            closeModal={closeModal}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddCalendar;

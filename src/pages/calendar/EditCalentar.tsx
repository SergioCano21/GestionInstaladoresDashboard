import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { MODAL_CENTER, MODAL_SMALL, QUERY_KEYS, STATUS } from '@/types/consts';
import FormCalendar from './FormCalendar';
import type { Schedule } from '@/types/types';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@/hooks/useFormHandler';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { updateCalendar } from '@/api/calendar';

interface Props {
  closeModal: () => void;
  data: Schedule;
  goBack: () => void;
}

const EditCalendar = ({ closeModal, data, goBack }: Props) => {
  const [formData, setFormData] = useState<Schedule>(data);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(updateCalendar, [
    [QUERY_KEYS.CALENDAR],
    ...(data.service.status === STATUS.TODO || data.service.status === STATUS.DOING
      ? [[QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE]]
      : [[QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED]]),
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
        <ModalHeader title="Editar Horario de Servicio" closeModal={closeModal} />
        <form onSubmit={handleSubmit}>
          <FormCalendar
            formData={formData}
            handleChange={handleChange}
            closeText={'Regresar'}
            submitText={'Aceptar'}
            closeModal={goBack}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditCalendar;

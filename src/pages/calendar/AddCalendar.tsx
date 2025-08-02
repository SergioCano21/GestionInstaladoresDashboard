import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import FormCalendar from './FormCalendar';
import type { Schedule } from '@/types/types';
import { scheduleTemplate } from '@/types/templates';
import { useState } from 'react';
import { useFormHandler } from '@/hooks/useFormHandler';

interface Props {
  closeModal: () => void;
}

const AddCalendar = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Schedule>(scheduleTemplate);

  const { handleChange } = useFormHandler(setFormData);
  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Asignar Horario a Servicio" closeModal={closeModal} />
        <FormCalendar
          formData={formData}
          handleChange={handleChange}
          closeText={'Cerrar'}
          submitText={'Agregar'}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default AddCalendar;

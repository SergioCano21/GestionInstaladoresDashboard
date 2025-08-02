import Modal from '@/components/ui/modal/Modal';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import { MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import FormCalendar from './FormCalendar';
import type { Schedule } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@/hooks/useFormHandler';

interface Props {
  closeModal: () => void;
  data: Schedule;
}

const EditCalendar = ({ closeModal, data }: Props) => {
  const [formData, setFormData] = useState<Schedule>(data);

  const { handleChange } = useFormHandler(setFormData);
  return (
    <>
      <Modal size={MODAL_SMALL} align={MODAL_CENTER}>
        <ModalHeader title="Editar Horario de Servicio" closeModal={closeModal} />
        <FormCalendar
          formData={formData}
          handleChange={handleChange}
          closeText={'Cerrar'}
          submitText={'Aceptar'}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default EditCalendar;

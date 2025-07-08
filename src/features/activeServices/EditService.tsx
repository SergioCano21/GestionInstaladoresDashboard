import type { Service } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_SMALL, MODAL_START } from '@/types/consts';
import FormService from './FormService';

interface Props {
  closeModal: () => void;
  data: Service;
  goBack: () => void;
}

const EditService = ({ closeModal, data, goBack }: Props) => {
  const [service, setService] = useState<Service>(data);

  const { handleChange } = useFormHandler(setService);

  const handleSubmit = () => {
    closeModal();
    alert('Servicio actualizado');
  };

  return (
    <>
      <Modal align={MODAL_START} size={MODAL_SMALL}>
        <ModalHeader title="Editar Servicio" closeModal={closeModal} />
        <form action={handleSubmit} id="editServiceForm">
          <FormService
            formData={service}
            handleChange={handleChange}
            closeModal={goBack}
            submitText={'Aceptar'}
            closeText={'Regresar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditService;

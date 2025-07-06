import type { Service } from '@/types/types';
import { useState } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@components/ui/ModalHeader';
import Modal from '@components/ui/Modal';
import { MODAL_SMALL, MODAL_START } from '@/types/consts';
import FormService from './FormService';

interface Props {
  closeModal: () => void;
  data: Service;
}

const EditService = ({ closeModal, data }: Props) => {
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
            closeModal={closeModal}
            button={'Editar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditService;

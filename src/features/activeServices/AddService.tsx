import { useState } from 'react';
import FormService from './FormService';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@components/ui/ModalHeader';
import Modal from '@components/ui/Modal';
import { MODAL_SMALL, MODAL_START } from '@/types/consts';

interface Props {
  closeModal: () => void;
}

const AddService = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Service>(serviceTemplate);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = () => {
    closeModal();
    alert('Servicio creado');
  };

  return (
    <>
      <Modal align={MODAL_START} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Nuevo Servicio" closeModal={closeModal} />
        <form action={handleSubmit} id="addServiceForm">
          <FormService
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            buttonText={'Agregar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddService;

import { useState, type FormEvent } from 'react';
import FormService from './FormService';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_SMALL, MODAL_START } from '@/types/consts';
import { addServices } from '@/api/services';

interface Props {
  closeModal: () => void;
}

const AddService = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Service>(serviceTemplate);

  const { handleChange } = useFormHandler(setFormData);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await addServices(formData);
      alert(res.message);
      closeModal();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <Modal align={MODAL_START} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Nuevo Servicio" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="addServiceForm">
          <FormService
            formData={formData}
            handleChange={handleChange}
            closeModal={closeModal}
            submitText={'Agregar'}
            closeText={'Cerrar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default AddService;

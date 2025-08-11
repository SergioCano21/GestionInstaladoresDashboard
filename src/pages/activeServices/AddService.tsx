import { useState, type FormEvent } from 'react';
import FormService from './FormService';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_SMALL, MODAL_START, QUERY_KEYS } from '@/types/consts';
import { addService } from '@/api/services';
import { useCustomMutation } from '@/hooks/useCustomMutation';

interface Props {
  closeModal: () => void;
}

const AddService = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<Service>(serviceTemplate);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(addService, [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
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

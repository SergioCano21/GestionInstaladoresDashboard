import type { Service } from '@/types/types';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { MODAL_SMALL, MODAL_START, QUERY_KEYS } from '@/types/consts';
import FormService from './FormService';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { updateService } from '@/api/services';

interface Props {
  closeModal: () => void;
  data: Service;
  goBack: () => void;
}

const EditService = ({ closeModal, data, goBack }: Props) => {
  const [service, setService] = useState<Service>(data);
  const { handleChange } = useFormHandler(setService);
  const mutation = useCustomMutation(updateService, [
    [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    ...(Object.keys(data.schedule).length > 0 ? [[QUERY_KEYS.CALENDAR]] : []),
  ]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(service);
      closeModal();
    } catch (error: any) {}
  };

  return (
    <>
      <Modal align={MODAL_START} size={MODAL_SMALL}>
        <ModalHeader title="Editar Servicio" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="editServiceForm">
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

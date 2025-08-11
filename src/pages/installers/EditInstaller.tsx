import type { Installer } from '@/types/types';
import { useState, type FormEvent } from 'react';
import { useFormHandler } from '@hooks/useFormHandler';
import FormInstaller from './FormInstaller';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { DISPLAY, MODAL_CENTER, MODAL_SMALL, QUERY_KEYS } from '@/types/consts';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { updateInstaller } from '@/api/installers';

interface Props {
  closeModal: () => void;
  data: Installer;
  openModal: (modal: string) => void;
}

const EditInstaller = ({ closeModal, data, openModal }: Props) => {
  const [formData, setFormData] = useState<Installer>(data);
  const { handleChange } = useFormHandler(setFormData);
  const mutation = useCustomMutation(updateInstaller, [QUERY_KEYS.INSTALLERS]);

  const handleSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await mutation.mutateAsync(formData);
      closeModal();
    } catch (error: any) {}
  };
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Editar Instalador" closeModal={closeModal} />
        <form onSubmit={handleSubmit} id="editInstallerForm">
          <FormInstaller
            formData={formData}
            handleChange={handleChange}
            closeModal={() => openModal(DISPLAY)}
            submitText={'Aceptar'}
            closeText={'Regresar'}
          />
        </form>
      </Modal>
    </>
  );
};

export default EditInstaller;

import { useState } from 'react';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import Modal from '@/components/ui/modal/Modal';
import { ADD_FORM_EXIST, ADD_FORM_NEW, MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import StepAddInstaller from './StepAddInstaller';
import AddNewInstaller from './AddNewInstaller';
import AddExistInstaller from './AddExistInstaller';

interface Props {
  closeModal: () => void;
}

const AddInstaller = ({ closeModal }: Props) => {
  const [nextForm, setNextForm] = useState<undefined | string>();
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Agregar Instalador" closeModal={closeModal} />
        {!nextForm && <StepAddInstaller closeModal={closeModal} nextForm={setNextForm} />}
        {nextForm == ADD_FORM_NEW && (
          <AddNewInstaller closeModal={closeModal} goBack={() => setNextForm(undefined)} />
        )}
        {nextForm == ADD_FORM_EXIST && (
          <AddExistInstaller closeModal={closeModal} goBack={() => setNextForm(undefined)} />
        )}
      </Modal>
    </>
  );
};

export default AddInstaller;

import type { Installer } from '@/types/types';
import { MODAL_CENTER, MODAL_SMALL, statusClasses, statusLabels } from '@/types/consts';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  closeModal: () => void;
  openEditModal: () => void;
  data: Installer;
}

const DisplayInstaller = ({ closeModal, openEditModal, data }: Props) => {
  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Instalador" closeModal={closeModal} />
        <DisplaySection title="Información General">
          <DisplaySubsection>
            <DisplayInfo label="ID" value={data.installerId} />
            <DisplayInfo
              label="Status"
              value={statusLabels[data.status]}
              statusColor={statusClasses[data.status]}
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Nombre" value={data.name} />
            <DisplayInfo label="Teléfono" value={data.phone} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Email" value={data.email} />
            <DisplayInfo label="Nombre de la Empresa" value={data.company} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          <Button text="Editar" type="button" variant="edit" onClick={openEditModal} />
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayInstaller;

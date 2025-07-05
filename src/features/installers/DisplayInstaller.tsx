import type { Installer } from '../../types/types';
import { MODAL_CENTER, MODAL_SMALL, statusClasses, statusLabels } from '../../types/consts';
import DisplayInfo from '../../components/ui/DisplayInfo';
import ModalHeader from '../../components/ui/ModalHeader';
import DisplaySection from '../../components/ui/DisplaySection';
import DisplaySubsection from '../../components/ui/DisplaySubsection';
import Modal from '../../components/ui/Modal';

interface Props {
  closeModal: () => void;
  openEditModal?: () => void;
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

        {openEditModal && (
          <section className={`flex justify-content-between`}>
            <div>
              <button className={`btn btn-close`} onClick={closeModal}>
                Cerrar
              </button>
            </div>
            <div className={`flex gap-5`}>
              <button className={`btn btn-edit`} onClick={openEditModal}>
                Editar
              </button>
              <button className={`btn btn-delete`}>Eliminar</button>
            </div>
          </section>
        )}

        {!openEditModal && (
          <section className={`flex justify-content-end gap-5`}>
            <button className={`btn btn-close`} onClick={closeModal}>
              Cerrar
            </button>
            <button className={`btn btn-primary`}>PDF</button>
          </section>
        )}
      </Modal>
    </>
  );
};

export default DisplayInstaller;

import type { Installer } from '@/types/types';
import { EDIT, MODAL_CENTER, MODAL_SMALL } from '@/types/consts';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  closeModal: () => void;
  openModal: (modal: string) => void;
  data: Installer;
}

const DisplayInstaller = ({ closeModal, openModal, data }: Props) => {
  const handleDelete = () => {
    const result = confirm('¿Seguro que desea quitar al instalador?');
    if (result) {
      alert('Eliminado correctamente');
      closeModal();
    }
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Instalador" closeModal={closeModal} />
        <DisplaySection title="Información General" isLast>
          <DisplaySubsection>
            <DisplayInfo label="ID" value={data.installerId} />
            <DisplayInfo label="Nombre" value={data.name} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Teléfono" value={data.phone} />
            <DisplayInfo label="Email" value={data.email} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Nombre de la Empresa" value={data.company} />
            <DisplayInfo
              label="Activo en Tienda"
              value={data.storeId.map((storeData, i) => (
                <span key={storeData.numStore}>
                  {'#'}
                  {storeData.numStore}&nbsp;{storeData.name}
                  {i < data.storeId.length - 1 && <br />}
                </span>
              ))}
            />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          <div className={`flex gap-5`}>
            <Button text="Editar" type="button" variant="edit" onClick={() => openModal(EDIT)} />
            <Button text="Eliminar" type="button" variant="delete" onClick={handleDelete} />
          </div>
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayInstaller;

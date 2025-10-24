import type { Administrator } from '@/types/types';
import {
  ACTIVE,
  DELETED,
  EDIT,
  MODAL_CENTER,
  MODAL_SMALL,
  QUERY_KEYS,
  roleLabels,
  statusClasses,
  statusLabels,
} from '@/types/consts';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { deleteAdmin, restoreAdmin } from '@/api/administrators';

interface Props {
  closeModal: () => void;
  openModal: (modal: string) => void;
  data: Administrator;
}

const DisplayAdmin = ({ closeModal, openModal, data }: Props) => {
  const mutationDelete = useCustomMutation(deleteAdmin, [QUERY_KEYS.ADMINS]);
  const mutationRestore = useCustomMutation(restoreAdmin, [QUERY_KEYS.ADMINS]);

  const handleDelete = async () => {
    const result = confirm('¿Seguro que desea eliminar al administrador?');
    if (result) {
      try {
        await mutationDelete.mutateAsync(data._id);
        closeModal();
      } catch (error: any) {}
    }
  };

  const handleRestore = async () => {
    const result = confirm('¿Seguro que desea restaurar al administrador?');
    if (result) {
      try {
        await mutationRestore.mutateAsync(data._id);
        closeModal();
      } catch (error: any) {}
    }
  };

  return (
    <>
      <Modal align={MODAL_CENTER} size={MODAL_SMALL}>
        <ModalHeader title="Detalles del Administrador" closeModal={closeModal} />
        <DisplaySection title="Información General" isLast>
          <DisplaySubsection>
            <DisplayInfo label="Username" value={data.username} />
            <DisplayInfo
              label="Status"
              value={statusLabels[data.deleted ? DELETED : ACTIVE]}
              statusColor={statusClasses[data.deleted ? DELETED : ACTIVE]}
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Nombre" value={data.name} />
            <DisplayInfo label="Email" value={data.email} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Rol" value={roleLabels[data.role]} />
            <DisplayInfo
              label="Tienda"
              value={
                data.storeId ? (
                  <span>
                    #{data.storeId.numStore}&nbsp;{data.storeId.name}
                  </span>
                ) : (
                  <span>N/A</span>
                )
              }
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Distrito" value={data.district ?? 'N/A'} />
            <DisplayInfo label="País" value={data.country ?? 'N/A'} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          <div className={`flex gap-5`}>
            {!data.deleted && (
              <>
                <Button
                  text="Editar"
                  type="button"
                  variant="edit"
                  onClick={() => openModal(EDIT)}
                />
                <Button
                  text="Eliminar"
                  type="button"
                  variant="delete"
                  onClick={handleDelete}
                  loading={mutationDelete.isPending}
                />
              </>
            )}
            {data.deleted && (
              <>
                <Button
                  text="Restaurar"
                  type="button"
                  variant="primary"
                  onClick={handleRestore}
                  loading={mutationRestore.isPending}
                />
              </>
            )}
          </div>
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayAdmin;

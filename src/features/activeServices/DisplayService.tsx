import { EDIT, MODAL_BIG, MODAL_START, statusClasses, statusLabels } from '@/types/consts';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import type { Service } from '@/types/types';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';

interface Props {
  closeModal: () => void;
  openModal?: (modal: string) => void;
  data: Service;
}

const DisplayService = ({ closeModal, openModal, data }: Props) => {
  const handleDelete = () => {
    const result = confirm('¿Seguro que desea cancelar el servicio?');
    if (result) {
      alert('Eliminado correctamente');
      closeModal();
    }
  };

  return (
    <>
      <Modal align={MODAL_START} size={MODAL_BIG}>
        <ModalHeader title="Detalles Completos del Servicio" closeModal={closeModal} />

        <DisplaySection title="Información General">
          <DisplaySubsection>
            <DisplayInfo label="Folio" value={data.folio} />
            <DisplayInfo
              label="Status"
              value={statusLabels[data.status]}
              statusColor={statusClasses[data.status]}
            />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Información del Cliente">
          <DisplaySubsection>
            <DisplayInfo label="Cliente" value={data.client} />
            <DisplayInfo label="Teléfono" value={data.clientPhone} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Dirección" value={data.address} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Información del Servicio">
          <DisplaySubsection>
            <DisplayInfo label="Instalador" value={data.installerId.name} />
            <DisplayInfo
              label="Tienda"
              value={
                <>
                  {'#'}
                  {data.storeId.numStore}&nbsp;{data.storeId.name}
                </>
              }
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Fecha" value={`Sin Asignar`} />
            <DisplayInfo label="Hora" value={`Sin Asignar`} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Detalles del Servicio">
          <DisplaySubsection>
            <DisplayInfo label="Cantidad" value={data.jobDetails[0].quantity} />
            <DisplayInfo
              label="Costo del Servicio"
              value={data.jobDetails[0].installationServiceFee}
            />
            <DisplayInfo label="Comisión" value={data.jobDetails[0].commissionFee} />
            <DisplayInfo label="Comitente" value={data.jobDetails[0].installerPayment} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Descripción" value={data.jobDetails[0].description} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Resumen Total">
          <DisplaySubsection>
            <DisplayInfo label="&nbsp;" value={'Subtotales'} useLabel={true} />
            <DisplayInfo label="Costo del Servicio" value={data.subtotals.installationServiceFee} />
            <DisplayInfo label="Comisión" value={data.subtotals.commissionFee} />
            <DisplayInfo label="Comitente" value={data.subtotals.installerPayment} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="" value={'IVA'} useLabel={true} />
            <DisplayInfo label="" value={data.iva.installationServiceFee} />
            <DisplayInfo label="" value={data.iva.commissionFee} />
            <DisplayInfo label="" value={data.iva.installerPayment} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="" value={'Totales'} useLabel={true} />
            <DisplayInfo label="" value={data.totals.installationServiceFee} />
            <DisplayInfo label="" value={data.totals.commissionFee} />
            <DisplayInfo label="" value={data.totals.installerPayment} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Comentarios Adicionales" isLast>
          <DisplaySubsection>
            <DisplayInfo label="" value={data.additionalComments} noMargin={true} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          {openModal && (
            <div className={`flex gap-5`}>
              <Button text="Editar" type="button" variant="edit" onClick={() => openModal(EDIT)} />
              <Button text="Eliminar" type="button" variant="delete" onClick={handleDelete} />
            </div>
          )}
          {!openModal && <Button text="Ver PDF" type="button" variant="primary" />}
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayService;

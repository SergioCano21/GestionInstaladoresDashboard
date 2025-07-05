import type { Service } from '../../types/types';
import { MODAL_BIG, MODAL_START, statusClasses, statusLabels } from '../../types/consts';
import ModalHeader from '../../components/ui/ModalHeader';
import DisplayInfo from '../../components/ui/DisplayInfo';
import DisplaySection from '../../components/ui/DisplaySection';
import DisplaySubsection from '../../components/ui/DisplaySubsection';
import Modal from '../../components/ui/Modal';

interface Props {
  closeModal: () => void;
  openEditModal?: () => void;
  data: Service;
}

const DisplayService = ({ closeModal, openEditModal, data }: Props) => {
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

        <DisplaySection title="Comentarios Adicionales">
          <DisplaySubsection>
            <DisplayInfo label="" value={data.additionalComments} noMargin={true} />
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
              <button className={`btn btn-delete`} onClick={handleDelete}>
                Cancelar
              </button>
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

export default DisplayService;

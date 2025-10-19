import {
  EDIT,
  MODAL_BIG,
  MODAL_START,
  QUERY_KEYS,
  ROLE,
  STATUS,
  statusClasses,
  statusLabels,
} from '@/types/consts';
import ModalHeader from '@/components/ui/modal/ModalHeader';
import DisplayInfo from '@/components/ui/displayInfo/DisplayInfo';
import DisplaySection from '@/components/ui/displayInfo/DisplaySection';
import DisplaySubsection from '@/components/ui/displayInfo/DisplaySubsection';
import Modal from '@/components/ui/modal/Modal';
import type { Service } from '@/types/types';
import ButtonSection from '@/components/ui/button/ButtonSection';
import Button from '@/components/ui/button/Button';
import { useSelector } from 'react-redux';
import { useCustomMutation } from '@/hooks/useCustomMutation';
import { deleteService, restoreService } from '@/api/services';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { useQuery } from '@tanstack/react-query';
import { getReceipt } from '@/api/receipts';

interface Props {
  closeModal: () => void;
  openModal?: (modal: string) => void;
  data: Service;
}

dayjs.extend(utc);
dayjs.extend(timezone);

const DisplayService = ({ closeModal, openModal, data }: Props) => {
  const { data: receiptUrl } = useQuery<string>({
    queryKey: [QUERY_KEYS.RECEIPT, data._id],
    queryFn: () => getReceipt(data._id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const role = useSelector((state: any) => state.auth.role);
  const mutationDelete = useCustomMutation(deleteService, [
    [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
    ...(Object.keys(data.schedule).length > 0 ? [[QUERY_KEYS.CALENDAR]] : []),
  ]);
  const mutationRestore = useCustomMutation(restoreService, [
    [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
    ...(Object.keys(data.schedule).length > 0 ? [[QUERY_KEYS.CALENDAR]] : []),
  ]);

  const userTZ = dayjs.tz.guess();

  let scheduleDate = null;
  let scheduleStart = null;
  let scheduleEnd = null;

  if (data.schedule?.startTime && data.schedule?.endTime) {
    scheduleDate = dayjs.utc(data.schedule.startTime).tz(userTZ).format('DD-MM-YYYY');
    scheduleStart = dayjs.utc(data.schedule.startTime).tz(userTZ).format('HH:mm');
    scheduleEnd = dayjs.utc(data.schedule.endTime).tz(userTZ).format('HH:mm');
  }

  const handleDelete = async () => {
    try {
      const result = confirm('¿Seguro que desea cancelar el servicio?');
      if (result) {
        await mutationDelete.mutateAsync(data._id);
        closeModal();
      }
    } catch (error) {}
  };

  const handleRestore = async () => {
    try {
      const result = confirm('¿Seguro que desea restaurar el servicio?');
      if (result) {
        await mutationRestore.mutateAsync(data._id);
        closeModal();
      }
    } catch (error) {}
  };

  const handleOpenReceipt = async () => {
    if (receiptUrl) {
      window.open(receiptUrl, '_blank', 'noopener,noreferrer');
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
            <DisplayInfo label="Instalador" value={data.installer.name} />
            <DisplayInfo
              label="Tienda"
              value={
                <>
                  {'#'}
                  {data.store.numStore}&nbsp;{data.store.name}
                </>
              }
            />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo
              label="Fecha"
              value={data.schedule.startTime ? scheduleDate : `Sin Asignar`}
            />
            <DisplayInfo
              label="Hora"
              value={data.schedule.startTime ? `${scheduleStart} - ${scheduleEnd}` : `Sin Asignar`}
            />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Detalles del Servicio">
          <DisplaySubsection>
            <DisplayInfo label="Cantidad" value={data.jobDetails[0].quantity} />
            <DisplayInfo
              label="Costo del Servicio"
              value={`$${data.jobDetails[0].installationServiceFee}`}
            />
            <DisplayInfo label="Comisión" value={`$${data.jobDetails[0].commissionFee}`} />
            <DisplayInfo label="Comitente" value={`$${data.jobDetails[0].installerPayment}`} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="Descripción" value={data.jobDetails[0].description} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Resumen Total">
          <DisplaySubsection>
            <DisplayInfo label="&nbsp;" value={'Subtotales'} useLabel={true} />
            <DisplayInfo
              label="Costo del Servicio"
              value={`$${data.subtotals.installationServiceFee}`}
            />
            <DisplayInfo label="Comisión" value={`$${data.subtotals.commissionFee}`} />
            <DisplayInfo label="Comitente" value={`$${data.subtotals.installerPayment}`} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="" value={'IVA'} useLabel={true} />
            <DisplayInfo label="" value={`$${data.iva.installationServiceFee}`} />
            <DisplayInfo label="" value={`$${data.iva.commissionFee}`} />
            <DisplayInfo label="" value={`$${data.iva.installerPayment}`} />
          </DisplaySubsection>

          <DisplaySubsection>
            <DisplayInfo label="" value={'Totales'} useLabel={true} />
            <DisplayInfo label="" value={`$${data.totals.installationServiceFee}`} />
            <DisplayInfo label="" value={`$${data.totals.commissionFee}`} />
            <DisplayInfo label="" value={`$${data.totals.installerPayment}`} />
          </DisplaySubsection>
        </DisplaySection>

        <DisplaySection title="Comentarios Adicionales" isLast>
          <DisplaySubsection>
            <DisplayInfo label="" value={data.additionalComments} noMargin={true} />
          </DisplaySubsection>
        </DisplaySection>

        <ButtonSection>
          <Button text="Cerrar" type="button" variant="close" onClick={closeModal} />
          {openModal && role === ROLE.LOCAL && (
            <div className={`flex gap-5`}>
              <Button text="Editar" type="button" variant="edit" onClick={() => openModal(EDIT)} />
              <Button text="Eliminar" type="button" variant="delete" onClick={handleDelete} />
            </div>
          )}
          {!openModal && (role === ROLE.LOCAL || data.status !== STATUS.CANCELED) && (
            <Button
              text={data.status === STATUS.CANCELED ? 'Restaurar' : 'Ver PDF'}
              type="button"
              variant="primary"
              onClick={data.status === STATUS.CANCELED ? handleRestore : handleOpenReceipt}
            />
          )}
        </ButtonSection>
      </Modal>
    </>
  );
};

export default DisplayService;

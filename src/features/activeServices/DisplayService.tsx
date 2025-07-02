import ReactDOM from 'react-dom';
import XMark from '../../components/XMark';
import styles from './DisplayService.module.css';
import type { Service } from '../../types/types';

interface Props {
  closeModal: () => void;
  openEditModal: () => void;
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

  const handleEdit = () => {
    closeModal();
    openEditModal();
  };

  return ReactDOM.createPortal(
    <>
      <section className={styles.background}>
        <div className={styles.container}>
          <div className={styles.displayFlex}>
            <div className={styles.title}>Detalles Completos del Servicio</div>
            <div className={styles.xmark} onClick={closeModal}>
              <XMark />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Información General</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Folio</div>
                <div className={styles.text}>{data.folio}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Status</div>
                <div className={data.status == 'To Do' ? styles.pending : styles.inProgress}>
                  {data.status == 'To Do' ? 'Pendiente' : 'Progreso'}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Información del Cliente</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Cliente</div>
                <div className={styles.text}>{data.client}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Teléfono</div>
                <div className={styles.text}>{data.clientPhone}</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Dirección</div>
                <div className={styles.text}>{data.address}</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Información del Servicio</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Instalador</div>
                <div className={styles.text}>{data.installerId}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Tienda</div>
                <div className={styles.text}>{data.storeId}</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Fecha</div>
                <div className={styles.text}>Sin Asignar</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Hora</div>
                <div className={styles.text}>Sin Asignar</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Detalles del Servicio</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Cantidad</div>
                <div className={styles.text}>{data.jobDetails[0].quantity}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Costo del Servicio</div>
                <div className={styles.text}>{data.jobDetails[0].installationServiceFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comisión</div>
                <div className={styles.text}>{data.jobDetails[0].commissionFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comitente</div>
                <div className={styles.text}>{data.jobDetails[0].installerPayment}</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flexDescription}>
                <div className={styles.label}>Descripción</div>
                <div className={styles.text}>{data.jobDetails[0].description}</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Resumen Total</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>&nbsp;</div>
                <div className={`${styles.text} ${styles.titleText}`}>Subtotales</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Costo del Servicio</div>
                <div className={styles.text}>{data.subtotals.installationServiceFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comisión</div>
                <div className={styles.text}>{data.subtotals.commissionFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comitente</div>
                <div className={styles.text}>{data.subtotals.installerPayment}</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={`${styles.text} ${styles.titleText}`}>IVA</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.iva.installationServiceFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.iva.commissionFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.iva.installerPayment}</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={`${styles.text} ${styles.titleText}`}>Totales</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.totals.installationServiceFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.totals.commissionFee}</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>{data.totals.installerPayment}</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Comentarios Adicionales</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.text}>{data.additionalComments}</div>
              </div>
            </div>
          </div>
          <div className={styles.sectionButton}>
            <button className={`${styles.btn} ${styles.btnEdit}`} onClick={handleEdit}>
              Editar
            </button>
            <button className={`${styles.btn} ${styles.btnDelete}`} onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </div>
      </section>
    </>,
    document.body,
  );
};

export default DisplayService;

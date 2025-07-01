import ReactDOM from 'react-dom';
import XMark from '../../components/XMark';
import styles from './DisplayService.module.css';

interface Props {
  closeModal: () => void;
}

const data = { status: 'To Do', name: 'Name' };
const DisplayService = ({ closeModal }: Props) => {
  const handleDelete = () => {
    const result = confirm('¿Seguro que desea cancelar el servicio?');
    if (result) {
      alert('Eliminado correctamente');
      closeModal();
    }
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
                <div className={styles.text}>info</div>
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
                <div className={styles.text}>name</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Teléfono</div>
                <div className={styles.text}>name</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Dirección</div>
                <div className={styles.text}>nae</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Información del Servicio</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.label}>Instalador</div>
                <div className={styles.text}>name</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Tienda</div>
                <div className={styles.text}>name</div>
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
                <div className={styles.text}>1</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Costo del Servicio</div>
                <div className={styles.text}>Sin Asignar</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comisión</div>
                <div className={styles.text}>Sin Asignar</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comitente</div>
                <div className={styles.text}>Sin Asignar</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flexDescription}>
                <div className={styles.label}>Descripción</div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit culpa, sunt ea
                  perspiciatis repellat vitae, beatae blanditiis temporibus commodi error tenetur,
                  reprehenderit aperiam labore itaque. Minus dignissimos facere placeat itaque.
                  Nesciunt quis delectus repellendus cumque distinctio consequuntur fuga
                  praesentium! Quasi fugiat ipsa asperiores nobis voluptatum qui eius corrupti nam
                  incidunt sapiente facere, explicabo quos ex harum accusamus aspernatur excepturi
                </div>
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
                <div className={styles.text}>150.43</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comisión</div>
                <div className={styles.text}>12.32</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.label}>Comitente</div>
                <div className={styles.text}>432.23</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={`${styles.text} ${styles.titleText}`}>IVA</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>150.43</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>12.32</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>432.23</div>
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={`${styles.text} ${styles.titleText}`}>Totales</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>150.43</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>12.32</div>
              </div>
              <div className={styles.flex}>
                <div className={styles.text}>432.23</div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.subtitle}>Comentarios Adicionales</div>
            <div className={styles.subsection}>
              <div className={styles.flex}>
                <div className={styles.text}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolores tempora
                  quod voluptates, totam saepe numquam aliquid. Minima, corporis mollitia quia
                  nesciunt, commodi itaque quisquam repudiandae facere officiis natus eius?
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionButton}>
            <button className={`${styles.btn} ${styles.btnEdit}`}>Editar</button>
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

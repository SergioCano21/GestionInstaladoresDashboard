import { useState } from 'react';
import ContentTop from '../../components/ContentTop';
import styles from './ActiveServices.module.css';
import AddService from './AddService';
import DisplayService from './DisplayService';
import EditService from './EditService';
import data from '../../mock';
import type { Service } from '../../types/types';
import { serviceTemplate } from '../../types/templates';

const ActiveServices = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDisplay, setIsOpenDisplay] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [service, setService] = useState<Service>(serviceTemplate);

  const toggleAddModal = () => {
    if (isOpenAdd) {
      setIsOpenAdd(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsOpenAdd(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleDisplayModal = () => {
    if (isOpenDisplay) {
      setIsOpenDisplay(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsOpenDisplay(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const toggleEditModal = () => {
    if (isOpenEdit) {
      setIsOpenEdit(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsOpenEdit(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <section>
        <ContentTop
          title="Administrar Servicios Activos"
          button="Agregar Servicio"
          openModal={toggleAddModal}
        />
        <div className={styles.filterContainer}>
          <input type="text" placeholder="Folio" className={styles.filterInput} />
          <input type="text" placeholder="Nombre Instalador" className={styles.filterInput} />
          <input type="text" placeholder="Nombre Cliente" className={styles.filterInput} />
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={`${styles.tableHead} ${styles.widthFolio}`}>Folio</th>
              <th className={`${styles.tableHead} ${styles.widthName}`}>Instalador</th>
              <th className={`${styles.tableHead} ${styles.widthName}`}>Cliente</th>
              <th className={`${styles.tableHead} ${styles.widthDescription}`}>Descripción</th>
              <th className={styles.tableHead}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={styles.tableRowContainer}
                onClick={() => {
                  setService(data);
                  toggleDisplayModal();
                }}
              >
                <td className={styles.tableRow}>{data.folio}</td>
                <td className={styles.tableRow}>{data.installerId}</td>
                <td className={styles.tableRow}>{data.client}</td>
                <td className={styles.tableRow}>
                  <div className={styles.description}>{data.description}</div>
                </td>
                <td className={styles.tableRow}>
                  <span className={data.status == 'To Do' ? styles.pending : styles.inProgress}>
                    {data.status == 'To Do' ? 'Pendiente' : 'Progreso'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {isOpenAdd && <AddService closeModal={toggleAddModal} />}
      {isOpenDisplay && (
        <DisplayService
          closeModal={toggleDisplayModal}
          openEditModal={toggleEditModal}
          data={service}
        />
      )}
      {isOpenEdit && <EditService closeModal={toggleEditModal} data={service} />}
    </>
  );
};

export default ActiveServices;

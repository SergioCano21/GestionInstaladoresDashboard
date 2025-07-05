import { useState } from 'react';
import ContentHeader from '../../components/ui/ContentHeader';
import styles from './ActiveServices.module.css';
import AddService from './AddService';
import DisplayService from './DisplayService';
import EditService from './EditService';
import { data } from '../../mock';
import type { Service } from '../../types/types';
import { serviceTemplate } from '../../types/templates';
import { useModal } from '../../hooks/useModal';
import {
  ADD_ACTIVE_SERVICE,
  DISPLAY_ACTIVE_SERVICE,
  EDIT_ACTIVE_SERVICE,
  statusClasses,
  statusLabels,
} from '../../types/consts';

const ActiveServices = () => {
  const [service, setService] = useState<Service>(serviceTemplate);

  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Servicios Activos"
          button="Agregar Servicio"
          openModal={() => openModal(ADD_ACTIVE_SERVICE)}
        />
        <div className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="Folio" className={`filter-input`} />
          <input type="text" placeholder="Nombre Instalador" className={`filter-input`} />
          <input type="text" placeholder="Nombre Cliente" className={`filter-input`} />
          <select name="" id="" className={`filter-input`}>
            <option value="">Status</option>
            <option value="">Proceso</option>
            <option value="">Pendiente</option>
          </select>
        </div>
        <table className={`table`}>
          <thead className={`table-head`}>
            <tr>
              <th className={`table-header ${styles.widthFolio}`}>Folio</th>
              <th className={`table-header ${styles.widthName}`}>Instalador</th>
              <th className={`table-header ${styles.widthName}`}>Cliente</th>
              <th className={`table-header ${styles.widthDescription}`}>Descripción</th>
              <th className={`table-header`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`table-row`}
                onClick={() => {
                  setService(data);
                  openModal(DISPLAY_ACTIVE_SERVICE);
                }}
              >
                <td className={`table-cell`}>{data.folio}</td>
                <td className={`table-cell`}>{data.installerId.name}</td>
                <td className={`table-cell`}>{data.client}</td>
                <td className={`table-cell`}>
                  <div className={styles.description}>{data.description}</div>
                </td>
                <td className={`table-cell`}>
                  <span className={`status ${statusClasses[data.status]}`}>
                    {statusLabels[data.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {modal == ADD_ACTIVE_SERVICE && <AddService closeModal={closeModal} />}
      {modal == DISPLAY_ACTIVE_SERVICE && (
        <DisplayService
          closeModal={closeModal}
          openEditModal={() => openModal(EDIT_ACTIVE_SERVICE)}
          data={service}
        />
      )}
      {modal == EDIT_ACTIVE_SERVICE && <EditService closeModal={closeModal} data={service} />}
    </>
  );
};

export default ActiveServices;

import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { DISPLAY_COMPLETED_SERVICE, statusClasses, statusLabels } from '@/types/consts';
import styles from '@features/activeServices/ActiveServices.module.css';
import DisplayService from '@features/activeServices/DisplayService';

import { data2 } from '@/mock';

const CompletedServices = () => {
  //Delete this
  const data = data2;
  const { modal, openModal, closeModal } = useModal();

  const [service, setService] = useState<Service>(serviceTemplate);

  return (
    <>
      <section>
        <ContentHeader title="Administrar Servicios Completados" />
        <div className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="Folio" className={`filter-input`} />
          <input type="text" placeholder="Nombre Instalador" className={`filter-input`} />
          <input type="text" placeholder="Nombre Cliente" className={`filter-input`} />
          <select name="" id="" className={`filter-input`}>
            <option value="">Status</option>
            <option value="">Terminado</option>
            <option value="">Cancelado</option>
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
                  openModal(DISPLAY_COMPLETED_SERVICE);
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

      {modal == DISPLAY_COMPLETED_SERVICE && (
        <DisplayService closeModal={closeModal} data={service} />
      )}
    </>
  );
};

export default CompletedServices;

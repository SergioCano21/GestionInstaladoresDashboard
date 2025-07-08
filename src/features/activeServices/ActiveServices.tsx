import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import styles from './ActiveServices.module.css';
import AddService from './AddService';
import DisplayService from './DisplayService';
import EditService from './EditService';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { useModal } from '@hooks/useModal';
import {
  ADD_ACTIVE_SERVICE,
  DISPLAY_ACTIVE_SERVICE,
  EDIT_ACTIVE_SERVICE,
  statusClasses,
  statusLabels,
} from '../../types/consts';
import Table from '@/components/ui/table/Table';

import { activeServices } from '@/mock';

const columns = [
  {
    label: 'Folio',
    cell: (row: Service) => row.folio,
    headerClass: styles.widthFolio,
  },
  {
    label: 'Instalador',
    cell: (row: Service) => row.installerId.name,
    headerClass: styles.widthName,
  },
  {
    label: 'Cliente',
    cell: (row: Service) => row.client,
    headerClass: styles.widthName,
  },
  {
    label: 'Descripción',
    cell: (row: Service) => <div className={styles.description}>{row.description}</div>,
    headerClass: styles.widthDescription,
  },
  {
    label: 'Status',
    cell: (row: Service) => (
      <span className={`status ${statusClasses[row.status]}`}>{statusLabels[row.status]}</span>
    ),
  },
];

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

        <Table
          columns={columns}
          data={activeServices}
          onRowClick={(service: Service) => {
            setService(service);
            openModal(DISPLAY_ACTIVE_SERVICE);
          }}
        />
      </section>

      {modal == ADD_ACTIVE_SERVICE && <AddService closeModal={closeModal} />}
      {modal == DISPLAY_ACTIVE_SERVICE && (
        <DisplayService closeModal={closeModal} openModal={openModal} data={service} />
      )}
      {modal == EDIT_ACTIVE_SERVICE && (
        <EditService
          closeModal={closeModal}
          data={service}
          goBack={() => openModal(DISPLAY_ACTIVE_SERVICE)}
        />
      )}
    </>
  );
};

export default ActiveServices;

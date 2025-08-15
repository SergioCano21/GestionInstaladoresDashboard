import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import styles from './ActiveServices.module.css';
import AddService from './AddService';
import DisplayService from './DisplayService';
import EditService from './EditService';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { useModal } from '@hooks/useModal';
import { ADD, DISPLAY, EDIT, QUERY_KEYS, ROLE, statusClasses, statusLabels } from '@/types/consts';
import Table from '@/components/ui/table/Table';
import { getServices } from '@/api/services';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import TableLoader from '@/loader/TableLoader';

const columns = [
  {
    label: 'Folio',
    cell: (row: Service) => row.folio,
    headerClass: styles.widthFolio,
  },
  {
    label: 'Instalador',
    cell: (row: Service) => row.installer.name,
    headerClass: styles.widthName,
  },
  {
    label: 'Cliente',
    cell: (row: Service) => row.client,
    headerClass: styles.widthName,
  },
  {
    label: 'Descripción',
    cell: (row: Service) => (
      <div className={styles.description}>{row.jobDetails[0].description}</div>
    ),
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
  const role = useSelector((state: any) => state.auth.role);

  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    queryFn: () => getServices('active'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Servicios Activos"
          button={role === ROLE.LOCAL ? 'Agregar Servicio' : undefined}
          openModal={role === ROLE.LOCAL ? () => openModal(ADD) : undefined}
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

        {isLoading ? (
          <TableLoader />
        ) : (
          <Table
            columns={columns}
            data={services ?? []}
            onRowClick={(service: Service) => {
              setService(service);
              openModal(DISPLAY);
            }}
          />
        )}
      </section>

      {modal == ADD && <AddService closeModal={closeModal} />}
      {modal == DISPLAY && (
        <DisplayService closeModal={closeModal} openModal={openModal} data={service} />
      )}
      {modal == EDIT && (
        <EditService closeModal={closeModal} data={service} goBack={() => openModal(DISPLAY)} />
      )}
    </>
  );
};

export default ActiveServices;

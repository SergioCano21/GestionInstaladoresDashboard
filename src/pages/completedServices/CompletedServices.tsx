import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { DISPLAY, QUERY_KEYS, statusClasses, statusLabels } from '@/types/consts';
import styles from '@pages/activeServices/ActiveServices.module.css';
import DisplayService from '@pages/activeServices/DisplayService';
import Table from '@/components/ui/table/Table';
import { useQuery } from '@tanstack/react-query';
import { getServices } from '@/api/services';
import TableLoader from '@/loader/TableLoader';
import FilterSection from '@/components/ui/filter/FilterSection';
import FilterInput from '@/components/ui/filter/FilterInput';

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
    cell: (row: Service) => <div className={styles.description}>{row.jobDetails.description}</div>,
    headerClass: styles.widthDescription,
  },
  {
    label: 'Status',
    cell: (row: Service) => (
      <span className={`status ${statusClasses[row.status]}`}>{statusLabels[row.status]}</span>
    ),
  },
];

const CompletedServices = () => {
  const { modal, openModal, closeModal } = useModal();
  const [service, setService] = useState<Service>(serviceTemplate);
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
    queryFn: () => getServices('completed'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <ContentHeader title="Administrar Servicios Completados" />
      <FilterSection>
        <FilterInput type="search" placeholder="Folio" />
        <FilterInput type="search" placeholder="Nombre Instalador" />
        <FilterInput type="search" placeholder="Nombre Cliente" />

        <select name="" id="" className={`filter-input`}>
          <option value="">Status</option>
          <option value="">Terminado</option>
          <option value="">Cancelado</option>
        </select>
      </FilterSection>

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

      {modal == DISPLAY && <DisplayService closeModal={closeModal} data={service} />}
    </>
  );
};

export default CompletedServices;

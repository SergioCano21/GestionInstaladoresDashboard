import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import type { Service } from '@/types/types';
import { serviceTemplate } from '@/types/templates';
import { DISPLAY, QUERY_KEYS, STATUS, statusClasses, statusLabels } from '@/types/consts';
import styles from '@pages/activeServices/ActiveServices.module.css';
import DisplayService from '@pages/activeServices/DisplayService';
import Table from '@/components/ui/table/Table';
import { useQuery } from '@tanstack/react-query';
import { getServices } from '@/api/services';
import TableLoader from '@/loader/TableLoader';
import FilterSection from '@/components/ui/filter/FilterSection';
import FilterInput from '@/components/ui/filter/FilterInput';
import FilterSelect from '@/components/ui/filter/FilterSelect';
import { useFilter } from '@/hooks/useFilter';

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

  const { filteredData, handleFilterChange } = useFilter(services ?? [], {
    folio: {},
    installer: { getValue: (service) => service.installer.name },
    client: {},
    status: {},
  });

  return (
    <>
      <ContentHeader title="Administrar Servicios Completados" />
      <FilterSection>
        <FilterInput
          type="search"
          placeholder="Folio"
          onChange={(e) => handleFilterChange('folio', e.target.value)}
        />
        <FilterInput
          type="search"
          placeholder="Nombre Instalador"
          onChange={(e) => handleFilterChange('installer', e.target.value)}
        />
        <FilterInput
          type="search"
          placeholder="Nombre Cliente"
          onChange={(e) => handleFilterChange('client', e.target.value)}
        />
        <FilterSelect onChange={(e) => handleFilterChange('status', e.target.value)}>
          <option value="">Status</option>
          <option value={STATUS.DONE}>Terminado</option>
          <option value={STATUS.CANCELED}>Cancelado</option>
        </FilterSelect>
      </FilterSection>

      {isLoading ? (
        <TableLoader />
      ) : (
        <Table
          columns={columns}
          data={filteredData}
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

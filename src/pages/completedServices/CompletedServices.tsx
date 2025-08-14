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

const CompletedServices = () => {
  const { modal, openModal, closeModal } = useModal();
  const [service, setService] = useState<Service>(serviceTemplate);
  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.COMPLETED],
    queryFn: () => getServices('completed'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return null;

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

        <Table
          columns={columns}
          data={services ?? []}
          onRowClick={(service: Service) => {
            setService(service);
            openModal(DISPLAY);
          }}
        />
      </section>

      {modal == DISPLAY && <DisplayService closeModal={closeModal} data={service} />}
    </>
  );
};

export default CompletedServices;

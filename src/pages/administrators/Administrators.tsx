import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import type { Administrator } from '@/types/types';
import { adminTemplate } from '@/types/templates';
import { useModal } from '@hooks/useModal';
import {
  ACTIVE,
  ADD,
  DELETED,
  DISPLAY,
  EDIT,
  QUERY_KEYS,
  roleLabels,
  statusClasses,
  statusLabels,
} from '../../types/consts';
import Table from '@/components/ui/table/Table';
import DisplayAdmin from './DisplayAdmin';
import AddAdmin from './AddAdmin';
import EditAdmin from './EditAdmin';
import { useQuery } from '@tanstack/react-query';
import { getAdmins } from '@/api/administrators';
import TableLoader from '@/loader/TableLoader';
import FilterSection from '@/components/ui/filter/FilterSection';
import FilterInput from '@/components/ui/filter/FilterInput';
import FilterSelect from '@/components/ui/filter/FilterSelect';

const columns = [
  {
    label: 'Nombre',
    cell: (row: Administrator) => row.name,
  },
  {
    label: 'Email',
    cell: (row: Administrator) => row.email,
  },
  {
    label: 'Rol',
    cell: (row: Administrator) => roleLabels[row.role],
  },
  {
    label: 'Tienda',
    cell: (row: Administrator) => {
      return row.storeId ? (
        <span>
          #{row.storeId.numStore}&nbsp;{row.storeId.name}
        </span>
      ) : (
        <span>N/A</span>
      );
    },
  },
  {
    label: 'Status',
    cell: (row: Administrator) => {
      return (
        <span className={`status ${statusClasses[row.deleted ? DELETED : ACTIVE]}`}>
          {statusLabels[row.deleted ? DELETED : ACTIVE]}
        </span>
      );
    },
  },
];

const Administrators = () => {
  const [admin, setAdmin] = useState<Administrator>(adminTemplate);
  const { modal, openModal, closeModal } = useModal();
  const { data: admins, isLoading } = useQuery<Administrator[]>({
    queryKey: [QUERY_KEYS.ADMINS],
    queryFn: getAdmins,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <ContentHeader
        title="Administrar Administradores"
        button="Agregar Administrador"
        openModal={() => openModal(ADD)}
      />
      <FilterSection>
        <FilterInput type="search" placeholder="Nombre" />
        <FilterSelect>
          <option value="">Rol</option>
          <option value="">Local</option>
          <option value="">Distrital</option>
          <option value="">Nacional</option>
        </FilterSelect>
        <FilterSelect>
          <option value="">Tienda</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </FilterSelect>
      </FilterSection>

      {isLoading ? (
        <TableLoader />
      ) : (
        <Table
          columns={columns}
          data={admins ?? []}
          onRowClick={(admin: Administrator) => {
            setAdmin(admin);
            openModal(DISPLAY);
          }}
        />
      )}

      {modal == ADD && <AddAdmin closeModal={closeModal} />}
      {modal == EDIT && <EditAdmin data={admin} closeModal={closeModal} />}
      {modal == DISPLAY && (
        <DisplayAdmin closeModal={closeModal} openModal={openModal} data={admin} />
      )}
    </>
  );
};

export default Administrators;

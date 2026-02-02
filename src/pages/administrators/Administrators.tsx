import { useState } from 'react';
import ContentHeader from '@components/ui/ContentHeader';
import type { Administrator, Store } from '@/types/types';
import { adminTemplate } from '@/types/templates';
import { useModal } from '@hooks/useModal';
import {
  ACTIVE,
  ADD,
  DELETED,
  DISPLAY,
  EDIT,
  QUERY_KEYS,
  ROLE,
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
import { useFilter } from '@/hooks/useFilter';
import { getStores } from '@/api/stores';

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
    cell: (row: Administrator) => (row.role ? roleLabels[row.role] : 'N/A'),
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

  const { data: stores, isLoading: isLoadingStores } = useQuery<Store[]>({
    queryKey: [QUERY_KEYS.STORES],
    queryFn: getStores,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { filteredData, handleFilterChange } = useFilter(admins ?? [], {
    name: {},
    role: {},
    numStore: { getValue: (a) => a.storeId?.numStore! },
  });

  return (
    <>
      <ContentHeader
        title="Administrar Administradores"
        button="Agregar Administrador"
        openModal={() => openModal(ADD)}
      />
      <FilterSection>
        <FilterInput
          type="search"
          placeholder="Nombre"
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <FilterSelect onChange={(e) => handleFilterChange('role', e.target.value)}>
          <option value="">Rol</option>
          <option value={ROLE.LOCAL}>Local</option>
          <option value={ROLE.DISTRICT}>Distrital</option>
          <option value={ROLE.NATIONAL}>Nacional</option>
        </FilterSelect>
        <FilterSelect
          onChange={(e) => handleFilterChange('numStore', e.target.value)}
          disabled={isLoadingStores}
        >
          <option value="">{isLoadingStores ? 'Cargando tiendas...' : 'Tienda'}</option>
          {stores?.map((store) => (
            <option key={store._id}>
              #{store.numStore}&nbsp;{store.name}
            </option>
          ))}
        </FilterSelect>
      </FilterSection>

      {isLoading ? (
        <TableLoader />
      ) : (
        <Table
          columns={columns}
          data={filteredData}
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

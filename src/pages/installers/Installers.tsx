import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import { ADD, DISPLAY, EDIT, QUERY_KEYS, ROLE } from '@/types/consts';
import { useState } from 'react';
import type { Installer, Store } from '@/types/types';
import { installerTemplate } from '@/types/templates';
import DisplayInstaller from './DisplayInstaller';
import EditInstaller from './EditInstaller';
import Table from '@/components/ui/table/Table';
import AddInstaller from './AddInstaller';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getInstallers } from '@/api/installers';
import TableLoader from '@/loader/TableLoader';
import FilterSection from '@/components/ui/filter/FilterSection';
import FilterInput from '@/components/ui/filter/FilterInput';
import FilterSelect from '@/components/ui/filter/FilterSelect';
import { useFilter } from '@/hooks/useFilter';
import { getStores } from '@/api/stores';

const columns = [
  {
    label: 'ID',
    cell: (row: Installer) => row.installerId,
  },
  {
    label: 'Nombre',
    cell: (row: Installer) => row.name,
  },
  {
    label: 'Teléfono',
    cell: (row: Installer) => row.phone,
  },
  {
    label: 'Empresa',
    cell: (row: Installer) => row.company,
  },
  {
    label: 'Tienda',
    cell: (row: Installer) =>
      row.storeId.map((storeData, i) => (
        <span key={storeData.numStore}>
          #{storeData.numStore}&nbsp;{storeData.name}
          {i < row.storeId.length - 1 && <br />}
        </span>
      )),
  },
];

const Installers = () => {
  const { modal, openModal, closeModal } = useModal();
  const [installer, setInstaller] = useState<Installer>(installerTemplate);
  const role = useSelector((state: any) => state.auth.role);

  const { data: installers, isLoading } = useQuery<Installer[]>({
    queryKey: [QUERY_KEYS.INSTALLERS],
    queryFn: getInstallers,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { data: stores, isLoading: isLoadingStores } = useQuery<Store[]>({
    queryKey: [QUERY_KEYS.STORES],
    queryFn: getStores,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { filteredData, handleFilterChange } = useFilter(installers ?? [], {
    id: { getValue: (i) => i.installerId },
    name: {},
    numStore: { getValue: (i) => i.storeId.map((store) => store.numStore) },
  });

  return (
    <>
      <ContentHeader
        title="Administrar Instaladores"
        button={role === ROLE.LOCAL ? 'Agregar Instalador' : undefined}
        openModal={role === ROLE.LOCAL ? () => openModal(ADD) : undefined}
      />

      <FilterSection>
        <FilterInput
          type="search"
          placeholder="ID"
          onChange={(e) => handleFilterChange('id', e.target.value)}
        />
        <FilterInput
          type="search"
          placeholder="Nombre"
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />
        <FilterSelect
          onChange={(e) => handleFilterChange('numStore', e.target.value)}
          disabled={isLoadingStores}
        >
          <option value="">{isLoadingStores ? 'Cargando tiendas...' : 'Tienda'}</option>
          {stores?.map((store) => (
            <option key={store._id} value={store.numStore}>
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
          onRowClick={(installer: Installer) => {
            setInstaller(installer);
            openModal(DISPLAY);
          }}
        />
      )}

      {modal == ADD && <AddInstaller closeModal={closeModal} />}
      {modal == EDIT && (
        <EditInstaller data={installer} closeModal={closeModal} openModal={openModal} />
      )}
      {modal == DISPLAY && (
        <DisplayInstaller closeModal={closeModal} data={installer} openModal={openModal} />
      )}
    </>
  );
};

export default Installers;

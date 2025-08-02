import ContentHeader from '@/components/ui/ContentHeader';
import Table from '@/components/ui/table/Table';
import { useModal } from '@/hooks/useModal';
import { ACTIVE, ADD, DELETED, DISPLAY, EDIT, statusClasses, statusLabels } from '@/types/consts';
import { storeTemplate } from '@/types/templates';
import type { Store } from '@/types/types';
import { useState } from 'react';
import AddStore from './AddStore';
import { stores } from '@/mock';
import EditStore from './EditStore';
import DisplayStore from './DisplayStore';

const columns = [
  {
    label: 'ID',
    cell: (row: Store) => row.numStore,
  },
  {
    label: 'Nombre',
    cell: (row: Store) => row.name,
  },
  {
    label: 'Teléfono',
    cell: (row: Store) => row.phone,
  },
  {
    label: 'Dirección',
    cell: (row: Store) => row.address,
  },
  {
    label: 'Status',
    cell: (row: Store) => {
      return (
        <span className={`status ${statusClasses[row.deleted ? DELETED : ACTIVE]}`}>
          {statusLabels[row.deleted ? DELETED : ACTIVE]}
        </span>
      );
    },
  },
];

const Stores = () => {
  const [store, setStore] = useState<Store>(storeTemplate);

  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Tiendas"
          button="Agregar Tienda"
          openModal={() => openModal(ADD)}
        />
        <div className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="ID" className={`filter-input`} />
          <input type="text" placeholder="Nombre" className={`filter-input`} />
        </div>

        <Table
          columns={columns}
          data={stores}
          onRowClick={(store: Store) => {
            setStore(store);
            openModal(DISPLAY);
          }}
        />
      </section>

      {modal == ADD && <AddStore closeModal={closeModal} />}
      {modal == EDIT && <EditStore data={store} closeModal={closeModal} openModal={openModal} />}
      {modal == DISPLAY && (
        <DisplayStore closeModal={closeModal} data={store} openModal={openModal} />
      )}
    </>
  );
};

export default Stores;

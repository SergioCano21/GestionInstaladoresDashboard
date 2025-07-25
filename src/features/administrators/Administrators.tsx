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
  roleLabels,
  statusClasses,
  statusLabels,
} from '../../types/consts';
import Table from '@/components/ui/table/Table';

import { administrators } from '@/mock';
import DisplayAdmin from './DisplayAdmin';
import AddAdmin from './AddAdmin';
import EditAdmin from './EditAdmin';

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

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Administradores"
          button="Agregar Administrador"
          openModal={() => openModal(ADD)}
        />
        <div className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="Nombre" className={`filter-input`} />
          <select name="" id="" className={`filter-input`}>
            <option value="">Rol</option>
            <option value="">Local</option>
            <option value="">Distrital</option>
            <option value="">Nacional</option>
          </select>
          <select name="" id="" className={`filter-input`}>
            <option value="">Tienda</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>

        <Table
          columns={columns}
          data={administrators}
          onRowClick={(admin: Administrator) => {
            setAdmin(admin);
            openModal(DISPLAY);
          }}
        />
      </section>

      {modal == DISPLAY && (
        <DisplayAdmin closeModal={closeModal} openModal={openModal} data={admin} />
      )}
      {modal == ADD && <AddAdmin closeModal={closeModal} />}
      {modal == EDIT && <EditAdmin closeModal={() => openModal(DISPLAY)} data={admin} />}
    </>
  );
};

export default Administrators;

import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import {
  ADD_INSTALLER,
  DISPLAY_INSTALLER,
  EDIT_INSTALLER,
  statusClasses,
  statusLabels,
} from '@/types/consts';
import { useState } from 'react';
import type { Installer } from '@/types/types';
import { installerTemplate } from '@/types/templates';
import AddInstaller from './AddInstaller';
import DisplayInstaller from './DisplayInstaller';
import EditInstaller from './EditInstaller';
import Table from '@/components/ui/table/Table';

import { installers } from '@/mock';

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
  {
    label: 'Status',
    cell: (row: Installer) => (
      <span className={`status ${statusClasses[row.status]}`}>{statusLabels[row.status]}</span>
    ),
  },
];

const Installers = () => {
  const { modal, openModal, closeModal } = useModal();

  const [installer, setInstaller] = useState<Installer>(installerTemplate);

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Instaladores"
          button="Agregar Instalador"
          openModal={() => openModal(ADD_INSTALLER)}
        />

        <section className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="ID" className={`filter-input`} />
          <input type="text" placeholder="Nombre" className={`filter-input`} />
          <input type="text" placeholder="Tienda" className={`filter-input`} />
          <select name="" id="" className={`filter-input`}>
            <option value="">Status</option>
            <option value="">Activo</option>
            <option value="">Inactivo</option>
          </select>
        </section>

        <Table
          columns={columns}
          data={installers}
          onRowClick={(installer: Installer) => {
            setInstaller(installer);
            openModal(DISPLAY_INSTALLER);
          }}
        />
      </section>

      {modal == ADD_INSTALLER && <AddInstaller closeModal={closeModal} />}
      {modal == EDIT_INSTALLER && <EditInstaller data={installer} closeModal={closeModal} />}
      {modal == DISPLAY_INSTALLER && (
        <DisplayInstaller
          closeModal={closeModal}
          data={installer}
          openEditModal={() => openModal(EDIT_INSTALLER)}
        />
      )}
    </>
  );
};

export default Installers;

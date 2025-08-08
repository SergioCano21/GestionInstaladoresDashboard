import ContentHeader from '@components/ui/ContentHeader';
import { useModal } from '@hooks/useModal';
import { ADD, DISPLAY, EDIT, ROLE } from '@/types/consts';
import { useState } from 'react';
import type { Installer } from '@/types/types';
import { installerTemplate } from '@/types/templates';
import DisplayInstaller from './DisplayInstaller';
import EditInstaller from './EditInstaller';
import Table from '@/components/ui/table/Table';
import AddInstaller from './AddInstaller';
import { installers } from '@/mock';
import { useSelector } from 'react-redux';

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

  return (
    <>
      <section>
        <ContentHeader
          title="Administrar Instaladores"
          button={role === ROLE.LOCAL ? 'Agregar Instalador' : undefined}
          openModal={role === ROLE.LOCAL ? () => openModal(ADD) : undefined}
        />

        <section className={`flex mb-20 gap-5`}>
          <input type="text" placeholder="ID" className={`filter-input`} />
          <input type="text" placeholder="Nombre" className={`filter-input`} />
          <select name="" id="" className={`filter-input`}>
            <option value="">Tienda</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </section>

        <Table
          columns={columns}
          data={installers}
          onRowClick={(installer: Installer) => {
            setInstaller(installer);
            openModal(DISPLAY);
          }}
        />
      </section>

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

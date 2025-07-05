import ContentHeader from '../../components/ui/ContentHeader';
import { useModal } from '../../hooks/useModal';
import { ADD_INSTALLER, DISPLAY_INSTALLER, statusClasses, statusLabels } from '../../types/consts';

import { installers } from '../../mock';
import { useState } from 'react';
import type { Installer } from '../../types/types';
import { installerTemplate } from '../../types/templates';
import AddInstaller from './AddInstaller';
import DisplayInstaller from './DisplayInstaller';
const data = installers;

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
        <table className={`table`}>
          <thead className={`table-head`}>
            <tr>
              <th className={`table-header`}>ID</th>
              <th className={`table-header`}>Nombre</th>
              <th className={`table-header`}>Empresa</th>
              <th className={`table-header`}>Tienda</th>
              <th className={`table-header`}>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, i) => (
              <tr
                key={i}
                className={`table-row`}
                onClick={() => {
                  setInstaller(data);
                  openModal(DISPLAY_INSTALLER);
                }}
              >
                <td className={`table-cell`}>{data.installerId}</td>
                <td className={`table-cell`}>{data.name}</td>
                <td className={`table-cell`}>{data.company}</td>
                <td className={`table-cell`}>
                  {data.storeId.map((storeData, i) => (
                    <span>
                      #{storeData.numStore}&nbsp;{storeData.name}
                      {i < data.storeId.length - 1 && <br />}
                    </span>
                  ))}
                </td>
                <td className={`table-cell`}>
                  <span className={`status ${statusClasses[data.status]}`}>
                    {statusLabels[data.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {modal == ADD_INSTALLER && <AddInstaller closeModal={closeModal} />}
      {modal == DISPLAY_INSTALLER && <DisplayInstaller closeModal={closeModal} data={installer} />}
    </>
  );
};

export default Installers;

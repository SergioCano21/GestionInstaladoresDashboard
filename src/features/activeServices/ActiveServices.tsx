import { useState } from 'react';
import ContentTop from '../../components/ContentTop';
import styles from './ActiveServices.module.css';
import AddService from './AddService';
import DisplayService from './DisplayService';

const dataMock = [
  {
    folio: 54321,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'Doing',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion texto muy largo que no deberi mostrarse mas que le quite la configuracion que l epuse ne el css',
  },
  {
    folio: 12345,
    installer: 'Vicente Sebastian Cano Salazar',
    client: 'Vicente Sebastian Cano Salazar',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 98789,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'Doing',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 54456,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 65432,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 54321,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'Doing',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion texto muy largo que no deberi mostrarse mas que le quite la configuracion que l epuse ne el css',
  },
  {
    folio: 54456,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 54321,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'Doing',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion texto muy largo que no deberi mostrarse mas que le quite la configuracion que l epuse ne el css',
  },
  {
    folio: 54456,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 54456,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
  {
    folio: 54456,
    installer: 'Jose Armando Perez Ruiz',
    client: 'Ramiro Poncio Castañeda Hernandez',
    status: 'To Do',
    description:
      'Instalacion de tanque de gas en techo. Incluye material y todo lo necesario para instalacion',
  },
];

const ActiveServices = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenDisplay, setIsOpenDisplay] = useState(false);

  const openAddModal = () => {
    setIsOpenAdd(true);
    document.body.style.overflow = 'hidden';
  };
  const closeAddModal = () => {
    setIsOpenAdd(false);
    document.body.style.overflow = 'auto';
  };

  const openEditModal = () => {
    setIsOpenDisplay(true);
    document.body.style.overflow = 'hidden';
  };
  const closeEditModal = () => {
    setIsOpenDisplay(false);
    document.body.style.overflow = 'auto';
  };
  return (
    <>
      <section>
        <ContentTop
          title="Administrar Servicios Activos"
          button="Agregar Servicio"
          openModal={openAddModal}
        />
        <div className={styles.filterContainer}>
          <input type="text" placeholder="Folio" className={styles.filterInput} />
          <input type="text" placeholder="Nombre Instalador" className={styles.filterInput} />
          <input type="text" placeholder="Nombre Cliente" className={styles.filterInput} />
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={`${styles.tableHead} ${styles.widthFolio}`}>Folio</th>
              <th className={`${styles.tableHead} ${styles.widthName}`}>Instalador</th>
              <th className={`${styles.tableHead} ${styles.widthName}`}>Cliente</th>
              <th className={`${styles.tableHead} ${styles.widthDescription}`}>Descripción</th>
              <th className={styles.tableHead}>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataMock.map((data, i) => (
              <tr key={i} className={styles.tableRowContainer} onClick={openEditModal}>
                <td className={styles.tableRow}>{data.folio}</td>
                <td className={styles.tableRow}>{data.installer}</td>
                <td className={styles.tableRow}>{data.client}</td>
                <td className={styles.tableRow}>
                  <div className={styles.description}>{data.description}</div>
                </td>
                <td className={styles.tableRow}>
                  <span className={data.status == 'To Do' ? styles.pending : styles.inProgress}>
                    {data.status == 'To Do' ? 'Pendiente' : 'Progreso'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {isOpenAdd && <AddService closeModal={closeAddModal} />}
      {isOpenDisplay && <DisplayService closeModal={closeEditModal} />}
    </>
  );
};

export default ActiveServices;

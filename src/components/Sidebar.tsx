import { NavLink } from 'react-router';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <section className={styles.container}>
        <NavLink
          to={'/servicios-activos'}
          className={({ isActive }) => `${styles.tabs} ${isActive ? styles.active : ''}`}
        >
          Servicios Activos
        </NavLink>
        <NavLink
          to={'/servicios-completados'}
          className={({ isActive }) => `${styles.tabs} ${isActive ? `${styles.active}` : ''}`}
        >
          Servicios Completados
        </NavLink>
        <NavLink
          to={'/instaladores'}
          className={({ isActive }) => `${styles.tabs} ${isActive ? `${styles.active}` : ''}`}
        >
          Instaladores
        </NavLink>
        <NavLink
          to={'/tiendas'}
          className={({ isActive }) => `${styles.tabs} ${isActive ? `${styles.active}` : ''}`}
        >
          Tiendas
        </NavLink>
        <NavLink
          to={'/calendario'}
          className={({ isActive }) => `${styles.tabs} ${isActive ? `${styles.active}` : ''}`}
        >
          Calendario
        </NavLink>
      </section>
    </>
  );
};

export default Sidebar;

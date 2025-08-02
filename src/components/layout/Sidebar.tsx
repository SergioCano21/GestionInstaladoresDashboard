import { NavLink } from 'react-router';
import styles from './Sidebar.module.css';

const navLinks = [
  {
    link: '/servicios-activos',
    label: 'Servicios Activos',
  },
  {
    link: '/servicios-completados',
    label: 'Servicios Completados',
  },
  {
    link: '/calendario',
    label: 'Calendario',
  },
  {
    link: '/tiendas',
    label: 'Tiendas',
  },
  {
    link: '/instaladores',
    label: 'Instaladores',
  },
  {
    link: '/administradores',
    label: 'Administradores',
  },
];

const Sidebar = () => {
  return (
    <>
      <aside className={`card box-shadow ${styles.container}`}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.link}
            to={navLink.link}
            className={({ isActive }) =>
              `flex align-items-center ${styles.tabs} ${isActive ? styles.active : ''}`
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </aside>
    </>
  );
};

export default Sidebar;

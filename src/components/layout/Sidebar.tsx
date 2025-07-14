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
      <section className={`card box-shadow ${styles.container}`}>
        {navLinks.map((navLink) => (
          <NavLink
            to={navLink.link}
            className={({ isActive }) =>
              `flex align-items-center ${styles.tabs} ${isActive ? styles.active : ''}`
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </section>
    </>
  );
};

export default Sidebar;

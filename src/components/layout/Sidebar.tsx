import { NavLink } from 'react-router';
import styles from './Sidebar.module.css';
import { useSelector } from 'react-redux';

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
    onlyForRoles: ['district', 'national'],
  },
  {
    link: '/instaladores',
    label: 'Instaladores',
  },
  {
    link: '/administradores',
    label: 'Administradores',
    onlyForRoles: ['district', 'national'],
  },
];

const Sidebar = () => {
  const role = useSelector((state: any) => state.auth.role);

  return (
    <>
      <aside className={`card box-shadow ${styles.container}`}>
        {navLinks.map((navLink) => {
          if (navLink.onlyForRoles && !navLink.onlyForRoles.includes(role)) {
            return null;
          }
          return (
            <NavLink
              key={navLink.link}
              to={navLink.link}
              className={({ isActive }) =>
                `flex align-items-center ${styles.tabs} ${isActive ? styles.active : ''}`
              }
            >
              {navLink.label}
            </NavLink>
          );
        })}
      </aside>
    </>
  );
};

export default Sidebar;

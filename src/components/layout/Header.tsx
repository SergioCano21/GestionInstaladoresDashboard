import { logout } from '@/api/auth';
import styles from './Header.module.css';
import logo from '@/assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearAuth } from '@/redux/auth/authSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const name = useSelector((state: any) => state.auth.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Sesión cerrada correctamente.');
      dispatch(clearAuth());
      navigate('/');
      queryClient.clear();
    } catch (error: any) {}
  };

  return (
    <>
      <header
        className={`flex align-items-center justify-content-center box-shadow ${styles.header}`}
      >
        <div className={`flex justify-content-between ${styles.container}`}>
          <div className={`flex align-items-center`}>
            <img src={logo} alt="Logo" className={styles.logoImg} />
            <div className={styles.textLogo}>Área de Servicios Especiales</div>
          </div>
          <div className={`flex align-items-center`}>
            <div className={styles.adminInfo}>{name && `Bienvenido, ${name}`}</div>
            <button className={styles.btn} onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

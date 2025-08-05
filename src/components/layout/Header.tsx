import { logout } from '@/api/auth';
import styles from './Header.module.css';
import logo from '@/assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearAuth } from '@/redux/auth/authSlice';

const Header = () => {
  const name = useSelector((state: any) => state.auth.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearAuth());
      navigate('/');
    } catch (error: any) {
      console.error(`Error al cerrar sesión: ${error.message}`);
    }
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
            <div className={styles.adminInfo}>Bienvenido, {name}</div>
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

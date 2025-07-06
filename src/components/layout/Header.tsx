import styles from './Header.module.css';
import logo from '@/assets/images/logo.svg';

const Header = () => {
  return (
    <>
      <section
        className={`flex align-items-center justify-content-center box-shadow ${styles.header}`}
      >
        <div className={`flex justify-content-between ${styles.container}`}>
          <div className={`flex align-items-center`}>
            <img src={logo} alt="Logo" className={styles.logoImg} />
            <div className={styles.textLogo}>Área de Servicios Especiales</div>
          </div>
          <div className={`flex align-items-center`}>
            <div className={styles.adminInfo}>Bienvenido, Admin</div>
            <button className={styles.btn}>Cerrar Sesión</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

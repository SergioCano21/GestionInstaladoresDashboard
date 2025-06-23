import styles from './Header.module.css';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" className={styles.logoImg} />
            <div className={styles.textLogo}>Área de Servicios Especiales</div>
          </div>
          <div className={styles.info}>
            <div className={styles.adminInfo}>Bienvenido, Admin</div>
            <button className={styles.btn}>Cerrar Sesión</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

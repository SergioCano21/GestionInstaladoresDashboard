import logo from '../../assets/images/logo.svg';
import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.loginTop}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.logoText}>Panel de Administración</div>
        </div>
        <form action="">
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.formText}>
              Usuario
            </label>
            <input type="text" id="username" className={styles.formInput} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formText}>
              Contraseña
            </label>
            <input type="password" id="password" className={styles.formInput} required />
          </div>
          <button type="submit" className={styles.formBtn}>
            Iniciar Sesión
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;

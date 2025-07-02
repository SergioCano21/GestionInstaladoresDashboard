import logo from '../../assets/images/logo.svg';
import styles from './Login.module.css';

const Login = () => {
  return (
    <>
      <section className={`card box-shadow ${styles.container}`}>
        <div className={styles.loginTop}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.logoText}>Panel de Administración</div>
        </div>
        <form action="">
          <div className={`mb-20`}>
            <label htmlFor="username" className={`label`}>
              Usuario
            </label>
            <input type="text" id="username" className={`form-input`} required />
          </div>
          <div className={`mb-20`}>
            <label htmlFor="password" className={`label`}>
              Contraseña
            </label>
            <input type="password" id="password" className={`form-input`} required />
          </div>
          <button type="submit" className={`btn btn-primary ${styles.btn}`}>
            Iniciar Sesión
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;

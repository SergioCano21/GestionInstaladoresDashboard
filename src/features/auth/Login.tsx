import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './Login.module.css';
import type { LoginData } from '@/types/types';
import { loginTemplate } from '@/types/templates';
import { useFormHandler } from '@/hooks/useFormHandler';

const Login = () => {
  const [formData, setFormData] = useState<LoginData>(loginTemplate);

  const { handleChange } = useFormHandler(setFormData);

  return (
    <>
      <section className={`card box-shadow ${styles.container}`}>
        <div className={styles.loginTop}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.logoText}>Panel de Administración</div>
        </div>
        <form action="" id="login">
          <div className={`mb-20`}>
            <label htmlFor="username" className={`label`}>
              Usuario
            </label>
            <input
              type="text"
              name="username"
              className={`form-input`}
              onChange={handleChange}
              value={formData.username}
              required
            />
          </div>
          <div className={`mb-20`}>
            <label htmlFor="password" className={`label`}>
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className={`form-input`}
              onChange={handleChange}
              value={formData.password}
              required
            />
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

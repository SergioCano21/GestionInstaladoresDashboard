import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './Login.module.css';
import type { LoginData } from '@/types/types';
import { loginTemplate } from '@/types/templates';
import { useFormHandler } from '@/hooks/useFormHandler';
import FormInput from '@/components/ui/form/FormInput';

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
          <FormInput
            label="Usuario"
            id="username"
            name="username"
            type="text"
            placeholder=""
            onChange={handleChange}
            value={formData.username}
          />
          <FormInput
            label="Contraseña"
            id="password"
            name="password"
            type="password"
            placeholder=""
            onChange={handleChange}
            value={formData.password}
          />
          <button type="submit" className={`btn btn-primary ${styles.btn}`}>
            Iniciar Sesión
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;

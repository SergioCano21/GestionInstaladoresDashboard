import { useEffect, useState } from 'react';
import logo from '@/assets/images/logo.svg';
import styles from './Login.module.css';
import type { LoginForm } from '@/types/types';
import { loginTemplate } from '@/types/templates';
import { useFormHandler } from '@/hooks/useFormHandler';
import FormInput from '@/components/ui/form/FormInput';
import { login } from '@/api/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { clearAuth, setAuth } from '@/redux/auth/authSlice';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import Button from '@/components/ui/button/Button';

const Login = () => {
  if (Cookies.get('access_token')) {
    return <Navigate to="/servicios-activos" replace />;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState<LoginForm>(loginTemplate);
  const [isLoading, setIsLoading] = useState(false);

  const { handleChange } = useFormHandler(setFormData);

  useEffect(() => {
    queryClient.clear();
    dispatch(clearAuth());
  }, [queryClient]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await login(formData);
      dispatch(setAuth(data));
      navigate('servicios-activos');
    } catch (error: any) {
      alert(`Error al iniciar sesión. ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className={`card box-shadow ${styles.container}`}>
        <div className={styles.loginTop}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <div className={styles.logoText}>Panel de Administración</div>
        </div>
        <form onSubmit={handleSubmit} id="login">
          <FormInput
            label="Usuario"
            id="username"
            name="username"
            type="text"
            placeholder=""
            disabled={isLoading}
            onChange={handleChange}
            value={formData.username}
          />
          <FormInput
            label="Contraseña"
            id="password"
            name="password"
            type="password"
            placeholder=""
            disabled={isLoading}
            onChange={handleChange}
            value={formData.password}
          />
          <Button
            text="Iniciar Sesión"
            type="submit"
            variant="primary"
            extraClasses={`${styles.btn}`}
            loading={isLoading}
          />
        </form>
      </section>
    </>
  );
};

export default Login;

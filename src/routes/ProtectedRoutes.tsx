import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { useAuth } from '@/api/auth';
import { setAuth } from '@/redux/auth/authSlice';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const ProtectedRoutes = ({ children, allowedRoles }: Props) => {
  if (!Cookies.get('access_token')) {
    return <Navigate to="/" replace />;
  }

  const role = useSelector((state: any) => state.auth.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAuth = async () => {
    try {
      const data = await useAuth();
      dispatch(setAuth(data));
    } catch (error: any) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (!role && Cookies.get('access_token')) {
      fetchAuth();
    }
  }, []);

  if (!role) {
    return null;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/servicios-activos" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;

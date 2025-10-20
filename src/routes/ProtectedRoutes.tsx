import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '@/api/auth';
import { setAuth } from '@/redux/auth/authSlice';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const ProtectedRoutes = ({ children, allowedRoles }: Props) => {
  const role = useSelector((state: any) => state.auth.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const veryfyAuth = async () => {
      if (role) {
        setIsChecking(false);
        return;
      }

      try {
        const data = await useAuth();
        dispatch(setAuth(data));
      } catch (error: any) {
        navigate('/', { replace: true });
      } finally {
        setIsChecking(false);
      }
    };

    veryfyAuth();
  }, [role]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Verificando autenticación...</div>
      </div>
    );
  }

  if (!role) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/servicios-activos" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;

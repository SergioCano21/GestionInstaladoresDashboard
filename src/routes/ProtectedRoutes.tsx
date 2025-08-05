import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const ProtectedRoutes = ({ children, allowedRoles }: Props) => {
  const role = useSelector((state: any) => state.auth.role);

  if (!Cookies.get('access_token')) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/servicios-activos" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;

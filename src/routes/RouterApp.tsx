import { Navigate, Route, Routes } from 'react-router';
import AuthLayout from '@layouts/AuthLayout';
import Login from '@pages/auth/Login';
import ActiveServices from '@pages/activeServices/ActiveServices';
import CompletedServices from '@pages/completedServices/CompletedServices';
import Installers from '@pages/installers/Installers';
import Stores from '@pages/stores/Stores';
import Calendar from '@pages/calendar/Calendar';
import Administrators from '@pages/administrators/Administrators';
import DashboardLayout from '@/layouts/DashboardLayout';
import ProtectedRoutes from './ProtectedRoutes';
import { ROLE } from '@/types/consts';

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="servicios-activos"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ActiveServices />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="servicios-completados"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <CompletedServices />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="instaladores"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <Installers />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="tiendas"
          element={
            <ProtectedRoutes allowedRoles={[ROLE.DISTRICT, ROLE.NATIONAL]}>
              <DashboardLayout>
                <Stores />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="calendario"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <Calendar />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />

        <Route
          path="administradores"
          element={
            <ProtectedRoutes allowedRoles={[ROLE.DISTRICT, ROLE.NATIONAL]}>
              <DashboardLayout>
                <Administrators />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default RouterApp;

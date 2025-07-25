import { Route, Routes } from 'react-router';
import AuthLayout from '@layouts/AuthLayout';
import Login from '@features/auth/Login';
import DashboardLayout from '@layouts/DashboardLayout';
import ActiveServices from '@features/activeServices/ActiveServices';
import CompletedServices from '@features/completedServices/CompletedServices';
import Installers from '@features/installers/Installers';
import Stores from '@features/stores/Stores';
import Calendar from '@features/calendar/Calendar';
import Administrators from './features/administrators/Administrators';

const App = () => {
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
            <DashboardLayout>
              <ActiveServices />
            </DashboardLayout>
          }
        />
        <Route
          path="servicios-completados"
          element={
            <DashboardLayout>
              <CompletedServices />
            </DashboardLayout>
          }
        />
        <Route
          path="instaladores"
          element={
            <DashboardLayout>
              <Installers />
            </DashboardLayout>
          }
        />
        <Route
          path="tiendas"
          element={
            <DashboardLayout>
              <Stores />
            </DashboardLayout>
          }
        />
        <Route
          path="calendario"
          element={
            <DashboardLayout>
              <Calendar />
            </DashboardLayout>
          }
        />
        <Route
          path="administradores"
          element={
            <DashboardLayout>
              <Administrators />
            </DashboardLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;

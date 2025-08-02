import { Route, Routes } from 'react-router';
import AuthLayout from '@layouts/AuthLayout';
import Login from '@pages/auth/Login';
import DashboardLayout from '@layouts/DashboardLayout';
import ActiveServices from '@pages/activeServices/ActiveServices';
import CompletedServices from '@pages/completedServices/CompletedServices';
import Installers from '@pages/installers/Installers';
import Stores from '@pages/stores/Stores';
import Calendar from '@pages/calendar/Calendar';
import Administrators from './pages/administrators/Administrators';

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

import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import styles from './DashboardLayout.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <Header />
        <div className={`flex justify-content-center`}>
          <div className={`flex ${styles.dashboardContent}`}>
            <div className={styles.sidebarContent}>
              <Sidebar />
            </div>
            <div className={`flex-1`}>
              {/*
              <div className={styles.pageTitle}>Panel de Administración</div>
              */}
              <div className={`card box-shadow ${styles.pageContent}`}>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import styles from './DashboardLayout.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <Header />
        <div className={styles.container}>
          <div className={styles.dashboardContent}>
            <div className={styles.sidebarContent}>
              <Sidebar />
            </div>
            <div className={styles.mainContent}>
              <div className={styles.pageTitle}>Panel de Administración</div>
              <div className={styles.pageContent}>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;

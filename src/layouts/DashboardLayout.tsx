import Header from '@components/layout/Header';
import Sidebar from '@components/layout/Sidebar';
import styles from './DashboardLayout.module.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`flex justify-content-center`}>
        <div className={`flex ${styles.dashboardContent}`}>
          <div className={styles.sidebarContent}>
            <Sidebar />
          </div>
          <section className={`flex-1 card box-shadow ${styles.pageContent}`}>{children}</section>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;

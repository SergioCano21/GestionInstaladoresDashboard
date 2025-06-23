import styles from './AuthLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default AuthLayout;

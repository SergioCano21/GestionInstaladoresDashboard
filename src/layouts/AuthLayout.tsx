import styles from './AuthLayout.module.css';

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <div className={`flex justify-content-center align-items-center ${styles.container}`}>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;

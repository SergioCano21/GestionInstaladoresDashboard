import styles from './ContentTop.module.css';

interface Props {
  title: string;
  button: string;
  openModal: () => void;
}

const ContentTop = ({ title, button, openModal }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <button className={styles.button} onClick={() => openModal()}>
          {button}
        </button>
      </div>
    </>
  );
};

export default ContentTop;

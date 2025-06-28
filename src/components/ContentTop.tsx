import styles from './ContentTop.module.css';

interface Props {
  title: string;
  button: string;
}

const ContentTop = ({ title, button }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <button className={styles.button}>{button}</button>
      </div>
    </>
  );
};

export default ContentTop;

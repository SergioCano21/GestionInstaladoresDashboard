import styles from './ContentHeader.module.css';

interface Props {
  title: string;
  button?: string;
  openModal?: () => void;
}

const ContentHeader = ({ title, button, openModal }: Props) => {
  return (
    <>
      <div className={`flex align-items-center justify-content-between mb-20 ${styles.minHeight}`}>
        <div className={`title`}>{title}</div>
        {button && openModal && (
          <button className={`btn btn-primary`} onClick={() => openModal()}>
            {button}
          </button>
        )}
      </div>
    </>
  );
};

export default ContentHeader;

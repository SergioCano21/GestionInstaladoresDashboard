import XMark from '../XMark';

interface Props {
  title: string;
  closeModal: () => void;
}

const ModalHeader = ({ title, closeModal }: Props) => {
  return (
    <div className={`flex justify-content-between mb-20`}>
      <div className={`title`}>{title}</div>
      <div className={`flex align-items-center cursor-pointer`} onClick={closeModal}>
        <XMark />
      </div>
    </div>
  );
};

export default ModalHeader;

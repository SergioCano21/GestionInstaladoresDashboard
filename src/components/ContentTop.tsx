interface Props {
  title: string;
  button: string;
  openModal: () => void;
}

const ContentTop = ({ title, button, openModal }: Props) => {
  return (
    <>
      <div className={`flex justify-content-between mb-20`}>
        <div className={`title`}>{title}</div>
        <button className={`btn btn-primary`} onClick={() => openModal()}>
          {button}
        </button>
      </div>
    </>
  );
};

export default ContentTop;

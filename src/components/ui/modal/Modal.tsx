import type React from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
  size: string;
  align: string;
}

const Modal = ({ children, size, align }: Props) => {
  return ReactDOM.createPortal(
    <section className={`modal-background ${align}`}>
      <div className={`card ${size}`}>{children}</div>
    </section>,

    document.body,
  );
};

export default Modal;

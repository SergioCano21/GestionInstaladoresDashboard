import ReactDOM from 'react-dom';
import styles from './AddEditService.module.css';
import XMark from '../../components/XMark';
import Form from './Form';
import type { Service } from '../../types/types';
import { useState } from 'react';

interface Props {
  closeModal: () => void;
  data: Service;
}

const EditService = ({ closeModal, data }: Props) => {
  const [service, setService] = useState<Service>(data);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, dataset } = event.target;

    if (dataset.jobDetail !== undefined) {
      setService((prev) => {
        const updated = [...prev.jobDetails];
        updated[0] = {
          ...updated[0],
          [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
        };
        return { ...prev, jobDetails: updated };
      });
    } else {
      setService((prev) => ({
        ...prev,
        [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
      }));
    }
  };

  const handleSubmit = () => {
    closeModal();
    alert('Servicio actualizado');
  };

  return ReactDOM.createPortal(
    <>
      <section className={styles.background}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.title}>Editar Servicio</div>
            <div className={styles.xmark} onClick={closeModal}>
              <XMark />
            </div>
          </div>
          <form action={handleSubmit} id="editServiceForm">
            <Form
              formData={service}
              handleChange={handleChange}
              closeModal={closeModal}
              button={'Editar'}
            />
          </form>
        </div>
      </section>
    </>,
    document.body,
  );
};

export default EditService;

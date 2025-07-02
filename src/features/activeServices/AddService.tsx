import ReactDOM from 'react-dom';
import styles from './AddEditService.module.css';
import XMark from '../../components/XMark';
import { useState } from 'react';
import Form from './Form';
import type { AddServiceForm } from '../../types/types';
import { addFormTemplate } from '../../types/templates';

interface Props {
  closeModal: () => void;
}

const AddService = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<AddServiceForm>(addFormTemplate);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, dataset } = event.target;

    if (dataset.jobDetail !== undefined) {
      setFormData((prev) => {
        const updated = [...prev.jobDetails];
        updated[0] = {
          ...updated[0],
          [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
        };
        return { ...prev, jobDetails: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
      }));
    }
  };

  const handleSubmit = () => {
    closeModal();
    alert('Servicio creado');
  };

  return ReactDOM.createPortal(
    <>
      <section className={`modal-background`}>
        <div className={`card ${styles.container}`}>
          <div className={`flex justify-content-between mb-20`}>
            <div className={`title`}>Agregar Nuevo Servicio</div>
            <div className={`flex cursor-pointer`} onClick={closeModal}>
              <XMark />
            </div>
          </div>
          <form action={handleSubmit} id="addServiceForm">
            <Form
              formData={formData}
              handleChange={handleChange}
              closeModal={closeModal}
              button={'Agregar'}
            />
          </form>
        </div>
      </section>
    </>,
    document.body,
  );
};

export default AddService;

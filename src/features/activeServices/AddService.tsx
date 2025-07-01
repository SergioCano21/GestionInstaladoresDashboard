import ReactDOM from 'react-dom';
import styles from './AddService.module.css';
import XMark from '../../components/XMark';
import { useState } from 'react';
import Form from './Form';

interface JobDetails {
  quantity: number | '';
  installationServiceFee: number | '';
  description: string;
}

interface FormData {
  folio: number | '';
  client: string;
  clientPhone: number | '';
  address: string;
  jobDetails: JobDetails[];
  additionalComments: string;
  installerId: number | '';
}

interface Props {
  closeModal: () => void;
}

const AddService = ({ closeModal }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    folio: '',
    client: '',
    clientPhone: '',
    address: '',
    jobDetails: [{ quantity: '', installationServiceFee: '', description: '' }],
    additionalComments: '',
    installerId: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, dataset } = event.target;

    if (dataset.jobDetail !== undefined) {
      setFormData((data) => {
        const updated = [...data.jobDetails];
        updated[0] = {
          ...updated[0],
          [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
        };
        return { ...data, jobDetails: updated };
      });
    } else {
      setFormData((data) => ({
        ...data,
        [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
      }));
    }
  };

  const handleSubmit = () => {
    closeModal();
    alert('Mensaje submited');
  };

  return ReactDOM.createPortal(
    <>
      <section className={styles.background}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <div className={styles.title}>Agregar Nuevo Servicio</div>
            <div className={styles.xmark} onClick={closeModal}>
              <XMark />
            </div>
          </div>
          <form action={handleSubmit} id="addServiceForm">
            <Form formData={formData} handleChange={handleChange} closeModal={closeModal} />
          </form>
        </div>
      </section>
    </>,
    document.body,
  );
};

export default AddService;

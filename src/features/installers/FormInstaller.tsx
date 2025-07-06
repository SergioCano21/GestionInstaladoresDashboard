import type { Installer } from '@/types/types';
import styles from './Form.module.css';

interface Props {
  formData: Installer;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  button: string;
}

const FormInstaller = ({ formData, handleChange, closeModal, button }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <div className={`flex gap-5 mb-20`}>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="installerId">
              ID
            </label>
            <input
              className={`form-input`}
              id="installerId"
              name="installerId"
              type="number"
              min="0"
              placeholder="ID"
              required
              value={formData.installerId}
              onChange={handleChange}
            />
          </div>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              className={`form-input`}
              type="text"
              required
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`flex gap-5 mb-20`}>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className={`form-input`}
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="phone">
              Teléfono
            </label>
            <input
              className={`form-input`}
              id="phone"
              name="phone"
              type="number"
              required
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={`mb-20`}>
          <label className={`label`} htmlFor="company">
            Nombre de la Empresa
          </label>
          <input
            id="company"
            name="company"
            className={`form-input`}
            type="text"
            required
            placeholder="Empresa"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </section>
      <div className={`flex gap-5 justify-content-end`}>
        <button className={`btn btn-close`} onClick={closeModal}>
          Cerrar
        </button>
        <button type="submit" className={`btn btn-primary`}>
          {button}
        </button>
      </div>
    </>
  );
};

export default FormInstaller;

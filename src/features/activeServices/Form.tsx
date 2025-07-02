import type { AddServiceForm, Service } from '../../types/types';
import styles from './Form.module.css';

interface Props {
  formData: AddServiceForm | Service;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  button: string;
}

const Form = ({ formData, handleChange, closeModal, button }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.inputSection}>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="folio">
              Folio
            </label>
            <input
              className={styles.formInput}
              id="folio"
              name="folio"
              type="number"
              min="0"
              placeholder="Folio"
              required
              value={formData.folio}
              onChange={handleChange}
            />
          </div>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="installer">
              Asignar Instalador
            </label>
            <select
              className={styles.formInput}
              name="installerId"
              id="installer"
              required
              value={formData.installerId}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value="1">Instalador 1</option>
              <option value="2">Instalador 2</option>
            </select>
          </div>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="client">
              Nombre del Cliente
            </label>
            <input
              id="client"
              name="client"
              className={styles.formInput}
              type="text"
              required
              placeholder="Cliente"
              value={formData.client}
              onChange={handleChange}
            />
          </div>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="phone">
              Teléfono del Cliente
            </label>
            <input
              className={styles.formInput}
              id="phone"
              name="clientPhone"
              type="number"
              required
              placeholder="Teléfono"
              value={formData.clientPhone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.margin20}>
          <label className={styles.label} htmlFor="address">
            Dirección del Cliente
          </label>
          <input
            id="address"
            name="address"
            className={styles.formInput}
            type="text"
            required
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.inputSection}>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="quantity">
              Cantidad de Unidades
            </label>
            <input
              className={styles.formInput}
              name="quantity"
              data-job-detail="true"
              type="number"
              min="1"
              required
              placeholder="Cantidad"
              value={formData.jobDetails[0].quantity}
              onChange={handleChange}
            />
          </div>
          <div className={styles.w50}>
            <label className={styles.label} htmlFor="installationServiceFee">
              Costo del Servicio
            </label>
            <input
              className={styles.formInput}
              name="installationServiceFee"
              data-job-detail="true"
              type="number"
              step="0.01"
              min="1"
              required
              placeholder="Costo"
              value={formData.jobDetails[0].installationServiceFee}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.margin20}>
          <label className={styles.label} htmlFor="description">
            Descripción del Servicio
          </label>
          <textarea
            name="description"
            data-job-detail="true"
            className={styles.formInput}
            required
            placeholder="Descripción"
            rows={3}
            value={formData.jobDetails[0].description}
            onChange={handleChange}
          />
        </div>
      </section>

      <div className={styles.margin20}>
        <label className={styles.label} htmlFor="comments">
          Comentarios Adicionales
        </label>
        <textarea
          id="comments"
          name="additionalComments"
          className={styles.formInput}
          placeholder="Comentarios"
          rows={4}
          value={formData.additionalComments}
          onChange={handleChange}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonNext} onClick={closeModal}>
          Cancelar
        </button>
        <button type="submit" className={styles.buttonAdd}>
          {button}
        </button>
      </div>
    </>
  );
};

export default Form;

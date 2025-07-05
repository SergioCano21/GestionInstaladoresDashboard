import type { Service } from '../../types/types';
import styles from './Form.module.css';

interface Props {
  formData: Service;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void;
  closeModal: () => void;
  button: string;
}

const FormService = ({ formData, handleChange, closeModal, button }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <div className={`flex gap-5 mb-20`}>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="folio">
              Folio
            </label>
            <input
              className={`form-input`}
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
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="installer">
              Asignar Instalador
            </label>
            <select
              className={`form-input`}
              name="installerId"
              id="installer"
              required
              value={formData.installerId.installerId}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value={formData.installerId.installerId}>{formData.installerId.name}</option>
              <option value="2">Instalador 2</option>
            </select>
          </div>
        </div>
        <div className={`flex gap-5 mb-20`}>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="client">
              Nombre del Cliente
            </label>
            <input
              id="client"
              name="client"
              className={`form-input`}
              type="text"
              required
              placeholder="Cliente"
              value={formData.client}
              onChange={handleChange}
            />
          </div>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="phone">
              Teléfono del Cliente
            </label>
            <input
              className={`form-input`}
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
        <div className={`mb-20`}>
          <label className={`label`} htmlFor="address">
            Dirección del Cliente
          </label>
          <input
            id="address"
            name="address"
            className={`form-input`}
            type="text"
            required
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </section>
      <section className={styles.section2}>
        <div className={`flex gap-5 mb-20`}>
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="quantity">
              Cantidad de Unidades
            </label>
            <input
              className={`form-input`}
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
          <div className={`flex-1`}>
            <label className={`label`} htmlFor="installationServiceFee">
              Costo del Servicio
            </label>
            <input
              className={`form-input`}
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
        <div className={`mb-20`}>
          <label className={`label`} htmlFor="description">
            Descripción del Servicio
          </label>
          <textarea
            name="description"
            data-job-detail="true"
            className={`form-input`}
            required
            placeholder="Descripción"
            rows={3}
            value={formData.jobDetails[0].description}
            onChange={handleChange}
          />
        </div>
      </section>

      <div className={`mb-20`}>
        <label className={`label`} htmlFor="comments">
          Comentarios Adicionales
        </label>
        <textarea
          id="comments"
          name="additionalComments"
          className={`form-input`}
          placeholder="Comentarios"
          rows={4}
          value={formData.additionalComments}
          onChange={handleChange}
        />
      </div>
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

export default FormService;

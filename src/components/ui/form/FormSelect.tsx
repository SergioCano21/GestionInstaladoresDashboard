import type { ChangeEvent } from 'react';

interface Props {
  label: string;
  id: string;
  name: string;
  value: number | '';
  options: {
    installerId: number;
    name: string;
  }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect = ({ label, id, name, value, options, onChange }: Props) => {
  return (
    <div className={`flex-1`}>
      <label className={`label`} htmlFor={id}>
        {label}
      </label>
      <select
        className={`form-input mb-20`}
        name={name}
        id={id}
        required
        value={value}
        onChange={onChange}
      >
        <option value="">Seleccionar</option>
        {options.map((option) => (
          <option value={option.installerId}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;

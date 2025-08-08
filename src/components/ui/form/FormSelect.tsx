import type { ChangeEvent } from 'react';

interface Props<T> {
  label: string;
  id: string;
  name: string;
  value: string | number | '' | undefined;
  options: T[];
  getOptionValue: (option: T) => string | number;
  getOptionLabel: (option: T) => string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect = <T,>({
  label,
  id,
  name,
  value,
  options,
  getOptionValue,
  getOptionLabel,
  onChange,
}: Props<T>) => {
  return (
    <div className="flex-1">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <select
        className="form-input mb-20"
        name={name}
        id={id}
        required
        value={value}
        onChange={onChange}
      >
        <option hidden value="">
          Seleccionar
        </option>
        {options.map((option) => (
          <option key={getOptionValue(option)} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;

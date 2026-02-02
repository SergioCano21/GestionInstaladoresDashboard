import type { ChangeEvent } from 'react';

interface Props {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  step?: string;
}

const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  readonly = false,
  disabled = false,
  step = 'any',
  onChange,
}: Props) => {
  return (
    <div className={`flex-1`}>
      <label className={`label`} htmlFor={id}>
        {label}
      </label>
      <input
        className={`form-input mb-20`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        min={1}
        required
        value={value}
        onChange={onChange}
        readOnly={readonly}
        step={step}
      />
    </div>
  );
};

export default FormInput;

import type { ChangeEvent } from 'react';

interface Props {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  isJobDetail?: boolean;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  label,
  id,
  name,
  type,
  placeholder,
  isJobDetail = false,
  value,
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
        min={1}
        required
        value={value}
        onChange={onChange}
        data-job-detail={isJobDetail ? 'true' : undefined}
      />
    </div>
  );
};

export default FormInput;

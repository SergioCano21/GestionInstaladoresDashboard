import type { ChangeEvent } from 'react';

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  rows: number;
  isJobDetail?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea = ({
  label,
  id,
  name,
  placeholder,
  rows,
  isJobDetail = false,
  value,
  onChange,
}: Props) => {
  return (
    <div className={`flex-1`}>
      <label className={`label`} htmlFor={id}>
        {label}
      </label>
      <textarea
        className={`form-input mb-15`}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        rows={rows}
        value={value}
        onChange={onChange}
        data-job-detail={isJobDetail ? 'true' : undefined}
      />
    </div>
  );
};

export default FormTextArea;

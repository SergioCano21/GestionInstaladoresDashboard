import type { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput = ({ label, id, className = '', ...props }: Props) => {
  return (
    <div className="flex-1">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className={`form-input mb-20 ${className}`} id={id} {...props} />
    </div>
  );
};
export default FormInput;

import type { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const FilterInput = ({ className, ...props }: Props) => {
  return <input {...props} className={`filter-input ${className ?? ''}`} />;
};

export default FilterInput;

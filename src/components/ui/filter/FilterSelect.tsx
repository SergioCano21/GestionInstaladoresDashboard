import type { SelectHTMLAttributes } from 'react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {}

const FilterSelect = ({ className, children, ...props }: Props) => {
  return (
    <select {...props} className={`filter-input ${className ?? ''}`}>
      {children}
    </select>
  );
};

export default FilterSelect;

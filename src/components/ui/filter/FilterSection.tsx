import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const FilterSection = ({ children }: Props) => {
  return <div className={`flex mb-20 gap-5`}>{children}</div>;
};

export default FilterSection;

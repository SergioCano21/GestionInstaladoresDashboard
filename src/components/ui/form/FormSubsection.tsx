import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const FormSubsection = ({ children }: Props) => {
  return <div className={`flex gap-5`}>{children}</div>;
};

export default FormSubsection;

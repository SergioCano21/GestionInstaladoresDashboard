import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const FormSection = ({ children }: Props) => {
  return <section className="form-section">{children}</section>;
};

export default FormSection;

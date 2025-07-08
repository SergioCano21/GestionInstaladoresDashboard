import type React from 'react';

interface Props {
  children: React.ReactNode;
  isLast?: Boolean;
}

const FormSection = ({ children, isLast }: Props) => {
  return (
    <section className={`pt-20 ${!isLast ? `border-bottom pb-10` : `pb-5`}`}>{children}</section>
  );
};

export default FormSection;

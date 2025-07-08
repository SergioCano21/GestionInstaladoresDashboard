import type React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  isLast?: Boolean;
}

const DisplaySection = ({ title, children, isLast }: Props) => {
  return (
    <section className={`pt-20 pb-20 ${!isLast ? `border-bottom` : ``} `}>
      <div className={`subtitle`}>{title}</div>
      {children}
    </section>
  );
};

export default DisplaySection;

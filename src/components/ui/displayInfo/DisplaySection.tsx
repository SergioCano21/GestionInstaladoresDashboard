import type React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const DisplaySection = ({ title, children }: Props) => {
  return (
    <section className={`display-info-section`}>
      <div className={`subtitle`}>{title}</div>
      {children}
    </section>
  );
};

export default DisplaySection;

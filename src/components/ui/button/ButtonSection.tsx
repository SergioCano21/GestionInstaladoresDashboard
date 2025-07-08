import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const ButtonSection = ({ children }: Props) => {
  return (
    <section className={`flex justify-content-between border-top pt-20 mt-5`}>{children}</section>
  );
};

export default ButtonSection;

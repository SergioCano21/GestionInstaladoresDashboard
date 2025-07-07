import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const ButtonSection = ({ children }: Props) => {
  return <section className={`flex justify-content-between`}>{children}</section>;
};

export default ButtonSection;

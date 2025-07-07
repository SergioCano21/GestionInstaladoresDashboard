import type React from 'react';

interface Props {
  children: React.ReactNode;
}

const DisplaySubsection = ({ children }: Props) => {
  return <div className={`display-info-subsection`}>{children}</div>;
};

export default DisplaySubsection;

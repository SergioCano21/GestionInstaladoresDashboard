import type React from 'react';

interface Props {
  label: string;
  value: React.ReactNode;
  statusColor?: string;
  noMargin?: boolean;
  useLabel?: boolean;
}

const DisplayInfo = ({ label, value, statusColor, noMargin = false, useLabel = false }: Props) => {
  const marginTop = noMargin ? '' : 'mt-5';
  const type = statusColor ? `status ${statusColor}` : useLabel ? 'label' : 'text';

  return (
    <div className={`flex-1`}>
      <div className={`label`}>{label}</div>
      <div className={`${marginTop} ${type}`}>{value}</div>
    </div>
  );
};
export default DisplayInfo;

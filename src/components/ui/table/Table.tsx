import type React from 'react';

interface Props<T> {
  columns: {
    label: string;
    cell: (item: T) => React.ReactNode;
    headerClass?: string;
  }[];
  data: T[];
  onRowClick: (row: T) => void;
}

const Table = <T,>({ columns, data, onRowClick }: Props<T>) => {
  return (
    <table className={`table`}>
      <thead className={`table-head`}>
        <tr>
          {columns.map((col) => (
            <th key={col.label} className={`table-header ${col.headerClass ?? ''}`}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, i) => (
            <tr key={i} className="table-row" onClick={() => onRowClick(item)}>
              {columns.map((col) => (
                <td key={`${col.label}-${i}`} className="table-cell">
                  {col.cell(item)}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No hay resultados para mostrar</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;

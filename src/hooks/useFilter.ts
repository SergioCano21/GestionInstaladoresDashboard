import { useState, useMemo } from 'react';

type FilterConfig<T> = {
  [K in keyof Partial<T>]: {
    type: 'text' | 'number' | 'select';
    getValue?: (item: T) => string | number;
  };
};

export function useFilters<T>(data: T[], filterConfig: FilterConfig<T>) {
  const [filters, setFilters] = useState<Record<string, string>>(() => {
    const initialFilters: Record<string, string> = {};
    Object.keys(filterConfig).forEach((key) => {
      initialFilters[key] = '';
    });
    return initialFilters;
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return Object.entries(filters).every(([key, filterValue]) => {
        if (!filterValue) return true;

        const config = filterConfig[key as keyof T];
        if (!config) return true;

        const itemValue = config.getValue ? config.getValue(item) : item[key as keyof T];

        const itemValueStr = String(itemValue).toLowerCase();
        const filterValueStr = filterValue.toLowerCase();

        switch (config.type) {
          case 'number':
            return itemValueStr === filterValueStr;
          case 'select':
            return itemValueStr === filterValueStr;
          case 'text':
          default:
            return itemValueStr.includes(filterValueStr);
        }
      });
    });
  }, [data, filters, filterConfig]);

  return {
    filters,
    filteredData,
    handleFilterChange,
  };
}

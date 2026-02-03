import { useState, useMemo } from 'react';

type FilterConfig<T> = {
  [key: string]: {
    getValue?: (item: T) => string | number | (string | number)[];
  };
};

export function useFilter<T>(data: T[], filterConfig: FilterConfig<T>) {
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

        const config = filterConfig[key];
        if (!config) return true;

        const itemValue = config.getValue ? config.getValue(item) : item[key as keyof T];

        if (Array.isArray(itemValue)) {
          console.log(itemValue);
          return itemValue.some((val) =>
            String(val).toLowerCase().includes(filterValue.toLowerCase()),
          );
        }

        const itemValueStr = String(itemValue).toLowerCase();
        const filterValueStr = filterValue.toLowerCase();

        return itemValueStr.includes(filterValueStr);
      });
    });
  }, [data, filters, filterConfig]);

  return {
    filters,
    filteredData,
    handleFilterChange,
  };
}

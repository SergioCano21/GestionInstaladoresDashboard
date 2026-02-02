import type React from 'react';

export function useFormHandler<T>(setData: React.Dispatch<React.SetStateAction<T>>) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = event.target;

    setData((prev: any) => {
      const processedValue = type === 'number' ? (value !== '' ? Number(value) : '') : value;

      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: processedValue,
          },
        };
      }

      return {
        ...prev,
        [name]: processedValue,
      };
    });
  };
  return { handleChange };
}

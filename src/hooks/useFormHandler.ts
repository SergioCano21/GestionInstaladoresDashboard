import type React from 'react';

export function useFormHandler<T>(setData: React.Dispatch<React.SetStateAction<T>>) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = event.target;

    setData((prev: any) => ({
      ...prev,
      [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
    }));
  };
  return { handleChange };
}

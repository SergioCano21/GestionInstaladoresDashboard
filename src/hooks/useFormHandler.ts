import type React from 'react';

export function useFormHandler<T>(setData: React.Dispatch<React.SetStateAction<T>>) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type, dataset } = event.target;

    // Different handling when it is jobDetails array
    if (dataset.jobDetail !== undefined) {
      setData((prev: any) => {
        const updated = [...prev.jobDetails];
        updated[0] = {
          ...updated[0],
          [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
        };
        return { ...prev, jobDetails: updated };
      });
    } else {
      setData((prev: any) => ({
        ...prev,
        [name]: type == 'number' ? (value != '' ? Number(value) : '') : value,
      }));
    }
  };
  return { handleChange };
}

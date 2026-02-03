export const formatPhoneNumber = (text: string): string => {
  const cleaned = text.replace(/\D/g, '');
  const limited = cleaned.substring(0, 10);

  let formatted = limited;
  if (limited.length > 0) {
    formatted = `(${limited.substring(0, 3)}`;
    if (limited.length > 3) {
      formatted += `) ${limited.substring(3, 6)}`;
    }
    if (limited.length > 6) {
      formatted += ` ${limited.substring(6, 10)}`;
    }
  }

  return formatted;
};

export function createPhoneInputHandler(
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => void,
) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(event.target.value);

    const syntheticEvent = {
      ...event,
      target: {
        ...event.target,
        value: formatted,
        name: event.target.name,
        type: 'tel',
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange(syntheticEvent);
  };
}

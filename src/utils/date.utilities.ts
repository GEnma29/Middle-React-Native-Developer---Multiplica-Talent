export const getMonth = (month: number | string) => {
  const MONTH = {
    '0': 'Enero',
    '1': 'Febrero',
    '2': 'Marzo',
    '3': 'Abril',
    '4': 'Mayo',
    '5': 'Junio',
    '6': 'Julio',
    '7': 'Agosto',
    '8': 'Septiembre',
    '9': 'Octubre',
    '10': 'Noviembre',
    '11': 'Diciembre',
  };
  return MONTH[month as keyof typeof MONTH] || MONTH[0];
};

export const getParamsDate = (date: string) => {
  const fullDate = new Date(date);
  const day = fullDate.getDay();
  const month = getMonth(fullDate.getMonth());
  const year = fullDate.getFullYear();
  return {
    day,
    month,
    year,
  };
};

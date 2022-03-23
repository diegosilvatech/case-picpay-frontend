export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

export const convertToDecial = (value: number) => {
  return value / 100;
};

export const removeCurrencyMask = (value: string) => {
  return Number(value.replace(/[^0-9.-]+/g, ''));
};

export const applyCurrencyMask = (value: string) => {
  const unformattedValue = removeCurrencyMask(value);
  const decimalUnformattedValue = convertToDecial(unformattedValue);

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(decimalUnformattedValue);
};

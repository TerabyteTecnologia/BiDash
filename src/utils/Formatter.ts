export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const decimalToPercentage = (decimalNumber: number) => {
  const percentage = decimalNumber / 100;
  const formattedPercentage = percentage * 100;

  return `${formattedPercentage.toFixed(2)}%`;
};

export const currencyStringToNumber = (currencyString: string) => {
  const numericString = currencyString.replace(/[^0-9-]/g, '');
  const numericValue = parseFloat(numericString) / 100;

  return numericValue;
};
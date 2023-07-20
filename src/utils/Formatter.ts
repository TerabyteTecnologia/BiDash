export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export const decimalToPercentage = (decimalNumber: number) => {
  const percentage = decimalNumber * 100;
  return `${percentage.toFixed(2)}%`;
};
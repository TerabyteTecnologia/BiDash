import { currencyStringToNumber } from "./Formatter";

export const validVariant = (value: string) => {
  if (currencyStringToNumber(value) >= 0)
    return "green";

  return "red";
};

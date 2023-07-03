import { InputHTMLAttributes, useCallback, forwardRef } from "react";

import { currency, phone } from "./masks";

import { BaseInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  mask?: "phone" | "currency";
}

export const Input = forwardRef((propsDefault: InputProps, ref: any) => {

  const { id, label, mask, ...rest } = propsDefault;

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "phone")
        phone(e);

      if (mask === "currency")
        currency(e);
    },
    [mask]
  );

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <BaseInput
        id={id}
        onKeyUp={handleKeyUp}
        {...rest}
        ref={ref}
      />
    </>
  );
});
import { useCallback, forwardRef, useState } from "react";
import { TbEyeClosed, TbEyeCheck } from "react-icons/tb";

import { currency, phone } from "./masks";
import { InputProps } from "./interface";
import { Visibility } from "../Visibility";

import { BaseInput, ContainerButtonDefault } from "./styles";

export const Input = forwardRef((propsDefault: InputProps, ref: any) => {

  const { id, label, mask, isLogin = false, ...rest } = propsDefault;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "phone")
        phone(e);

      if (mask === "currency")
        currency(e);
    },
    [mask]
  );

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ContainerButtonDefault>
      <label htmlFor={id}>{label}</label>

      <BaseInput
        id={id}
        onKeyUp={handleKeyUp}
        {...rest}
        {...(showPassword && { type: "text" })}
        ref={ref}
      />

      <Visibility visible={isLogin}>
        <button onClick={() => handleTogglePassword()} role="button" type="button">
          {showPassword ? <TbEyeCheck /> : <TbEyeClosed />}
        </button>
      </Visibility>
    </ContainerButtonDefault>
  );
});
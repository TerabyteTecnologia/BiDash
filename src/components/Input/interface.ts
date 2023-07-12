import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  mask?: "phone" | "currency";
  isLogin?: boolean;
}

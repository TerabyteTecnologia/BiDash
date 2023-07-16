export interface DataPaymentsProps {
  balance: string;
  deposit: string;
  withdrawal: string;
}

export interface PaymentsTableFilterProps {
  id: number,
  name: string,
  email: string,
  phone: string,
  state: string,
  age: string | number,
  registration: string;
}
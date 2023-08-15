import {
  createContext,
  useContext,
  useState
} from 'react';

import {
  DataPaymentsProps,
  InitialOperation,
  PaymentContextValue,
  PaymentProviderType
} from './interface';

const PaymentContext = createContext({} as PaymentContextValue);

export function PaymentContextProvider({ children }: PaymentProviderType) {

  const [dataPayments, setDataPayments] = useState<DataPaymentsProps>(InitialOperation);

  const contextValue: PaymentContextValue = {
    setDataPayments,
    dataPayments
  };

  return (
    <PaymentContext.Provider
      value={contextValue}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => {
  return useContext(PaymentContext);
};
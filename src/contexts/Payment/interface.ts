import { Dispatch, SetStateAction } from "react";

export interface PaymentContextValue {
  setDataPayments: Dispatch<SetStateAction<DataPaymentsProps>>;
  dataPayments: DataPaymentsProps;
}

export interface PaymentProviderType {
  children: React.ReactNode;
}

export const InitialOperation = {
  balance: "R$ 0",
  deposit: "R$ 0",
  operations: {
    DEPOSIT: {
      COMPLETED: 0,
      FAILED: 0,
      PROCESSING: 0
    },
    WITHDRAWAL: {
      COMPLETED: 0,
      FAILED: 0,
      PROCESSING: 0
    }
  },
  withdrawal: "R$ 0"
};

export interface DataPaymentsProps {
  balance: string;
  deposit: string;
  withdrawal: string;
  operations: OperationsProps;
}

export interface OperationsProps {
  DEPOSIT: OperationsItemsProps;
  WITHDRAWAL: OperationsItemsProps;
}

export interface OperationsItemsProps {
  COMPLETED: number;
  FAILED: number;
  PROCESSING: number;
}


export const InitialOperation = {
  balance: 0,
  deposit: 0,
  operations: {
    DEPOSIT: {
      COMPLETED: "R$ 0",
      FAILED: "R$ 0",
      PROCESSING: "R$ 0"
    },
    WITHDRAWAL: {
      COMPLETED: "R$ 0",
      FAILED: "R$ 0",
      PROCESSING: "R$ 0"
    }
  },
  withdrawal: 0
};

export interface DataPaymentsProps {
  balance: number;
  deposit: number;
  withdrawal: number;
  operations: OperationsProps;
}

export interface OperationsProps {
  DEPOSIT: OperationsItemsProps;
  WITHDRAWAL: OperationsItemsProps;
}

export interface OperationsItemsProps {
  COMPLETED: string;
  FAILED: string;
  PROCESSING: string;
}

export interface PaymentsTableFilterProps {
  id: number;
  date: string;
  operation_type: string;
  status: string;
  total: string;
  quantity: number;
}
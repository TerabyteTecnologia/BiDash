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

export interface PaymentsTableFilterProps {
  id: number;
  date: string;
  operation_type: string;
  status: string;
  total: string;
  quantity: number;
}
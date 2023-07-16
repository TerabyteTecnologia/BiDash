
import { ChangeEvent } from 'react';
import { DateFilterProps } from '../../components/FilterSearch/interface';

export interface FilterSearchProps {
  handleDateFirst: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDateEnd: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlurCalcDataFrom: () => void;
  onBlurCalcDataTo: () => void;
  dateFilter: DateFilterProps;
  handleToggleIsTest: () => void;
  isTest: boolean;
}

export interface FilterSearchProviderType {
  children: React.ReactNode;
}

export interface LoginProps {
  email: string;
  senha: string;
}
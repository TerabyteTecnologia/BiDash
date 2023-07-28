import { Dispatch, SetStateAction } from "react";

import { addMonths, differenceInDays, format, isBefore, parseISO, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export const calculateAge = (dateOfBirth: any): number => {

  const currentDate = new Date();
  const age = currentDate.getFullYear() - dateOfBirth.getFullYear();

  const hasBirthdayPassed =
    currentDate.getMonth() < dateOfBirth.getMonth() ||
    (currentDate.getMonth() === dateOfBirth.getMonth() &&
      currentDate.getDate() < dateOfBirth.getDate());

  if (hasBirthdayPassed) {
    return age - 1;
  }

  return age;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDay = date.getUTCDate().toString().padStart(2, '0');
  const formattedMonth = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const formattedYear = date.getUTCFullYear().toString();
  return `${formattedDay}/${formattedMonth}/${formattedYear}`;
};

export const getMinDateInSearchFilter = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  return currentDate;
};

export const getMaxDateInSearchFilter = () => {
  return new Date(new Date().toDateString());
};

export const DateOutputStr = (dateStr?: string, patternStr?: string) => {
  if (!dateStr) return '';
  const pattern = patternStr || 'dd/MM/yyyy HH:mm';
  return format(parseISO(dateStr), pattern, { locale: ptBR });
};

export const calcDataTo = (period: any, newDate: string, setPeriod: Dispatch<SetStateAction<any>>) => {
  const intervalDates = Math.abs(differenceInDays(new Date(period.from), new Date(period.to)));

  if (intervalDates > 90) {
    if (newDate === 'end') {
      const endDate = addMonths(new Date(period.from), 3);
      const compareDate = isBefore(endDate, new Date());

      if (compareDate) {
        setPeriod({ ...period, to: DateOutputStr(endDate.toISOString(), 'yyyy-MM-dd') });
      } else {
        setPeriod({ ...period, to: DateOutputStr(new Date().toISOString(), 'yyyy-MM-dd') });
      }
    }
  }
};

export const calcDataFrom = (period: any, newDate: string, setPeriod: Dispatch<SetStateAction<any>>) => {
  const intervalDates = Math.abs(differenceInDays(new Date(period.from), new Date(period.to)));

  if (intervalDates > 365) {
    if (newDate === 'start') {
      const startDate = subMonths(new Date(period.to), 12);

      setPeriod({ ...period, from: DateOutputStr(startDate.toISOString(), 'yyyy-MM-dd') });
    }
  }
};

export function calculateDateDifference(fromDate: string, toDate: string): number {
  const oneDay = 24 * 60 * 60 * 1000; // Milissegundos em um dia
  const startDate = new Date(fromDate) as any;
  const endDate = new Date(toDate) as any;
  const diffInDays = Math.round(Math.abs((startDate - endDate) / oneDay));
  return diffInDays;
}
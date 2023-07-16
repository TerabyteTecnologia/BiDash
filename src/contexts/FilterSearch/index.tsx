import {
  createContext,
  useContext,
  useState,
  ChangeEvent
} from 'react';

import {
  DateOutputStr,
  calcDataFrom,
  calcDataTo,
  getMaxDateInSearchFilter,
  getMinDateInSearchFilter
} from '../../utils/Date';

import { DateFilterProps } from '../../components/FilterSearch/interface';
import { FilterSearchProps, FilterSearchProviderType } from './interface';

const FilterSearchContext = createContext({} as FilterSearchProps);

export function FilterSearchContextProvider({ children }: FilterSearchProviderType) {

  const [dateFilter, setDateFilter] = useState<DateFilterProps>({
    from: getMinDateInSearchFilter() ?
      DateOutputStr(getMinDateInSearchFilter().toISOString(), 'yyyy-MM-dd') : '',
    to: getMaxDateInSearchFilter() ?
      DateOutputStr(getMaxDateInSearchFilter().toISOString(), 'yyyy-MM-dd') : '',
  });

  const [isTest, setIsTest] = useState<boolean>(false);

  const handleToggleIsTest = () => {
    setIsTest(!isTest);
  };

  const handleDateFirst = (e: ChangeEvent<HTMLInputElement>) => {
    setDateFilter({ ...dateFilter, from: e.target.value });
  };

  const handleDateEnd = (e: ChangeEvent<HTMLInputElement>) => {
    setDateFilter({ ...dateFilter, to: e.target.value });
  };

  const onBlurCalcDataFrom = () => {
    calcDataFrom(dateFilter, "start", setDateFilter);
  };

  const onBlurCalcDataTo = () => {
    calcDataTo(dateFilter, "end", setDateFilter);
  };

  return (
    <FilterSearchContext.Provider
      value={{
        handleDateFirst: (e: ChangeEvent<HTMLInputElement>) => handleDateFirst(e),
        handleDateEnd: (e: ChangeEvent<HTMLInputElement>) => handleDateEnd(e),
        onBlurCalcDataFrom: () => onBlurCalcDataFrom(),
        onBlurCalcDataTo: () => onBlurCalcDataTo(),
        dateFilter: dateFilter,

        handleToggleIsTest: () => handleToggleIsTest(),
        isTest: isTest
      }}
    >
      {children}
    </FilterSearchContext.Provider>
  );
}

export const useFilterSearch = () => {
  return useContext(FilterSearchContext);
};
import {
  createContext,
  useContext,
  useState
} from 'react';

import {
  SportsBooksProviderType,
  SportsBooksContextValue,
  PopularGamesProps,
  DataSportsBookProps
} from './interface';

const SportsBooksContext = createContext({} as SportsBooksContextValue);

export function SportsBooksContextProvider({ children }: SportsBooksProviderType) {

  const [dataSportsBooks, setDataSportsBooks] = useState<DataSportsBookProps>({
    totalAposta: "R$ 0",
    totalReceitaBruta: "R$ 0",
    totalPagamento: "R$ 0",
    quantidadeJogadoresUnicos: "0"
  });

  const [top10PopularGamesSportBook, setTop10PopularGamesSportBook] = useState<PopularGamesProps[]>([]);
  const [top10ProfitableGamesSportBook, setTop10ProfitableGamesSportBook] = useState<PopularGamesProps[]>([]);
  const [top10DamageGamesSportBook, setTop10DamageGamesSportBook] = useState<PopularGamesProps[]>([]);

  const contextValue: SportsBooksContextValue = {
    setDataSportsBooks,
    setTop10PopularGamesSportBook,
    setTop10ProfitableGamesSportBook,
    setTop10DamageGamesSportBook,

    dataSportsBooks,
    top10PopularGamesSportBook,
    top10ProfitableGamesSportBook,
    top10DamageGamesSportBook
  };

  return (
    <SportsBooksContext.Provider
      value={contextValue}
    >
      {children}
    </SportsBooksContext.Provider>
  );
}

export const useSportsBooks = () => {
  return useContext(SportsBooksContext);
};
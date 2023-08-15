import {
  createContext,
  useContext,
  useState
} from 'react';

import {
  DataCasinoProps,
  CasinoProviderType,
  CasinoContextValue,
  PopularGamesProps
} from './interface';

const CasinoContext = createContext({} as CasinoContextValue);

export function CasinoContextProvider({ children }: CasinoProviderType) {

  const [dataCasinos, setDataCasinos] = useState<DataCasinoProps>({
    total_turnover: "R$ 0",
    total_profit: "R$ 0",
    profit_percent: "% 0",
    total_players: 0
  });

  const [top10PopularGames, setTop10PopularGames] = useState<PopularGamesProps[]>([]);
  const [top10ProfitableGames, setTop10ProfitableGames] = useState<PopularGamesProps[]>([]);
  const [top10DamageGames, setTop10DamageGames] = useState<PopularGamesProps[]>([]);

  const contextValue: CasinoContextValue = {
    setDataCasinos,
    setTop10PopularGames,
    setTop10ProfitableGames,
    setTop10DamageGames,

    dataCasinos,
    top10PopularGames,
    top10ProfitableGames,
    top10DamageGames
  };

  return (
    <CasinoContext.Provider
      value={contextValue}
    >
      {children}
    </CasinoContext.Provider>
  );
}

export const useCasino = () => {
  return useContext(CasinoContext);
};
import { Dispatch, SetStateAction } from "react";

export interface CasinoContextValue {
  setDataCasinos: Dispatch<SetStateAction<DataCasinoProps>>;
  setTop10PopularGames: Dispatch<SetStateAction<PopularGamesProps[]>>;
  setTop10ProfitableGames: Dispatch<SetStateAction<PopularGamesProps[]>>;
  setTop10DamageGames: Dispatch<SetStateAction<PopularGamesProps[]>>;

  dataCasinos: DataCasinoProps;
  top10PopularGames: PopularGamesProps[];
  top10ProfitableGames: PopularGamesProps[];
  top10DamageGames: PopularGamesProps[];
}

export interface DataCasinoProps {
  total_turnover: string,
  total_profit: string,
  profit_percent: string,
  total_players: number;
}

export interface CasinoProviderType {
  children: React.ReactNode;
}

export interface PopularGamesProps {
  jogo: string;
  quantidade: number;
}
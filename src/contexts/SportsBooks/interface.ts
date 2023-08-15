import { Dispatch, SetStateAction } from "react";

export interface SportsBooksContextValue {
  setDataSportsBooks: Dispatch<SetStateAction<DataSportsBookProps>>;
  setTop10PopularGamesSportBook: Dispatch<SetStateAction<PopularGamesProps[]>>;
  setTop10ProfitableGamesSportBook: Dispatch<SetStateAction<PopularGamesProps[]>>;
  setTop10DamageGamesSportBook: Dispatch<SetStateAction<PopularGamesProps[]>>;

  dataSportsBooks: DataSportsBookProps;
  top10PopularGamesSportBook: PopularGamesProps[];
  top10ProfitableGamesSportBook: PopularGamesProps[];
  top10DamageGamesSportBook: PopularGamesProps[];
}

export interface DataSportsBookProps {
  totalAposta: string;
  totalReceitaBruta: string;
  totalPagamento: string;
  quantidadeJogadoresUnicos: string;
}

export interface SportsBooksProviderType {
  children: React.ReactNode;
}

export interface PopularGamesProps {
  jogo: string;
  quantidade: number;
}
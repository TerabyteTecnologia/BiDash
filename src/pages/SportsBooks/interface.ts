export interface DataSportsBookProps {
  totalAposta: string,
  totalReceitaBruta: string,
  totalPagamento: string,
  quantidadeJogadoresUnicos: string;
}

export interface SportsBooksTableFilterProps {
  category: string,
  tournament_name: string,
  sport_name: string,
  day: string,
  aposta: string,
  receitaBruta: string,
  pagamento: string;
}

export interface PopularGamesProps {
  jogo: string;
  quantidade: number;
}
export interface DataCasinoProps {
  total_turnover: string,
  total_profit: string,
  profit_percent: string,
  total_players: number;
}

export interface CasinoTableFilterProps {
  name_player: string,
  day: string,
  turnover: string,
  winnings: string,
  profit: string,
  profit_percent: string,
  qtd_player: number;
}

export interface PopularGamesProps {
  jogo: string;
  quantidade: number;
}
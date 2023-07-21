export interface DataSportsBookProps {
  total_turnover: string,
  total_profit: string,
  profit_percent: string,
  total_players: string;
}

export interface SportsBooksTableFilterProps {
  name_player: string,
  day: string,
  turnover: string,
  winnings: string,
  profit: string,
  profit_percent: string,
  qtd_player: number;
}
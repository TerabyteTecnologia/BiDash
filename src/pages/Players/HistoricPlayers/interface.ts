export interface PlayerFilterHistoricProps {
  name: string;
  btag: string;
  is_test_client: string;
  registration_date: string;
  profit: string;
}

export interface ValueFilterHistoricProps {
  deposit: string;
  whtidrawal: string;
  totalCasino: string;
  profit: string;
}

export interface SportBookPlayersFilterProps {
  category: string;
  tournament_name: string;
  sport_name: string;
  date: string;
  turnover: string;
  gross_revenue: string;
  payout: string;
}

export interface CasinoPlayersFilterProps {
  name: string;
  day: string;
  turnover: string;
  winnings: string;
  profit: string;
  profitPercent: string;
}
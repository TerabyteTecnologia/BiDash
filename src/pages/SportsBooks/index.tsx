import { useState, useEffect } from 'react';

import { Top10SecondTemplateComponent } from '../../components/Top10SecondTemplate';
import { Top10FirstTemplateComponent } from '../../components/Top10FirstTemplate';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';

import { MdFileUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import { DataSportsBooksProps, PopularGamesProps, SportsBooksTableFilterProps } from './interface';
import { getReportSportsBooks } from '../../services/global/endPoints';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { useToast } from '../../hooks/useToast';

import { formatDate } from '../../utils/Date';
import { decimalToPercentage, formatCurrency } from '../../utils/Formatter';

import {
  ContainerCasino,
  ContentSummaryCasino,
  ContentTableCasino,
  FlexHomeCasino,
  ContentCasino,
  OperationFlexCasino,
  ColumnSummaryCasino
} from "./styles";

export function SportsBooks() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter, isTest } = useFilterSearch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);


  const [dataCasinos, setDataCasinos] = useState<DataSportsBooksProps>({
    total_turnover: "R$ 0",
    total_profit: "R$ 0",
    profit_percent: "% 0",
    total_players: 0
  });

  const [playerFilterDate, setPlayerFilterDate] = useState<SportsBooksTableFilterProps[]>([]);

  const [top10PopularGames, setTop10PopularGames] = useState<PopularGamesProps[]>([]);
  const [top10ProfitableGames, setTop10ProfitableGames] = useState<PopularGamesProps[]>([]);
  const [top10DamageGames, setTop10DamageGames] = useState<PopularGamesProps[]>([]);



  useEffect(() => {
    getLoadDataSportsBooks();
  }, []);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataSportsBooks();
  };

  const getLoadDataSportsBooks = async () => {
    setPlayerFilterDate([]);

    const filter = {
      dataStart: dateFilter.from,
      dataFinal: dateFilter.to,
      isActive: isTest
    };

    getReportSportsBooks(filter).then(result => {

      if (result.data) {

        result.data.recordsFilter.map((filter: any) => {
          const paymentObj: SportsBooksTableFilterProps = {
            name_player: filter.resultgame.name,
            day: formatDate(filter.date),
            turnover: filter.turnover,
            winnings: filter.winnings,
            // profit: filter.total,
            // quantity: filter.quantity,
          };

          setPlayerFilterDate((prevData) => [...prevData, paymentObj]);
        });

        setTop10PopularGames(result.data.popularGames.slice(0, 10));
        setTop10ProfitableGames(result.data.resultadosPositivos.slice(0, 10));
        setTop10DamageGames(result.data.resultadosNegativos.slice(0, 10));

        setDataCasinos({
          total_turnover: formatCurrency(result.data.totalTurnover as number),
          total_profit: formatCurrency(result.data.profit as number),
          profit_percent: decimalToPercentage(result.data.profitPercent),
          total_players: result.data.totalPlayers
        });

        setTotalResults(result.data.recordsFilter.length);
      }
    });
  };

  return (
    <ContainerCasino>
      <ContentCasino>

        <FilterSearch handleSearch={handleSearchGraphic} showPlayerTest />

        <ContentSummaryCasino>
          <Summary
            variant="blue"
            text="Total Turnover"
            value={dataCasinos.total_turnover}
            Icon={<MdFileUpload size={32} color="#229ED9" />}
          />

          <Summary
            variant="green"
            text="Total Profit"
            value={dataCasinos.total_profit}
            Icon={<MdFileUpload size={32} color="#448919" />}
          />

          <ColumnSummaryCasino>
            <Summary
              variant="green"
              text="Profit %"
              value={dataCasinos.profit_percent}
            />

            <Summary
              variant="blue"
              text="Total Jogadores"
              value={dataCasinos.total_players}
            />
          </ColumnSummaryCasino>
        </ContentSummaryCasino>

        <OperationFlexCasino>
          <Top10FirstTemplateComponent data={top10PopularGames} />
        </OperationFlexCasino>

        <OperationFlexCasino>
          <Top10SecondTemplateComponent
            IconTitle={<MdFileUpload size={32} color="#9FE872" />}
            title="Top 10 Mais Lucrativos"
            data={top10ProfitableGames}
          />
          <Top10SecondTemplateComponent
            IconTitle={<IoMdDownload size={32} color="#E85353" />}
            title="Top 10 Mais Prejuízos"
            data={top10DamageGames}
          />
        </OperationFlexCasino>

        <FlexHomeCasino>
          <ContentTableCasino>
            <p>Resultado por Jogo</p>

            <TableRows
              headers={{
                name_player: "Nome do Jogo",
                day: "Data Registro",
                turnover: "Turnover",
                winnings: "Winnings",
                // profit: "Profit",
                // profit_percent: "Profit %",
                // qtd_player: "Qtd. Jogadores"
              }}
              data={playerFilterDate}
              currentPage={currentPage}
              rowsPerPage={rowsPerPage}
            />

            <Pagination
              totalCountOfRegisters={totalResults}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </ContentTableCasino>
        </FlexHomeCasino>
      </ContentCasino>
    </ContainerCasino>

  );
}
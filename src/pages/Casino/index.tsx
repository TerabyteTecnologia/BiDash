import { useState, useEffect } from 'react';

import { Top10SecondTemplateComponent } from '../../components/Top10SecondTemplate';
import { Top10FirstTemplateComponent } from '../../components/Top10FirstTemplate';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';
import { Visibility } from '../../components/Visibility';
import { Spinner } from '../../components/Spinner';

import { MdFileUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import { getReportCasino } from '../../services/global/endPoints';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { useToast } from '../../hooks/useToast';

import { validVariant } from '../../utils/Validation';
import { formatDate } from '../../utils/Date';
import { currencyStringToNumber, decimalToPercentage, formatCurrency } from '../../utils/Formatter';
import { CasinoTableFilterProps, DataCasinoProps, PopularGamesProps } from './interface';

import {
  ContainerCasino,
  ContentSummaryCasino,
  ContentTableCasino,
  FlexHomeCasino,
  ContentCasino,
  OperationFlexCasino,
  ColumnSummaryCasino,
  DivSpinnerCasino
} from "./styles";

export function Casino() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter, isTest } = useFilterSearch();

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const [dataCasinos, setDataCasinos] = useState<DataCasinoProps>({
    total_turnover: "R$ 0",
    total_profit: "R$ 0",
    profit_percent: "% 0",
    total_players: 0
  });

  const [playerFilterDate, setPlayerFilterDate] = useState<CasinoTableFilterProps[]>([]);

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
    setLoading(true);
    setTotalResults(0);

    const filter = {
      dataStart: dateFilter.from,
      dataFinal: dateFilter.to,
      isActive: isTest
    };

    getReportCasino(filter).then(result => {

      if (result.data) {

        result.data.recordsFilter.map((filter: any) => {
          const paymentObj: CasinoTableFilterProps = {
            name_player: filter.resultgame.name,
            day: formatDate(filter.day),
            turnover: formatCurrency(filter.totalTurnover as number),
            winnings: formatCurrency(filter.totalWinnings as number),
            profit: formatCurrency(filter.profit as number),
            profit_percent: decimalToPercentage(filter.profitPercent),
            qtd_player: filter.qtdJogadores,
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
        setLoading(false);
      }
    });
  };

  return (
    <ContainerCasino>
      <ContentCasino>
        <FilterSearch handleSearch={handleSearchGraphic} showPlayerTest />

        <Visibility visible={loading}>
          <DivSpinnerCasino>
            <Spinner />
          </DivSpinnerCasino>
        </Visibility>

        <Visibility visible={!loading}>
          <ContentSummaryCasino>
            <Summary
              variant={currencyStringToNumber(dataCasinos.total_turnover) >= 0 ? "blue" : "red"}
              text="Total Turnover"
              value={dataCasinos.total_turnover}
              Icon={
                currencyStringToNumber(dataCasinos.total_turnover) >= 0 ?
                  <MdFileUpload size={32} color="#229ED9" /> :
                  <IoMdDownload size={32} color="#B20D0D" />
              }
            />

            <Summary
              variant={validVariant((dataCasinos.total_profit))}
              text="Total Profit"
              value={dataCasinos.total_profit}
              Icon={
                currencyStringToNumber(dataCasinos.total_profit) >= 0 ?
                  <MdFileUpload size={32} color="#448919" /> :
                  <IoMdDownload size={32} color="#B20D0D" />
              }
            />

            <ColumnSummaryCasino>
              <Summary
                variant={currencyStringToNumber(dataCasinos.profit_percent) >= 0 ? "blue" : "red"}
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
                  profit: "Profit",
                  profit_percent: "Profit %",
                  qtd_player: "Qtd. Jogadores"
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
        </Visibility>
      </ContentCasino>
    </ContainerCasino >

  );
}
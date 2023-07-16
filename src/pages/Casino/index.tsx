import { useState, useEffect } from 'react';

import { Top10SecondTemplateComponent } from '../../components/Top10SecondTemplate';
import { Top10FirstTemplateComponent } from '../../components/Top10FirstTemplate';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';

import { MdFileUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import { CasinosTableFilterProps, DataCasinosProps } from './interface';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { useToast } from '../../hooks/useToast';

import {
  ContainerCasino,
  ContentSummaryCasino,
  ContentTableCasino,
  FlexHomeCasino,
  ContentCasino,
  OperationFlexCasino,
  ColumnSummaryCasino
} from "./styles";

export function Casino() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter } = useFilterSearch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    getLoadDataCasino();
  }, []);

  const [dataCasinos, setDataCasinos] = useState<DataCasinosProps>({
    total_turnover: "R$ 1.336.872,10",
    total_profit: "R$ 67.621,74",
    profit_percent: "5%",
    total_players: "14.000"
  });

  const [playerFilterDate, setPlayerFilterDate] = useState<CasinosTableFilterProps[]>([]);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataCasino();
  };

  const getLoadDataCasino = async () => {
    setPlayerFilterDate([]);

    setDataCasinos({
      total_turnover: "R$ 1.336.872,10",
      total_profit: "R$ 67.621,74",
      profit_percent: "5%",
      total_players: "14.000"
    });


    setTotalResults(0);
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
              text="Saque"
              value={dataCasinos.profit_percent}
            />

            <Summary
              variant="blue"
              text="Saque"
              value={dataCasinos.total_players}
            />
          </ColumnSummaryCasino>
        </ContentSummaryCasino>

        <OperationFlexCasino>
          <Top10FirstTemplateComponent />
        </OperationFlexCasino>

        <OperationFlexCasino>
          <Top10SecondTemplateComponent
            IconTitle={<MdFileUpload size={32} color="#E85353" />}
            title="Top 10 Mais Lucrativos"
          />
          <Top10SecondTemplateComponent
            IconTitle={<IoMdDownload size={32} color="#9FE872" />}
            title="Top 10 Mais Prejuízos"
          />
        </OperationFlexCasino>

        <FlexHomeCasino>
          <ContentTableCasino>
            <p>Resultado por Jogo</p>

            <TableRows
              headers={{
                name_player: "Nome do Jogo",
                day: "Day",
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
      </ContentCasino>
    </ContainerCasino>

  );
}
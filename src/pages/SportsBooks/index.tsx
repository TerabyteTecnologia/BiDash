import { useState, useEffect } from 'react';

import { Top10SecondTemplateComponent } from '../../components/Top10SecondTemplate';
import { Top10FirstTemplateComponent } from '../../components/Top10FirstTemplate';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';

import { MdFileUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";


import { useToast } from '../../hooks/useToast';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { getReportSportsBooks } from '../../services/global/endPoints';

import { formatDate } from '../../utils/Date';
import { formatCurrency } from '../../utils/Formatter';

import {
  SportsBooksTableFilterProps,
  DataSportsBookProps,
  PopularGamesProps
} from './interface';

import {
  ColumnSummaryCasino,
  ContainerCasino,
  ContentCasino,
  ContentSummaryCasino,
  ContentTableCasino,
  FlexHomeCasino,
  OperationFlexCasino
} from './styles';

export function SportsBooks() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter, isTest } = useFilterSearch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const [playerFilterDate, setPlayerFilterDate] = useState<SportsBooksTableFilterProps[]>([]);

  const [top10PopularGames, setTop10PopularGames] = useState<PopularGamesProps[]>([]);
  const [top10ProfitableGames, setTop10ProfitableGames] = useState<PopularGamesProps[]>([]);
  const [top10DamageGames, setTop10DamageGames] = useState<PopularGamesProps[]>([]);

  const [dataCasinos, setDataCasinos] = useState<DataSportsBookProps>({
    totalAposta: "R$ 0",
    totalReceitaBruta: "R$ 0",
    totalPagamento: "R$ 0",
    quantidadeJogadoresUnicos: "0"
  });

  useEffect(() => {
    getLoadDataCasino();
  }, []);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataCasino();
  };

  const getLoadDataCasino = async () => {
    setPlayerFilterDate([]);

    const filter = {
      dataStart: dateFilter.from,
      dataFinal: dateFilter.to,
      isActive: isTest
    };

    getReportSportsBooks(filter).then(result => {

      if (result.data) {
        result.data.groupedByDayAndResultGame.map((filter: any) => {

          const paymentObj: SportsBooksTableFilterProps = {
            category: filter.category,
            tournament_name: filter.tournament_name,
            sport_name: filter.sport_name,
            day: formatDate(filter.day),
            aposta: formatCurrency(filter.aposta as number),
            receitaBruta: filter.receitaBruta != null ? formatCurrency(filter.receitaBruta as number) : "R$ 0",
            pagamento: formatCurrency(filter.pagamento as number)
          };

          setPlayerFilterDate((prevData) => [...prevData, paymentObj]);
        });

        setTop10PopularGames(result.data.jogosContagemOrdenado.slice(0, 10));
        setTop10ProfitableGames(result.data.resultadosPositivos.slice(0, 10));
        setTop10DamageGames(result.data.resultadosNegativos.slice(0, 10));

        setDataCasinos({
          totalAposta: formatCurrency(result.data.totalAposta as number),
          totalReceitaBruta: formatCurrency(result.data.totalReceitaBruta as number),
          totalPagamento: formatCurrency(result.data.totalPagamento as number),
          quantidadeJogadoresUnicos: result.data.quantidadeJogadoresUnicos
        });

        setTotalResults(result.data.groupedByDayAndResultGame.length);
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
            text="Total em Apostas"
            value={dataCasinos.totalAposta}
            Icon={<MdFileUpload size={32} color="#229ED9" />}
          />

          <Summary
            variant="green"
            text="Receita Bruta Total"
            value={dataCasinos.totalReceitaBruta}
            Icon={<MdFileUpload size={32} color="#448919" />}
          />

          <ColumnSummaryCasino>
            <Summary
              variant="green"
              text="Total em pagamentos"
              value={dataCasinos.totalPagamento}
            />

            <Summary
              variant="blue"
              text="Total Jogadores"
              value={dataCasinos.quantidadeJogadoresUnicos}
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
                category: "Categoria",
                tournament_name: "Nome do torneio",
                sport_name: "Nome do esporte",
                day: "Data",
                aposta: "Aposta",
                receitaBruta: "Receita Bruta",
                pagamento: "Pagamento"
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
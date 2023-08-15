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

import { useToast } from '../../hooks/useToast';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { SportsBooksContextProvider, useSportsBooks } from '../../contexts/SportsBooks';
import { getReportSportsBooks } from '../../services/global/endPoints';

import { formatDate } from '../../utils/Date';
import { validVariant } from '../../utils/Validation';
import { currencyStringToNumber, formatCurrency } from '../../utils/Formatter';

import { SportsBooksTableFilterProps } from './interface';

import {
  ColumnSummarySportBook,
  ContainerSportBook,
  ContentSportBook,
  ContentSummarySportBook,
  ContentTableSportBook,
  DivSpinnerSportsBook,
  FlexHomeSportBook,
  OperationFlexSportBook
} from './styles';

export function SportsBooksMain() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const {
    dataSportsBooks,
    setDataSportsBooks,
    setTop10DamageGamesSportBook,
    setTop10PopularGamesSportBook,
    setTop10ProfitableGamesSportBook,
    top10DamageGamesSportBook,
    top10PopularGamesSportBook,
    top10ProfitableGamesSportBook
  } = useSportsBooks();

  const { dateFilter, isTest } = useFilterSearch();

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const [playerFilterDate, setPlayerFilterDate] = useState<SportsBooksTableFilterProps[]>([]);

  console.log("dataSportsBooks", dataSportsBooks);
  useEffect(() => {
    // getLoadDataSportsBook();
  }, []);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataSportsBook();
  };

  const getLoadDataSportsBook = async () => {
    setPlayerFilterDate([]);
    setLoading(true);
    setTotalResults(0);

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
        console.log(result.data);
        setTop10PopularGamesSportBook(result.data.jogosContagemOrdenado.slice(0, 10));
        setTop10ProfitableGamesSportBook(result.data.resultadosPositivos.slice(0, 10));
        setTop10DamageGamesSportBook(result.data.resultadosNegativos.slice(0, 10));

        setDataSportsBooks({
          totalAposta: formatCurrency(result.data.totalAposta as number),
          totalReceitaBruta: formatCurrency(result.data.totalReceitaBruta as number),
          totalPagamento: formatCurrency(result.data.totalPagamento as number),
          quantidadeJogadoresUnicos: result.data.quantidadeJogadoresUnicos
        });

        setTotalResults(result.data.groupedByDayAndResultGame.length);
        setLoading(false);
      }
    });
  };

  return (
    <ContainerSportBook>
      <ContentSportBook>

        <FilterSearch handleSearch={handleSearchGraphic} showPlayerTest />

        <Visibility visible={loading}>
          <DivSpinnerSportsBook>
            <Spinner />
          </DivSpinnerSportsBook>
        </Visibility>

        <Visibility visible={!loading}>
          <ContentSummarySportBook>
            <Summary
              variant="blue"
              text="Total em Apostas"
              value={dataSportsBooks.totalAposta}
              Icon={
                currencyStringToNumber(dataSportsBooks?.totalAposta) >= 0 ?
                  <MdFileUpload size={32} color="#229ED9" /> :
                  <MdFileUpload size={32} color="#B20D0D" />
              }
            />

            <Summary
              variant="green"
              text="Receita Bruta Total"
              value={dataSportsBooks.totalReceitaBruta}
              Icon={
                currencyStringToNumber(dataSportsBooks.totalReceitaBruta) >= 0 ?
                  <MdFileUpload size={32} color="#448919" /> :
                  <MdFileUpload size={32} color="#B20D0D" />
              }
            />

            <ColumnSummarySportBook>
              <Summary
                variant={validVariant((dataSportsBooks.totalPagamento))}
                text="Total em pagamentos"
                value={dataSportsBooks.totalPagamento}
              />

              <Summary
                variant="blue"
                text="Total Jogadores"
                value={dataSportsBooks.quantidadeJogadoresUnicos}
              />
            </ColumnSummarySportBook>
          </ContentSummarySportBook>

          <OperationFlexSportBook>
            <Top10FirstTemplateComponent data={top10PopularGamesSportBook} />
          </OperationFlexSportBook>

          <OperationFlexSportBook>
            <Top10SecondTemplateComponent
              IconTitle={<MdFileUpload size={32} color="#9FE872" />}
              title="Top 10 Mais Lucrativos"
              data={top10ProfitableGamesSportBook}
            />
            <Top10SecondTemplateComponent
              IconTitle={<IoMdDownload size={32} color="#E85353" />}
              title="Top 10 Mais Prejuízos"
              data={top10DamageGamesSportBook}
            />
          </OperationFlexSportBook>

          <FlexHomeSportBook>
            <ContentTableSportBook>
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
            </ContentTableSportBook>
          </FlexHomeSportBook>
        </Visibility>

      </ContentSportBook>
    </ContainerSportBook>

  );
}

export function SportsBooks() {
  return (
    <SportsBooksContextProvider>
      <SportsBooksMain />
    </SportsBooksContextProvider>
  );
}
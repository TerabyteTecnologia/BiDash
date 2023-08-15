import { useState, useEffect, useRef } from 'react';

import { TiGroup } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaFilePdf } from "react-icons/fa6";
import Logo from "../../assets/icons/logoTeraByte.svg";

import { VerticalBarComponent } from "../../components/Charts/VerticalBarChart";
import { AreaChartComponent } from "../../components/Charts/AreaChart";
import { PieChartComponent } from "../../components/Charts/PieChart";
import { Visibility } from '../../components/Visibility';
import { Summary } from '../../components/Summary';

import { getReportCasino, getReportHome, getReportPayment, getReportSportsBooks } from '../../services/global/endPoints';

import { calculateDateDifference } from '../../utils/Date';

import { useFilterSearch } from '../../contexts/FilterSearch';
import { PlayersContextProvider, usePlayers } from '../../contexts/Players';

import {
  ContainerPlayer,
  ContentFlexPlayer,
  BackgroundPlayer,
  ContentSummary,
  FlexPlayer,
  ContentPlayer,
  DivSpinnerPlayer,
} from "../../pages/Players/styles";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FilterSearch } from '../../components/FilterSearch';
import { Spinner } from '../../components/Spinner';
import { useToast } from '../../hooks/useToast';
import { BodyHome, LogoHome, RowFilterHome, RowPaymentHome, SubTitleHome, TitleHome } from './styles';
import { PaymentContextProvider, usePayment } from '../../contexts/Payment';
import { ContentSummaryPayment, OperationFlexPayment } from '../Payment/styles';
import { currencyStringToNumber, decimalToPercentage, formatCurrency } from '../../utils/Formatter';
import { OperationsProps } from '../../contexts/Payment/interface';
import { MdAccountBalance, MdFileUpload } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';
import { validVariant } from '../../utils/Validation';
import { OperationComponent } from '../../components/Operation';
import { ColumnSummaryCasino, ContentSummaryCasino, OperationFlexCasino } from '../Casino/styles';
import { Top10FirstTemplateComponent } from '../../components/Top10FirstTemplate';
import { CasinoContextProvider, useCasino } from '../../contexts/Casino';
import { Top10SecondTemplateComponent } from '../../components/Top10SecondTemplate';
import { SportsBooksContextProvider, useSportsBooks } from '../../contexts/SportsBooks';
import { ColumnSummarySportBook, ContentSummarySportBook, OperationFlexSportBook } from '../SportsBooks/styles';

const Dashboard = () => {

  const screenRef = useRef(null);

  const { toast } = useToast();
  const { dateFilter, isTest } = useFilterSearch();
  const { setDataPayments, dataPayments } = usePayment();

  const {
    setGraphicAgeData,
    setGraphicDatesData,
    setGraphicGenderData,
    setGraphicStateData,
    setPlayerCountDate,

    playerCountDate,
    graphicAgeData,
    graphicDatesData,
    graphicGenderData,
    graphicStateData
  } = usePlayers();

  const {
    dataCasinos,
    setDataCasinos,
    setTop10DamageGames,
    setTop10PopularGames,
    setTop10ProfitableGames,
    top10DamageGames,
    top10PopularGames,
    top10ProfitableGames
  } = useCasino();

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

  const [showAreaChart, setShowAreaChart] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [updateUseEffect, setUpdateUseEffect] = useState<boolean>(false);

  useEffect(() => {

    const loadDataPlayer = getLoadDataPlayer();
    const loadDataPayment = getLoadDataPayment();
    const loadDataCasino = getLoadDataCasino();
    const loadDataSportsBook = getLoadDataSportsBook();

    Promise.all([loadDataPlayer, loadDataPayment, loadDataCasino, loadDataSportsBook])
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados da API:', error);
        setLoading(false);
      });

  }, [updateUseEffect]);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '')
      toast.error("Data é obrigatório");


    setLoading(true);
    setUpdateUseEffect(!updateUseEffect);

  };

  function transformLabels(labels: string[]) {
    return labels.map((label: string) => {
      if (label === "Unmared")
        return "Outros";
      if (label === "FEMALE")
        return "Mulheres";
      if (label === "MALE")
        return "Homens";

      return label;
    });
  }

  const getLoadDataPlayer = async () => {
    return new Promise((resolve, reject) => {
      const filter = {
        dataStart: dateFilter.from,
        dataFinal: dateFilter.to,
        isActive: isTest
      };

      getReportHome(filter).then(result => {

        if (result.data) {
          setPlayerCountDate({
            activePlayer: result.data.activePlayer,
            disabledPlayer: result.data.disabledPlayer,
            totalPlayer: result.data.totalPlayer
          });

          setGraphicAgeData({
            ages: result.data.ages,
            quantitiesAges: result.data.quantitiesAges
          });

          setGraphicStateData({
            states: result.data.states,
            quantitiesState: result.data.quantitiesState
          });

          setGraphicDatesData({
            dates: result.data.dates,
            quantitiesDate: result.data.quantities
          });

          const transformedLabels = transformLabels(result.data.sortedGenders);

          setGraphicGenderData({
            sortedGenders: transformedLabels,
            sortedQuantitiesByGender: result.data.sortedQuantitiesByGender
          });

          if (calculateDateDifference(dateFilter.from, dateFilter.to) >= 2)
            setShowAreaChart(true);
          else setShowAreaChart(false);

          resolve(result);
        }

      });
    });
  };

  const getLoadDataPayment = async () => {
    return new Promise((resolve, reject) => {

      const filter = {
        dataStart: dateFilter.from,
        dataFinal: dateFilter.to,
        isActive: isTest
      };

      getReportPayment(filter).then(result => {

        if (result.data) {

          const formattedData: OperationsProps = {
            DEPOSIT: {
              COMPLETED: result.data.operations.DEPOSIT?.COMPLETED,
              FAILED: result.data.operations.DEPOSIT?.FAILED,
              PROCESSING: result.data.operations.DEPOSIT?.PROCESSING
            },
            WITHDRAWAL: {
              COMPLETED: result.data.operations.WITHDRAWAL?.COMPLETED,
              FAILED: result.data.operations.WITHDRAWAL?.FAILED,
              PROCESSING: result.data.operations.WITHDRAWAL?.PROCESSING
            },
          };

          setDataPayments({
            balance: formatCurrency(result.data.balance as number),
            deposit: formatCurrency(result.data.deposit as number),
            withdrawal: formatCurrency(result.data.whtidrawal as number),
            operations: formattedData,
          });

          resolve(result);
        }
      })
        .catch((error) => {
          reject(error); // Rejeitar a Promise em caso de erro
        });
    });
  };

  const getLoadDataCasino = async () => {
    return new Promise((resolve, reject) => {

      const filter = {
        dataStart: dateFilter.from,
        dataFinal: dateFilter.to,
        isActive: isTest
      };

      getReportCasino(filter).then(result => {

        if (result.data) {

          setTop10PopularGames(result.data.popularGames.slice(0, 10));
          setTop10ProfitableGames(result.data.resultadosPositivos.slice(0, 10));
          setTop10DamageGames(result.data.resultadosNegativos.slice(0, 10));

          setDataCasinos({
            total_turnover: formatCurrency(result.data.totalTurnover as number),
            total_profit: formatCurrency(result.data.profit as number),
            profit_percent: decimalToPercentage(result.data.profitPercent),
            total_players: result.data.totalPlayers
          });

          resolve(result);
        }
      })
        .catch((error) => {
          reject(error); // Rejeitar a Promise em caso de erro
        });
    });
  };

  const getLoadDataSportsBook = async () => {
    return new Promise((resolve, reject) => {

      const filter = {
        dataStart: dateFilter.from,
        dataFinal: dateFilter.to,
        isActive: isTest
      };

      getReportSportsBooks(filter).then(result => {

        setTop10PopularGamesSportBook(result.data.jogosContagemOrdenado.slice(0, 10));
        setTop10ProfitableGamesSportBook(result.data.resultadosPositivos.slice(0, 10));
        setTop10DamageGamesSportBook(result.data.resultadosNegativos.slice(0, 10));

        setDataSportsBooks({
          totalAposta: formatCurrency(result.data.totalAposta as number),
          totalReceitaBruta: formatCurrency(result.data.totalReceitaBruta as number),
          totalPagamento: formatCurrency(result.data.totalPagamento as number),
          quantidadeJogadoresUnicos: result.data.quantidadeJogadoresUnicos
        });

        resolve(result);
      })
        .catch((error) => {
          reject(error); // Rejeitar a Promise em caso de erro
        });
    });
  };

  const handleCaptureScreen = () => {

    if (screenRef.current) {
      const margin = 20;
      const marginColor = '#343541';

      html2canvas(screenRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'pt', [canvas.width + 2 * margin, canvas.height + 2 * margin]);

        pdf.setFillColor(parseInt(marginColor.slice(1, 3), 16), parseInt(marginColor.slice(3, 5), 16), parseInt(marginColor.slice(5, 7), 16));
        pdf.rect(0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height, 'F');

        pdf.addImage(imgData, 'PNG', margin, margin, canvas.width, canvas.height);
        pdf.save(`resumo_operacao_${formattedDate}.pdf`);
      });
    }
  };

  function formatDate(inputDate: string) {
    const parts = inputDate.split('-');
    if (parts.length === 3) {
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${day}/${month}/${year}`;
    } else {
      return 'Data inválida';
    }
  }

  const formattedDate = formatDate(dateFilter.from);

  return (
    <ContainerPlayer>
      <ContentPlayer>

        <RowFilterHome>
          <FaFilePdf size={32} style={{ cursor: 'pointer' }} onClick={handleCaptureScreen} />
          <FilterSearch handleSearch={handleSearchGraphic} showPlayerTest />

        </RowFilterHome>

        <Visibility visible={loading}>
          <DivSpinnerPlayer>
            <Spinner />
          </DivSpinnerPlayer>
        </Visibility>

        <Visibility visible={!loading}>
          <BodyHome ref={screenRef}>

            <TitleHome>Resumo das Operações {formattedDate}</TitleHome>
            <SubTitleHome>Cadastro Realizados</SubTitleHome>

            <ContentSummary>
              <Summary
                variant="blue"
                text="Total de Jogadores"
                value={playerCountDate.totalPlayer}
                Icon={<TiGroup size={32} color="#229ED9" />}
              />

              <Summary
                variant="green"
                text="Jogadores Ativos"
                value={playerCountDate.activePlayer}
                Icon={<BsCheckCircle size={32} color="#448919" />}
              />

              <Summary
                variant="red"
                text="Jogadores Inativos"
                value={playerCountDate.disabledPlayer}
                Icon={<AiOutlineCloseCircle size={32} color="#B20D0D" />}
              />
            </ContentSummary>

            <Visibility visible={showAreaChart}>
              <BackgroundPlayer>
                <AreaChartComponent
                  labels={graphicDatesData.dates}
                  values={graphicDatesData.quantitiesDate}
                  title="Média de Registros"
                />
              </BackgroundPlayer>
            </Visibility>

            <BackgroundPlayer>
              <VerticalBarComponent
                labels={graphicStateData.states}
                values={graphicStateData.quantitiesState}
                title="Quantidade por Estados"
              />
            </BackgroundPlayer>

            <FlexPlayer>
              <ContentFlexPlayer>
                <VerticalBarComponent
                  labels={graphicAgeData.ages}
                  values={graphicAgeData.quantitiesAges}
                  title="Média por Idade"
                />
              </ContentFlexPlayer>

              <ContentFlexPlayer>
                <PieChartComponent
                  labels={graphicGenderData.sortedGenders}
                  values={graphicGenderData.sortedQuantitiesByGender}
                  title="Quantidade de Jogadores"
                />
              </ContentFlexPlayer>
            </FlexPlayer>

            <RowPaymentHome>

              <h2>Movimentação Entre Saques e Depósitos</h2>

              <ContentSummaryPayment>
                <Summary
                  variant="blue"
                  text="Saldo"
                  value={dataPayments?.balance || "0"}
                  Icon={
                    currencyStringToNumber(dataPayments.balance) >= 0 ?
                      <MdAccountBalance size={32} color="#229ED9" /> :
                      <MdFileUpload size={32} color="#B20D0D" />
                  }
                />

                <Summary
                  variant={validVariant((dataPayments.deposit))}
                  text="Depósito"
                  value={dataPayments?.deposit || "0"}
                  Icon={
                    currencyStringToNumber(dataPayments.deposit) >= 0 ?
                      <IoMdDownload size={32} color="#448919" /> :
                      <MdFileUpload size={32} color="#B20D0D" />
                  }
                />

                <Summary
                  variant="red"
                  text="Saque"
                  value={dataPayments?.withdrawal || "0"}
                  Icon={<MdFileUpload size={32} color="#B20D0D" />}
                />
              </ContentSummaryPayment>

              <OperationFlexPayment>
                <OperationComponent
                  title="Operações de Depósito"
                  valueOperation={dataPayments.operations?.DEPOSIT}
                />
                <OperationComponent
                  title="Operações de Saque"
                  valueOperation={dataPayments.operations?.WITHDRAWAL}
                />
              </OperationFlexPayment>

              <h2>Movimentação no Cassino</h2>

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

              <h2>Movimentação no Livro de Esportes</h2>

              <ContentSummarySportBook>
                <Summary
                  variant="blue"
                  text="Total em Apostas"
                  value={dataSportsBooks.totalAposta}
                  Icon={
                    currencyStringToNumber(dataSportsBooks.totalAposta) >= 0 ?
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

              <LogoHome src={Logo} />

            </RowPaymentHome>
          </BodyHome>
        </Visibility>
      </ContentPlayer>
    </ContainerPlayer >
  );
};

export function Home() {

  return (
    <PlayersContextProvider>
      <PaymentContextProvider>
        <CasinoContextProvider>
          <SportsBooksContextProvider>
            <Dashboard />
          </SportsBooksContextProvider>
        </CasinoContextProvider>
      </PaymentContextProvider>
    </PlayersContextProvider>
  );
}



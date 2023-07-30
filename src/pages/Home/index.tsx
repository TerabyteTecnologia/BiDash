import { useState, useEffect } from 'react';

import { TiGroup } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { VerticalBarComponent } from "../../components/Charts/VerticalBarChart";
import { AreaChartComponent } from "../../components/Charts/AreaChart";
import { PieChartComponent } from "../../components/Charts/PieChart";
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Visibility } from '../../components/Visibility';
import { Spinner } from '../../components/Spinner';
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';

import {
  GraphicAgeProps,
  GraphicDatesProps,
  GraphicGenderProps,
  GraphicStateProps,
  PlayerFilterProps,
  PlayerProps
} from './interface';

import { getReportHome } from '../../services/global/endPoints';

import { calculateAge, calculateDateDifference, formatDate } from '../../utils/Date';
import { useToast } from '../../hooks/useToast';
import { useFilterSearch } from '../../contexts/FilterSearch';

import {
  ContainerHome,
  ContentFlexHome,
  BackgroundHome,
  ContentSummary,
  ContentTable,
  FlexHome,
  ContentHome,
  DivSpinnerHome,
} from "./styles";

export function Home() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter, isTest } = useFilterSearch();

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const [showAreaChart, setShowAreaChart] = useState<boolean>(false);

  useEffect(() => {
    getLoadDataHome();
  }, []);

  const [playerCountDate, setPlayerCountDate] = useState<PlayerProps>({
    activePlayer: 0,
    disabledPlayer: 0,
    totalPlayer: 0
  });

  const [playerFilterDate, setPlayerFilterDate] = useState<PlayerFilterProps[]>([]);

  const [graphicAgeData, setGraphicAgeData] = useState<GraphicAgeProps>({
    ages: [],
    quantitiesAges: []
  });

  const [graphicStateData, setGraphicStateData] = useState<GraphicStateProps>({
    states: [],
    quantitiesState: []
  });

  const [graphicDatesData, setGraphicDatesData] = useState<GraphicDatesProps>({
    dates: [],
    quantitiesDate: []
  });

  const [graphicGenderData, setGraphicGenderData] = useState<GraphicGenderProps>({
    sortedGenders: [],
    sortedQuantitiesByGender: []
  });

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataHome();
  };

  const getLoadDataHome = async () => {
    setPlayerFilterDate([]);
    setTotalResults(0);
    setLoading(true);

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

        const modifiedGenders = result.data.sortedGenders.map((gender: any) => {
          if (gender === "Unmared") {
            return "Outros";
          }
          return gender;
        });

        setGraphicGenderData({
          sortedGenders: modifiedGenders,
          sortedQuantitiesByGender: result.data.sortedQuantitiesByGender
        });

        result.data.playerFilter.map((filter: any) => {

          const playerObj: PlayerFilterProps = {
            id: filter.id,
            name: filter.name,
            email: filter.email,
            phone: filter.phone_number,
            state: filter.state,
            age: calculateAge(new Date(filter.date_birth)),
            registration: formatDate(filter.registration_date)
          };

          setPlayerFilterDate((prevData) => [...prevData, playerObj]);
        });

        setTotalResults(result.data.playerFilter.length);
        setLoading(false);

        if (calculateDateDifference(dateFilter.from, dateFilter.to) >= 2)
          setShowAreaChart(true);
        else setShowAreaChart(true);
      }
    });
  };

  return (
    <ContainerHome>
      <ContentHome>

        <FilterSearch handleSearch={handleSearchGraphic} showPlayerTest />

        <Visibility visible={loading}>
          <DivSpinnerHome>
            <Spinner />
          </DivSpinnerHome>
        </Visibility>

        <Visibility visible={!loading}>

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
            <BackgroundHome>
              <AreaChartComponent
                labels={graphicDatesData.dates}
                values={graphicDatesData.quantitiesDate}
                title="Média de Registros"
              />
            </BackgroundHome>
          </Visibility>

          <BackgroundHome>
            <VerticalBarComponent
              labels={graphicStateData.states}
              values={graphicStateData.quantitiesState}
              title="Quantidade por Estados"
            />
          </BackgroundHome>

          <FlexHome>
            <ContentFlexHome>
              <VerticalBarComponent
                labels={graphicAgeData.ages}
                values={graphicAgeData.quantitiesAges}
                title="Média por Idade"
              />
            </ContentFlexHome>


            <ContentFlexHome>
              <PieChartComponent
                labels={graphicGenderData.sortedGenders}
                values={graphicGenderData.sortedQuantitiesByGender}
                title="Quantidade de Jogadores"
              />
            </ContentFlexHome>

          </FlexHome>

          <FlexHome>
            <ContentTable>
              <p>Informações dos usuários</p>

              <TableRows
                headers={{
                  id: "ID",
                  name: "Nome",
                  email: "Email",
                  phone: "Telefone",
                  state: "Estado",
                  age: "Idade",
                  registration: "Data de Registro"
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
            </ContentTable>
          </FlexHome>
        </Visibility>
      </ContentHome>
    </ContainerHome>

  );
}
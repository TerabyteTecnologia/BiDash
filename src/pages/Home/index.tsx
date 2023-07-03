import { useState } from 'react';

import { FaSearch } from "react-icons/fa";

import { AreaChartComponent } from "../../components/Charts/AreaChart";
import { PieChartComponent } from "../../components/Charts/PieChart";
import { VerticalBarComponent } from "../../components/Charts/VerticalBarChart";
import { Pagination } from "../../components/Pagination";
import Table from "../../components/Table";

import { ContainerHome, ContentFlexHome, BackgroundHome, ContentSummary, ContentTable, FlexHome, HomeFilter, ContentHome } from "./styles";
import { Summary } from '../../components/Summary';

export function Home() {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(30);

  const stockItems = [
    {
      id: 1,
      name: "Alisson Andrey",
      email: 'alissoncarmo2010@hotmail.com',
      phone: '(35) 999966575',
      state: 'Minas Gerais',
      age: '25',
      registration: '02/07/2023'
    },
    {
      id: 2,
      name: "Alisson Andrey",
      email: 'alissoncarmo2010@hotmail.com',
      phone: '(35) 999966575',
      state: 'Minas Gerais',
      age: '25',
      registration: '02/07/2023'
    },
    {
      id: 3,
      name: "Alisson Andrey",
      email: 'alissoncarmo2010@hotmail.com',
      phone: '(35) 999966575',
      state: 'Minas Gerais',
      age: '25',
      registration: '02/07/2023'
    }
  ];

  return (
    <ContainerHome>
      <ContentHome>
        <HomeFilter>
          <input type="date" /> a
          <input type="date" />

          <button>
            <FaSearch />
            Pesquisar
          </button>
        </HomeFilter>
        <ContentSummary>
          <Summary />
        </ContentSummary>

        <BackgroundHome>
          <AreaChartComponent />
        </BackgroundHome>
        <BackgroundHome>
          <VerticalBarComponent />
        </BackgroundHome>

        <FlexHome>
          <ContentFlexHome>
            <VerticalBarComponent />
          </ContentFlexHome>
          <ContentFlexHome>
            <PieChartComponent />
          </ContentFlexHome>
        </FlexHome>

        <ContentTable>
          <p>Informações dos usuários</p>
          <Table
            headers={{
              id: "ID",
              name: "Nome",
              email: "Email",
              phone: "Telefone",
              state: "Estado",
              age: "Idade",
              registration: "Data de Registro"
            }}
            items={stockItems}
          />

          <Pagination
            totalCountOfRegisters={totalResults}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </ContentTable>
      </ContentHome>
    </ContainerHome>

  );
}
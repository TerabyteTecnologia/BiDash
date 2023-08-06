import { useState } from 'react';

import TableRows from '../../../../components/TableRow';
import { Pagination } from '../../../../components/Pagination';

import { SportBookPlayersFilterProps } from '../interface';

interface TableSportBookHistoricPlayerProps {
  data: SportBookPlayersFilterProps[];
}

export function TableSportBookHistoricPlayer(props: TableSportBookHistoricPlayerProps) {

  const { data } = props;

  const rowsPerPage = 5;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalResults = data.length;

  return (
    <>
      <TableRows
        headers={{
          category: "Categoria",
          tournament_name: "Nome do torneio",
          sport_name: "Nome do esporte",
          date: "Data",
          turnover: "Aposta",
          gross_revenue: "Receita Bruta",
          payout: "Pagamento"
        }}
        data={data}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
      />

      <Pagination
        totalCountOfRegisters={totalResults}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
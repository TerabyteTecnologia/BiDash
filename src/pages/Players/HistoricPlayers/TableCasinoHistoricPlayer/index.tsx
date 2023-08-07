import { useState } from 'react';

import TableRows from '../../../../components/TableRow';
import { Pagination } from '../../../../components/Pagination';

import { CasinoPlayersFilterProps } from '../interface';

interface TableCasinoHistoricPlayerProps {
  data: CasinoPlayersFilterProps[];
}

export function TableCasinoHistoricPlayer(props: TableCasinoHistoricPlayerProps) {

  const { data } = props;

  const rowsPerPage = 5;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalResults = data.length;

  return (
    <>
      <TableRows
        headers={{
          name: "Nome do Jogo",
          date: "Data de Registro",
          turnover: "Turnover",
          winnings: "Winnings",
          Profit: "Profit",
          profitPercent: "Profit %"
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
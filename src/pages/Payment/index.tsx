import { useState, useEffect } from 'react';

import { OperationComponent } from '../../components/Operation';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Summary } from '../../components/Summary';
import TableRows from '../../components/TableRow';

import { MdAccountBalance, MdFileUpload } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

import {
  PaymentsTableFilterProps,
  DataPaymentsProps
} from './interface';

import { useToast } from '../../hooks/useToast';
import { useFilterSearch } from '../../contexts/FilterSearch';

import {
  ContainerPayment,
  ContentSummaryPayment,
  ContentTablePayment,
  FlexPayment,
  ContentPayment,
  OperationFlexPayment
} from "./styles";

export function Payment() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter } = useFilterSearch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    getLoadDataPayment();
  }, []);

  const [dataPayments, setDataPayments] = useState<DataPaymentsProps>({
    balance: "R$ 0",
    deposit: "R$ 0",
    withdrawal: "R$ 0"
  });

  const [playerFilterDate, setPlayerFilterDate] = useState<PaymentsTableFilterProps[]>([]);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataPayment();
  };

  const getLoadDataPayment = async () => {
    setPlayerFilterDate([]);

    setDataPayments({
      balance: "R$ 5.886,96",
      deposit: "R$ 19.974,23",
      withdrawal: "R$ 14.087,51"
    });

    setTotalResults(0);
  };

  return (
    <ContainerPayment>
      <ContentPayment>

        <FilterSearch handleSearch={handleSearchGraphic} />

        <ContentSummaryPayment>
          <Summary
            variant="blue"
            text="Saldo"
            value={dataPayments.balance}
            Icon={<MdAccountBalance size={32} color="#229ED9" />}
          />

          <Summary
            variant="green"
            text="Depósito"
            value={dataPayments.deposit}
            Icon={<IoMdDownload size={32} color="#448919" />}
          />

          <Summary
            variant="red"
            text="Saque"
            value={dataPayments.withdrawal}
            Icon={<MdFileUpload size={32} color="#B20D0D" />}
          />
        </ContentSummaryPayment>

        <OperationFlexPayment>
          <OperationComponent />
          <OperationComponent />
        </OperationFlexPayment>

        <FlexPayment>
          <ContentTablePayment>
            <p>Operações</p>

            <TableRows
              headers={{
                id: "ID",
                day: "Day",
                type: "Type",
                status: "Status",
                total: "Total",
                quantity: "Quantity"
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
          </ContentTablePayment>
        </FlexPayment>
      </ContentPayment>
    </ContainerPayment>

  );
}
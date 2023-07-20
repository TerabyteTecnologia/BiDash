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
  DataPaymentsProps,
  InitialOperation,
  OperationsProps
} from './interface';

import { formatDate } from '../../utils/Date';
import { formatCurrency } from '../../utils/Formatter';

import { useToast } from '../../hooks/useToast';
import { useFilterSearch } from '../../contexts/FilterSearch';
import { getReportPayment } from '../../services/global/endPoints';

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

  const { dateFilter, isTest } = useFilterSearch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const [dataPayments, setDataPayments] = useState<DataPaymentsProps>(InitialOperation);

  const [playerFilterDate, setPlayerFilterDate] = useState<PaymentsTableFilterProps[]>([]);

  useEffect(() => {
    getLoadDataPayment();
  }, []);

  const handleSearchGraphic = () => {
    if (dateFilter.from === '' || dateFilter.to === '') {
      toast.error("Data é obrigatório");
    }

    getLoadDataPayment();
  };

  const getLoadDataPayment = async () => {
    setPlayerFilterDate([]);

    const filter = {
      dataStart: dateFilter.from,
      dataFinal: dateFilter.to,
      isActive: isTest
    };

    getReportPayment(filter).then(result => {

      if (result.data) {

        result.data.paymentFilter.map((filter: any) => {
          const paymentObj: PaymentsTableFilterProps = {
            id: filter.id,
            date: formatDate(filter.date),
            operation_type: filter.operatin_type,
            status: filter.status,
            total: filter.total,
            quantity: filter.quantity,
          };

          setPlayerFilterDate((prevData) => [...prevData, paymentObj]);
        });

        const formattedData: OperationsProps = {
          DEPOSIT: {
            COMPLETED: formatCurrency(result.data.operations.DEPOSIT.COMPLETED as number),
            FAILED: formatCurrency(result.data.operations.DEPOSIT.FAILED as number),
            PROCESSING: formatCurrency(result.data.operations.DEPOSIT.PROCESSING as number),
          },
          WITHDRAWAL: {
            COMPLETED: formatCurrency(result.data.operations.WITHDRAWAL.COMPLETED as number),
            FAILED: formatCurrency(result.data.operations.WITHDRAWAL.FAILED as number),
            PROCESSING: formatCurrency(result.data.operations.WITHDRAWAL.PROCESSING as number),
          },
        };

        setDataPayments({
          balance: result.data.balance,
          deposit: result.data.deposit,
          withdrawal: result.data.whtidrawal,
          operations: formattedData,
        });

        setTotalResults(result.data.paymentFilter.length);
      }
    });
  };

  return (
    <ContainerPayment>
      <ContentPayment>

        <FilterSearch handleSearch={handleSearchGraphic} />

        <ContentSummaryPayment>
          <Summary
            variant="blue"
            text="Saldo"
            value={dataPayments?.balance || "0"}
            Icon={<MdAccountBalance size={32} color="#229ED9" />}
          />

          <Summary
            variant="green"
            text="Depósito"
            value={dataPayments?.deposit || "0"}
            Icon={<IoMdDownload size={32} color="#448919" />}
          />

          <Summary
            variant="red"
            text="Saque"
            value={dataPayments?.withdrawal || "0"}
            Icon={<MdFileUpload size={32} color="#B20D0D" />}
          />
        </ContentSummaryPayment>

        <OperationFlexPayment>
          <OperationComponent title="Operações de Depósito" valueOperation={dataPayments.operations?.DEPOSIT} />
          <OperationComponent title="Operações de Saque" valueOperation={dataPayments.operations?.WITHDRAWAL} />
        </OperationFlexPayment>

        <FlexPayment>
          <ContentTablePayment>
            <p>Operações</p>

            <TableRows
              headers={{
                id: "ID",
                day: "Data Registro",
                type: "Tipo",
                status: "Status",
                total: "Total",
                quantity: "Quantidade"
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
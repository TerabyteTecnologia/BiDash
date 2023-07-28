import { useState, useEffect } from 'react';

import { OperationComponent } from '../../components/Operation';
import { FilterSearch } from '../../components/FilterSearch';
import { Pagination } from "../../components/Pagination";
import { Visibility } from '../../components/Visibility';
import { Spinner } from '../../components/Spinner';
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
  OperationFlexPayment,
  DivSpinner
} from "./styles";

export function Payment() {

  const rowsPerPage = 5;

  const { toast } = useToast();

  const { dateFilter, isTest } = useFilterSearch();

  const [loading, setLoading] = useState<boolean>(false);
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
    setTotalResults(0);
    setPlayerFilterDate([]);
    setLoading(true);

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
            total: formatCurrency(filter.total),
            quantity: filter.quantity,
          };

          setPlayerFilterDate((prevData) => [...prevData, paymentObj]);
        });

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

        setTotalResults(result.data.paymentFilter.length);
        setLoading(false);
      }
    });
  };

  return (
    <ContainerPayment>
      <ContentPayment>

        <FilterSearch handleSearch={handleSearchGraphic} />

        <Visibility visible={loading}>
          <DivSpinner>
            <Spinner />
          </DivSpinner>
        </Visibility>

        <Visibility visible={!loading}>

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
        </Visibility>
      </ContentPayment>

    </ContainerPayment >

  );
}
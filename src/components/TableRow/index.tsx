import Table from "../Table";

const TableRows = (props: any) => {

  const { headers, data, currentPage, rowsPerPage } = props;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const rows = data.slice(startIndex, endIndex);

  return (
    <Table
      headers={headers}
      items={rows}
    />
  );
};

export default TableRows;
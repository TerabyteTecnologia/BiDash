import styled from "styled-components";

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  td {
    padding: 1rem 0.625rem;
    background: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["white"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  th {
    text-align: left;
    padding: 1rem 0.625rem;
  }

  td {
    text-align: left;
  }
`;
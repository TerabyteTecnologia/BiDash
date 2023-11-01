import styled from "styled-components";

export const FlexHistoricPlayer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;
  height: auto;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;

export const ContentTableHistoricPlayer = styled.div`
  width: 100%;
  height: auto;

  margin: 0 auto 0.9375rem auto;
  padding: 0.9375rem 6.25rem;

  background: ${props => props.theme["gray-400"]};
  border-radius: 0.625rem;
  overflow-x: auto;
  
  p {
    font-size: clamp(1rem, 1.5vw, 1.875rem);
    padding: 1.25rem 0;
    text-align: center;

    font-weight: bold;
  }

  @media (max-width: 1400px) {
    max-width: 900px;
    padding: 0.9375rem 2.25rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2.8125rem;

  margin-bottom: 2.5rem;

  border-bottom: 2px solid  ${props => props.theme["gray-400"]};
  padding-bottom: 1.25rem;
`;

export const ContainerHistoricSearch = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};

  height: 100%;
`;

export const ContentHistoricSearch = styled.div`
  margin: 0 auto;
  height: 100%;
`;


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

export const ButtonTable = styled.button`
  
  background-color: transparent;
  color:#fff;
  font-size: 0.9rem;
  font-weight: bold;
  text-shadow: 0cqi;
  padding:0.5rem;
`

interface ModalOverlayProps{
  isOpen:boolean;
}

export const ModalOverlay = styled.div<ModalOverlayProps>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  h2{
    color:#000
  }
`;

export const CloseButton = styled.span`
  color: #000;
  float: right;
  font-size: 38px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: red;
    text-decoration: none;
  }
`;
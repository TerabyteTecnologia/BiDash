import styled from "styled-components";

export const ContainerCasino = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};
`;

export const ContentCasino = styled.div`
  margin: 0 auto
`;


export const OperationFlexCasino = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;

export const ContentSummaryCasino = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 1.25rem 0;
`;

export const DivSpinnerSportsBook = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 800px;
`;

export const FlexHomeCasino = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;
  height: auto;
`;

export const ContentTableCasino = styled.div`
  width: 100%;
  height: auto;

  margin: 0 auto 0.9375rem auto;
  padding: 0.9375rem 6.25rem;

  background: ${props => props.theme["gray-400"]};
  border-radius: 0.625rem;
  overflow-x: auto;
  
  p {
    font-size: 1.25rem;
    padding: 1.25rem 0;
    text-align: center;
  }

  @media (max-width: 1400px) {
    max-width: 900px;
    padding: 0.9375rem 2.25rem;
  }
`;

export const ColumnSummaryCasino = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;
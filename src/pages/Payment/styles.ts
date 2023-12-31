import styled from "styled-components";

export const ContainerPayment = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};
`;

export const ContentPayment = styled.div`
  margin: 0 auto
`;

export const DivSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 800px;
`;

export const OperationFlexPayment = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ContentSummaryPayment = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 3.125rem 0 1.25rem 0;
`;

export const FlexPayment = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;
  height: auto;
`;

export const ContentTablePayment = styled.div`
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
    font-weight: bold;
  }

  @media (max-width: 1400px) {
    max-width: 900px;
    padding: 0.9375rem 2.25rem;
  }
`;
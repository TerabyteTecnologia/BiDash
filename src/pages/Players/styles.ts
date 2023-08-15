import styled from "styled-components";

export const ContainerPlayer = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};

  
`;

export const ContentPlayer = styled.div`
  margin: 0 auto
`;

export const DivSpinnerPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  margin-bottom: 800px;
`;

export const ContentSummary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3.125rem 0 1.25rem 0;
`;

export const BackgroundPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme["gray-400"]};

  height: 40.625rem;
  margin: 0 auto 0.9375rem auto;
  padding: 0.9375rem 6.25rem;

  border-radius: 0.625rem;

  @media (max-width: 1400px) {
    padding: 0.9375rem 1.25rem;
  }

`;

export const FlexPlayer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;
  height: auto;

  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;

export const ContentFlexPlayer = styled(BackgroundPlayer)`
  width: 100%;
`;

export const ContentTable = styled.div`
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
    max-width: 56.25rem;
    padding: 0.9375rem 2.25rem;
  }
`;
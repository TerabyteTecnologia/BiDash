import styled from "styled-components";

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

export const TitleHistoricPlayer = styled.p`
  text-align: center;
  padding: 40px 0;
  font-size: 1.5625rem; 
  font-weight: bold;
`;

export const ContentInformationHistoricPlayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-bottom: 2.5rem;

  border-bottom: 2px solid  ${props => props.theme["gray-400"]};
  padding-bottom: 1.25rem;
`;

export const DivSearchTitleHistoric = styled.div`
  display: flex;
  align-items: center;
  gap: 1.875rem;
  
  button {
    gap: 1.25rem;
    height: 2.5rem;
    width: 9.375rem;

    &:hover {
      background: ${props => props.theme["blue-300"]};
    }
  }

  border-bottom: 2px solid  ${props => props.theme["gray-400"]};
  padding-bottom: 1.25rem;
`;

export const InformationPlayerTitleHistoric = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;

  p {
    font-size: clamp(1rem, 1.5vw, 16px); 
    font-weight: bold;
    padding-bottom: 0.625rem;
  }
`;

export const ContentSummaryHistoricPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5625rem;

  margin-bottom: 2.5rem;
  border-bottom: 2px solid  ${props => props.theme["gray-400"]};
  padding-bottom: 1.25rem;

  p {
    font-size: clamp(1rem, 1.5vw, 20px); 
    font-weight: bold;
    padding-bottom: 0.625rem;
  }

  > div {
    width: 100%;

     strong {
      font-size: clamp(1rem, 1.5vw, 1.875rem); 
    }
  }
`;

interface InputPlayerHistoricProps {
  width: number;
}

export const InputPlayerHistoric = styled.div<InputPlayerHistoricProps>`
  display: flex;
  align-items: center;

  width: ${props => props.width}px;
  height: 2.5rem;
  padding: 0 0.625rem;
  flex-shrink: 0;
  border: 1px solid  ${props => props.theme["white"]};
  border-radius: 0.625rem;
  background: transparent;

  span {
    color: ${props => props.theme["white"]};
  }
`;

export const InputPlayerHistoricSearch = styled.input`
  width: 21.875rem;
  height: 2.5rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  padding: 0 0.625rem;


  background: transparent;
  border: 1px solid  ${props => props.theme["white"]};
  color: ${props => props.theme["white"]};
`;

export const DivSpinnerHistoricSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6.25rem;
  margin-bottom: 50rem;
`;

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
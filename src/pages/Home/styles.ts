import styled from "styled-components";

export const ContainerHome = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};
`;

export const ContentHome = styled.div`
  max-width: 1200px;
  margin: 0 auto
`;

export const HomeFilter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    background: ${props => props.theme["blue-200"]};
    color: ${props => props.theme["white"]};
    padding: 5px 10px;
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme["blue-300"]};
    }
  }
`;

export const ContentSummary = styled.div`
  margin: 20px 0;
`;

export const BackgroundHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme["gray-400"]};

  height: 40.625rem;
  margin: 0 auto 0.9375rem auto;
  padding: 0.9375rem 6.25rem;

  border-radius: 0.625rem;
`;

export const FlexHome = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

export const ContentFlexHome = styled(BackgroundHome)`
  width: 100%;
`;

export const ContentTable = styled(BackgroundHome)`
  justify-content: start;
  width: 100%;
  height: 31.25rem;

  p {
    font-size: 1.25rem;
    padding: 20px 0;
  }
`;
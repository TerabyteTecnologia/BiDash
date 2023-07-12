import styled, { css } from "styled-components";

export const ContainerHome = styled.div`
  display: block;
  flex-direction: column;
  padding: 1.25rem;
  margin-top: 0.625rem; 
	background: ${props => props.theme["gray-500"]};
`;

export const ContentHome = styled.div`
  margin: 0 auto
`;

export const HomeFilter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.625rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    background: ${props => props.theme["blue-200"]};
    color: ${props => props.theme["white"]};
    padding: 0.9375rem;
    border-radius: 0.3125rem;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme["blue-300"]};
    }
  }
`;

export const ToggleSwitchContent = styled.div`
  display: flex;
  align-items: center;
  gap:0.625rem;

  padding-right: 2.5rem;
`;

interface ToggleButtonProps {
  isChecked: boolean;
}

export const ToggleButton = styled.label<ToggleButtonProps>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: gray;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.2s;
  }

  ${props => props.isChecked === true && css`
    background-color: red;

    span {
      transform: translateX(20px);
    }
  `}
`;

export const ContentSummary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 1.25rem 0;
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

  @media (max-width: 1400px) {
    padding: 0.9375rem 1.25rem;
  }

`;

export const FlexHome = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;
  height: auto;
`;

export const ContentFlexHome = styled(BackgroundHome)`
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
  }

  @media (max-width: 1400px) {
    max-width: 1000px;
    padding: 0.9375rem 2.25rem;
  }
`;
import styled, { css } from "styled-components";

export const ContainerFilterSearch = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.625rem;

  margin-bottom: 2.5rem;

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
  test: "true" | "false";
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

  ${props => props.test === "true" && css`
    background-color: red;

    span {
      transform: translateX(20px);
    }
  `}
`;
import styled from "styled-components";

export const ContainerButtonDefault = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 33%;
    right: 1.25rem;
    background: transparent;
    color: ${props => props.theme["gray-300"]};;
    border: none;
    outline: none;
    cursor: pointer;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const BaseInput = styled.input` 

  border-radius: 6px;
  border: 1px solid ${props => props.theme["gray-400"]};

  background: ${props => props.theme["gray-900"]};
  color: ${props => props.theme["gray-300"]};

  padding: 1rem;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme["gray-300"]};
  }

  font-size: 0.875rem;
`;

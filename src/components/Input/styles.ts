import styled from "styled-components";

export const BaseInput = styled.input` 

  border-radius: 6px;
  border: 1px solid ${props => props.theme["gray-400"]};

  background: ${props => props.theme["gray-900"]};
  color: ${props => props.theme["gray-300"]};

  padding: 1rem;

  &::placeholder {
    color: ${props => props.theme["gray-500"]};
  }

  font-size: 0.875rem;

`;

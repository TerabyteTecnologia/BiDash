import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.375rem;

  background: ${props => props.theme["blue-200"]};
  color:  ${props => props.theme["white"]};

  padding: 0 1.25rem;
  height: 3.125rem;
  
  font-size: 1rem;
  font-weight: bold;
  
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  } 

  &:disabled {
    filter: brightness(0.9);

    cursor: no-drop;
  }
`;
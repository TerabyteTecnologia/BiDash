import styled from 'styled-components';

export const ContainerSideBarItem = styled.div`
  display: flex;
  gap: 0.375rem;

  font-weight: bold;
  padding: 0.625rem;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${props => props.theme["blue-200"]};
  } 
`;
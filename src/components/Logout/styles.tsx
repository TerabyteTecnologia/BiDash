import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownMenu = styled.div`
  width: 290px;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${props => props.theme["white"]};
  color: #595f69;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  z-index: 1;
  font-weight: bold;
`;

export const DropdownItem = styled.div`
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
import styled from "styled-components";


export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-500"]};
  height: 100px;
  display: flex;
`;

export const HeaderIconMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  padding-right: 60px;
`;
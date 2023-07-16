import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${props => props.theme["gray-700"]};
  padding: 20px;
  text-align: center;
  width: 100%;

  font-weight: bold;

  a {
    color: ${props => props.theme["blue-200"]};
    cursor: pointer;
  }
`;
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${props => props.theme["gray-700"]};
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const FooterContent = styled.p`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  max-width: 650px;
  gap: 3.125rem;

  div {
    cursor: pointer;
  }
`;
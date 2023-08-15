import styled from "styled-components";

export const RowPaymentHome = styled.div`
  margin-top: 40px;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: clamp(1rem, 1.5vw, 20px);
    color: ${props => props.theme["white"]};
    margin: 50px 0;
  }
`;

export const BodyHome = styled.div`
	background: ${props => props.theme["gray-500"]};
`;

export const TitleHome = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: clamp(1rem, 1.5vw, 1.5625rem);
  color: ${props => props.theme["white"]};

  margin: 2.5rem;

`;

export const RowFilterHome = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  gap: 1.5625rem;

  margin-bottom: 6.25rem;
`;

export const SubTitleHome = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${props => props.theme["white"]};

  margin-bottom: 40px;
`;

export const LogoHome = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 3.125rem auto;

  width: 8.75rem;
`;
import { styled } from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
`;
export const BackgroundPayment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props => props.theme["gray-400"]};

  height: 20.4375rem;
  margin: 1.25rem 0;
  padding: 0.9375rem 6.25rem;

  border-radius: 0.625rem;

  p {
    margin-bottom: 2.5rem;
  }

  span, p {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 2.375rem;
    letter-spacing: 0em;
  }

  @media (max-width: 1400px) {
    padding: 0.9375rem 1.25rem;

    span, p {
      font-weight: 700;
      line-height: 2.375rem;
      letter-spacing: 0em;
    }
  }
`;

export const PaymentContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  gap: 0.9375rem;
  

  width: 100%;
`;

export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PaymentFlex = styled.div`
  display: flex;
  align-items: center;

  gap: 0.9375rem
`;
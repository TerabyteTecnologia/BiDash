import { styled } from "styled-components";

export const BackgroundFirstTemplate = styled.div`
  background: ${props => props.theme["gray-400"]};

  height: auto;
  margin: 1.25rem 0;
  padding: 1.875rem 1.25rem;

  border-radius: 0.625rem;

  width: 100%;

  span, p {
    font-size: 1.375rem;
    font-weight: 700;
    line-height: 2.375rem;
    letter-spacing: 0em;
  }

  @media (max-width: 1400px) {
    padding: 1.875rem 1.25rem;

    span, p {
      font-weight: 700;
      line-height: 2.375rem;
      letter-spacing: 0em;
    }
  }
`;

export const TitleFirstTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  margin-bottom: 2.5rem;
`;

export const BodyFistTemplate = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 0.625rem;
`;

export const ContentSecondTemplate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
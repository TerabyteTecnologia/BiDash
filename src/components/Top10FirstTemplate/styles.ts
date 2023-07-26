import { styled } from "styled-components";

export const BackgroundFirstTemplate = styled.div`
  background: ${props => props.theme["gray-400"]};

  height: auto;
  margin: 1.25rem 0;
  padding: 30px 20px;

  border-radius: 0.625rem;

  width: 100%;

  span, p {
    font-size: clamp(1rem, 1.5vw, 1.5625rem);
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
  justify-content: space-between;
  width: 100%;
`;

export const ContentFirstTemplate = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 1400px) {
    justify-content: space-evenly;
  }
`;

export const ColumnTitlePlayerFirstTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RowTitlePlayerFirstTemplate = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TextDataEmpty = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: clamp(1rem, 1.5vw, 1.375rem);
  font-weight: 700;
`;

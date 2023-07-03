import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  margin-top: 2.5rem;

  @media screen and (max-width: 519px) {
    margin: 2.5rem 0;
  }

  @media screen and (max-width: 739px) {
    justify-content: center;
  }
`;

export const PaginationContent = styled.div`
  display: flex;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    white-space: nowrap;
    line-height: 1.2;

    border: none;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    transition-duration: 200ms;

    height: 3rem;
    min-width: 3rem;
    margin: 0 0.313rem 0 0.313rem;
    cursor: pointer;

    color: ${props => props.theme["white"]};
    background: ${props => props.theme["gray-500"]};

      &:disabled {
        cursor: default;
        background: ${props => props.theme["blue-300"]};
    }
} 

  p {
    width: 2rem;
    padding-top: 0.5rem;

    text-align: center;
    font-weight: bold;

    color: ${props => props.theme["gray-300"]};
  }
`;



import styled, { css } from "styled-components";

interface SummaryCardProps {
  variant?: "green" | "blue" | "red";
  isIcon?: boolean;
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.9375rem;

  background: ${props => props.theme["gray-600"]};
  border-radius: 0.375rem;
  padding: 2rem;
  max-width: 39.375rem;
  flex-wrap: wrap;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["white"]};

    span {
      font-size: clamp(1rem, 1.5vw, 1.875rem); 
      font-weight: bold;
    }
  }
  
  strong {
    display: block;
    font-size: clamp(1.25rem, 2.5vw, 2.1875rem); 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  svg {
    width: 3.125rem;
    height: 3.125rem;
  }

  @media (max-width: 1400px) {
    svg {
      width: 2.1875rem;
      height: 2.1875rem;
    }

    ${props => props.isIcon === true && css`
      padding: 1.375rem;
    `}
  }

  ${props => props.isIcon === false && css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 1rem;
  `}

  ${props => props.variant === "blue" && css`
    header, strong {
      color: ${props.theme["blue-200"]};
    }
   
    background: ${props.theme["blue-300"]}
  `}

  ${props => props.variant === "green" && css`
    header, strong {
      color: ${props.theme["green-700"]};
    }

    background: ${props.theme["green-200"]}
  `}

  ${props => props.variant === "red" && css`
    header, strong {
      color: ${props.theme["red-500"]};
    }

    background: ${props.theme["red-300"]}
  `}
`;
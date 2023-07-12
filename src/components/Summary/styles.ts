import styled, { css } from "styled-components";

interface SummaryCardProps {
  variant?: "green" | "blue" | "red";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme["gray-600"]};
  border-radius: 0.375rem;
  padding: 2rem;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["white"]};

    span {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
  
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2.5rem;
  }

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
import { createGlobalStyle } from "styled-components";

import calendarIcon from "../assets/icons/calendar_month.svg";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    font: 400 1rem Inter, sans-serif;
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["white"]};
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input[type="date"] {
    font-size: 0.875rem;
    border: 0.125rem solid #bebebe;
    min-width: 200px;
    border-radius: 0.375rem;
    height: 1.875rem;
    padding: 1.25rem;
    background: transparent;
    color: ${(props) => props.theme["white"]};
    max-width: 200px;
    width: 100%;

    &:disabled {
      background: #f2f2f2;
    }
  }

  input[type="date"]::-webkit-clear-button {
    display: none;
  }

  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    padding-right: 1.25rem;
    opacity: 1;
    cursor: pointer;
    color: transparent;
    background: url(${calendarIcon}) center no-repeat;
    background-size: 1.25rem 1.25rem;
    height: 1.25rem;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;

    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme["white"]};
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme["gray-300"]};
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme["gray-300"]};
  }
`;


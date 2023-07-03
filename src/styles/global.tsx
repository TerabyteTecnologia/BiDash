import { createGlobalStyle } from "styled-components";

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
  }

  /* body, input, textarea, button {
    font: 400 1rem Inter, sans-serif;
  } */

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  select,
  option {
    font-size: 14px;
    border: 2px solid #bebebe;
    min-width: 0;
    border-radius: 6px;
    height: 30px;
    padding-left: 10px;

    &:disabled {
      background: #f2f2f2;
    }

    &:focus {
      border: 2px solid #0e4c54;
    }
  }

  input[type="date"]::-webkit-clear-button {
  display: none;
  }

  /* Removes the spin button */
  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    padding-right: 20px;
    opacity: 1;
    cursor: pointer;
    color: #FFF;
    background: url('../assets/img/calendar.jpeg') center no-repeat;
    background-size: 20px 20px;
    height: 40px;
    background-color: transparent;
  }
`;


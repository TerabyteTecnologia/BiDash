import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import { Router } from './routes/index';

import { GlobalStyle } from './styles/global';
import { themeDefault } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
      {/* <Toaster position='top-right' /> */}
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Toaster } from 'react-hot-toast';

import { Router } from './routes/index';

import { GlobalStyle } from './styles/global';
import { themeDefault } from "./styles/themes/default";
import { AuthContextProvider } from './contexts/Auth';

function App() {

  return (
    <ThemeProvider theme={themeDefault}>
      <AuthContextProvider>

        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
        <Toaster position='top-right' />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

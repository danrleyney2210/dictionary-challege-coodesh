

import { ThemeProvider } from 'styled-components';

import Rotas from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Rotas />
    </ThemeProvider>
  )
}
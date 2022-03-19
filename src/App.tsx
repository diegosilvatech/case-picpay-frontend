import { ThemeProvider } from 'styled-components';

import Routes from 'routes';

import { theme, GlobalStyles } from 'styles';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;

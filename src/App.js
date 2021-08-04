import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import theme from './theme';
import {Reset} from 'styled-reset';
import Home from './pages/Home/index';

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme ={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
    </Provider>
  );
}

export default App;

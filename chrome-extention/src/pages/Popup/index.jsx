import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Popup from './Popup';
import './index.css';
import { Store } from 'webext-redux';
import { Provider } from 'react-redux';

const proxyStore = new Store();

const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#FFF',
      secondary: '#CBCFD4',
      light: '#CBCFD4',
      hint: '#00BF0B',
      error: '#FF6E6E',
    },
    primary: {
      main: '#3C444D',
      dark: '#30363D',
      light: '#FFF',
      contrastText: '#00BF0B',
      error: '#FF6E6E',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
      },
    },
  },
});

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <ThemeProvider theme={theme}>
        <Popup />
      </ThemeProvider>
    </Provider>,
    window.document.querySelector('#app-container')
  );
});

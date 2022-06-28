import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from 'App';
import store from 'store';

import { theme } from 'constants/theme';

import 'index.css';
import 'fonts.css';
import 'notyf/notyf.min.css';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);

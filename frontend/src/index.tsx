import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

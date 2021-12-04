import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.querySelector('#root')
);

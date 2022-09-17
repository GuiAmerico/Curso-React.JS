import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Arrays01 from './Arrays01';
import Arrays02 from './Arrays02';
import DesafioJSX from './DesafioJSX'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DesafioJSX />
    <Arrays01 />
    <Arrays02 />
  </React.StrictMode>
);
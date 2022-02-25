import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './bars/footer';

ReactDOM.render(
  <React.StrictMode>
      <App />
      <Footer /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

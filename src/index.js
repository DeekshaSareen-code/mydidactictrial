import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import Footer from './bars/footer';
import Header from './bars/header';
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

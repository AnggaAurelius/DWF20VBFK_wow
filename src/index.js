import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './font.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import reportWebVitals from './reportWebVitals';
import LandingPage from './landingPage/LandingPage';
import HomePage from './homePage/HomePage';
import Sub from './homePage/Sub';
import DetailBook from './homePage/DetailBook';



ReactDOM.render(
  <LandingPage />, document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

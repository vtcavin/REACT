import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Advanced from './UseEffectAdv'
import reportWebVitals from './reportWebVitals';
//import App from './ConditionalRender';
//import TestEffect from './EffectUse';
//import Route from './Routing.js';
import Ref from './UseRef.jsx'


//import AppLoginform from './AppLoginform
//import AppCalculator from './AppCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Ref/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

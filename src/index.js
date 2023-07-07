import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import AWS from 'aws-sdk';


Amplify.configure(config);


AWS.config.update({
  region: 'ap-south-1', // Replace 'your-region' with your desired AWS region, e.g., 'us-east-1'
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

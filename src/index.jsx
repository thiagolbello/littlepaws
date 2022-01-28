import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZOXhpJHtvWBxWqxiL8jsnmYGUmqD9sFU",
  authDomain: "coderhouse-ecommerce-c7551.firebaseapp.com",
  projectId: "coderhouse-ecommerce-c7551",
  storageBucket: "coderhouse-ecommerce-c7551.appspot.com",
  messagingSenderId: "610430487326",
  appId: "1:610430487326:web:5b83cfa1501f8186f7170f"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

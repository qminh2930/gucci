import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import './index.css';
import {ProductsProvider} from './components/store'
ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
        <App />
      </ProductsProvider>        
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

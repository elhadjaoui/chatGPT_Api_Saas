import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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


/*
i have this class 
class TXO {
  spent = false
   
  constructor(owner, amount) {
      this.owner = owner;
      this.amount = amount;
  }
  spend() {
   this.spent = true;   
  }
}
and I have an array  of this class where I need to get the total amount of the array using javascript 
*/



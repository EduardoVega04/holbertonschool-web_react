import logoHbtn from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';
import React from 'react';

function App() {
  return (
    <div className="main-content">
      <div className="App-header">
        <img src={logoHbtn} alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"/>
        <button type="button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </div>
    </div>
  )
}

export default App;

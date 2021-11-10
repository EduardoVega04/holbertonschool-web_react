import logoHbtn from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="main-content">
      <div className="App-header">
        <img src={logoHbtn} alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(1)}</p>
      </div>
    </div>
  )
}

export default App;

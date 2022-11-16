import logo from './logo.svg';
import './App.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

const url = "https://menacingly-magnificent-spider-cloud.wayscript.cloud/"

const time = fetch(url)
  .then((response) => response.json())
  .then((data) => data.time);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The time is:
          {time}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

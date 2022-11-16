import logo from './logo.svg';
import './App.css';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';

const url = "https://menacingly-magnificent-spider-cloud.wayscript.cloud/"

// const time = fetch(url)
//   .then((response) => response.json())
//   .then((data) => data.time);

function App() {

  const [time, setTime] = useState("loading time")

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) =>setTime(data.time));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src ="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="300" height="400"/>
        <p>
          The time is:
          {time}
        </p>
      </header>
    </div>
  );
}

export default App;

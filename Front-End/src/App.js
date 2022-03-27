// Libraries
import { Routes, Route, Link } from "react-router-dom";

// Style
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="App-Pages-List">
          <li className="Home">
            {/* <div className="Home-div"> */}
            <ion-icon name="home-outline"></ion-icon>
            {/* </div> */}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;

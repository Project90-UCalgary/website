// Libraries
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Link } from "react-router-dom";

// Style
import './App.scss';

// Components
import NavBar from './Components/NavBar';
import Home from "./Components/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Home />
    </div>
  );
}

export default App;

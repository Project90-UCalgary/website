// Libraries
// eslint-disable-next-line no-unused-vars
import { Routes, Route, Link } from "react-router-dom";
// import { tsParticles } from "tsparticles";

// Components
import NavBar from './Components/NavBar';
import ParticlesContainer from "./Components/ParticlesContainer";
import Moto from "./Components/Moto";

// Style
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ParticlesContainer />
      <Moto />
    </div>
  );
}

export default App;

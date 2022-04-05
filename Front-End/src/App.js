// Libraries
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

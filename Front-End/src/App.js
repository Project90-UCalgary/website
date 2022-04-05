// Libraries
import { Routes, Route } from "react-router-dom";

// Style
import './App.scss';

// Components
import NavBar from './Components/_NavBar/NavBar';
import Home from "./Components/_Homepage/Home";

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

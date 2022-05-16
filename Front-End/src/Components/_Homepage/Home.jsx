// Libraries
import { Fragment, useState } from "react";

// Style
import "../Style/_Homepage/Home.scss";

// Components
import Moto from "./_Moto/Moto";
import ParticlesContainer from "./ParticlesContainer";

export default function Home() {
  // Make a multi purpose state.
  const [state, setState] = useState({
    showText: false,
    padding: "0%",
    top: "15%",
  });

  return (
    <Fragment>
      <div className="home-container">
        <ParticlesContainer />
        <Moto state={state} setState={setState} />
      </div>
    </Fragment>
  );
}

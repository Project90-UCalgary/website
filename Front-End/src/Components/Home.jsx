// Libraries
import { Fragment } from "react";

// Style
import "./Style/_Homepage/Home.scss";

// Components
import Moto from "./_Homepage/Moto";
import ParticlesContainer from "./_Homepage/ParticlesContainer";

export default function Home() {
  return (
    <Fragment>
      <container className="home-container">
        <ParticlesContainer />
        <Moto />
      </container>
    </Fragment>
  );
}

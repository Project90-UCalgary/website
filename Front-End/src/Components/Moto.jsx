// Style
import "./Style/Moto.scss";

// Libraries
import { Fragment } from "react";

export default function Moto(props) {
  return (
    <Fragment>
      <container className="moto-container">
        <button className="join-us-btn">Join Us!</button>
        <p className="moto-text">
          Most of the benefits of today's engineering are felt by just 10% of
          the population. Project90 engineers are for the other 90%
        </p>
      </container>
    </Fragment>
  );
}

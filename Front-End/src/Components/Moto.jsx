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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fermentum nec ipsum quis porta.
        </p>
      </container>
    </Fragment>
  );
}

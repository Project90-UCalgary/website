// Libraries
import { Fragment } from "react";

// Style
import "../Style/_About/About.scss";

export default function Home() {
  return (
    <Fragment>
      <div className="about-container">
        <ul className="items-container">
          <li className="item">Gallery</li>
          <li className="item">Team</li>
          <li className="item">Projects</li>
          <li className="item">FAQ</li>
        </ul>
      </div>
    </Fragment>
  );
}

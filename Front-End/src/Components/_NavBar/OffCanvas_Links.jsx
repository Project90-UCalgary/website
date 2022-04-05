// Libraries
import { Fragment } from "react";

// Style

export default function Links(props) {
  return (
    <Fragment>
      <ul className="links-list">
        <li className="home-link">
          <ion-icon name="home-outline"></ion-icon>
        </li>
        <li className="gallery-link">
          <ion-icon name="images-outline"></ion-icon>
        </li>
        <li className="projects-link">
          <ion-icon name="briefcase-outline"></ion-icon>
        </li>
        <li className="members-link">
          <ion-icon name="person-outline"></ion-icon>
        </li>
        <li className="about-link">
          <ion-icon name="information-circle-outline"></ion-icon>
        </li>
      </ul>
    </Fragment>
  );
}

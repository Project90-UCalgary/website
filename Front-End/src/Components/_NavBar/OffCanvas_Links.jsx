// Libraries
import { Fragment } from "react";

// Style
import "../Style/_NavBar/OffCanvas_Links.scss";

export default function Links(props) {
  return (
    <Fragment>
      <ul className="links-list">
        <li className="link">
          <ion-icon name="home-outline"></ion-icon>
          <p className="item-text">Home</p>
        </li>
        <li className="link">
          <ion-icon name="images-outline"></ion-icon>
          <p className="item-text">Gallery</p>
        </li>
        <li className="link">
          <ion-icon name="briefcase-outline"></ion-icon>
          <p className="item-text">Projects</p>
        </li>
        <li className="link">
          <ion-icon name="person-outline"></ion-icon>
          <p className="item-text">Members</p>
        </li>
        <li className="link">
          <ion-icon name="information-circle-outline"></ion-icon>
          <p className="item-text">About Us</p>
        </li>
      </ul>
    </Fragment>
  );
}

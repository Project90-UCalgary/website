// Libraries
import { Fragment } from "react";
import { Link } from "react-router-dom";

// Style
import "../Style/_NavBar/OffCanvas_Links.scss";

export default function Links(props) {
  return (
    <Fragment>
      <ul className="links-list">
        <Link to="/" className="link-component">
          <li className="link">
            <ion-icon name="home-outline"></ion-icon>
            <p className="item-text">Home</p>
          </li>
        </Link>
        <Link to="/gallery" className="link-component">
          <li className="link">
            <ion-icon name="images-outline"></ion-icon>
            <p className="item-text">Gallery</p>
          </li>
        </Link>
        <Link to="/projects" className="link-component">
          <li className="link">
            <ion-icon name="briefcase-outline"></ion-icon>
            <p className="item-text">Projects</p>
          </li>
        </Link>
        <Link to="/members" className="link-component">
          <li className="link">
            <ion-icon name="person-outline"></ion-icon>
            <p className="item-text">Members</p>
          </li>
        </Link>
        <Link to="/about" className="link-component">
          <li className="link">
            <ion-icon name="information-circle-outline"></ion-icon>
            <p className="item-text">About Us</p>
          </li>
        </Link>
      </ul>
    </Fragment>
  );
}

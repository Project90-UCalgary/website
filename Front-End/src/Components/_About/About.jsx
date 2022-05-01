// Libraries
import { Fragment } from "react";

// Style
import "../Style/_About/About.scss";

export default function Home() {
  return (
    <Fragment>
      <div className="about-container">
        <div className="story-container">
          <h1 className="story-title">
            <ion-icon name="mic-outline"></ion-icon> Our Story
          </h1>
          <hr></hr>
          <p>
            In the summer of 2011, six engineering students came together to
            start a club to provide engineering resources to communities that
            needed it the most. “We learned that 90% of the engineering
            resources in the world benefits 10% of the world” says John Ip,
            Project90’s second president, “hence our slogan from the beginning
            was ‘Engineering for the other 90%’." We wanted to use our
            engineering skills to serve communities in need.
          </p>
          <p>
            The co-founders also saw this club as an opportunity to connect
            their education and career goals with their shared Christian faith,
            so they founded Project90 on Jesus’ teachings to love people and
            serve the world. “It could be easy to see our engineering education
            and career as being segregated from our faith, but Project90
            challenged us to put the two together.”
          </p>
          <p>
            And so Project90 was born! Nigel Gutzmann, Project90 co-founder,
            served as the first president and the club worked on projects for
            Impact Ministries in Guatemala and HOPEthiopia, whom we still work
            with to this day. In the spring of 2012, Project90 sent a team of 10
            members to Haiti where they designed and planned several phases of a
            vocational college alongside HELPS International, a relief and
            development organization working in Haiti.
          </p>
          <p>
            Since 2011, Project90 has worked with local and international
            nonprofits empowering communities of all kinds. We’re thrilled to be
            a diverse student group representing a wide variety of
            nationalities, faiths, and degree majors. If you are interested in
            joining this legacy and designing a better world reach out to us!
            You can make a difference!
          </p>
        </div>
        <div className="purpose-container">
          <h1 className="purpose-title">
            <ion-icon name="medal-outline"></ion-icon> Our Purpose
          </h1>
          <hr></hr>
          <ul className="purpose-items">
            <li className="purpose-item">
              <b>To allow students the opportunity</b> to apply academic
              knowledge and facilitate change by partnering with existing NGOs
              on practical design projects.
            </li>
            <li className="purpose-item">
              <b>To engage the campus community</b> and raise awareness for
              international development through campus wide seminars and events.
            </li>
          </ul>
        </div>
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

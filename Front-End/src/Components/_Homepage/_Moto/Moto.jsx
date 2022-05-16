// Components
import More from "./_More";

// Style
import "../../Style/_Homepage/Moto.scss";

// Libraries
import { Fragment } from "react";

export default function Moto(props) {
  const { state, setState } = props;

  // Helper Functions
  const changeText = (state) => {
    const { showText } = state;
    if (!showText) {
      return setState((prevState) => ({ ...prevState, showText: true }));
    }
    return setState((prevState) => ({ ...prevState, showText: false }));
  };

  return (
    <Fragment>
      <div className="moto-container">
        <button className="join-us-btn">Join Us!</button>
        <p className="moto-text">
          Project 90 is a club that aims to provide engineering resources to
          communities that need it the most. We use values of volunteerism and
          apply technical knowledge to make a worldwide impact. In the words of
          Project90’s second president, John Ip, “We learned that 90% of the
          engineering resources in the world benefits 10% of the world, hence
          our slogan from the beginning was ‘Engineering for the other 90%’."
          We’re thrilled to be a diverse student group representing a wide
          variety of nationalities, faiths, and degree majors.
        </p>
        <More state={state} />
        <button className="show-more" onClick={() => changeText(state)}>
          Show More
        </button>
      </div>
    </Fragment>
  );
}

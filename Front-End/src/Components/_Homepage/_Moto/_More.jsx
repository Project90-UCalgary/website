// Libraries
import { Fragment } from "react";

export default function More(props) {
  const { state } = props;
  const display = state.showText ? "block" : "none";
  return (
    <Fragment>
      <p className="moto-text" style={{ display: display }}>
        In the summer of 2011, six engineering students came together to start a
        club to provide engineering resources to communities that needed it the
        most. Nigel Gutzmann, Project90 co-founder, served as the first
        president and the club worked on projects for Impact Ministries in
        Guatemala and HOPEthiopia, whom we still work with to this day. In the
        spring of 2012, Project90 sent a team of 10 members to Haiti where they
        designed and planned several phases of a vocational college alongside
        HELPS International, a relief and development organization working in
        Haiti. Since 2011, Project90 has worked with local and international
        nonprofits empowering communities of all kinds.
      </p>
    </Fragment>
  );
}

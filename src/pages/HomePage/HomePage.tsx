import "./HomePage.scss";
import Profile from "../../assets/images/profile.png";
import Arrow from "../../assets/images/arrow.png";
import { COPY } from "../../assets/copy/copy";

export const HomePage: React.FC = () => {
  return (
    <div className="page">
      <div className="background" />
      <div className="content">
        <div className="profile">
          <img src={Profile} alt="" className="img-wrapper" />
          <div className="left-text">
            <div className="heading">
              <h2>{COPY.PROFILE.HEADING}</h2>
              <img src={Arrow} alt="" className="arrow-wrapper" />
            </div>
            <div>{COPY.PROFILE.DESCRIPTION}</div>
            <div className="sub-text">{COPY.PROFILE.SUB_DESCRIPTION}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

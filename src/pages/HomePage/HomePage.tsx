import "./HomePage.scss";
import Profile from "../../assets/images/profile.png";
import Arrow from "../../assets/images/arrow.png";
import { COPY } from "../../assets/copy/copy";
import gsap from "gsap";

export const HomePage: React.FC = () => {
  gsap.to(".title", { duration: 0.01, opacity: 0 });
  gsap.to(".title", { duration: 3, opacity: 1 });

  return (
    <div className="page">
      <div className="background" />
      <div className="content">
        <div className="profile">
          <img src={Profile} alt="" className="img-wrapper" />
          <div className="left-text">
            <div className="heading">
              <h2 className="title">{COPY.PROFILE.HEADING}</h2>
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

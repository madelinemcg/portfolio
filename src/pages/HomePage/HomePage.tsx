import "./HomePage.scss";
import Profile from "../../assets/images/profile.png";
import Arrow from "../../assets/images/arrow.png";
import { COPY } from "../../assets/copy/copy";
import gsap from "gsap";
import { useEffect } from "react";
import { Button } from "@mui/material";

export const HomePage: React.FC = () => {
  useEffect(() => {
    gsap.to(".title", { duration: 0.01, opacity: 0 });
    gsap.to(".title", { duration: 2.5, opacity: 1 });
  });

  useEffect(() => {
    gsap.to(".profile-wrapper", { duration: 0.01, opacity: 0, x: -160 });
    gsap.to(".profile-wrapper", { duration: 1.5, opacity: 1, x: 0 });
  });

  return (
    <div className="page">
      <div className="background" />
      <div className="content">
        <div className="profile">
          <img src={Profile} alt="" className="profile-wrapper" />
          <div className="left-text">
            <div className="heading">
              <h2 className="title">{COPY.PROFILE.HEADING}</h2>
              <img src={Arrow} alt="" className="arrow-wrapper" />
            </div>
            <div>{COPY.PROFILE.DESCRIPTION}</div>
            <div className="sub-text">{COPY.PROFILE.SUB_DESCRIPTION}</div>
            <div className="heading">
              <h2 className="title">{COPY.EDUCATION.HEADING}</h2>
              <div className="sub-text">{COPY.EDUCATION.UMN.HEADING}</div>
              <div className="sub-text">{COPY.EDUCATION.UMN.DESCRIPTION}</div>
              <div></div>
              <div className="sub-text">{COPY.EDUCATION.NORM.HEADING}</div>
              <div className="sub-text">{COPY.EDUCATION.NORM.DESCRIPTION}</div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <Button href={""} className="button">
            Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

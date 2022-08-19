import "./Footer.scss";
import Github from "../../assets/images/github.png";
import Resume from "../../assets/images/resume.png";
import Linkedin from "../../assets/images/linkedin.png";

export const Footer: React.FC = () => {
  const imageList = [
    [Linkedin, "https://www.linkedin.com/in/madeline-mcginnis/"],
    [Github, "https://github.com/madelinemcg"],
    [Resume, ""],
  ];

  return (
    <div className="footer-wrapper">
      <div className="img-links">
        {imageList.map((image) => (
          <div>
            <a key={image[0]} href={image[1]}>
              <img src={image[0]} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

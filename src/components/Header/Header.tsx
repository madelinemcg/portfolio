import LogoIcon from "../../assets/images/logo.png";
import "./Header.scss";
import { Button, Link } from "@mui/material";
import { COPY } from "../../assets/copy/copy";

export const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <div className="content">
        <div className="img-wrapper">
          <img src={LogoIcon} alt="" />
        </div>
        <div className="spacer" />
        <div className="links">
          {COPY.HEADER.LINKS.map((link) => (
            <Link
              className="link"
              underline="hover"
              key={link.name}
              href={link.route}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="button-wrapper">
          <Button href={"https://github.com/madelinemcg"} className="button">
            Resume
          </Button>
        </div>
        <div className="hori-line" />
      </div>
    </div>
  );
};

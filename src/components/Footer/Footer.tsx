import "./Footer.scss";
import Github from "../../assets/images/github.png";
import Mail from "../../assets/images/mail.png";
import Linkedin from "../../assets/images/linkedin.png";
import { useMemo, useState } from "react";

export const Footer: React.FC = () => {
  const imageList = [
    [Linkedin, "https://www.linkedin.com/in/madeline-mcginnis/"],
    [Github, "https://github.com/madelinemcg"],
  ];

  const [isCopied, setIsCopied] = useState(false);

  const copyText = "madeline.g.mcginnis@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    handleCopied();

    setTimeout(() => {
      handleNotCopied();
    }, 2000);
  };

  const handleCopyText = useMemo(() => {
    if (isCopied) {
      return <p className="copy-text">copied!</p>;
    } else {
      return <p className="copy-text"></p>;
    }
  }, [isCopied]);

  const handleCopied = () => {
    setIsCopied(true);
  };

  const handleNotCopied = () => {
    setIsCopied(false);
  };

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
        <div className="copy-button" onClick={handleCopy}>
          <div>{handleCopyText}</div>
          <img src={Mail} alt="" />
        </div>
      </div>
    </div>
  );
};

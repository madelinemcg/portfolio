import { COPY } from "../../assets/copy/copy";
import "./ExperiencePage.scss";

export const ExperiencePage: React.FC = () => {
  const experienceList = [COPY.EXPERIENCE.BESTBUY, COPY.EXPERIENCE.UMN2, COPY.EXPERIENCE.BI, COPY.EXPERIENCE.UMN];

  return (
    <div className="page">
      <div className="background" />
      <div className="content">
        {experienceList.map((experience) => (
          <div className="experience" key={experience.title}>
            <h3>{experience.title}</h3>
            <div className="small-line" />
            <div className="description">{experience.description}</div>
            <div className="list-container">
              <div className="list">
                <h4>Tools:</h4>
                <div>{experience.tools}</div>
              </div>
              <div className="vert-line" />
              <div className="list">
                <h4>Practices:</h4>
                <div>{experience.practices}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

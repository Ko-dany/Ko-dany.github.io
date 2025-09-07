import { Icon } from "@iconify/react/dist/iconify.js";
import "../css/timelineitem.css";

interface TimelineItemProps {
  isExperience: boolean;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  duration: string;
  description: string;
  projectRepoUrl: string;
  projectDemoUrl: string;
  skills: string[];
  projectImg: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  isExperience = true,
  title,
  company,
  companyUrl,
  location,
  duration,
  description,
  projectRepoUrl,
  projectDemoUrl,
  skills,
  projectImg,
}) => {
  return (
    <>
      {isExperience ? (
        <ol className="timeline_list">
          <li className="timeline_list_item">
            <div className="timeline_circle" />
            <div className="timeline_content">
              <div className="timeline_sub_title">
                <div>
                  <span className="timeline_title">{title}</span>
                  <div className="timeline_company">
                    <a
                      className="company_link "
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                    <span>{` - ${location}`}</span>
                  </div>
                </div>
                <div className="timeline_duration">{duration}</div>
              </div>
              <p className="timeline_des">{description}</p>
            </div>
          </li>
        </ol>
      ) : (
        <ol className="timeline_list">
          <li className="timeline_list_item">
            <div className="timeline_circle" />
            <div className="timeline_content">
              <div className="timeline_sub_title">
                <div>
                  <span className="timeline_title">{title}</span>
                </div>
                <div className="timeline_duration">{duration}</div>
              </div>
              <div className="project_skills">
                <div className="labels">
                  {skills.map((skill, index) => {
                    return <label key={index}>{skill}</label>;
                  })}
                </div>
              </div>
              <div className="project_image_container">
                <img src={projectImg} alt={`${title}.png`} />
              </div>
              <p className="project_des">{description}</p>
              <div className="project_links">
                <a
                  href={projectRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project_link">
                    <Icon icon="mdi:github" className="icon" />
                  </div>
                </a>
                <a
                  href={projectDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project_link">
                    <Icon icon="mdi:open-in-new" className="icon" />
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ol>
      )}
    </>
  );
};

export default TimelineItem;

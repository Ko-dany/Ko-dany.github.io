import "../css/projectitem.css";

interface ProjectItemProps {
  title: string;
  projectUrl: string;
  skills: string[];
  projectImg: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  projectUrl,
  skills,
  projectImg,
}) => {
  return (
    <div className="project_card">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="project_image_container">
          <img src={projectImg} alt={`${title}.png`} />
        </div>
      </a>
      <div className="project_description">
        <p className="project_title">{title}</p>
        <div className="labels">
          {skills.map((skill, index) => {
            return <label key={index}>{skill}</label>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

import { Icon } from "@iconify/react";
import "../css/project.css";

const Project: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="top_header">
        <h1>Projects</h1>
      </div>
      <div className="project_container">
        <div className="project_card">
          <Icon icon="uil:briefcase-alt" className="icon" />
          <h3>Project 1</h3>
          <label>Short Explanation 1</label>
        </div>
        <div className="project_card">
          <Icon icon="uil:users-alt" className="icon" />
          <h3>Project 2</h3>
          <label>Short Explanation 2</label>
        </div>
        <div className="project_card">
          <Icon icon="uil:award-alt" className="icon" />
          <h3>Project 3</h3>
          <label>Short Explanation 3</label>
        </div>
      </div>
    </section>
  );
};

export default Project;

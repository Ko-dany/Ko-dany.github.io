import "../css/project.css";
import ProjectItem from "./ProjectItem";
import projects from "../data/projects";

const Project: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="top_header">
        <h1>Projects</h1>
        {/* <p>Click the image to visit the GitHub repository.</p> */}
        <p>This section is currently being fixed</p>
      </div>
      {/* <div className="project_container">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              title={project.title}
              projectUrl={project.projectUrl}
              skills={project.skills}
              projectImg={project.projectImg}
            />
          );
        })}
      </div> */}
    </section>
  );
};

export default Project;

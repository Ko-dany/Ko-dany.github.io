import projects from "../data/projects";
import TimelineItem from "./TimelineItem";
import "../css/timeline.css";

const Project: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="top_header">
        <h1>Projects</h1>
        {/* <p>Click the image to visit the GitHub repository.</p> */}
        <p>This section is currently being fixed</p>
      </div>
      <div className="timeline_container">
        <div className="timeline_item">
          {projects.map((project, index) => {
            return (
              <TimelineItem
                isExperience={false}
                key={index}
                title={project.title}
                duration={project.duration}
                description={project.description}
                projectRepoUrl={project.projectRepoUrl}
                projectDemoUrl={project.projectDemoUrl}
                skills={project.skills}
                projectImg={project.projectImg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;

import projects from "../data/projects";
import TimelineItem from "./TimelineItem";
import "../css/timeline.css";

const Project: React.FC = () => {
  return (
    <section className="section" id="projects">
      <div className="top_header">
        <h1>Projects & Contributions</h1>
        <p>My personal projects and open-source project contributions.</p>
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
                projectImgs={project.projectImgs}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;

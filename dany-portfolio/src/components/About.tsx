import "../css/project.css";
import Timeline from "./Timeline";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="top_header">
        <h1>About Me</h1>
      </div>
      <Timeline />
    </section>
  );
};

export default About;

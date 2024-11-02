import "../css/project.css";
import Timeline from "./Timeline";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="top_header">
        <h1>Exeperience</h1>
        <p>An overview of my professional journey.</p>
      </div>
      <Timeline />
    </section>
  );
};

export default About;

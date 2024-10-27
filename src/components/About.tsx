import "../css/project.css";
import Timeline from "./Timeline";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="top_header">
        <h1>About Me</h1>
        <p>Click the company name to visit the website.</p>
      </div>
      <Timeline />
    </section>
  );
};

export default About;

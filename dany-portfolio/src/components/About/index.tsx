// import { Icon } from "@iconify/react";
import "../../css/about.css";

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="top_header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about_info">
            <h3>My introduction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, quidem eaque, voluptas similique culpa dolore facere
              laboriosam cum sed enim inventore blanditiis veniam. Velit veniam
              aliquid exercitationem laudantium atque enim?
            </p>
            {/* <div className="about_btn">
              <button className="btn">
                Download CV <Icon icon="uil:import" className="icon" />
              </button>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="skills_box">
            <div className="skills_header">
              <h3>Frontend</h3>
            </div>
            <div className="skills_list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>Vue</span>
              <span>React</span>
              <span>Angular</span>
            </div>
          </div>
          <div className="skills_box">
            <div className="skills_header">
              <h3>Backend</h3>
            </div>
            <div className="skills_list">
              <span>PHP</span>
              <span>JAVA</span>
              <span>Python</span>
              <span>C++</span>
            </div>
          </div>
          <div className="skills_box">
            <div className="skills_header">
              <h3>Database</h3>
            </div>
            <div className="skills_list">
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

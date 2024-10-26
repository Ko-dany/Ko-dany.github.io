import { Icon } from "@iconify/react";
import "../../css/intro.css";
import ProfileImg from "../../images/profile.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Intro: React.FC = () => {
  const typewriter = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriter.current, {
      strings: ["DEVELOPER", "COLLABORATOR", "THINKER", "LEARNER", "ACHIEVER"],
      typeSpeed: 200,
      backSpeed: 200,
      backDelay: 500,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="intro_box" id="intro">
      <div className="intro_text">
        <div className="intro_name">
          <p>Hi! I'm Dany,</p>
          <p>
            I'm a <span className="typed_text" ref={typewriter}></span>
          </p>
        </div>
        <div className="intro_text_info">
          <ul>
            <li>Diploma in Computer Programming & Analysis (2026)</li>
            <li>DevOps Software Developer at VARLab</li>
            <li>Data Specialist at IMA Ltd</li>
            <li>I value team communication</li>
          </ul>
        </div>
        <div className="social_icons">
          <div className="intro_icon">
            <a
              href="https://www.linkedin.com/in/dahyun-dany-ko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="uil:linkedin-alt" className="icon" />
            </a>
          </div>
          <div className="intro_icon">
            <a
              href="https://github.com/Ko-dany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="uil:github-alt" className="icon" />
            </a>
          </div>
          <div className="intro_icon">
            <a
              href="https://www.instagram.com/go_dah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="uil:instagram" className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="intro_image">
        <div className="image">
          <img src={ProfileImg} alt="my_image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;

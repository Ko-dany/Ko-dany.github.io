import { Icon } from "@iconify/react";
import "../css/intro.css";
import ProfileImg from "../images/profile.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import roles from "../data/roles";

const Intro: React.FC = () => {
  const typewriter = useRef(null);

  useEffect(() => {
    const typed = new Typed(typewriter.current, {
      strings: roles,
      typeSpeed: 200,
      backSpeed: 50,
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
          <ul style={{ listStyleType: "none" }}>
            <li>📍 Waterloo / Kitchener, ON, Canada</li>
            <li>
              🚀 3rd-Year in{" "}
              <a
                className="company_link"
                href="https://www.conestogac.on.ca/fulltime/computer-programming-and-analysis/description?id=30948"
                target="_blank"
                rel="noopener noreferrer"
              >
                Computer Programming & Analysis
              </a>{" "}
              student at Conestoga College
            </li>
            <li>
              💼 Software Engineer at{" "}
              <a
                className="company_link"
                href="https://www.acceldata.io/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acceldata
              </a>
            </li>
            <li>
              💻 Experienced in{" "}
              <span>
                DevOps, Test Automation, and Apache open-source projects.
              </span>
            </li>
          </ul>
        </div>
        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/dahyun-dany-ko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="intro_icon">
              <Icon icon="uil:linkedin-alt" className="icon" />
            </div>
          </a>
          <a
            href="https://github.com/Ko-dany"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="intro_icon">
              <Icon icon="uil:github-alt" className="icon" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/go_dah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="intro_icon">
              <Icon icon="uil:instagram" className="icon" />
            </div>
          </a>
        </div>
      </div>
      <div className="intro_image_conatiner">
        <div className="intro_image">
          <img src={ProfileImg} alt="my_image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;

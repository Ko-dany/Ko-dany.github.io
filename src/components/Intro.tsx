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
          <ul>
            <li>Conestoga College, Waterloo, ON, Canada</li>
            <li>
              Available for co-op from <span>Jan 2024 to Aug 2025</span>
            </li>
            <li>
              Currently working on the DevOps team at{" "}
              <a
                className="company_link"
                href="https://www.linkedin.com/company/varlab-virtual-and-augmented-reality-lab/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                VARLab
              </a>
            </li>
            <li>Team collaboration and sustainable solutions</li>
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

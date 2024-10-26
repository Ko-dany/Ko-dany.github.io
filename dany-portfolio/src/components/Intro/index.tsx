import { Icon } from "@iconify/react";
import "../../css/intro.css";
import ProfileImg from "../../images/profile.jpg";

const Intro: React.FC = () => {
  return (
    <section className="intro_box" id="intro">
      <div className="intro_text">
        <div className="intro_text_card">
          <span>Dahyun Ko</span>
        </div>
        <div className="intro_name">
          <p>
            I'm <span className="typed_text"></span>
          </p>
        </div>
        <div className="intro_text_info">
          <p>Hello Hello Hello Hello Hello</p>
        </div>
        <div className="itro_text_btn">
          <button className="btn intro_btn">Hire Me</button>
          <button className="btn">
            Download CV <Icon icon="uil:file-alt" className="icon" />
          </button>
        </div>
        <div className="social_icons">
          <div className="intro_icon">
            <Icon icon="uil:instagram" className="icon" />
          </div>
          <div className="intro_icon">
            <Icon icon="uil:linkedin-alt" className="icon" />
          </div>
          <div className="intro_icon">
            <Icon icon="uil:github-alt" className="icon" />
          </div>
        </div>
      </div>
      <div className="intro_image">
        <div className="image">
          <img src={ProfileImg} alt="my_image" />
        </div>
      </div>
      {/* <div className="scroll_icon_box">
        <a href="#about" className="scroll_btn">
          <Icon icon="uil:mouse-alt" className="icon" />
          <p>Scroll Down</p>
        </a>
      </div> */}
    </section>
  );
};

export default Intro;

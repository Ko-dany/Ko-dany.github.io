import { Icon } from "@iconify/react";
import "../../css/footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="top_footer">
        <p>Dahyun Ko</p>
      </div>
      <div className="middle_footer">
        <ul className="footer_menu">
          <li className="footer_menu_list">
            <a href="#intro">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div className="footer_social_icons">
        <div className="icon">
          <Icon icon="uil:instagram" className="icon" />
        </div>
        <div className="icon">
          <Icon icon="uil:linkedin-alt" className="icon" />
        </div>
        <div className="icon">
          <Icon icon="uil:github-alt" className="icon" />
        </div>
      </div>
      <div className="bottom_footer">
        <p>
          Developed By{" "}
          <a href="#intro" style={{ textDecoration: "none" }}>
            Dahyun Ko
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

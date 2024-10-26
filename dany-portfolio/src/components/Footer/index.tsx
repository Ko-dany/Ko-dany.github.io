import { Icon } from "@iconify/react";
import "../../css/footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
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
        <a
          href="https://www.linkedin.com/in/dahyun-dany-ko/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="uil:linkedin-alt" className="icon" />
        </a>
        <a
          href="https://github.com/Ko-dany"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="uil:github-alt" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/go_dah/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="uil:instagram" className="icon" />
        </a>
      </div>
      <div className="bottom_footer">
        <p>Developed By Dahyun Ko</p>
      </div>
    </footer>
  );
};

export default Footer;

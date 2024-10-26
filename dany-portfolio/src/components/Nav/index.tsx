import { Icon } from "@iconify/react";
import "../../css/nav.css";

const Nav: React.FC = () => {
  return (
    <nav id="header">
      <div className="nav_logo">
        <p className="nav_name">Dany Ko</p>
      </div>
      <div className="nav_menu" id="navMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#intro" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav_link">
              About
            </a>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav_link">
              Projects
            </a>
          </li>
          <li className="nav_list">
            <a
              href="c:\Users\iamgo\Desktop\취업\Resume\Dahyun_Ko_Detail_Resume.pdf"
              className="nav_link"
            >
              Resume <Icon icon="uil:file-alt" className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

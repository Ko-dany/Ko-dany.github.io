import { Icon } from "@iconify/react";
import "../css/nav.css";
import { useState } from "react";
import resume from "../../public/assets/Dahyun_Ko_Resume.pdf";

const Nav: React.FC = () => {
  const [isMouseOver, SetIsMouseOver] = useState(false);
  const onMouseOverHandler = () => {
    SetIsMouseOver((prev) => !prev);
  };

  return (
    <nav id="header">
      <div className="nav_logo">
        <p className="nav_name">
          <a
            href="#intro"
            className={
              isMouseOver ? "animate__animated animate__fadeInDown" : ""
            }
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOverHandler}
          >
            {isMouseOver ? "고 다현" : "Dany Ko"}
          </a>
        </p>
      </div>
      <div className="nav_menu" id="navMenu">
        <ul className="nav_menu_list">
          <li className="nav_list_item">
            <a href="#intro" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_list_item">
            <a href="#about" className="nav_link">
              Experience
            </a>
          </li>
          <li className="nav_list_item">
            <a href="#projects" className="nav_link">
              Projects
            </a>
          </li>
          <li className="nav_list_item">
            <a href="#skills" className="nav_link">
              Skills
            </a>
          </li>
          <li className="nav_list_item">
            <a
              className="nav_link"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
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

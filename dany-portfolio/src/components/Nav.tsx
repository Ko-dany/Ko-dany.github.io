import { Icon } from "@iconify/react";
import "../css/nav.css";
import { useState } from "react";

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
            {isMouseOver ? "Dahyun Ko" : "Dany Ko"}
          </a>
        </p>
      </div>
      <div className="nav_menu" id="navMenu">
        <ul className="nav_menu_list">
          <li className="nav_list_item">
            <a href="#about" className="nav_link">
              About
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
              href="../assets/Dahyun_Ko_Resume.pdf"
              download="Dahyun_Ko_Resume.pdf"
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

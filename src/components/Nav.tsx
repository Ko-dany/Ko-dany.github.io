import { Icon } from "@iconify/react";
import "../css/nav.css";
import { useState } from "react";
import resume from "/assets/Dahyun_Ko_Resume.pdf";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

const Nav: React.FC = () => {
  const [isMouseOverHome, SetIsMouseOverHome] = useState(false);

  return (
    <nav id="header">
      <div className="nav_name">
        <motion.a
          href="#intro"
          className={`nav_name_content ${
            isMouseOverHome ? "animate__animated" : ""
          }`}
          onMouseEnter={() => SetIsMouseOverHome(true)}
          onMouseLeave={() => SetIsMouseOverHome(false)}
        >
          <AnimatePresence mode="wait">
            {isMouseOverHome ? (
              <motion.span
                key="name-ko"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                고 다현
              </motion.span>
            ) : (
              <motion.span
                key="name-en"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Dany Ko
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </div>
      <div className="nav_menu" id="navMenu">
        <ul className="nav_menu_list">
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

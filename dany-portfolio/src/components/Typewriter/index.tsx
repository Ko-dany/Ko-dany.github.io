import { useEffect, useState } from "react";

import "../../css/typewriter.css";

const titles: string[] = [
  "DAHYUN KO",
  "DEVELOPER",
  "THINKER",
  "LEARNER",
  "COLLABORATOR",
  "ACHIEVER",
  "CREATOR",
];

const Typewriter: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle: string = titles[currentTitleIndex];

  const animationStyle = {
    animation: `typing 5s steps(${currentTitle.length}, end) infinite`,
  };

  return (
    <div className="typewriter_container">
      <p className="typed-out" style={{ ...animationStyle }}>
        {currentTitle}
      </p>
    </div>
  );
};
export default Typewriter;

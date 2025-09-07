import asfCont1 from "/src/images/asf-contributions/asf-contributions-1.png";
import asfCont2 from "/src/images/asf-contributions/asf-contributions-2.png";
import asfCont3 from "/src/images/asf-contributions/asf-contributions-3.png";

import gnomeoAdv1 from "/src/images/gnomeo-butterfly/gnomeo-butterfly-1.png";
import gnomeoAdv2 from "/src/images/gnomeo-butterfly/gnomeo-butterfly-2.png";
import gnomeoAdv3 from "/src/images/gnomeo-butterfly/gnomeo-butterfly-3.png";

import turtleAdv1 from "/src/images/turtle-advanture/turtle-advanture-1.png";
import turtleAdv2 from "/src/images/turtle-advanture/turtle-advanture-2.png";
import turtleAdv3 from "/src/images/turtle-advanture/turtle-advanture-3.png";

export default [
  {
    title: "Open Source Contribution: Apache Ambari Project",
    duration: "Aug 2025",
    description:
      "Contributed to Apache Ambari by fixing logic issues in the 3.0.0 release and resolving bugs introduced during the migration to JDK 17 (e.g., Jetty 11 symlink compatibility).",
    projectRepoUrl:
      "https://github.com/apache/ambari/issues?q=state%3Aclosed%20is%3Apr%20author%3AKo-dany",
    skills: ["Java", "Python", "JDK 17 Migration", "Apache Ambari"],
    projectImgs: [asfCont1, asfCont2, asfCont3],
  },
  {
    title: "2D Unity Game: Gnomeo and the Butterfly",
    duration: "Mar 2024",
    description:
      "Collaboraed with a 9-person team using Azure DevOps to manage projects, improving workflow and productivity. Developed a game-wide audio manager and implemented scene flow management.",
    projectRepoUrl:
      "https://github.com/JoshLanesmith/Pandasaurus_2D_Platformer",
    projectDemoUrl: "https://topchickenturtle.itch.io/gnomeo-and-the-butterfly",
    skills: ["C#", "Azure DevOps", "Unity", "Git & GitHub"],
    projectImgs: [gnomeoAdv1, gnomeoAdv2, gnomeoAdv3],
  },
  {
    title: "2D Unity Game: Turtle Adventure",
    duration: "Jan 2024",
    description:
      "Collaborated with a 4-person team to create a 2D platformer game with Unity (C#). Implemented a dynamic collision system, and developed game-clear conditions for an immersive player experience.",
    projectRepoUrl: "https://github.com/Ko-dany/Unity__2D_Platformer",
    projectDemoUrl: "https://topchickenturtle.itch.io/topturtlechicken",
    skills: ["C#", "Unity", "Git & GitHub"],
    projectImgs: [turtleAdv1, turtleAdv2, turtleAdv3],
  },
];

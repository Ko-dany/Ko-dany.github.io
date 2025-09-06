import "../css/skills.css";

const Skill: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="top_header">
        <h1>Technical Skills</h1>
        <p>Technologies I love to play with.</p>
      </div>
      <div className="skills_list">
        <div className="skills_item" style={{ textAlign: "center" }}>
          {/* Languages */}
          <img src="https://img.shields.io/badge/C%23-006600?style=flat&logo=C%23&logoColor=white" />
          <img src="https://img.shields.io/badge/Java-037590?style=flat&logo=openjdk&logoColor=white" />
          <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=javascript&logoColor=white" />
          <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white" />
          <img src="https://img.shields.io/badge/Python-004088?style=flat&logo=Python&logoColor=white" />
          <br />
          {/* Framework & Library */}
          <img src="https://img.shields.io/badge/ASP.NET-A9225C?style=flat&logo=dotnet&logoColor=white" />
          <img src="https://img.shields.io/badge/React.js-61DAFB?style=flat&logo=React&logoColor=black" />
          <img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" />
          <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
          <img src="https://img.shields.io/badge/Mysql-feca57?style=flat&logo=MySql&logoColor=black" />
          <br />
          {/* Others */}
          <img src="https://img.shields.io/badge/Azure-008AD7?style=flat&logo=azuredevops&logoColor=white" />
          <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=Jenkins&logoColor=white" />
          <img src="https://img.shields.io/badge/Linux-E95420?style=flat&logo=linux&logoColor=white" />
          <img src="https://img.shields.io/badge/Selenium-43B02A?style=flat&logo=selenium&logoColor=white" />
          <img src="https://img.shields.io/badge/Apache Hadoop-66CCFF?style=flat&logo=apachehadoop&logoColor=black" />
        </div>
      </div>
    </section>
  );
};

export default Skill;

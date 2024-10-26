import "../../css/skills.css";

const Skill: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="top_header">
        <h1>Technical Skills</h1>
      </div>
      <div className="skills_list">
        <div className="skills_item" style={{ textAlign: "center" }}>
          <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white" />
          <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
          <img src="https://img.shields.io/badge/C%23-006600?style=for-the-badge&logo=C%23&logoColor=white" />
          <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
          <img src="https://img.shields.io/badge/Python-004088?style=for-the-badge&logo=Python&logoColor=white" />
          <br />
          <img src="https://img.shields.io/badge/ASP.NET-A9225C?style=for-the-badge&logo=dotnet&logoColor=white" />
          <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=React&logoColor=black" />
          <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" />
          <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" />
          <br />
          <img src="https://img.shields.io/badge/Mysql-feca57?style=for-the-badge&logo=MySql&logoColor=black" />
          <img src="https://img.shields.io/badge/DevOps-CB2E6D?style=for-the-badge&logo=azuredevops&logoColor=white" />
          <img src="https://img.shields.io/badge/Linux-E95420?style=for-the-badge&logo=linux&logoColor=white" />
          <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" />
          <img src="https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=Bitbucket&logoColor=white" />
        </div>
      </div>
    </section>
  );
};

export default Skill;

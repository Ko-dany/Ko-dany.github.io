import "./App.css";
import Nav from "./components/Nav.tsx";
import Intro from "./components/Intro.tsx";
import Exeperience from "./components/Exeperience.tsx";
import Project from "./components/Project.tsx";
import Skill from "./components/Skill.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="wrapper">
        <Intro />
        <Exeperience />
        <Project />
        <Skill />
        <Footer />
      </main>
    </>
  );
}

export default App;

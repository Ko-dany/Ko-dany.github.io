import "./App.css";
import Nav from "./components/Nav.tsx";
import Intro from "./components/Intro.tsx";
import About from "./components/About.tsx";
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
        <About />
        <Project />
        <Skill />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

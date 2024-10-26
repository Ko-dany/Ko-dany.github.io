import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

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

import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Project from "./components/Project";
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

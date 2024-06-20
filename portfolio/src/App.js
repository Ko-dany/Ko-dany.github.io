import Nav from "./components/nav";
import "./css/App.css";

function App() {
  return (
    <div>
      <nav id="section-nav">
        <Nav />
      </nav>
      <header id="section-header">
        <a className="title-section">HEADER</a>
      </header>
      <main id="section-main">
        <a className="title-section">MAIN</a>
      </main>
      <footer id="section-footer">
        <a className="title-section">FOOTER</a>
      </footer>
    </div>
  );
}

export default App;

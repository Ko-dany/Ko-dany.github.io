import Nav from "./components/nav";
import "./css/App.css";

function App() {
  return (
    <div>
      <nav id="section-nav">
        <Nav />
      </nav>
      <header id="section-header">
        <a id="header">HEADER</a>
      </header>
      <main id="section-main">
        <a id="main">MAIN</a>
      </main>
      <footer id="section-footer">
        <a id="footer">FOOTER</a>
      </footer>
    </div>
  );
}

export default App;

import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Nav from "./Components/Nav";
import Feature from "./Components/Feature";
import TwoColumnLayout from "./Components/TwoColumnLayout";
// import IntroLayer from "./Components/IntroLayer";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      {/* <IntroLayer /> */}
      <header>
        <Nav />
      </header>
      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">hello</h1>
          </div>
        </section>
        <TwoColumnLayout />
        <Feature />
        <Feature />
        <section>Section £</section>
      </main>
      <footer>
        <h2>Links</h2>
        <ul>
          <li>Home</li>
          <li>Designs</li>
          <li>Apps</li>
          <li>About me</li>
          <li>Contact</li>
        </ul>
      </footer>
    </>
  );
}

export default App;

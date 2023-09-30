import "./App.scss";
import Lenis from "@studio-freight/lenis";
import Nav from "./Components/Nav";
import Feature from "./Components/Feature";
import TwoColumnLayout from "./Components/TwoColumnLayout";
import { useLayoutEffect } from "react";
import Hero from "./Components/Hero";
// import IntroLayer from "./Components/IntroLayer";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useLayoutEffect(() => {}, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <section className="section">
          <Hero />
        </section>
        <TwoColumnLayout />
        <Feature />
        <Feature />
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

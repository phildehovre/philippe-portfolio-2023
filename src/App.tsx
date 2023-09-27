import "./App.scss";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import IntroLayer from "./Components/IntroLayer";
import Nav from "./Components/Nav";

function App() {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".title", {
        scrollTrigger: {
          trigger: ".title",
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          pin: true,
          markers: true,
        },
        duration: 5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* <IntroLayer /> */}
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <h1 className="title">This is a test</h1>
        </section>
        <section>Section 2</section>
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

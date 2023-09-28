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
      const tlEnter = gsap
        .timeline()
        .set(".title", { x: -window.innerWidth * 0.8 })
        .to(".title", {
          x: 0,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(".title", { duration: 1, ease: "power2.inOut" })
        .to(".title", {
          x: window.innerWidth * 0.8,
          duration: 1,
          ease: "power2.inOut",
        });

      ScrollTrigger.create({
        trigger: ".container",
        start: "center center",
        end: "bottom 50%",
        scrub: 1,
        pin: ".container",
        animation: tlEnter,
        // markers: true,
        onEnter: () => {
          ScrollTrigger.create({
            trigger: ".container",
            start: "50% center",
            end: "bottom 50%",
            scrub: 1,
            pin: ".title",
            animation: tlEnter,
            markers: true,
            onEnter: () => {
              console.log("enter");
            },
          });
        },
        onLeave: () => {
          gsap.to(".title", {
            xPercent: 200, // Adjust this value as needed
            duration: 1,
            ease: "power2.inOut",
          });
        },
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
        <section className="section">
          <div className="container">
            {/* <h1 className="title">This is a test</h1> */}
            <h1 className="title">hello</h1>
          </div>
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

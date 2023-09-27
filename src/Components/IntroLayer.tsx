import "./IntroLayer.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import SplitType from "split-type";

function IntroLayer() {
  useLayoutEffect(() => {
    const title = new SplitType(".title");
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.set(title.chars, { y: 150, fontSize: 100 });
      heroTl
        .to(title.chars, {
          y: 0,
          stagger: 0.06,
          ease: "elastic.out(0.5, 0.5)",
        })
        .to(".intro-layer", {
          y: "-100%",
          delay: 1,
          duration: 1.5,
          ease: "elastic.out(0.5, 0.5)",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="intro-layer">
      <h1 className="title">Philippe De Hovre</h1>
    </div>
  );
}

export default IntroLayer;

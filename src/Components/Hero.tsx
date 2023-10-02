import { useEffect, useLayoutEffect, useState } from "react";
import "./Hero.scss";
import gsap, { Circ } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { welcomeText, myNameIsText } from "../assets/text";
import { useSectionInView } from "../lib/useElementInViewport";

function Hero() {
  gsap.registerPlugin(ScrollTrigger);
  const { ref } = useSectionInView("Home");

  const [welcome, setWelcome] = useState<string[]>([]);
  const [myNameIs, setMyNameIs] = useState<string[]>([]);

  useEffect(() => {
    setMyNameIs(myNameIsText);
    setWelcome(welcomeText);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.set("nav", { y: -100 })
        .set(".mynameis-wrapper", { opacity: 0, y: 100 })
        .set(".headline-ctn", { y: "10%" })
        .set("#swipe-instructions", {
          opacity: 0,
          scale: 0,
        })
        .to(".welcome-wrapper", {
          y: "-95%",
          duration: 5,
          ease: Circ.easeInOut,
        })
        .to(".headline-ctn", {
          y: "0%",
          duration: 1,
          ease: Circ.easeInOut,
        })
        .to(".mynameis-wrapper", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(0.5, 0.5)",
        })
        .to("#swipe-instructions", {
          opacity: 1,
          scale: 1,
          ease: "elastic.out(0.5, 0.5)",
        })
        .to("nav", {
          y: 0,
          ease: "bounce.out",
        });

      gsap.to("#swipe-instructions", {
        scrollTrigger: {
          trigger: ".hero-ctn",
          start: "top top",
          end: "bottom top",
          scrub: true,
          anticipatePin: 1,
        },
        opacity: 0,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  const renderWelcome = () => {
    return welcome.map((message: string, index) => {
      return (
        <h1 className="title" key={message + index}>
          {message}
        </h1>
      );
    });
  };

  return (
    <div className="hero-ctn" ref={ref}>
      <div className="headline-ctn">
        <div className="welcome-ctn">
          <span className="welcome-wrapper">{renderWelcome()}</span>
        </div>
        <div className="welcome-ctn">
          <span className="mynameis-wrapper">
            <h1> I am Philippe</h1>
          </span>
        </div>
      </div>
      <div id="swipe-instructions">
        Scroll down or swipe up for some case studies
        <div id="swipe-btn"></div>
      </div>
    </div>
  );
}

export default Hero;

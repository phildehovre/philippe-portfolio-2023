import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Feature.scss";

function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tlLeft = gsap.timeline();
      tlLeft.set(leftRef.current, { x: -window.innerWidth * 0.6, opacity: 0 });
      tlLeft.to(leftRef.current, { x: 0, opacity: 1, duration: 1.5 });

      const tlRight = gsap.timeline();
      tlRight.set(rightRef.current, { x: window.innerWidth * 0.6, opacity: 0 });
      tlRight.to(rightRef.current, { x: 0, opacity: 1, duration: 1.5 });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom 80%",
        animation: tlLeft,
        pin: leftRef.current,
        scrub: 0.5,
        // markers: true,
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom 80%",
        animation: tlRight,
        pin: rightRef.current,
        scrub: 0.5,
        // markers: true,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="feature-ctn" ref={containerRef}>
      <div className="left" ref={leftRef}>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur,
        </p>
      </div>
      <div className="right" ref={rightRef}>
        <h1 className="title-lg" ref={titleRef}>
          Here is the big title
        </h1>
      </div>
    </div>
  );
}

export default Hero;

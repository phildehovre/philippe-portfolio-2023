import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Feature.scss";
import { StringOptionsWithImporter } from "sass";

function Hero(props: { title: string; content: string }) {
  const { title, content } = props;
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
        <p>{content}</p>
      </div>
      <div className="right" ref={rightRef}>
        <h1 className="title-lg" ref={titleRef}>
          {title}
        </h1>
      </div>
    </div>
  );
}

export default Hero;

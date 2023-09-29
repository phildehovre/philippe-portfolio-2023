import gsap from "gsap";
import { useLayoutEffect } from "react";
import _ScrollTrigger from "gsap/ScrollTrigger";

function SlidingInAndOut() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tlEnter = gsap
        .timeline()
        .from(".title", { x: -window.innerWidth * 0.8 })
        .to(".title", {
          x: 0,
          ease: "power2.inOut",
          duration: 10,
        })
        .to(".title", {
          x: window.innerWidth * 0.2,
          ease: "power2.inOut",
        });
      // .to(".title", {
      //   opacity: 0,
      // });

      ScrollTrigger.create({
        trigger: ".container",
        start: "center center",
        end: "100% top",
        scrub: true,
        pin: ".container",
        animation: tlEnter,
        markers: {
          startColor: "pink",
          endColor: "blue",
        },
        onEnter: () => {
          ScrollTrigger.create({
            trigger: ".container",
            start: "50% center",
            end: "bottom top",
            scrub: 1,
            pin: ".title",
            animation: tlEnter,
            markers: {
              startColor: "green",
              endColor: "red",
            },
            onEnter: () => {
              console.log("enter");
            },
          });
        },
      });
    });

    return () => ctx.kill();
  }, []);
  return (
    <section className="section">
      <div className="container">
        {/* <h1 className="title">This is a test</h1> */}
        <h1 className="title">hello</h1>
      </div>
    </section>
  );
}

export default SlidingInAndOut;

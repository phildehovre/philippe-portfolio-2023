import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Nav.scss";

function Nav() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "main",
        start: "50px 5%",
        toggleClass: { targets: "nav", className: "nav--scrolled" },
        // markers: true,
      });
    });

    return () => ctx.revert();
  });

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Designs</li>
        <li>Apps</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;

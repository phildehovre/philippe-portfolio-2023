import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Nav.scss";
import { useActiveSectionContext } from "../context/activeElementContext";
import { links } from "../lib/types";

function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

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

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <li
          key={link.name}
          onClick={() => {
            setActiveSection(link.name);
            setTimeOfLastClick(Date.now());
          }}
          className={activeSection === link.name ? "active" : ""}
        >
          {link.name}
        </li>
      );
    });
  };

  return (
    <nav>
      <ul>{renderLinks()}</ul>
    </nav>
  );
}

export default Nav;

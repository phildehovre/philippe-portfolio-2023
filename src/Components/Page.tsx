import Feature from "./Feature";
import Projects from "./Projects";
import Hero from "./Hero";
import { aboutMeText } from "../assets/text";
import Experience from "./Experience";
import "./Page.scss";
import Skills from "./Skills";

function Page() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Feature content={aboutMeText} title="About Me" />
      <Experience />
    </main>
  );
}

export default Page;

import { useSectionInView } from "../lib/useElementInViewport";
import "./Skills.scss";

function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <div ref={ref} className="skills-ctn">
      Skills
    </div>
  );
}

export default Skills;

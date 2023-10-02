import { useSectionInView } from "../lib/useElementInViewport";

function Experience() {
  const { ref } = useSectionInView("Experience");
  return <h1 ref={ref}>Experience</h1>;
}

export default Experience;

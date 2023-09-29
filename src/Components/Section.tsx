import React from "react";

function Section(props: { children: React.ReactNode; bg: string }) {
  const { children, bg } = props;

  const styles = {
    backgroundColor: bg,
  };
  return <div style={styles}>{children}</div>;
}

export default Section;

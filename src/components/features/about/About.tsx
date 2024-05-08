import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className={styles.about}>
      <h1>About</h1>
    </section>
  );
});

About.displayName = "About";

export default About;

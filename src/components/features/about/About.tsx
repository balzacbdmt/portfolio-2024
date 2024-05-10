import { forwardRef } from "react";
import styles from "./About.module.scss";
import Row from "./row/Row";
import { experiences } from "../../../constants/data";

const About = forwardRef<HTMLElement>((_props, ref) => {

  const rowRender = experiences.map((experience) => <Row key={experience.company} experience={experience} />);

  return (
    <section ref={ref} className={styles.about}>
      <div className={styles.leftColumn}>
        <h1>
          About&nbsp;<span>me</span>
        </h1>
        <div className={styles.socials}>
          <a>Get my resume</a>
          {/* Github icon */}
          {/* Linkedin icon */}
          {/* Instagram icon */}
          {/* Mail icon */}
        </div>
      </div>
      <div className={styles.content}>
        <h2>Relevant experiences</h2>
        {rowRender}
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;

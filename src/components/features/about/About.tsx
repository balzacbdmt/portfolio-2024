import { forwardRef } from "react";
import styles from "./About.module.scss";
import Row from "./row/Row";
import { Icon } from "@iconify/react";
import { experiences } from "../../../constants/data";

const About = forwardRef<HTMLElement>((_props, ref) => {
  const rowRender = experiences.map((experience) => (
    <Row key={experience.company} experience={experience} />
  ));

  return (
    <section ref={ref} className={styles.about}>
      <div className={styles.leftColumn}>
        <h1>
          About&nbsp;<span>me</span>
        </h1>
        <div className={styles.socials}>
          <a href="/CV_Balzac_Baudemont_2024.pdf" target="_blank">
            Get my resume
          </a>
          <div className={styles.buttons}>
            <a
              href="https://github.com/balzacbdmt"
              target="_blank"
              rel="noreferrer"
            >
              <Icon color="white" fontSize={38} icon="mdi:github" />
            </a>
            <a
              href="https://www.linkedin.com/in/balzac-baudemont-796a011b1/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon color="white" fontSize={38} icon="mdi:linkedin" />
            </a>
            <a
              href="https://www.instagram.com/balzac.ode/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon color="white" fontSize={38} icon="mdi:instagram" />
            </a>
            <a
              href="mailto:balzac.baudemont@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon color="white" fontSize={38} icon="material-symbols:mail" />
            </a>
          </div>
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

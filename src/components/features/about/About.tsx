import { forwardRef } from "react";
import styles from "./About.module.scss";

const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className={styles.about}>
      <h1>About me</h1>
      <div className={styles.content}>
        <h2>Relevant experiences</h2>
        {/* TODO Should be a component that import data from a JSON */}
        <div className={styles.row}>
          <p className={styles.date}>Jan 2024 - present</p>
          <div>
            <h3>Frontend Engineer • Hopserve</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque feugiat id purus vel tempor. Nullam euismod tellus
              non magna fermentum placerat. Mauris tellus erat, tempor a
              fermentum nec, malesuada at ante. Fusce dapibus sollicitudin mi,
              eu dapibus risus porta non.
            </p>
            <div className={styles.pillContainer}>
                <p className={styles.pill}>Nuxt</p>
                <p className={styles.pill}>Typescript</p>
                <p className={styles.pill}>D3</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.date}>Jan 2024 - present</p>
          <div>
            <h3>Frontend Engineer • Hopserve</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque feugiat id purus vel tempor. Nullam euismod tellus
              non magna fermentum placerat. Mauris tellus erat, tempor a
              fermentum nec, malesuada at ante. Fusce dapibus sollicitudin mi,
              eu dapibus risus porta non.
            </p>
            <div className={styles.pillContainer}>
                <p className={styles.pill}>Nuxt</p>
                <p className={styles.pill}>Typescript</p>
                <p className={styles.pill}>D3</p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.date}>Jan 2024 - present</p>
          <div>
            <h3>Frontend Engineer • Hopserve</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque feugiat id purus vel tempor. Nullam euismod tellus
              non magna fermentum placerat. Mauris tellus erat, tempor a
              fermentum nec, malesuada at ante. Fusce dapibus sollicitudin mi,
              eu dapibus risus porta non.
            </p>
            <div className={styles.pillContainer}>
                <p className={styles.pill}>Nuxt</p>
                <p className={styles.pill}>Typescript</p>
                <p className={styles.pill}>D3</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomLeftContainer}>
        <a>Get my resume</a>
        {/* Github icon */}
        {/* Linkedin icon */}
        {/* Instagram icon */}
        {/* Mail icon */}
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;

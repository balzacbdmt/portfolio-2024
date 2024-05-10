import { Experience } from "../../../../constants/types";
import styles from "./Row.module.scss";

interface Props {
  experience: Experience;
}

const Row = ({ experience }: Props) => {
  const skills = experience.skills.map((skill) => (
    <p key={skill} className={styles.pill}>
      {skill}
    </p>
  ));

  return (
    <div className={styles.row}>
      <p className={styles.date}>{experience.date}</p>
      <div>
        <h3>
          {experience.title} • {experience.company}
        </h3>
        <p>{experience.description}</p>
        {/* TODO: Shoud be a shared component */}
        <div className={styles.pillContainer}>{skills}</div>
      </div>
    </div>
  );
};

export default Row;

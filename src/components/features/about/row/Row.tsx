import { Icon } from "@iconify/react/dist/iconify.js";
import { Experience } from "../../../../constants/types";
import Pill from "../../../shared/pill/Pill";
import styles from "./Row.module.scss";
import { useState } from "react";

interface Props {
  experience: Experience;
}

const Row = ({ experience }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };
  
  const skills = experience.skills.map((skill) => (
    <Pill key={skill} text={skill} />
  ));

  const tasks = experience.tasks.map((task) => <li key={task}>{task}</li>);

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.row}
      href={experience.url}
      target="_blank"
      rel="noreferrer"
    >
      <p className={styles.date}>{experience.date}</p>
      <div>
        <div className={styles.title}>
          <h3>
            {experience.title} • {experience.company}
          </h3>
          <Icon icon="akar-icons:link-out" className={isHovered ? styles.yellow : styles.white} />
        </div>
        <ul>{tasks}</ul>
        <div className={styles.pillContainer}>{skills}</div>
      </div>
    </a>
  );
};

export default Row;

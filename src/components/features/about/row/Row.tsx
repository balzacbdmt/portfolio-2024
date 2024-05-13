import { Icon } from "@iconify/react/dist/iconify.js";
import { Skill } from "../../../../constants/types";
import Pill from "../../../shared/pill/Pill";
import styles from "./Row.module.scss";
import { useState } from "react";

interface Props {
  title: string;
  company?: string;
  tasks?: string[];
  description?: string;
  date?: string;
  skills?: Skill[];
  url?: string;
}

const Row = ({ title, company, tasks, description, date, skills, url }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };
  
  const skillsRender = skills?.length && skills.map((skill) => (
    <Pill key={skill} text={skill} />
  ));

  const tasksRender = tasks?.length && tasks.map((task) => <li key={task}>{task}</li>);

  return (
    <a
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.row}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <p className={styles.date}>{date}</p>
      <div>
        <div className={styles.title}>
          <h3>
            {title}{company && ` • ${company}`}
          </h3>
          <Icon icon="akar-icons:link-out" className={isHovered ? styles.yellow : styles.white} />
        </div>
        <ul>{tasksRender}</ul>
        <p>{description}</p>
        <div className={styles.pillContainer}>{skillsRender}</div>
      </div>
    </a>
  );
};

export default Row;

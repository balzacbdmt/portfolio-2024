import styles from "./Pill.module.scss";

interface Props {
  text: string;
}

const Pill = ({ text }: Props) => {
  return <div className={styles.pill}>{text}</div>;
};

export default Pill;

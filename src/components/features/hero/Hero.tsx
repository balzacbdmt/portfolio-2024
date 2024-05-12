import styles from "./Hero.module.scss";
import Avatar from "../../../assets/avatar.png";
import ScrollIcon from "../../shared/scrollIcon/ScrollIcon";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <h1>Hi, my name is Balzac.</h1>
        <h2>
          I&apos;m a front-end developer based in Paris who loves creating
          beautiful user interfaces.
        </h2>
      </div>
      <img className={styles.avatar} src={Avatar} alt="" />
      <div className={styles.CTAScrollDown}>
        <p>Scroll down to sail into my journey</p>
        <ScrollIcon />
      </div>
    </section>
  );
};

export default Hero;

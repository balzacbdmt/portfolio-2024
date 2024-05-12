import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  const moveDot = (event: MouseEvent) => {
    setTimeout(() => {
      if (dotRef.current) {
        dotRef.current.style.left = `${String(event.pageX - 5)}px`;
        dotRef.current.style.top = `${String(event.pageY - 5)}px`;
      }
    }, 75);
  };

  useEffect(() => {
    document.removeEventListener("mousemove", moveDot);
    document.removeEventListener("wheel", moveDot);
    document.addEventListener("mousemove", moveDot);
    document.addEventListener("wheel", moveDot);
  }),
    [];

  return <div ref={dotRef} className={styles.dot}></div>;
};

export default Cursor;

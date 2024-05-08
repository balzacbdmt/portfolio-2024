import { useEffect, useRef } from "react";
import About from "./components/features/about/About";
import Hero from "./components/features/hero/Hero";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const sectionsRefs = [heroRef, aboutRef];

  const handleScroll = (event: WheelEvent): void => {
    // TODO: Fix to avoid to wait end of wheelevent before scroll
    // TODO: Condition to avoid issue while scrolling up in first section
    // TODO: Condition to avoid issue while scrolling down in Last section
    event.preventDefault();
    const currentIndex: number = sectionsRefs.findIndex(
      (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          return rect.top > 0 && rect.bottom > window.innerHeight;
        }
        return null;
      }
    );
    let nextIndex = currentIndex;
    if (event.deltaY < 0) {
      nextIndex = currentIndex - 2;
    }
    if (nextIndex === -3) {
      nextIndex = sectionsRefs.length - 2;
    }
    const nextSectionRef = sectionsRefs[nextIndex];
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  useEffect(() => {
    if (appRef.current) {
      // TODO repair it
      // appRef.current.addEventListener('wheel', handleScroll, { passive: false });
    }
  }, []);

  return (
    <div ref={appRef}>
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
    </div>
  );
};

export default App;

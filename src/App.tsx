import { useRef } from "react";
import About from "./components/features/about/About";
import Hero from "./components/features/hero/Hero";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={appRef}>
      <Hero />
      <About />
    </div>
  );
};

export default App;

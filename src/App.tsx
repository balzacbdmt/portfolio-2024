import { useRef } from "react";
import About from "./components/features/about/About";
import Hero from "./components/features/hero/Hero";
import Cursor from "./components/shared/cursor/Cursor";

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={appRef}>
      <Cursor />
      <Hero />
      <About />
    </div>
  );
};

export default App;

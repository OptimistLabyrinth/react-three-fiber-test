import { useEffect, useState } from "react";
import Canvas01 from "./canvas_01";
import Canvas02 from "./canvas_02";
import "./app.scss";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", onScreenResize);
    return () => {};
  }, []);

  function onScreenResize(ev) {
    setScreenWidth((prev) => window.innerWidth);
    setScreenHeight((prev) => window.innerHeight);
  }

  return (
    <>
      <header className="container-app-header">
        <h1>Using Three.js inside React Components</h1>
      </header>
      <section className="container-app-section">
        <div className="canvas-container">
          <Canvas01 screenWidth={screenWidth} screenHeight={screenHeight} />
        </div>
        <div className="canvas-container">
          <Canvas02 screenWidth={screenWidth} screenHeight={screenHeight} />
        </div>
      </section>
      <div>Screen Width: {screenWidth}</div>
      <div>Screen Height: {screenHeight}</div>
    </>
  );
}

export default App;

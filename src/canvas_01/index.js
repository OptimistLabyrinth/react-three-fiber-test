import { useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import testObj from "../objs/tmp/test1.obj";

function Canvas01(props) {
  const canvasRef = useRef(null);

  return (
    <>
      <Suspense
        fallback={
          <>
            <div>loading...</div>
          </>
        }
      >
        <Canvas ref={canvasRef}>
          <InsideCanvas canvas={canvasRef} />
        </Canvas>
      </Suspense>
    </>
  );
}

function InsideCanvas(props) {
  const controlsRef = useRef(null);

  function onDbclick() {
    console.log("dbclick");
    controlsRef.current.reset();
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} />
      <BodySketch onDbclick={onDbclick} />
      <ambientLight args={[0x404040, 1]} />
      <directionalLight args={[0x999999, 1]} position={[0, 2, 5]} />
      <directionalLight args={[0x999999, 1]} position={[0, 2, -5]} />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableKeys={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxDistance={25}
        minDistance={2}
      />
    </>
  );
}

function BodySketch(props) {
  const loadedObj = useLoader(OBJLoader, testObj);

  return (
    <>
      <primitive object={loadedObj} onDoubleClick={props.onDbclick}>
        <meshLambertMaterial />
      </primitive>
    </>
  );
}

export default Canvas01;

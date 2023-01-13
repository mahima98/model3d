import "./index.css";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Cup from "./Cup";

function App() {
  return (
    <div className="App flex bg-red-50">
      <Canvas camera={{ position: [10, 10, 20], fov: 40 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <ContactShadows
          opacity={1}
          scale={20}
          blur={5}
          far={6}
          resolution={256}
        />
        <Suspense fallback={null}>
          <Cup position={[-6, 0, 1]} />
          <Cup position={[-3, 0, 0]} />
          <Cup position={[0, 0, -1]} />
          <Cup position={[3, 0, -2]} />
          <Cup position={[6, 0, -3]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

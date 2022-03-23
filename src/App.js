
import './index.css';
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, } from '@react-three/drei';
import { Suspense } from 'react';
import gsap from 'gsap';
import Cup from './Cup';

function App() {
  const [hovered, set] = useState()
  const [x, setX] = useState(1)
  const [y, setY] = useState(1)
  const [z, setZ] = useState(1)

  return (
    <div className='App flex bg-red-200'>
      <Canvas className='bg-yellow-500' camera={{ position: [10, 10, 20], fov: 40 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <ContactShadows opacity={1} scale={10} blur={5} far={6} resolution={256} />
        <Suspense fallback={null}>
          <Cup position={[-4, 0, 4]} scale={[x, y, z]}
            onPointerOver={() => {
              setX(2); setY(2); setZ(2)
            }}
            onPointerOut={() => {
              setX(1); setY(1); setZ(1)
            }} />
          <Cup position={[-2, 0, 3]} scale={[1, 1, 1]} />
          <Cup position={[0, 0, 2]} scale={[1, 1, 1]} />
          <Cup position={[2, 0, 1]} scale={[1, 1, 1]} />
          <Cup position={[4, 0, 0]} scale={[1, 1, 1]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

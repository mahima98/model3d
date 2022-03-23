import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei';
import Cup from './Cup';
import './App.css';


function App() {
  return (
    <>
      <Canvas camera={{ position: [10, 10, 20], fov: 40 }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh position={[0, 4, 0]}>
          <boxGeometry args={[3, 4, 2]} />
          <meshStandardMaterial />
        </mesh>

        <ContactShadows opacity={1} scale={10} blur={5} far={6} resolution={256} />
        <OrbitControls />

        <Suspense fallback={null}>
          <Cup />
        </Suspense>
        <OrbitControls />
      </Canvas>

    </>
  );
}

export default App;

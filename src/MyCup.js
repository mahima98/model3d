import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { Suspense } from 'react';

import Cup from './Cup';
export default function MyCup({ color }) {
    return (
        <div >
            <Canvas className='bg-yellow-500' camera={{ position: [10, 10, 20], fov: 40 }}>
                <ambientLight intensity={0.1} />
                <directionalLight color={color} position={[0, 0, 5]} />
                <ContactShadows opacity={1} scale={10} blur={5} far={6} resolution={256} />
                <Suspense fallback={null}>
                    <Cup args={[10, 10, 10]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

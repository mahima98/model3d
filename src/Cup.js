import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'


export default function Cup({ ...props }) {
  gsap.registerPlugin(CSSPlugin)
  const { nodes, materials } = useGLTF('./model.gltf')
  const myMesh = React.useRef()

  const [active, setActive] = useState(false)
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = Math.sin(clock.getElapsedTime())
    // rotates - clock.getElapsedTime()
  })

  return (
    <group {...props} dispose={null}>
      <animated.mesh className="cursor-pointer" onPointerOver={() => setActive(!active)} onPointerOut={() => setActive(!active)} scale={scale} ref={myMesh} geometry={nodes.Cup.geometry} material={materials['Material.002']} />
    </group>
  )
}

useGLTF.preload('./model.gltf')

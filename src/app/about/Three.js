'use client'

import * as THREE from "three"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { DDSLoader } from "three-stdlib"
import { Suspense, useState } from "react"

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader())

const Scene = () => {
  const materials = useLoader(MTLLoader, "/logo.mtl")
  const obj = useLoader(OBJLoader, "/cat.obj", (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  const [rotationDirection, setRotationDirection] = useState(1) // 1: 반시계, -1: 시계
  let rotationSpeed = 0.004 // 고정된 회전 속도
  let rotationInterval = 2 // 회전 방향 변경 간격 (초 단위)

  useFrame((state, delta, frame) => {
    if (obj.rotation.y > 0.5) {
      setRotationDirection(-1)
    } else if (obj.rotation.y < -0.5) {
      setRotationDirection(1)
    }
    obj.rotation.y += rotationDirection * rotationSpeed
  })

  return (
    <>
      <primitive
        object={obj}
        scale={window.innerWidth > 1600 ? 2.5 : 2.5}
        position={[0, -1, 0]}
      />
    </>
  )
}

export default function Three() {
  return (
    <div className="Three_wrap">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[0, 5, 0]} intensity={5} />
        <Suspense fallback={null}>
          {/* @ts-expect-error Async Server Component */}
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

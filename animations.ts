'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)

  const { positions, velocities } = useMemo(() => {
    const count = 280
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6

      velocities[i * 3] = (Math.random() - 0.5) * 0.003
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      velocities[i * 3 + 2] = 0
    }
    return { positions, velocities }
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    const pos = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < pos.length / 3; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]

      if (pos[i * 3] > 8) pos[i * 3] = -8
      if (pos[i * 3] < -8) pos[i * 3] = 8
      if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5
      if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 5
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y += 0.0003
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#2D5F8A"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null)

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = []
    const count = 18
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 14
      const y1 = (Math.random() - 0.5) * 8
      const x2 = x1 + (Math.random() - 0.5) * 3
      const y2 = y1 + (Math.random() - 0.5) * 3
      points.push(new THREE.Vector3(x1, y1, 0))
      points.push(new THREE.Vector3(x2, y2, 0))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [])

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.material.opacity =
        0.06 + Math.sin(clock.elapsedTime * 0.4) * 0.03
    }
  })

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#1A3A5C" transparent opacity={0.08} />
    </lineSegments>
  )
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none three-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
        <ConnectionLines />
      </Canvas>
    </div>
  )
}

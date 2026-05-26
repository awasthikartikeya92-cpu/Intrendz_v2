"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Scene & camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.z = 8

    // Particles
    const count = 260
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      velocities[i * 3] = (Math.random() - 0.5) * 0.003
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.002
    }
    const pgeo = new THREE.BufferGeometry()
    pgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pmat = new THREE.PointsMaterial({ size: 0.025, color: 0x2D5F8A, transparent: true, opacity: 0.5, sizeAttenuation: true })
    const particles = new THREE.Points(pgeo, pmat)
    scene.add(particles)

    // Lines
    const linePts: THREE.Vector3[] = []
    for (let i = 0; i < 18; i++) {
      const x1 = (Math.random() - 0.5) * 14
      const y1 = (Math.random() - 0.5) * 8
      linePts.push(new THREE.Vector3(x1, y1, 0))
      linePts.push(new THREE.Vector3(x1 + (Math.random() - 0.5) * 3, y1 + (Math.random() - 0.5) * 3, 0))
    }
    const lgeo = new THREE.BufferGeometry().setFromPoints(linePts)
    const lmat = new THREE.LineBasicMaterial({ color: 0x1A3A5C, transparent: true, opacity: 0.07 })
    const lines = new THREE.LineSegments(lgeo, lmat)
    scene.add(lines)

    // Animation
    let animId: number
    let elapsed = 0
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      elapsed += delta

      const pos = pgeo.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i * 3]
        pos[i * 3 + 1] += velocities[i * 3 + 1]
        if (pos[i * 3] > 8) pos[i * 3] = -8
        if (pos[i * 3] < -8) pos[i * 3] = 8
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5
        if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 5
      }
      pgeo.attributes.position.needsUpdate = true
      particles.rotation.y += 0.0003
      lmat.opacity = 0.06 + Math.sin(elapsed * 0.4) * 0.03

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const onResize = () => {
      if (!mount) return
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  )
}

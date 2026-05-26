import type { Object3DNode } from '@react-three/fiber'
import type * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    points: Object3DNode<THREE.Points, typeof THREE.Points>
    lineSegments: Object3DNode<THREE.LineSegments, typeof THREE.LineSegments>
    bufferGeometry: Object3DNode<THREE.BufferGeometry, typeof THREE.BufferGeometry>
    bufferAttribute: Object3DNode<THREE.BufferAttribute, typeof THREE.BufferAttribute>
    pointsMaterial: Object3DNode<THREE.PointsMaterial, typeof THREE.PointsMaterial>
    lineBasicMaterial: Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>
  }
}

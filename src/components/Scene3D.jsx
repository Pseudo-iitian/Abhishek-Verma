import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FintechWorld from './FintechWorld'
import FallbackFintechScene from './FallbackFintechScene'
import ErrorBoundary from './ErrorBoundary'

gsap.registerPlugin(ScrollTrigger)

// Camera waypoints moving through the distributed fintech architecture
const CAMERA_WAYPOINTS = [
  // 1. Overview: Hero & Core Ledger
  { pos: new THREE.Vector3(0, 0, 7.5), look: new THREE.Vector3(0, 0, 0) },
  // 2. Trajectory: Rapipay Microservices Panning
  { pos: new THREE.Vector3(-2.8, 1.4, 6.2), look: new THREE.Vector3(-0.5, 0.2, 0) },
  // 3. Stack: Distributed Cluster & Database
  { pos: new THREE.Vector3(2.5, -1.2, 5.8), look: new THREE.Vector3(0.4, -0.2, 0) },
  // 4. Case Studies: Systems Shipped (LMS, Digio, DB tuning)
  { pos: new THREE.Vector3(-1.8, -2.2, 6.0), look: new THREE.Vector3(0, -0.6, 0) },
  // 5. Connect: Panoramic Terminal View
  { pos: new THREE.Vector3(0, 2.8, 8.2), look: new THREE.Vector3(0, 0, 0) },
]

function isWebGLSupported() {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: false }) ||
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: false }) ||
      canvas.getContext('experimental-webgl')
    return !!(window.WebGLRenderingContext && gl)
  } catch {
    return false
  }
}

function CameraController({ mouseRef }) {
  const { camera } = useThree()
  const scrollProgress = useRef({ value: 0 })
  const currentPos = useRef(CAMERA_WAYPOINTS[0].pos.clone())
  const currentLook = useRef(CAMERA_WAYPOINTS[0].look.clone())

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress.current.value = self.progress
      },
    })
    return () => st.kill()
  }, [])

  useFrame(() => {
    const p = Math.max(0, Math.min(1, scrollProgress.current.value))
    const totalSegments = CAMERA_WAYPOINTS.length - 1
    const segment = Math.min(Math.floor(p * totalSegments), totalSegments - 1)
    const segmentProgress = (p * totalSegments) - segment

    const wpA = CAMERA_WAYPOINTS[segment]
    const wpB = CAMERA_WAYPOINTS[segment + 1]

    const targetPos = new THREE.Vector3().lerpVectors(wpA.pos, wpB.pos, segmentProgress)
    const targetLook = new THREE.Vector3().lerpVectors(wpA.look, wpB.look, segmentProgress)

    // Interactive mouse parallax
    const mx = (mouseRef.current.x || 0) * 0.6
    const my = (mouseRef.current.y || 0) * 0.4
    targetPos.x += mx
    targetPos.y += my

    currentPos.current.lerp(targetPos, 0.08)
    currentLook.current.lerp(targetLook, 0.08)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentLook.current)
  })

  return null
}

export default function Scene3D() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    setHasWebGL(isWebGLSupported())
  }, [])

  const handlePointerMove = (e) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  if (!hasWebGL) {
    return <FallbackFintechScene />
  }

  return (
    <ErrorBoundary fallback={<FallbackFintechScene />}>
      <div
        onPointerMove={handlePointerMove}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 30%, #081224 0%, #030712 70%, #010308 100%)',
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 48, near: 0.1, far: 100 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'default',
            failIfMajorPerformanceCaveat: false,
          }}
        >
          <CameraController mouseRef={mouseRef} />
          <FintechWorld mouseRef={mouseRef} />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}

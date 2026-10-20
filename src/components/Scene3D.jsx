import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FintechWorld from './FintechWorld'
import FallbackFintechScene from './FallbackFintechScene'
import ErrorBoundary from './ErrorBoundary'

gsap.registerPlugin(ScrollTrigger)

// Camera waypoints smoothly tracking the systematic portfolio sections:
// 1. Hero -> 2. About -> 3. Experience -> 4. Education -> 5. Skills -> 6. Projects -> 7. Contact
const CAMERA_WAYPOINTS = [
  { pos: new THREE.Vector3(0, 0.2, 8.0), look: new THREE.Vector3(0.8, 0, 0) },
  { pos: new THREE.Vector3(-0.5, 0.6, 7.5), look: new THREE.Vector3(1.2, 0.1, 0) },
  { pos: new THREE.Vector3(-0.8, 1.0, 7.2), look: new THREE.Vector3(1.4, 0.2, 0) },
  { pos: new THREE.Vector3(0.2, 0.8, 7.0), look: new THREE.Vector3(1.3, 0.1, 0) },
  { pos: new THREE.Vector3(0.6, -0.6, 6.8), look: new THREE.Vector3(1.4, -0.2, 0) },
  { pos: new THREE.Vector3(-0.4, -1.2, 7.0), look: new THREE.Vector3(1.0, -0.4, 0) },
  { pos: new THREE.Vector3(0, 1.8, 9.0), look: new THREE.Vector3(0.5, 0, 0) },
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

    // Interactive subtle mouse parallax
    const mx = (mouseRef.current.x || 0) * 0.4
    const my = (mouseRef.current.y || 0) * 0.25
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
          background: 'radial-gradient(ellipse at 75% 35%, #0b192e 0%, #030712 65%, #010308 100%)',
        }}
      >
        <Canvas
          camera={{ position: [0, 0.2, 8.0], fov: 46, near: 0.1, far: 100 }}
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

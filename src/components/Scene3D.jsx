import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import KashiWorld from './KashiWorld'

gsap.registerPlugin(ScrollTrigger)

// Camera keyframes corresponding to the 5 Varanasi Ghat locations
const CAMERA_WAYPOINTS = [
  // Scene 1 — Assi Ghat: Introduction (0–20%)
  { pos: new THREE.Vector3(9.5, 7.8, -18.5), look: new THREE.Vector3(-4.5, 2.8, -16.5) },
  // Scene 2 — The Old City: About & Experience (20–40%)
  { pos: new THREE.Vector3(5.8, 4.4, -6.5), look: new THREE.Vector3(-6.5, 3.2, -5.5) },
  // Scene 3 — The Engineering Ghats: Skills (40–60%)
  { pos: new THREE.Vector3(6.5, 5.0, 4.2), look: new THREE.Vector3(-5.2, 3.6, 4.0) },
  // Scene 4 — Project Ghats: Case Studies (60–85%)
  { pos: new THREE.Vector3(7.2, 4.6, 14.2), look: new THREE.Vector3(-5.0, 3.2, 13.5) },
  // Scene 5 — The Final Ghat: Sunset & Contact (85–100%)
  { pos: new THREE.Vector3(10.5, 7.2, 22.8), look: new THREE.Vector3(-3.5, 3.4, 20.2) },
]

function CameraController({ mouseRef }) {
  const { camera } = useThree()
  const scrollProgress = useRef({ value: 0 })
  const currentPos = useRef(CAMERA_WAYPOINTS[0].pos.clone())
  const currentLook = useRef(CAMERA_WAYPOINTS[0].look.clone())

  useEffect(() => {
    // Setup GSAP scroll trigger mapped to document height
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress.current.value = self.progress
      },
    })

    return () => {
      st.kill()
    }
  }, [])

  useFrame(() => {
    const p = Math.max(0, Math.min(1, scrollProgress.current.value))
    const totalSegments = CAMERA_WAYPOINTS.length - 1
    const segment = Math.min(Math.floor(p * totalSegments), totalSegments - 1)
    const segmentProgress = (p * totalSegments) - segment

    const wpA = CAMERA_WAYPOINTS[segment]
    const wpB = CAMERA_WAYPOINTS[segment + 1]

    // Smoothly interpolate desired waypoint
    const targetPos = new THREE.Vector3().lerpVectors(wpA.pos, wpB.pos, segmentProgress)
    const targetLook = new THREE.Vector3().lerpVectors(wpA.look, wpB.look, segmentProgress)

    // Add subtle mouse parallax
    const mx = (mouseRef.current.x || 0) * 0.7
    const my = (mouseRef.current.y || 0) * 0.5
    targetPos.x += mx
    targetPos.y += my

    // Smooth camera damping
    currentPos.current.lerp(targetPos, 0.08)
    currentLook.current.lerp(targetLook, 0.08)

    camera.position.copy(currentPos.current)
    camera.lookAt(currentLook.current)
  })

  return null
}

export default function Scene3D() {
  const mouseRef = useRef({ x: 0, y: 0 })

  const handlePointerMove = (e) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #070913 0%, #111a2e 50%, #1e1327 100%)',
      }}
    >
      <Canvas
        camera={{ position: [9.5, 7.8, -18.5], fov: 45, near: 0.1, far: 200 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <CameraController mouseRef={mouseRef} />
        <KashiWorld />
      </Canvas>
    </div>
  )
}

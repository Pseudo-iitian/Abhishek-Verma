import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Atmospheric floating particles: Ganga Aarti embers, golden dust motes, and twilight fireflies.
 */
export default function FloatingParticles({ count = 350 }) {
  const pointsRef = useRef()

  const [positions, scales, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sc = new Float32Array(count)
    const sp = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Spread across the miniature city and river
      pos[i * 3] = (Math.random() - 0.4) * 45
      pos[i * 3 + 1] = 0.5 + Math.random() * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50

      sc[i] = Math.random() * 0.12 + 0.04
      sp[i * 3] = (Math.random() - 0.5) * 0.004
      sp[i * 3 + 1] = 0.003 + Math.random() * 0.008 // gentle rise like incense / Aarti embers
      sp[i * 3 + 2] = -0.003 - Math.random() * 0.005 // gentle river breeze drift
    }
    return [pos, sc, sp]
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    const posAttr = pointsRef.current.geometry.attributes.position
    const pos = posAttr.array

    for (let i = 0; i < count; i++) {
      pos[i * 3] += speeds[i * 3]
      pos[i * 3 + 1] += speeds[i * 3 + 1]
      pos[i * 3 + 2] += speeds[i * 3 + 2]

      // Reset when floating too high or too far
      if (pos[i * 3 + 1] > 14) {
        pos[i * 3 + 1] = 0.5
      }
      if (pos[i * 3 + 2] < -25) {
        pos[i * 3 + 2] = 25
      }
    }
    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color="#fbbf24" // warm golden amber ember
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

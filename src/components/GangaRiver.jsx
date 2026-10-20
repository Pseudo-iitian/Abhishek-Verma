import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Animated Ganga River with flowing wave vertex displacement and floating glowing diyas.
 */
export default function GangaRiver({ diyaCount = 18 }) {
  const meshRef = useRef()
  const diyasGroupRef = useRef()

  // Generate floating diya positions along the river
  const diyas = useMemo(() => {
    return Array.from({ length: diyaCount }, (_, i) => ({
      id: i,
      x: 3.5 + Math.random() * 9, // floating in river waters
      z: -22 + (i * 44) / diyaCount + (Math.random() - 0.5) * 3,
      speed: 0.008 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2,
      flickerSpeed: 3 + Math.random() * 4,
      scale: 0.22 + Math.random() * 0.1,
    }))
  }, [diyaCount])

  // Custom vertex wave distortion for the river surface
  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (meshRef.current) {
      const position = meshRef.current.geometry.attributes.position
      for (let i = 0; i < position.count; i++) {
        const u = position.getX(i)
        const v = position.getY(i)
        // Gentle wave equation
        const z =
          Math.sin(u * 0.4 + t * 1.2) * 0.08 +
          Math.cos(v * 0.35 + t * 0.9) * 0.06 +
          Math.sin((u + v) * 0.2 + t * 0.6) * 0.04
        position.setZ(i, z)
      }
      position.needsUpdate = true
      meshRef.current.geometry.computeVertexNormals()
    }

    // Animate floating diyas
    if (diyasGroupRef.current) {
      diyasGroupRef.current.children.forEach((diyaMesh, index) => {
        const data = diyas[index]
        if (!data) return

        // River current moves diyas slowly along -z
        diyaMesh.position.z -= data.speed
        if (diyaMesh.position.z < -24) {
          diyaMesh.position.z = 22
        }

        // Bobbing on the waves
        const waveY =
          Math.sin(diyaMesh.position.x * 0.4 + t * 1.2) * 0.08 +
          Math.cos(diyaMesh.position.z * 0.35 + t * 0.9) * 0.06
        diyaMesh.position.y = waveY + 0.05
        diyaMesh.rotation.z = Math.sin(t * 1.5 + data.phase) * 0.08
        diyaMesh.rotation.x = Math.cos(t * 1.2 + data.phase) * 0.08
      })
    }
  })

  return (
    <group>
      {/* Ganga Water Surface */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[7, -0.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[26, 60, 48, 64]} />
        <meshStandardMaterial
          color="#0d2b35" // Deep sacred Ganga river hue
          roughness={0.15}
          metalness={0.85}
          transparent
          opacity={0.92}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Floating Diyas (Offering lamps on the Ganga) */}
      <group ref={diyasGroupRef}>
        {diyas.map((d) => (
          <group key={d.id} position={[d.x, 0.02, d.z]} scale={d.scale}>
            {/* Clay / Leaf Diya Bowl */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.45, 0.25, 0.18, 12]} />
              <meshStandardMaterial color="#8b4513" roughness={0.9} />
            </mesh>
            {/* Golden Marigold Petals */}
            <mesh position={[0, 0.09, 0]}>
              <torusGeometry args={[0.35, 0.08, 6, 12]} />
              <meshStandardMaterial color="#f59e0b" roughness={0.7} />
            </mesh>
            {/* Flame */}
            <mesh position={[0, 0.22, 0]}>
              <coneGeometry args={[0.12, 0.3, 8]} />
              <meshBasicMaterial color="#ffedd5" />
            </mesh>
            {/* Flame Glow Light */}
            <pointLight
              color="#fb923c"
              intensity={0.65}
              distance={2.4}
              decay={2}
              position={[0, 0.3, 0]}
            />
          </group>
        ))}
      </group>
    </group>
  )
}

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Animated Ganga River with flowing wave vertex displacement and floating glowing diyas.
 */
export default function GangaRiver({ diyaCount = 28 }) {
  const meshRef = useRef()
  const diyasGroupRef = useRef()

  // Generate floating diya positions along the river
  const diyas = useMemo(() => {
    return Array.from({ length: diyaCount }, (_, i) => ({
      id: i,
      x: 3.2 + Math.random() * 11, // distributed across the flowing river
      z: -26 + (i * 54) / diyaCount + (Math.random() - 0.5) * 2.5,
      speed: 0.009 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2,
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
        // Multi-frequency wave equation simulating gentle river flow
        const z =
          Math.sin(u * 0.35 + t * 1.4) * 0.09 +
          Math.cos(v * 0.3 + t * 1.0) * 0.07 +
          Math.sin((u * 0.5 + v * 0.5) + t * 0.8) * 0.04
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

        // River current moves diyas slowly downstream (-z direction)
        diyaMesh.position.z -= data.speed
        if (diyaMesh.position.z < -28) {
          diyaMesh.position.z = 26
        }

        // Bobbing on the waves
        const waveY =
          Math.sin(diyaMesh.position.x * 0.35 + t * 1.4) * 0.09 +
          Math.cos(diyaMesh.position.z * 0.3 + t * 1.0) * 0.07
        diyaMesh.position.y = waveY + 0.04
        diyaMesh.rotation.z = Math.sin(t * 1.6 + data.phase) * 0.08
        diyaMesh.rotation.x = Math.cos(t * 1.3 + data.phase) * 0.08
      })
    }
  })

  return (
    <group>
      {/* Sacred Ganga Water Surface */}
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[8, -0.05, 0]}
        receiveShadow
      >
        <planeGeometry args={[30, 68, 64, 80]} />
        <meshStandardMaterial
          color="#0b242e" // Deep sacred Ganga river hue
          roughness={0.12}
          metalness={0.88}
          transparent
          opacity={0.94}
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Floating Diyas (Offering lamps on the Ganga) */}
      <group ref={diyasGroupRef}>
        {diyas.map((d) => (
          <group key={d.id} position={[d.x, 0.02, d.z]} scale={d.scale}>
            {/* Clay / Leaf Diya Bowl */}
            <mesh position={[0, 0, 0]} castShadow>
              <cylinderGeometry args={[0.45, 0.25, 0.18, 12]} />
              <meshStandardMaterial color="#8b4513" roughness={0.9} />
            </mesh>
            {/* Golden Marigold Petals */}
            <mesh position={[0, 0.09, 0]}>
              <torusGeometry args={[0.35, 0.09, 6, 12]} />
              <meshStandardMaterial color="#f59e0b" roughness={0.65} />
            </mesh>
            {/* Flame */}
            <mesh position={[0, 0.22, 0]}>
              <coneGeometry args={[0.12, 0.3, 8]} />
              <meshBasicMaterial color="#ffedd5" />
            </mesh>
            {/* Diya Flame Warm Glow */}
            <pointLight
              color="#fb923c"
              intensity={0.75}
              distance={2.8}
              decay={2}
              position={[0, 0.3, 0]}
            />
          </group>
        ))}
      </group>
    </group>
  )
}

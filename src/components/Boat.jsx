import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Traditional Wooden Boat (Naav) of Varanasi gently floating on the Ganga.
 */
export default function Boat({
  position = [3, 0.1, 0],
  rotation = [0, 0, 0],
  scale = 1,
  woodColor = '#5c2d13',
  hullColor = '#3e1e0d',
  lantern = true,
  bobSpeed = 1.3,
  bobPhase = 0,
}) {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.getElapsedTime()
    // Realistic boat heave, pitch, and roll on the river current
    groupRef.current.position.y =
      position[1] + Math.sin(t * bobSpeed + bobPhase) * 0.07
    groupRef.current.rotation.z =
      rotation[2] + Math.sin(t * (bobSpeed * 1.1) + bobPhase) * 0.04
    groupRef.current.rotation.x =
      rotation[0] + Math.cos(t * (bobSpeed * 0.9) + bobPhase) * 0.05
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* 1. Main Hull */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <boxGeometry args={[1.2, 0.45, 4.4]} />
        <meshStandardMaterial color={hullColor} roughness={0.85} />
      </mesh>

      {/* 2. Pointed Prow (Bow) */}
      <mesh position={[0, 0.32, 2.45]} rotation={[Math.PI / 8, 0, 0]}>
        <coneGeometry args={[0.62, 1.1, 4]} rotation={[0, Math.PI / 4, 0]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>

      {/* 3. Pointed Stern */}
      <mesh position={[0, 0.32, -2.45]} rotation={[-Math.PI / 8, 0, 0]}>
        <coneGeometry args={[0.62, 1.1, 4]} rotation={[0, Math.PI / 4, 0]} />
        <meshStandardMaterial color={woodColor} roughness={0.8} />
      </mesh>

      {/* 4. Cross Wooden Benches */}
      {[-1.2, 0, 1.2].map((zPos, idx) => (
        <mesh key={idx} position={[0, 0.42, zPos]}>
          <boxGeometry args={[1.15, 0.08, 0.32]} />
          <meshStandardMaterial color="#78350f" roughness={0.7} />
        </mesh>
      ))}

      {/* 5. Resting Oars (Wooden paddles) */}
      <mesh
        position={[0.7, 0.45, 0.3]}
        rotation={[0.2, 0.1, -Math.PI / 6]}
      >
        <cylinderGeometry args={[0.035, 0.035, 2.6, 6]} />
        <meshStandardMaterial color="#92400e" roughness={0.75} />
      </mesh>
      <mesh
        position={[-0.7, 0.45, -0.3]}
        rotation={[-0.2, -0.1, Math.PI / 6]}
      >
        <cylinderGeometry args={[0.035, 0.035, 2.6, 6]} />
        <meshStandardMaterial color="#92400e" roughness={0.75} />
      </mesh>

      {/* 6. Hanging Prow Lantern */}
      {lantern && (
        <group position={[0, 0.75, 2.4]}>
          {/* Wooden Lantern Post */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.025, 0.025, 0.6, 6]} />
            <meshStandardMaterial color="#451a03" />
          </mesh>
          {/* Brass Lantern Cage */}
          <mesh position={[0, 0.52, 0]}>
            <octahedronGeometry args={[0.16, 0]} />
            <meshStandardMaterial
              color="#fbbf24"
              emissive="#f59e0b"
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>
          {/* Lantern Light Glow */}
          <pointLight
            color="#f97316"
            intensity={0.85}
            distance={3.5}
            decay={2}
            position={[0, 0.52, 0]}
          />
        </group>
      )}
    </group>
  )
}

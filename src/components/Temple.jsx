import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Traditional Kashi Temple with tiered Shikhara spire, Amalaka, and glowing sanctum.
 */
export default function Temple({
  position = [0, 0, 0],
  scale = 1,
  height = 7,
  color = '#b76e3c',
  trimColor = '#944f24',
  flagColor = '#f97316',
}) {
  const flagRef = useRef()

  // Subtle flutter of the saffron dhwaja flag in the river breeze
  useFrame((state) => {
    if (flagRef.current) {
      const t = state.clock.getElapsedTime()
      flagRef.current.rotation.y = Math.sin(t * 3.5) * 0.25
      flagRef.current.rotation.z = Math.cos(t * 2.8) * 0.1
    }
  })

  return (
    <group position={position} scale={scale}>
      {/* 1. Stepped Plinth Foundation */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.8, 4.2]} />
        <meshStandardMaterial color={trimColor} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.6, 0.4, 3.6]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>

      {/* 2. Sanctum Body (Garbhagriha walls) */}
      <mesh position={[0, 2.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.0, 2.4, 3.0]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>

      {/* 3. Carved Arched Sanctum Doorway */}
      <mesh position={[1.4, 1.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.35]} />
        <meshStandardMaterial color="#2d170a" roughness={0.9} />
      </mesh>
      {/* Sanctum Diya Glow */}
      <pointLight
        color="#fbbf24"
        intensity={1.2}
        distance={4.5}
        decay={2}
        position={[1.1, 1.8, 0]}
      />

      {/* 4. Mandapa Porch Roof */}
      <mesh position={[1.4, 2.8, 0]}>
        <boxGeometry args={[1.6, 0.35, 2.2]} />
        <meshStandardMaterial color={trimColor} roughness={0.8} />
      </mesh>

      {/* 5. Tiered Nagara Shikhara (Curvilinear spire soaring upwards) */}
      {/* Lower Shikhara Tier */}
      <mesh position={[0, 4.2, 0]} castShadow>
        <boxGeometry args={[2.5, 1.6, 2.5]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      {/* Mid Shikhara Tier */}
      <mesh position={[0, 5.5, 0]} castShadow>
        <boxGeometry args={[1.9, 1.4, 1.9]} />
        <meshStandardMaterial color={trimColor} roughness={0.8} />
      </mesh>
      {/* Upper Spire Pyramid */}
      <mesh position={[0, 6.9, 0]} castShadow>
        <coneGeometry args={[1.3, 1.8, 4]} rotation={[0, Math.PI / 4, 0]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>

      {/* 6. Amalaka (Fluted ribbed stone crown disc) */}
      <mesh position={[0, 7.85, 0]}>
        <cylinderGeometry args={[0.65, 0.75, 0.35, 16]} />
        <meshStandardMaterial color={trimColor} roughness={0.7} />
      </mesh>

      {/* 7. Golden Kalash Finial */}
      <mesh position={[0, 8.25, 0]}>
        <sphereGeometry args={[0.26, 12, 12]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[0, 8.6, 0]}>
        <coneGeometry args={[0.12, 0.45, 8]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* 8. Fluttering Saffron Flag (Dhwaja) */}
      <group position={[0, 8.8, 0]} ref={flagRef}>
        {/* Brass Flagpole */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.0, 6]} />
          <meshStandardMaterial color="#eab308" metalness={0.8} />
        </mesh>
        {/* Triangular Saffron Flag */}
        <mesh position={[0.45, 0.7, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.4, 0.9, 3]} />
          <meshStandardMaterial color={flagColor} roughness={0.5} />
        </mesh>
      </group>
    </group>
  )
}

/**
 * Traditional multi-story Varanasi Haveli building with arched windows and balconies.
 */
export function Haveli({
  position = [0, 0, 0],
  size = [4, 6, 4],
  color = '#a05c31',
  trimColor = '#7c3f1a',
}) {
  return (
    <group position={position}>
      {/* Main Building Block */}
      <mesh position={[0, size[1] / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Rooftop Parapet */}
      <mesh position={[0, size[1] + 0.25, 0]}>
        <boxGeometry args={[size[0] + 0.2, 0.5, size[2] + 0.2]} />
        <meshStandardMaterial color={trimColor} roughness={0.8} />
      </mesh>
      {/* Arched Window cutouts / balconies */}
      {[-1, 1].map((offset) => (
        <mesh
          key={offset}
          position={[size[0] / 2 + 0.08, size[1] * 0.65, offset * (size[2] * 0.25)]}
        >
          <boxGeometry args={[0.16, 1.4, 0.8]} />
          <meshStandardMaterial color="#1a0f07" roughness={0.9} />
        </mesh>
      ))}
      {/* Small corner cupola / chhatri on rooftop */}
      <mesh position={[size[0] * 0.35, size[1] + 0.8, size[2] * 0.35]}>
        <coneGeometry args={[0.6, 0.8, 6]} />
        <meshStandardMaterial color={trimColor} roughness={0.75} />
      </mesh>
    </group>
  )
}

import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Traditional Indian Chhatri (ornate domed stone pavilion)
 */
function Chhatri({ position = [0, 0, 0], scale = 1, color = '#bf784a' }) {
  return (
    <group position={position} scale={scale}>
      {/* Octagonal Plinth Base */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[1.3, 1.4, 0.3, 8]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* 4 Carved Stone Pillars */}
      {[
        [-0.75, -0.75],
        [0.75, -0.75],
        [-0.75, 0.75],
        [0.75, 0.75],
      ].map(([px, pz], idx) => (
        <mesh key={idx} position={[px, 1.25, pz]}>
          <cylinderGeometry args={[0.09, 0.11, 2.0, 8]} />
          <meshStandardMaterial color="#8b5028" roughness={0.8} />
        </mesh>
      ))}
      {/* Arch Cornice Beam */}
      <mesh position={[0, 2.3, 0]}>
        <boxGeometry args={[2.0, 0.22, 2.0]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Fluted Lotus Dome (Chhatri Roof) */}
      <mesh position={[0, 2.85, 0]}>
        <coneGeometry args={[1.25, 0.95, 8]} />
        <meshStandardMaterial color="#a95f32" roughness={0.75} />
      </mesh>
      {/* Kalash (Golden Finial at peak) */}
      <mesh position={[0, 3.45, 0]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Hanging Brass Temple Bell */}
      <mesh position={[0, 2.05, 0]}>
        <coneGeometry args={[0.14, 0.22, 8]} />
        <meshStandardMaterial color="#eab308" metalness={0.85} roughness={0.35} />
      </mesh>
      {/* Warm internal Aarti glow */}
      <pointLight color="#f97316" intensity={0.5} distance={3.2} position={[0, 1.2, 0]} />
    </group>
  )
}

/**
 * Stepped Ghats of Kashi descending into the sacred Ganga.
 */
export default function Ghat() {
  const sandstoneColor = '#b76e3c'
  const stepColor = '#c47d4c'
  const darkStone = '#8c4e25'

  // Generate continuous ghat steps along the bank (z = -25 to +25)
  const stepTiers = useMemo(() => {
    const tiers = []
    const stepCount = 9
    for (let s = 0; s < stepCount; s++) {
      tiers.push({
        tier: s,
        x: -0.6 - s * 0.7, // stepping back toward the city bank
        y: s * 0.42, // rising upwards
        depth: 0.72,
        height: 0.44,
      })
    }
    return tiers
  }, [])

  return (
    <group>
      {/* Submerged riverbank foundation */}
      <mesh position={[-4, -0.6, 0]}>
        <boxGeometry args={[10, 1.2, 56]} />
        <meshStandardMaterial color="#4d2f19" roughness={0.95} />
      </mesh>

      {/* Stepped stone tiers along the Ganga river edge */}
      {stepTiers.map((step) => (
        <mesh
          key={step.tier}
          position={[step.x, step.y, 0]}
          receiveShadow
          castShadow
        >
          <boxGeometry args={[step.depth, step.height, 54]} />
          <meshStandardMaterial
            color={step.tier % 2 === 0 ? stepColor : sandstoneColor}
            roughness={0.85}
          />
        </mesh>
      ))}

      {/* Main Upper Promenade / Ghat Platform (where temples and havelis sit) */}
      <mesh position={[-9.5, 3.65, 0]} receiveShadow castShadow>
        <boxGeometry args={[8.5, 0.45, 54]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.88} />
      </mesh>

      {/* Stone Retaining Parapets and Balustrades */}
      <mesh position={[-6.8, 4.05, 0]}>
        <boxGeometry args={[0.3, 0.55, 54]} />
        <meshStandardMaterial color={darkStone} roughness={0.8} />
      </mesh>

      {/* Landmark Stone Chhatris (Pavilions) dotted along the Ghats */}
      <Chhatri position={[-7.2, 3.8, -14]} scale={0.95} />
      <Chhatri position={[-7.2, 3.8, -3]} scale={1.1} />
      <Chhatri position={[-7.2, 3.8, 8]} scale={0.95} />
      <Chhatri position={[-7.2, 3.8, 19]} scale={1.05} />

      {/* Lower Water-Edge Landing Steps & Ceremonial Umbrellas (Chhatras) */}
      {[-18, -10, -1, 6, 14, 22].map((zPos, idx) => (
        <group key={idx} position={[-1.2, 0.85, zPos]}>
          {/* Bamboo pole */}
          <mesh position={[0, 1.2, 0]} rotation={[0, 0, -0.08]}>
            <cylinderGeometry args={[0.04, 0.04, 2.4, 6]} />
            <meshStandardMaterial color="#a16207" roughness={0.85} />
          </mesh>
          {/* Woven Ghat Umbrella */}
          <mesh position={[-0.1, 2.3, 0]} rotation={[0, 0, -0.08]}>
            <coneGeometry args={[1.1, 0.45, 10]} />
            <meshStandardMaterial color="#fef3c7" roughness={0.7} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

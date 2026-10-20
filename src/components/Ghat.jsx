import { useMemo } from 'react'
import * as THREE from 'three'

/**
 * Traditional Indian Chhatri (ornate domed stone pavilion of Kashi Ghats)
 */
function Chhatri({ position = [0, 0, 0], scale = 1, color = '#bf784a' }) {
  return (
    <group position={position} scale={scale}>
      {/* Octagonal Plinth Base */}
      <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
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
        <mesh key={idx} position={[px, 1.25, pz]} castShadow>
          <cylinderGeometry args={[0.09, 0.11, 2.0, 8]} />
          <meshStandardMaterial color="#8b5028" roughness={0.8} />
        </mesh>
      ))}
      {/* Arch Cornice Beam */}
      <mesh position={[0, 2.3, 0]} castShadow>
        <boxGeometry args={[2.0, 0.22, 2.0]} />
        <meshStandardMaterial color={color} roughness={0.85} />
      </mesh>
      {/* Fluted Lotus Dome (Chhatri Roof) */}
      <mesh position={[0, 2.85, 0]} castShadow>
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
      <pointLight color="#f97316" intensity={0.65} distance={3.8} position={[0, 1.2, 0]} />
    </group>
  )
}

/**
 * Traditional Deepastambha (Tiered Stone Pillar of Lights for Ganga Aarti)
 */
function Deepastambha({ position = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {/* Stone Pedestal */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.45, 0.8, 8]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      {/* Central Pillar */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.22, 2.0, 8]} />
        <meshStandardMaterial color="#92400e" roughness={0.85} />
      </mesh>
      {/* 3 Tiered Rings for Oil Lamps */}
      {[1.0, 1.6, 2.2].map((yTier, idx) => (
        <group key={idx} position={[0, yTier, 0]}>
          <mesh>
            <cylinderGeometry args={[0.55 - idx * 0.1, 0.6 - idx * 0.1, 0.1, 8]} />
            <meshStandardMaterial color="#b45309" roughness={0.8} />
          </mesh>
          {/* Glowing Oil Diya Flames */}
          {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((ang, flameIdx) => (
            <mesh
              key={flameIdx}
              position={[Math.cos(ang) * (0.45 - idx * 0.08), 0.1, Math.sin(ang) * (0.45 - idx * 0.08)]}
            >
              <sphereGeometry args={[0.06, 6, 6]} />
              <meshBasicMaterial color="#fef08a" />
            </mesh>
          ))}
        </group>
      ))}
      {/* Pillar Peak Crown Flame */}
      <mesh position={[0, 2.9, 0]}>
        <coneGeometry args={[0.14, 0.35, 8]} />
        <meshBasicMaterial color="#ffedd5" />
      </mesh>
      <pointLight color="#f59e0b" intensity={0.9} distance={4.0} position={[0, 2.4, 0]} />
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

  // Generate continuous ghat steps along the bank (z = -28 to +28)
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
      <mesh position={[-4.5, -0.6, 0]}>
        <boxGeometry args={[11, 1.2, 60]} />
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
          <boxGeometry args={[step.depth, step.height, 58]} />
          <meshStandardMaterial
            color={step.tier % 2 === 0 ? stepColor : sandstoneColor}
            roughness={0.85}
          />
        </mesh>
      ))}

      {/* Main Upper Promenade / Ghat Platform (where temples and havelis sit) */}
      <mesh position={[-10.5, 3.65, 0]} receiveShadow castShadow>
        <boxGeometry args={[10.5, 0.45, 58]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.88} />
      </mesh>

      {/* Stone Retaining Parapets and Balustrades */}
      <mesh position={[-6.8, 4.05, 0]}>
        <boxGeometry args={[0.3, 0.55, 58]} />
        <meshStandardMaterial color={darkStone} roughness={0.8} />
      </mesh>

      {/* Landmark Stone Chhatris (Pavilions) dotted along the Ghats */}
      <Chhatri position={[-7.2, 3.8, -17]} scale={0.95} />
      <Chhatri position={[-7.2, 3.8, -7]} scale={1.05} />
      <Chhatri position={[-7.2, 3.8, 4]} scale={0.95} />
      <Chhatri position={[-7.2, 3.8, 14]} scale={1.05} />
      <Chhatri position={[-7.2, 3.8, 24]} scale={1.0} />

      {/* Deepastambha (Aarti Pillar of Lights) */}
      <Deepastambha position={[-6.6, 3.8, -12]} scale={0.9} />
      <Deepastambha position={[-6.6, 3.8, 0]} scale={1.0} />
      <Deepastambha position={[-6.6, 3.8, 9]} scale={0.9} />
      <Deepastambha position={[-6.6, 3.8, 19]} scale={1.0} />

      {/* Lower Water-Edge Landing Steps & Ceremonial Umbrellas (Chhatras) */}
      {[-22, -14, -6, 2, 8, 16, 24].map((zPos, idx) => (
        <group key={idx} position={[-1.2, 0.85, zPos]}>
          {/* Bamboo pole */}
          <mesh position={[0, 1.2, 0]} rotation={[0, 0, -0.08]}>
            <cylinderGeometry args={[0.04, 0.04, 2.4, 6]} />
            <meshStandardMaterial color="#a16207" roughness={0.85} />
          </mesh>
          {/* Woven Ghat Umbrella */}
          <mesh position={[-0.1, 2.3, 0]} rotation={[0, 0, -0.08]}>
            <coneGeometry args={[1.15, 0.45, 10]} />
            <meshStandardMaterial color="#fef3c7" roughness={0.7} />
          </mesh>
          {/* Small Diya on the step next to umbrella */}
          <mesh position={[0.2, 0, 0.2]}>
            <cylinderGeometry args={[0.12, 0.06, 0.06, 8]} />
            <meshStandardMaterial color="#854d0e" />
          </mesh>
          <pointLight color="#f59e0b" intensity={0.4} distance={2.0} position={[0.2, 0.15, 0.2]} />
        </group>
      ))}
    </group>
  )
}

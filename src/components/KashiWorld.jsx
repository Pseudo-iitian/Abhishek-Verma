import { useMemo } from 'react'
import GangaRiver from './GangaRiver'
import Ghat from './Ghat'
import Temple, { Haveli } from './Temple'
import Boat from './Boat'
import FloatingParticles from './FloatingParticles'

/**
 * Procedural low-poly Sacred Banyan Tree
 */
function BanyanTree({ position = [0, 0, 0], scale = 1 }) {
  return (
    <group position={position} scale={scale}>
      {/* Twisted Trunk */}
      <mesh position={[0, 1.8, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.65, 3.6, 7]} />
        <meshStandardMaterial color="#45220c" roughness={0.9} />
      </mesh>
      {/* Buttress Root Strands */}
      {[0, (Math.PI * 2) / 3, (Math.PI * 4) / 3].map((angle, idx) => (
        <mesh
          key={idx}
          position={[Math.cos(angle) * 0.45, 0.8, Math.sin(angle) * 0.45]}
          rotation={[0.2 * Math.sin(angle), 0, 0.2 * Math.cos(angle)]}
        >
          <cylinderGeometry args={[0.08, 0.16, 2.0, 5]} />
          <meshStandardMaterial color="#3b1d0a" roughness={0.95} />
        </mesh>
      ))}
      {/* Lush Canopy Foliage Clusters */}
      <mesh position={[0, 3.8, 0]} castShadow>
        <sphereGeometry args={[2.0, 7, 6]} />
        <meshStandardMaterial color="#22543d" roughness={0.8} />
      </mesh>
      <mesh position={[0.9, 4.2, 0.6]} castShadow>
        <sphereGeometry args={[1.4, 6, 5]} />
        <meshStandardMaterial color="#276749" roughness={0.8} />
      </mesh>
      <mesh position={[-0.9, 4.0, -0.6]} castShadow>
        <sphereGeometry args={[1.5, 6, 5]} />
        <meshStandardMaterial color="#1c4532" roughness={0.85} />
      </mesh>
    </group>
  )
}

/**
 * Complete Kashi miniature world scene.
 */
export default function KashiWorld() {
  return (
    <group>
      {/* Atmospheric Lighting */}
      {/* Ambient twilight skylight */}
      <ambientLight intensity={0.55} color="#cbd5e1" />

      {/* Golden Hour / Sunset directional sun ray shining from across the Ganga */}
      <directionalLight
        position={[18, 12, -8]}
        intensity={1.4}
        color="#fbbf24"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={60}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      {/* Gentle cool violet fill light from opposite sky */}
      <directionalLight
        position={[-15, 8, 15]}
        intensity={0.4}
        color="#a78bfa"
      />

      {/* The River Ganga */}
      <GangaRiver diyaCount={24} />

      {/* The Stepped Ghats of Kashi */}
      <Ghat />

      {/* Key Architectural Shrines along the Ghats */}
      {/* Scene 1: Assi Ghat Landmark Temple */}
      <Temple
        position={[-11, 3.8, -17]}
        scale={0.95}
        color="#c27848"
        trimColor="#92400e"
        flagColor="#f97316"
      />

      {/* Scene 2: The Old City Dense Havelis & Alleys */}
      <Haveli position={[-14, 3.8, -9]} size={[4.2, 7.5, 5]} color="#9a582e" />
      <Haveli position={[-13.5, 3.8, -3]} size={[3.8, 6.2, 4.2]} color="#b46e3e" />
      <Haveli position={[-15, 3.8, 3]} size={[4.5, 8.2, 4.8]} color="#85441e" />

      {/* Scene 3: Engineering Ghats Spire */}
      <Temple
        position={[-11.5, 3.8, 4]}
        scale={1.1}
        color="#b87333"
        trimColor="#78350f"
        flagColor="#eab308"
      />

      {/* Scene 4: Project Ghat Havelis & Shrines */}
      <Haveli position={[-14, 3.8, 11]} size={[4.0, 7.0, 4.5]} color="#a25b30" />
      <Temple
        position={[-11, 3.8, 14]}
        scale={0.9}
        color="#c27848"
        trimColor="#854d27"
        flagColor="#ea580c"
      />

      {/* Scene 5: Kashi Vishwanath / Manikarnika Majestic Sunset Temple */}
      <Temple
        position={[-12, 3.8, 22]}
        scale={1.25}
        color="#d97736"
        trimColor="#9a3412"
        flagColor="#dc2626"
      />
      <Haveli position={[-14.5, 3.8, 25]} size={[4.2, 8.5, 5]} color="#7c3f1a" />

      {/* Sacred Banyan Trees */}
      <BanyanTree position={[-10.5, 3.8, -10]} scale={0.95} />
      <BanyanTree position={[-10.8, 3.8, 9]} scale={1.05} />
      <BanyanTree position={[-11.2, 3.8, 18]} scale={0.85} />

      {/* Traditional Wooden Boats Moored and Floating along the Ganga */}
      <Boat position={[1.8, 0, -15]} rotation={[0, 0.25, 0]} scale={0.9} />
      <Boat position={[2.6, 0, -6]} rotation={[0, -0.3, 0]} scale={1.0} />
      <Boat position={[1.9, 0, 5]} rotation={[0, 0.15, 0]} scale={0.95} />
      <Boat position={[3.2, 0, 12]} rotation={[0, -0.2, 0]} scale={1.05} />
      <Boat position={[2.2, 0, 20]} rotation={[0, 0.35, 0]} scale={1.0} />

      {/* Atmospheric Aarti Embers & Floating Golden Particles */}
      <FloatingParticles count={380} />
    </group>
  )
}

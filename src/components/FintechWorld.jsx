import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Animated transaction data packets pulsing along microservice connections.
 */
function DataPulses({ start, end, color = '#22d3ee', speed = 1.0 }) {
  const meshRef = useRef()
  const vStart = useMemo(() => new THREE.Vector3(...start), [start])
  const vEnd = useMemo(() => new THREE.Vector3(...end), [end])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = (state.clock.getElapsedTime() * speed) % 1
    meshRef.current.position.lerpVectors(vStart, vEnd, t)
  })

  return (
    <group>
      {/* Laser line conduit */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([...start, ...end])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.25} />
      </line>

      {/* Moving data pulse packet */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
      </mesh>
    </group>
  )
}

/**
 * Microservice Node in 3D Space
 */
function ServiceNode({ position, color = '#22d3ee', scale = 1 }) {
  const nodeRef = useRef()

  useFrame((state) => {
    if (!nodeRef.current) return
    const t = state.clock.getElapsedTime()
    nodeRef.current.rotation.y = t * 0.3
    nodeRef.current.rotation.x = t * 0.15
  })

  return (
    <group position={position} scale={scale}>
      {/* Outer Wireframe Shell */}
      <mesh ref={nodeRef}>
        <octahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Subtle Inner Core */}
      <mesh>
        <sphereGeometry args={[0.16, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>

      <pointLight color={color} intensity={0.4} distance={3} />
    </group>
  )
}

/**
 * Central Cryptographic / Distributed Ledger Core (Subtle & Elegant, not blinding)
 */
function CentralLedgerCore({ mouseRef }) {
  const coreRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const mx = mouseRef.current?.x || 0
    const my = mouseRef.current?.y || 0

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2 + mx * 0.4
      coreRef.current.rotation.x = t * 0.1 + my * 0.2
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.25
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.4) * 0.08
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.3
      ring2Ref.current.rotation.z = Math.PI / 3 + Math.cos(t * 0.3) * 0.1
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={[0, 0, 0]}>
        {/* Core Icosahedron with sleek subtle wireframe */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.3, 2]} />
          <MeshDistortMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            distort={0.25}
            speed={1.5}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Elegant translucent inner geometric seed (NOT solid blinding ball) */}
        <mesh>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Concentric Cryptographic Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.0, 0.015, 16, 64]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
        </mesh>

        {/* Concentric Cryptographic Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.4, 0.012, 16, 64]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

/**
 * Background Digital Grid Floor & Floating Bits
 */
function DigitalEnvironment() {
  const pointsRef = useRef()
  const count = 240

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 35
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * 0.015
  })

  return (
    <group>
      {/* Cyber Grid Base Floor */}
      <gridHelper
        args={[50, 40, '#06b6d4', '#0f172a']}
        position={[0, -5, 0]}
        rotation={[0, 0, 0]}
      />

      {/* Floating Data Sparks */}
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
          size={0.045}
          color="#38bdf8"
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

/**
 * Complete Fintech Architecture 3D Scene
 */
export default function FintechWorld({ mouseRef }) {
  // Microservice nodes positioned slightly off-center to let text breathe
  const nodes = useMemo(
    () => [
      { id: 'kafka', pos: [3.2, 2.0, -1], color: '#a855f7' },
      { id: 'postgres', pos: [-3.4, 1.6, 1], color: '#10b981' },
      { id: 'fineract', pos: [3.8, -1.5, 0.5], color: '#06b6d4' },
      { id: 'sqs', pos: [-3.0, -2.0, -0.5], color: '#f59e0b' },
      { id: 'digio', pos: [0.5, 3.2, 1.2], color: '#38bdf8' },
      { id: 'redis', pos: [-0.5, -3.4, 1.5], color: '#f43f5e' },
    ],
    []
  )

  return (
    <group position={[1.2, 0, 0]}>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.3} color="#0f172a" />
      <directionalLight position={[10, 15, 10]} intensity={0.8} color="#38bdf8" />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />

      {/* Background Cyber Grid & Floating Sparks */}
      <DigitalEnvironment />

      {/* Central Cryptographic Ledger Core */}
      <CentralLedgerCore mouseRef={mouseRef} />

      {/* Microservice Architecture Nodes */}
      {nodes.map((node) => (
        <ServiceNode
          key={node.id}
          position={node.pos}
          color={node.color}
        />
      ))}

      {/* Data Conduits connecting nodes to central core */}
      {nodes.map((node, i) => (
        <DataPulses
          key={node.id}
          start={[0, 0, 0]}
          end={node.pos}
          color={node.color}
          speed={0.7 + i * 0.12}
        />
      ))}
    </group>
  )
}

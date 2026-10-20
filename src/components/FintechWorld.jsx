import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Animated transaction data packets pulsing along microservice connections.
 */
function DataPulses({ start, end, color = '#22d3ee', speed = 1.2 }) {
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
        <lineBasicMaterial color={color} transparent opacity={0.35} />
      </line>

      {/* Moving data pulse packet */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}

/**
 * Microservice Node in 3D Space
 */
function ServiceNode({ position, label, color = '#22d3ee', scale = 1 }) {
  const nodeRef = useRef()

  useFrame((state) => {
    if (!nodeRef.current) return
    const t = state.clock.getElapsedTime()
    nodeRef.current.rotation.y = t * 0.4
    nodeRef.current.rotation.x = t * 0.2
  })

  return (
    <group position={position} scale={scale}>
      {/* Outer Wireframe Hexagonal / Octahedral Shell */}
      <mesh ref={nodeRef}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Glowing Inner Core */}
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Point light for node emission */}
      <pointLight color={color} intensity={0.8} distance={3.5} />
    </group>
  )
}

/**
 * Central Cryptographic / Distributed Ledger Core
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
      coreRef.current.rotation.y = t * 0.25 + mx * 0.5
      coreRef.current.rotation.x = t * 0.15 + my * 0.3
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.35
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.5) * 0.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.4
      ring2Ref.current.rotation.z = Math.PI / 3 + Math.cos(t * 0.4) * 0.15
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <group position={[0, 0, 0]}>
        {/* Core Icosahedron with dynamic mesh distortion */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.4, 2]} />
          <MeshDistortMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={0.45}
            roughness={0.1}
            metalness={0.9}
            distort={0.32}
            speed={2}
            wireframe
          />
        </mesh>

        {/* Inner high-energy glowing seed */}
        <mesh>
          <sphereGeometry args={[0.65, 24, 24]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
        <pointLight color="#06b6d4" intensity={2.2} distance={8} />
        <pointLight color="#10b981" intensity={1.5} distance={6} />

        {/* Concentric Cryptographic Ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.2, 0.025, 16, 64]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.65} />
        </mesh>

        {/* Concentric Cryptographic Ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.6, 0.02, 16, 64]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.5} />
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
  const count = 350

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
    pointsRef.current.rotation.y += delta * 0.02
  })

  return (
    <group>
      {/* Cyber Grid Base Floor */}
      <gridHelper
        args={[50, 40, '#06b6d4', '#1e293b']}
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
          size={0.06}
          color="#38bdf8"
          transparent
          opacity={0.65}
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
  // Coordinates of microservice nodes
  const nodes = useMemo(
    () => [
      { id: 'kafka', label: 'Kafka Stream', pos: [3.4, 2.2, -1], color: '#a855f7' },
      { id: 'postgres', label: 'PostgreSQL RDS', pos: [-3.6, 1.8, 1], color: '#10b981' },
      { id: 'fineract', label: 'Apache Fineract', pos: [4.0, -1.6, 0.5], color: '#06b6d4' },
      { id: 'sqs', label: 'AWS SQS Clearing', pos: [-3.2, -2.2, -0.5], color: '#f59e0b' },
      { id: 'digio', label: 'Digio Payment Rails', pos: [0, 3.6, 1.2], color: '#38bdf8' },
      { id: 'redis', label: 'Redis Cache & Locks', pos: [0, -3.8, 1.5], color: '#f43f5e' },
    ],
    []
  )

  return (
    <group>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} color="#0f172a" />
      <directionalLight position={[10, 15, 10]} intensity={1.2} color="#38bdf8" />
      <directionalLight position={[-10, -10, -10]} intensity={0.8} color="#10b981" />

      {/* Background Cyber Grid & Floating Sparks */}
      <DigitalEnvironment />

      {/* Central Cryptographic Ledger Core */}
      <CentralLedgerCore mouseRef={mouseRef} />

      {/* Microservice Architecture Nodes */}
      {nodes.map((node) => (
        <ServiceNode
          key={node.id}
          position={node.pos}
          label={node.label}
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
          speed={0.8 + i * 0.15}
        />
      ))}
    </group>
  )
}

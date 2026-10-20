import { useEffect, useRef } from 'react'

/**
 * High-performance 2D Canvas Fintech Network & Data Mesh.
 * Renders an interactive distributed systems graph that runs smoothly even without GPU WebGL.
 */
export default function FallbackFintechScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Distributed service nodes
    const nodeCount = 36
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: 2 + Math.random() * 3,
      isCore: Math.random() > 0.85,
    }))

    // Floating telemetry tags
    const telemetryStrings = [
      'KAFKA_50K_TPS',
      'RDS_WRITER_12%',
      'LMS_LATENCY_28MS',
      'UTR_POSTED',
      'ACID_COMMIT',
      'DIGIO_UPI_ACK',
      'DPD_MATCH_100%',
      'REST_PARTNER_SYNC',
    ]

    const tags = Array.from({ length: 8 }, (_, i) => ({
      text: telemetryStrings[i],
      x: Math.random() * width,
      y: Math.random() * height,
      vy: -0.2 - Math.random() * 0.3,
      opacity: 0.15 + Math.random() * 0.25,
    }))

    let mouse = { x: width / 2, y: height / 2, active: false }
    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    window.addEventListener('mousemove', onMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Deep Cyber Obsidian Gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      )
      bgGrad.addColorStop(0, '#091322')
      bgGrad.addColorStop(0.5, '#040914')
      bgGrad.addColorStop(1, '#020408')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Cyber Grid lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)'
      ctx.lineWidth = 1
      const gridSize = 64
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // 3. Floating Telemetry Tags
      ctx.font = '10px "JetBrains Mono", monospace'
      tags.forEach((tag) => {
        tag.y += tag.vy
        if (tag.y < -20) {
          tag.y = height + 20
          tag.x = Math.random() * width
        }
        ctx.fillStyle = `rgba(34, 211, 238, ${tag.opacity})`
        ctx.fillText(tag.text, tag.x, tag.y)
      })

      // 4. Update and Connect Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        // Mouse repulsion
        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120 && dist > 0) {
            n.x += (dx / dist) * 1.5
            n.y += (dy / dist) * 1.5
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n.x - n2.x
          const dy = n.y - n2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            const alpha = (1 - dist / 140) * (n.isCore || n2.isCore ? 0.35 : 0.15)
            ctx.strokeStyle = n.isCore || n2.isCore
              ? `rgba(16, 185, 129, ${alpha})`
              : `rgba(6, 182, 212, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }

        // Draw Node
        ctx.fillStyle = n.isCore ? '#10b981' : '#06b6d4'
        ctx.shadowColor = n.isCore ? '#10b981' : '#06b6d4'
        ctx.shadowBlur = n.isCore ? 12 : 6
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}

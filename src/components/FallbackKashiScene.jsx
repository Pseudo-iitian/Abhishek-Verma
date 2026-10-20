import { useEffect, useRef } from 'react'

/**
 * High-performance 2.5D Kashi Varanasi atmosphere.
 * Operates flawlessly even when WebGL / hardware acceleration is disabled in the browser.
 */
export default function FallbackKashiScene() {
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

    // Floating Diyas on the Ganga
    const diyaCount = 26
    const diyas = Array.from({ length: diyaCount }, (_, i) => ({
      x: width * 0.35 + Math.random() * (width * 0.6),
      y: height * 0.62 + Math.random() * (height * 0.35),
      speedX: -0.35 - Math.random() * 0.45, // drifting along river current
      speedY: 0,
      phase: Math.random() * Math.PI * 2,
      size: 5 + Math.random() * 4,
    }))

    // Rising Golden Aarti Embers
    const emberCount = 65
    const embers = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speedY: -0.6 - Math.random() * 1.2,
      speedX: (Math.random() - 0.5) * 0.4,
      size: 1 + Math.random() * 2.5,
      opacity: 0.2 + Math.random() * 0.7,
    }))

    let time = 0

    const render = () => {
      time += 0.02
      ctx.clearRect(0, 0, width, height)

      // 1. Twilight Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height)
      skyGrad.addColorStop(0, '#070914')
      skyGrad.addColorStop(0.45, '#131b33')
      skyGrad.addColorStop(0.65, '#2e182a')
      skyGrad.addColorStop(0.72, '#502324')
      skyGrad.addColorStop(1, '#091c24')
      ctx.fillStyle = skyGrad
      ctx.fillRect(0, 0, width, height)

      // 2. Temple & Haveli Silhouettes in the distance (Upper Ghats)
      ctx.fillStyle = '#0b0f1c'
      const ghatLeft = width * 0.38

      // Distant Shikhara 1
      drawTempleSpire(ctx, width * 0.08, height * 0.48, 48, 110)
      // Distant Haveli
      ctx.fillRect(width * 0.12, height * 0.52, 90, 80)
      // Distant Shikhara 2
      drawTempleSpire(ctx, width * 0.22, height * 0.44, 56, 135)
      // Chhatri pavilion
      drawChhatri(ctx, width * 0.28, height * 0.53, 36)
      // Giant Kashi Vishwanath Shikhara
      drawTempleSpire(ctx, width * 0.33, height * 0.40, 68, 160)

      // 3. Stepped Sandstone Ghats
      const stepsCount = 10
      const startY = height * 0.62
      const stepH = (height - startY) / stepsCount

      for (let s = 0; s < stepsCount; s++) {
        const y = startY + s * stepH
        const xEdge = ghatLeft - s * (ghatLeft * 0.06)
        ctx.fillStyle = s % 2 === 0 ? '#422414' : '#30180d'
        ctx.fillRect(0, y, xEdge, stepH + 2)

        // Subtle highlight line on stone edge
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(xEdge, y)
        ctx.stroke()
      }

      // 4. River Ganga Surface
      const riverGrad = ctx.createLinearGradient(ghatLeft, height * 0.62, width, height)
      riverGrad.addColorStop(0, '#0a232c')
      riverGrad.addColorStop(0.5, '#071820')
      riverGrad.addColorStop(1, '#040d12')
      ctx.fillStyle = riverGrad
      ctx.beginPath()
      ctx.moveTo(ghatLeft, height * 0.62)
      ctx.lineTo(width, height * 0.62)
      ctx.lineTo(width, height)
      ctx.lineTo(ghatLeft - 10 * (ghatLeft * 0.06), height)
      ctx.closePath()
      ctx.fill()

      // 5. River Waves
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.12)'
      ctx.lineWidth = 1.2
      for (let w = 0; w < 6; w++) {
        const waveY = height * 0.65 + w * (height * 0.055)
        ctx.beginPath()
        const startX = Math.max(0, ghatLeft - w * 18)
        ctx.moveTo(startX, waveY)
        for (let x = startX; x < width; x += 30) {
          const dy = Math.sin(x * 0.02 + time * 2 + w) * 3
          ctx.lineTo(x, waveY + dy)
        }
        ctx.stroke()
      }

      // 6. Floating Glowing Diyas
      diyas.forEach((d) => {
        d.x += d.speedX
        if (d.x < ghatLeft - 40) {
          d.x = width + Math.random() * 40
          d.y = height * 0.63 + Math.random() * (height * 0.33)
        }

        const bob = Math.sin(time * 3 + d.phase) * 3
        const curY = d.y + bob

        // Diya Outer Amber Glow
        const glow = ctx.createRadialGradient(d.x, curY, 1, d.x, curY, d.size * 3.5)
        glow.addColorStop(0, 'rgba(251, 191, 36, 0.75)')
        glow.addColorStop(0.4, 'rgba(245, 158, 11, 0.35)')
        glow.addColorStop(1, 'rgba(234, 88, 12, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(d.x, curY, d.size * 3.5, 0, Math.PI * 2)
        ctx.fill()

        // Earthen / Clay Bowl Base
        ctx.fillStyle = '#78350f'
        ctx.beginPath()
        ctx.ellipse(d.x, curY + 2, d.size * 0.8, d.size * 0.45, 0, 0, Math.PI * 2)
        ctx.fill()

        // Golden Marigold Ring
        ctx.fillStyle = '#f59e0b'
        ctx.beginPath()
        ctx.arc(d.x, curY + 1, d.size * 0.6, 0, Math.PI * 2)
        ctx.fill()

        // Flame Center
        ctx.fillStyle = '#fffbeb'
        ctx.beginPath()
        ctx.arc(d.x, curY - 2, d.size * 0.35, 0, Math.PI * 2)
        ctx.fill()
      })

      // 7. Rising Aarti Embers
      embers.forEach((em) => {
        em.y += em.speedY
        em.x += em.speedX
        if (em.y < 0) {
          em.y = height + 10
          em.x = Math.random() * width
        }

        ctx.fillStyle = `rgba(251, 191, 36, ${em.opacity})`
        ctx.beginPath()
        ctx.arc(em.x, em.y, em.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
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
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}

function drawTempleSpire(ctx, x, y, width, height) {
  ctx.beginPath()
  ctx.moveTo(x - width / 2, y + height)
  ctx.lineTo(x + width / 2, y + height)
  ctx.lineTo(x + width * 0.3, y + height * 0.3)
  ctx.quadraticCurveTo(x, y - 10, x - width * 0.3, y + height * 0.3)
  ctx.closePath()
  ctx.fill()

  // Kalash Finial
  ctx.fillStyle = '#f59e0b'
  ctx.beginPath()
  ctx.arc(x, y - 14, 4, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = '#0b0f1c'
}

function drawChhatri(ctx, x, y, size) {
  // Pillars
  ctx.fillRect(x - size * 0.4, y, 4, size)
  ctx.fillRect(x + size * 0.4, y, 4, size)
  // Dome
  ctx.beginPath()
  ctx.arc(x, y, size * 0.5, Math.PI, 0)
  ctx.closePath()
  ctx.fill()
}

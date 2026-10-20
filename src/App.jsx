import { Suspense, lazy, useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import { About, Experience, Skills, Projects, Contact } from './components/Sections'
import { useReveal } from './hooks/useReveal'
import ErrorBoundary from './components/ErrorBoundary'
import FallbackKashiScene from './components/FallbackKashiScene'
import './App.css'
import './styles/global.css'

const Scene3D = lazy(() => import('./components/Scene3D'))

function WebGLHelperToast() {
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
      if (!gl) {
        setShowToast(true)
      }
    } catch {
      setShowToast(true)
    }
  }, [])

  if (!showToast) return null

  return (
    <div className="webgl-info-toast">
      <span>
        🏛️ <strong>Optimized 2.5D Kashi Mode:</strong> Chrome GPU acceleration is currently off.
        To view interactive 3D, enable <em>"Use graphics acceleration when available"</em> in{' '}
        <code>chrome://settings/system</code>.
      </span>
      <button
        onClick={() => setShowToast(false)}
        className="toast-close-btn"
        aria-label="Dismiss notice"
      >
        ✕
      </button>
    </div>
  )
}

export default function App() {
  useReveal()

  return (
    <>
      <WebGLHelperToast />
      <ErrorBoundary fallback={<FallbackKashiScene />}>
        <Suspense fallback={<FallbackKashiScene />}>
          <div className="scene-host">
            <Scene3D />
          </div>
        </Suspense>
      </ErrorBoundary>

      <div className="bg-grid" />
      <div className="bg-vignette" />
      <Navigation />
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

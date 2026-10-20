import { Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import { About, Experience, Skills, Projects, Contact } from './components/Sections'
import { useReveal } from './hooks/useReveal'
import './App.css'
import './styles/global.css'

const Scene3D = lazy(() => import('./components/Scene3D'))

export default function App() {
  useReveal()
  return (
    <>
      <Suspense fallback={null}>
        <div className="scene-host">
          <Scene3D />
        </div>
      </Suspense>
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

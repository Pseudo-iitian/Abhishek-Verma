import { useEffect } from 'react'
import gsap from 'gsap'
import { profile, stats, liveTelemetry } from '../data'

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { y: 20, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
      )
      gsap.fromTo(
        '.hero-meta > *',
        { y: 15, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out', clearProps: 'all' }
      )
      gsap.fromTo(
        '.hero-stat',
        { y: 15, opacity: 0.3 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out', clearProps: 'all' }
      )
      gsap.fromTo(
        '.telemetry-strip',
        { y: 10, opacity: 0.4 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'all' }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="eyebrow hero-line">
          <span className="terminal-prompt">$</span> FINTECH BACKEND SYSTEMS · RAPIPAY FINTECH · {profile.location}
        </div>

        <h1 className="hero-title">
          <span className="hero-line">{profile.name}</span>
          <span className="hero-line gradient-text-fintech">{profile.roleSubtitle}</span>
        </h1>

        <div className="hero-roles hero-line">
          <span className="role-chip">Java 17 / 21 <i>•</i></span>
          <span className="role-chip">Spring Boot 3.x <i>•</i></span>
          <span className="role-chip">Apache Kafka <i>•</i></span>
          <span className="role-chip">PostgreSQL &amp; B-Tree <i>•</i></span>
          <span className="role-chip">Apache Fineract LMS <i>•</i></span>
          <span className="role-chip">AWS SQS</span>
        </div>

        <p className="hero-tagline hero-line">
          {profile.tagline}
        </p>

        <div className="hero-meta">
          <a className="btn btn-primary" href="#projects">
            Explore Systems Shipped →
          </a>
          <a
            className="btn btn-emerald"
            href={`/${profile.resume}`}
            target="_blank"
            rel="noreferrer"
            download="Abhishek_Verma_Resume.pdf"
          >
            Download Résumé (PDF) ↓
          </a>
          <a className="btn btn-ghost" href="#contact">
            Contact &amp; API Specs
          </a>
        </div>

        {/* Live System Telemetry Strip */}
        <div className="telemetry-strip card">
          <div className="telemetry-badge">
            <span className="live-dot" /> LIVE TELEMETRY
          </div>
          <div className="telemetry-items">
            {liveTelemetry.map((item, i) => (
              <div key={i} className="telemetry-item">
                <span className="telemetry-label">{item.label}:</span>
                <span className="telemetry-val">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Production Metrics Grid */}
        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat card" key={s.label}>
              <div className="hero-stat-value gradient-text-cyan">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
              <div className="hero-stat-sub">{s.highlight}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL DOWN ARCHITECTURE</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

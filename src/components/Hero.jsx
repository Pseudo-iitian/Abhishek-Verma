import { useEffect } from 'react'
import gsap from 'gsap'
import { profile, stats } from '../data'

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 45,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      })
      gsap.from('.hero-meta > *', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.8,
      })
      gsap.from('.hero-stat', {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1.1,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="eyebrow hero-line">
          <span className="location-pin">📍</span> {profile.location} · Assi Ghat (Kashi)
        </div>

        <h1 className="hero-title">
          <span className="hero-line">{profile.name}</span>
          <span className="hero-line gradient-text-gold">{profile.roleSubtitle}</span>
        </h1>

        <div className="hero-roles hero-line">
          <span className="role-chip">Java 17 / 21 <i>•</i></span>
          <span className="role-chip">Spring Boot <i>•</i></span>
          <span className="role-chip">Apache Kafka <i>•</i></span>
          <span className="role-chip">PostgreSQL <i>•</i></span>
          <span className="role-chip">Fintech Microservices</span>
        </div>

        <p className="hero-tagline hero-line">
          {profile.tagline}
        </p>

        <div className="hero-meta">
          <a className="btn btn-primary" href="#projects">
            Explore Project Ghats →
          </a>
          <a
            className="btn btn-gold"
            href={`/${profile.resume}`}
            target="_blank"
            rel="noreferrer"
            download="Abhishek_Verma_Resume.pdf"
          >
            Download Résumé (PDF) ↓
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in Touch
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat card" key={s.label}>
              <div className="hero-stat-value gradient-text-gold">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
              <div className="hero-stat-sub">{s.highlight}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL ALONG THE GHATS</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}

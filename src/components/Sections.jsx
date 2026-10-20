import { profile, experience, skillCategories, projects } from '../data'
import ProjectCard from './ProjectCard'

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <p className="eyebrow">
            <span className="step-badge">01</span> Assi Ghat Promenade · Profile
          </p>
          <h2 className="section-title">
            Architecting fault-tolerant <span className="gradient-text-gold">fintech engines</span> and distributed backends.
          </h2>
        </div>
        <div className="reveal about-body">
          <p>{profile.summary}</p>
          <p className="about-current">
            Currently advancing backend &amp; financial ledger systems at{' '}
            <strong>{profile.company}</strong> in Noida, engineering real-time Kafka event streams,
            reducing query latency across datasets of over 1 million records, and automating RBI-aligned compliance.
          </p>
          <div className="about-edu">
            {profile.education.map((e) => (
              <div key={e.degree} className="edu-row">
                <span className="edu-year">{e.period}</span>
                <span>
                  <strong>{e.degree}</strong>
                  <br />
                  <em>{e.institution} · {e.grade}</em>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="reveal section-head">
          <p className="eyebrow">
            <span className="step-badge">02</span> The Old City · Career Journey
          </p>
          <h2 className="section-title">Production Experience at Rapipay Fintech</h2>
          <p className="section-lead">
            Navigating high-concurrency financial microservices, high-volume transactional ledgers, and critical banking partner integrations.
          </p>
        </div>
        <div className="timeline">
          {experience.map((x) => (
            <div className="timeline-item reveal" key={x.role + x.period}>
              <div className="timeline-dot">{x.current && <span className="pulse" />}</div>
              <div className="timeline-card card">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{x.role}</h3>
                    <div className="timeline-company">
                      <strong className="gradient-text-gold">{x.company}</strong>
                      <em> · {x.location}</em>
                      {x.current && <span className="badge badge-active">Current Role</span>}
                    </div>
                  </div>
                  <span className="timeline-period">{x.period}</span>
                </div>

                <div className="timeline-tech-stack">
                  {x.techStack.map((tech) => (
                    <span key={tech} className="tech-badge-subtle">{tech}</span>
                  ))}
                </div>

                <ul className="timeline-points">
                  {x.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="reveal section-head">
          <p className="eyebrow">
            <span className="step-badge">03</span> The Engineering Ghats · Capabilities
          </p>
          <h2 className="section-title">Core Technologies &amp; Architecture Pillars</h2>
          <p className="section-lead">
            A battle-tested stack built around Java 17, Spring Boot, distributed messaging, relational databases, and enterprise resilience.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <article className="card skill-card reveal" key={cat.title}>
              <div className="skill-card-top">
                <div className="skill-no">0{i + 1}</div>
                <h3>{cat.title}</h3>
              </div>
              <p className="skill-summary">{cat.summary}</p>
              <div className="skill-items-list">
                {cat.skills.map((s) => (
                  <div
                    key={s.name}
                    className={`skill-chip ${s.highlight ? 'skill-highlight' : ''}`}
                  >
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-level">{s.level}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="reveal section-head">
          <p className="eyebrow">
            <span className="step-badge">04</span> Project Ghats · Engineering Case Studies
          </p>
          <h2 className="section-title">Scalable Systems Shipped to Production</h2>
          <p className="section-lead">
            In-depth architecture, technical decisions, and verifiable business impact across mission-critical fintech projects.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-inner reveal">
        <p className="eyebrow">
          <span className="step-badge">05</span> The Final Ghat · Sunset over Ganga
        </p>
        <h2 className="contact-title">
          Let's build resilient, high-volume <span className="gradient-text-gold">systems together.</span>
        </h2>
        <p className="section-lead" style={{ margin: '0 auto 2.4rem' }}>
          Open for backend engineering roles, fintech architecture discussions, and distributed systems challenges.
        </p>

        <div className="contact-action-box card">
          <div className="contact-avatar">AV</div>
          <div className="contact-info">
            <h3>{profile.name}</h3>
            <p>{profile.roleSubtitle} · {profile.company}</p>
          </div>
          <a className="btn btn-gold contact-mail-btn" href={`mailto:${profile.email}`}>
            ✉ Send Email: {profile.email}
          </a>
        </div>

        <div className="contact-links">
          <a href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`} className="contact-chip">
            📞 {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-chip">
            💼 LinkedIn Profile ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-chip">
            🐙 GitHub (Pseudo-iitian) ↗
          </a>
          <a
            href={`/${profile.resume}`}
            target="_blank"
            rel="noreferrer"
            download="Abhishek_Verma_Resume.pdf"
            className="contact-chip highlight"
          >
            📄 Download Official Résumé (PDF) ↓
          </a>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name} · Miniature Kashi 3D Experience</p>
          <p className="footer-sub">
            Built with React 19, Three.js, React Three Fiber, GSAP ScrollTrigger &amp; Vite
          </p>
        </footer>
      </div>
    </section>
  )
}

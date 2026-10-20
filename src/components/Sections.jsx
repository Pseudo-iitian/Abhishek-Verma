import { useState, useMemo } from 'react'
import { profile, experience, skillCategories, projects } from '../data'
import ProjectCard from './ProjectCard'

/**
 * 01 / ABOUT SECTION
 */
export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-panel card reveal">
          <div className="about-grid">
            <div className="about-left">
              <p className="eyebrow">
                <span className="step-badge">01</span> About Me
              </p>
              <h2 className="section-title">
                Engineering high-throughput, <span className="gradient-text-cyan">fault-tolerant financial backends</span>.
              </h2>
              <div className="about-highlights-strip">
                <div className="about-chip">⚡ Sub-30ms Loan Calculations</div>
                <div className="about-chip">🛡️ 100% RBI NPA Rule Compliance</div>
                <div className="about-chip">📉 Slashed AWS Writer DB Load 99% → 5%</div>
                <div className="about-chip">🚀 Kafka Streams at 50,000+ Events/Day</div>
              </div>
            </div>

            <div className="about-body">
              <p className="about-lead">{profile.summary}</p>
              <p className="about-current">
                Currently advancing core lending and ledger systems at{' '}
                <strong className="text-highlight">{profile.company}</strong> in Noida, designing asynchronous Kafka event streams,
                slashing AWS writer database loads from 99% to 5–20%, and automating RBI-aligned lending rules.
              </p>
              <div className="about-quick-specs">
                <div className="spec-row">
                  <span className="spec-label">Location:</span>
                  <span className="spec-val">{profile.location}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Specialization:</span>
                  <span className="spec-val">Fintech Microservices &amp; Ledger Integrity</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Current Role:</span>
                  <span className="spec-val">Software Engineer (Rapipay Fintech)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 02 / EXPERIENCE SECTION
 */
export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head-box card reveal">
          <p className="eyebrow">
            <span className="step-badge">02</span> Career Trajectory
          </p>
          <h2 className="section-title">Production Work Experience</h2>
          <p className="section-lead">
            Building mission-critical banking integrations, high-concurrency microservices, and automated payment recovery pipelines.
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
                      <strong className="gradient-text-emerald">{x.company}</strong>
                      <em> · {x.location}</em>
                      {x.current && <span className="badge badge-active">Active</span>}
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

/**
 * 03 / EDUCATION SECTION (Dedicated section as requested)
 */
export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-head-box card reveal">
          <p className="eyebrow">
            <span className="step-badge">03</span> Academic Background
          </p>
          <h2 className="section-title">Education &amp; Computer Science Foundation</h2>
          <p className="section-lead">
            Formal training in algorithms, distributed systems, operating systems, and computer engineering.
          </p>
        </div>

        <div className="education-grid">
          {profile.education.map((edu) => (
            <article key={edu.degree} className="card education-card reveal">
              <div className="edu-card-top">
                <div className="edu-icon-wrap">🎓</div>
                <div className="edu-meta-head">
                  <span className="edu-period-badge">{edu.period}</span>
                  <span className="edu-grade-badge">{edu.grade}</span>
                </div>
              </div>

              <h3 className="edu-degree-title">{edu.degree}</h3>
              <p className="edu-institution-text">
                <strong>{edu.institution}</strong>
                <span> · {edu.location}</span>
              </p>

              {edu.highlights && (
                <ul className="edu-highlights-list">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 04 / TECHNICAL SKILLS SECTION
 */
export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head-box card reveal">
          <p className="eyebrow">
            <span className="step-badge">04</span> Technical Capabilities
          </p>
          <h2 className="section-title">Technical Skills &amp; Distributed Architecture</h2>
          <p className="section-lead">
            Production-tested stack built around Java 17, Spring Boot, distributed messaging, relational databases, and enterprise resilience.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <article className="card skill-card reveal" key={cat.title}>
              <div className="skill-card-top">
                <span className="skill-no">0{i + 1}</span>
                <h3 className="skill-card-title">{cat.title}</h3>
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

/**
 * 05 / PROJECTS SECTION (Simplified, Clean, Date-Sorted & Tabbed)
 */
export function Projects() {
  const [sortOrder, setSortOrder] = useState('newest') // 'newest' | 'oldest'
  const [filterCategory, setFilterCategory] = useState('all') // 'all' | 'fintech' | 'opensource'

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    {
      id: 'fintech',
      label: '🏢 Rapipay Fintech',
      count: projects.filter((p) => p.categoryType === 'fintech').length,
    },
    {
      id: 'opensource',
      label: '🐙 Open Source & GitHub',
      count: projects.filter((p) => p.categoryType === 'opensource').length,
    },
  ]

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects]

    // 1. Filter by category
    if (filterCategory !== 'all') {
      result = result.filter((p) => p.categoryType === filterCategory)
    }

    // 2. Sort by date
    result.sort((a, b) => {
      const dateA = a.date || '2024-01'
      const dateB = b.date || '2024-01'
      return sortOrder === 'newest'
        ? dateB.localeCompare(dateA)
        : dateA.localeCompare(dateB)
    })

    return result
  }, [filterCategory, sortOrder])

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head-box card">
          <p className="eyebrow">
            <span className="step-badge">05</span> Systems Shipped
          </p>
          <h2 className="section-title">Technical Projects &amp; Open Source</h2>
          <p className="section-lead">
            Production fintech microservices from Rapipay, plus open-source algorithms, full-stack systems, and AI automation.
          </p>
        </div>

        {/* Project Controls: Simplified Category Filters & Date Sorting */}
        <div className="project-controls-bar card">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${filterCategory === cat.id ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat.id)}
              >
                {cat.label} <span className="cat-count">({cat.count})</span>
              </button>
            ))}
          </div>

          <div className="sort-controls">
            <span className="sort-label">Sort by:</span>
            <button
              type="button"
              className="sort-toggle-btn active"
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              title="Click to toggle sorting"
            >
              📅 {sortOrder === 'newest' ? 'Newest First ↓' : 'Oldest First ↑'}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredAndSortedProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 06 / CONTACT SECTION (With direct Gmail compose link!)
 */
export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-inner reveal">
        <div className="contact-head-box card">
          <p className="eyebrow">
            <span className="step-badge">06</span> Connect &amp; Inquiries
          </p>
          <h2 className="contact-title">
            Let's engineer scalable, resilient <span className="gradient-text-cyan">systems together.</span>
          </h2>
          <p className="section-lead" style={{ margin: '0 auto 2rem' }}>
            Open for backend engineering roles, fintech architecture discussions, and distributed systems challenges.
          </p>

          <div className="contact-action-box">
            <div className="contact-avatar">AV</div>
            <div className="contact-info">
              <h3>{profile.name}</h3>
              <p>{profile.roleSubtitle} · {profile.company}</p>
            </div>

            {/* Direct Gmail Compose Button */}
            <a
              className="btn btn-emerald contact-mail-btn"
              href={profile.gmailUrl}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Compose in Gmail: {profile.email}
            </a>

            <span className="contact-or-hint">
              (Opens Gmail directly in a new tab)
            </span>
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
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} {profile.name} · Distributed Financial Backend Engineering</p>
          <p className="footer-sub">
            Built with React 19, Three.js, React Three Fiber, GSAP &amp; Vite
          </p>
        </footer>
      </div>
    </section>
  )
}

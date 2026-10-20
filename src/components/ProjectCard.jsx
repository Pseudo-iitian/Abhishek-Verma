import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article
        className="card project-card"
        onClick={() => setIsOpen(true)}
      >
        {/* Top Header: Source Badge + Impact Metric */}
        <div className="project-card-header">
          <span className={`project-source-badge ${project.categoryType}`}>
            {project.source === 'Rapipay Fintech' ? '🏢 ' : '🐙 '}
            {project.source} · {project.dateDisplay}
          </span>
          <span className="project-metric-pill">
            {project.metric}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Short & Clear Description */}
        <p className="project-desc">{project.shortDesc}</p>

        {/* Core Tech Stack (clean 4-5 tags) */}
        <div className="project-stack">
          {project.keyStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Actions */}
        <div className="project-actions">
          <button
            type="button"
            className="btn-details"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(true)
            }}
          >
            System Specs &amp; Details →
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-github-code"
              onClick={(e) => e.stopPropagation()}
              title="Inspect on GitHub"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub ↗</span>
            </a>
          )}
        </div>
      </article>

      {/* Simplified & Clean Modal */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-tag">
                  {project.source} · {project.dateDisplay}
                </span>
                <h2>{project.title}</h2>
              </div>
              <button
                className="modal-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-metric-banner">
                <span className="metric-highlight">{project.metric}</span>
                <span className="metric-text">{project.metricLabel}</span>
              </div>

              <div className="modal-section">
                <h4>What It Does &amp; Production Problem</h4>
                <p>{project.problem}</p>
              </div>

              <div className="modal-section">
                <h4>System Architecture</h4>
                <p>{project.architecture}</p>
              </div>

              <div className="modal-section">
                <h4>Engineering Implementation</h4>
                <ul>
                  {project.implementation.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Key Results &amp; Impact</h4>
                <ul className="results-list">
                  {project.results.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Full Technology Stack</h4>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-emerald"
                >
                  View Code on GitHub ↗
                </a>
              )}
              <button
                className="btn btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

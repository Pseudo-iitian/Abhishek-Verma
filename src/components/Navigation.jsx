import { useEffect, useState } from 'react'
import { profile } from '../data'

const navLinks = [
  { label: 'Architecture', sub: '01', href: '#about' },
  { label: 'Experience', sub: '02', href: '#experience' },
  { label: 'Tech Stack', sub: '03', href: '#skills' },
  { label: 'Systems Shipped', sub: '04', href: '#projects' },
  { label: 'Contact', sub: '05', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo">
          <span className="logo-initials">AV</span>
          <div className="logo-meta">
            <strong>{profile.name}</strong>
            <em>Fintech Backend Engineer</em>
          </div>
        </a>

        <div className="nav-status-badge">
          <span className="status-dot-pulse" />
          <span>Rapipay Fintech · Active</span>
        </div>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-item"
              onClick={() => setOpen(false)}
            >
              <span className="nav-sub">{link.sub}</span>
              <span className="nav-label">{link.label}</span>
            </a>
          ))}
          <a
            className="btn btn-outline nav-cta"
            href={`/${profile.resume}`}
            target="_blank"
            rel="noreferrer"
            download="Abhishek_Verma_Resume.pdf"
          >
            Résumé (PDF) ↓
          </a>
        </nav>

        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

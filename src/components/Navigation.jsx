import { useEffect, useState } from 'react'
import { profile } from '../data'

const navLinks = [
  { label: 'About', sub: '01', href: '#about' },
  { label: 'Experience', sub: '02', href: '#experience' },
  { label: 'Education', sub: '03', href: '#education' },
  { label: 'Skills', sub: '04', href: '#skills' },
  { label: 'Projects', sub: '05', href: '#projects' },
  { label: 'Contact', sub: '06', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
            <span className="logo-initials">AV</span>
            <div className="logo-meta">
              <strong>{profile.name}</strong>
              <em>Java Backend Engineer</em>
            </div>
          </a>

          {/* Status Badge (hidden on small mobile screens to prevent crowding) */}
          <div className="nav-status-badge desktop-only">
            <span className="status-dot-pulse" />
            <span>Rapipay Fintech · Active</span>
          </div>

          {/* Navigation Links (Desktop + Mobile Drawer) */}
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
              onClick={() => setOpen(false)}
            >
              Résumé (PDF) ↓
            </a>
          </nav>

          {/* Hamburger button for mobile */}
          <button
            className={`nav-burger ${open ? 'open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}

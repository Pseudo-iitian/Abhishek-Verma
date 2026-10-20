import { useEffect, useState } from 'react'
import { profile } from '../data'

const navLinks = [
  { label: 'Assi Ghat', sub: 'About', href: '#about' },
  { label: 'Old City', sub: 'Experience', href: '#experience' },
  { label: 'Engineering Ghats', sub: 'Skills', href: '#skills' },
  { label: 'Project Ghats', sub: 'Projects', href: '#projects' },
  { label: 'Final Ghat', sub: 'Contact', href: '#contact' },
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
            <em>Kashi 3D · Backend Engineer</em>
          </div>
        </a>

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

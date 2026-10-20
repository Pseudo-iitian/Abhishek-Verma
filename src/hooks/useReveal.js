import { useEffect } from 'react'

/**
 * Safe, progressive scroll reveal without ever hiding dynamic cards or breaking filtered state.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const els = document.querySelectorAll(
      '.section-head-box, .about-panel, .contact-head-box, .education-card'
    )
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

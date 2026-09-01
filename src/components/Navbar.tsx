import { useEffect, useState } from 'react'
import { IconClose, IconMenu } from './icons'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#story', label: 'Our Story' },
  { href: '#reserve', label: 'Reserve' },
  { href: '#location', label: 'Location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__brand-mark">SS</span>
          <span className="navbar__brand-text">
            Family Restaurant
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#reserve" className="btn btn-primary navbar__cta">
          Reserve a Table
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn-primary" onClick={() => setOpen(false)}>
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  )
}

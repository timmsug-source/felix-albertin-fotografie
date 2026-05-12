'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          KEVIN <span>MÜNKEL</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/work">Alle Projekte</Link></li>
          <li><Link href="/#about">Über mich</Link></li>
          <li><Link href="/#contact" className="nav-cta">Kontakt</Link></li>
        </ul>
        <button
          className="hamburger"
          onClick={() => setOpen(true)}
          aria-label="Menü öffnen"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Schließen">
          ✕
        </button>
        <Link href="/#work" onClick={() => setOpen(false)}>Work</Link>
        <Link href="/work" onClick={() => setOpen(false)}>Alle Projekte</Link>
        <Link href="/#about" onClick={() => setOpen(false)}>Über mich</Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>Kontakt</Link>
      </div>
    </>
  )
}

import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Link href="/" className="nav-logo">
        KEVIN <span style={{ color: 'var(--accent)' }}>MÜNKEL</span>
      </Link>
      <span>© {year} Kevin Münkel. Alle Rechte vorbehalten.</span>
      <div className="footer-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Kontakt</Link>
        <Link href="/impressum">Impressum</Link>
      </div>
    </footer>
  )
}

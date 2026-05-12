import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/hero.jpg"
          alt="Kevin Münkel Fotografie"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">Freelance Photographer since 2012</span>
        <h1>
          BRANDS,<br />
          EVENTS,<br />
          <em>PEOPLE.</em>
        </h1>
        <p className="hero-sub">Corporate · Event · Advertising · Social Media</p>
        <div className="hero-actions">
          <Link href="/work" className="btn btn-primary">
            View Work →
          </Link>
          <Link href="/#contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}

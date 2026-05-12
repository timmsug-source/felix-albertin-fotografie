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
        <span className="hero-eyebrow">Freelance Fotograf · Deutschland</span>
        <h1>
          VISUALS<br />
          DIE <em>WIRKEN</em>
        </h1>
        <p className="hero-sub">Events · Corporate · People · Advertising</p>
        <div className="hero-actions">
          <Link href="/work" className="btn btn-primary">
            Portfolio ansehen →
          </Link>
          <Link href="/#contact" className="btn btn-outline">
            Projekt anfragen
          </Link>
        </div>
      </div>

      <div className="hero-scroll">Scroll</div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'

export default function AboutSection({ about }) {
  const name = about?.name || 'Kevin Münkel'
  const location = about?.location || 'Based in Germany.'
  const tagline = about?.tagline || 'Full-time freelance photographer for brands, events & people.'
  const email = about?.email || 'kontakt@kevinmuenkel.de'
  const expertise = about?.expertise || ['Events & Konzerte', 'Corporate', 'People & Portraits', 'Advertising']
  const network = about?.network || ['Brands', 'Agenturen', 'Medien', 'Veranstalter']
  const quote = about?.quote || 'Licht lügt nicht.'

  return (
    <section id="about" className="about-section">
      <div className="about-image">
        {about?.portrait ? (
          <Image
            src={urlFor(about.portrait).width(900).url()}
            alt={name}
            fill
            style={{ objectFit: 'cover', opacity: 0.85 }}
          />
        ) : (
          <Image
            src="/portrait.jpg"
            alt={name}
            fill
            style={{ objectFit: 'cover', opacity: 0.85 }}
          />
        )}
        <div className="about-quote-box">
          <p>„{quote}"</p>
        </div>
        <span className="about-photo-credit">Portrait © Kevin Münkel</span>
      </div>

      <div className="about-content">
        <div className="about-name-block">
          <h2 className="about-name">{name}</h2>
          <p className="about-location">{location}</p>
        </div>

        <p className="about-tagline">{tagline}</p>

        <div className="about-body">
          {about?.body ? (
            <PortableText value={about.body} />
          ) : (
            <>
              <p>
                Ich bin gelernter Werbefotograf &amp; freiberuflich tätig seit 2012 in den Fotografie
                Bereichen Corporate / Event / Werbung / Social Media Content.
              </p>
              <p>
                Mit einem Netzwerk aus Kollegen &amp; Kolleginnen für Fotografie / Video Produktion /
                Post-Production / Videoschnitt / Digital Operator / Assistenz / Styling / Set Design /
                Hair-&amp;Makeup setzen wir gemeinsam verschiedene Fotoproduktionen für unsere Kunden um.
              </p>
              <p>
                Von der Event Dokumentation über Mitarbeiter Portraits bis zur Werbeproduktion:
                Gerne berate ich Sie vorab und erstelle Ihnen faire und transparente Kostenvoranschläge.
              </p>
            </>
          )}
        </div>

        <div className="about-skills">
          <div className="about-skills-col">
            <p className="skills-label">// Expertise</p>
            <ul>
              {expertise.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="about-skills-col">
            <p className="skills-label">// Netzwerk</p>
            <ul>
              {network.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>

        <Link href={`mailto:${email}`} className="about-cta">
          Zusammenarbeiten <span>→</span>
        </Link>
      </div>
    </section>
  )
}

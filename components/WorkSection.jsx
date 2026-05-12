import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/client'

const categoryLabels = {
  events: 'Events & Music',
  corporate: 'Corporate',
  people: 'People',
  advertising: 'Advertising',
}

export default function WorkSection({ projects = [] }) {
  const featured = projects.find(p => p.featured) || projects[0]
  const others = projects.filter(p => p._id !== featured?._id).slice(0, 2)

  return (
    <section id="work" className="work-section">
      <div className="work-header">
        <div>
          <p className="section-label">Ausgewählte Arbeiten</p>
          <h2 className="section-title">Selected<br />Work</h2>
        </div>
        <Link href="/work" className="btn btn-outline" style={{ color: 'var(--black)', borderColor: 'rgba(10,10,10,0.25)' }}>
          Alle Projekte →
        </Link>
      </div>

      <div className="work-grid">
        {featured && (
          <Link href="/work" className="work-card featured">
            {featured.image && (
              <Image
                src={urlFor(featured.image).width(1200).url()}
                alt={featured.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
            <div className="card-info">
              <p className="card-tag">{categoryLabels[featured.category] || featured.category}</p>
              <h3 className="card-title">{featured.title}</h3>
            </div>
          </Link>
        )}

        {others.map(project => (
          <Link key={project._id} href="/work" className="work-card tall">
            {project.image && (
              <Image
                src={urlFor(project.image).width(800).url()}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
            <div className="card-info">
              <p className="card-tag">{categoryLabels[project.category] || project.category}</p>
              <h3 className="card-title">{project.title}</h3>
            </div>
          </Link>
        ))}

        {/* Fallback placeholder cards if no Sanity data yet */}
        {projects.length === 0 && (
          <>
            <div className="work-card featured">
              <Image src="/event-hiphop.jpg" alt="Featured" fill style={{ objectFit: 'cover', opacity: 0.65 }} />
              <div className="card-info">
                <p className="card-tag">Events & Music</p>
                <h3 className="card-title">Hip-Hop Konzert<br />Live Photography</h3>
              </div>
            </div>
            <div className="work-card tall">
              <Image src="/corporate-award.jpg" alt="Corporate" fill style={{ objectFit: 'cover', opacity: 0.65 }} />
              <div className="card-info">
                <p className="card-tag">Corporate</p>
                <h3 className="card-title">Award Ceremony</h3>
              </div>
            </div>
            <div className="work-card tall">
              <Image src="/event-antenne.jpg" alt="Event" fill style={{ objectFit: 'cover', opacity: 0.65 }} />
              <div className="card-info">
                <p className="card-tag">Events</p>
                <h3 className="card-title">Antenne Bayern</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

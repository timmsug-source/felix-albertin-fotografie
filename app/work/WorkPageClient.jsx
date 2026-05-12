'use client'
import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

const categories = [
  { value: 'all', label: 'Alle' },
  { value: 'events', label: 'Events & Music' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'people', label: 'People' },
  { value: 'advertising', label: 'Advertising' },
]

const categoryLabels = {
  events: 'Events & Music',
  corporate: 'Corporate',
  people: 'People',
  advertising: 'Advertising',
}

// Local fallback images if Sanity is empty
const fallbackProjects = [
  { _id: '1', title: 'Hip-Hop Live', category: 'events', localSrc: '/event-hiphop.jpg' },
  { _id: '2', title: 'Award Ceremony', category: 'corporate', localSrc: '/corporate-award.jpg' },
  { _id: '3', title: 'Antenne Bayern', category: 'events', localSrc: '/event-antenne.jpg' },
  { _id: '4', title: 'Karneval', category: 'events', localSrc: '/event-carnival.jpg' },
  { _id: '5', title: 'Drummers', category: 'events', localSrc: '/event-drummers.jpg' },
]

export default function WorkPageClient({ projects = [] }) {
  const [active, setActive] = useState('all')

  const data = projects.length > 0 ? projects : fallbackProjects

  const filtered = active === 'all'
    ? data
    : data.filter(p => p.category === active)

  return (
    <>
      <div className="work-page-hero">
        <div className="work-hero-bg">
          <Image
            src="/hero.jpg"
            alt="Work"
            fill
            style={{ objectFit: 'cover', opacity: 0.5 }}
            priority
          />
        </div>
        <div className="work-hero-overlay" />
        <div className="work-hero-content">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Alle Projekte</h1>
          <p>Einblicke in meine Arbeit — Events, Corporate, People & mehr.</p>
        </div>
      </div>

      <section className="gallery-section">
        <div className="filter-bar-inline">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${active === cat.value ? 'active' : ''}`}
              onClick={() => setActive(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filtered.map(project => (
            <div key={project._id} className="masonry-item">
              {project.image ? (
                <Image
                  src={urlFor(project.image).width(800).url()}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ) : project.localSrc ? (
                <Image
                  src={project.localSrc}
                  alt={project.title}
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              ) : null}
              <div className="masonry-item-info">
                <p className="card-tag">{categoryLabels[project.category] || project.category}</p>
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

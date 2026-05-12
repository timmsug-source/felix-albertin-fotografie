const items = [
  'Events & Konzerte',
  'Corporate',
  'People & Portraits',
  'Advertising',
  'Musik & Kultur',
  'Editorial',
]

export default function ServicesStrip() {
  const doubled = [...items, ...items]

  return (
    <div className="services-strip">
      <div className="strip-inner">
        {doubled.map((item, i) => (
          <span key={i} className={i % 3 === 1 ? 'accent' : ''}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

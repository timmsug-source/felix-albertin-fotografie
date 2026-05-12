export default function ClientsSection({ clients = [] }) {
  const brands = clients.filter(c => c.type === 'brand')
  const agencies = clients.filter(c => c.type === 'agency')
  const publications = clients.filter(c => c.type === 'publication')

  // Fallback data
  const fallbackBrands = ['Adidas', 'BMW', 'Red Bull', 'Puma', 'Siemens']
  const fallbackAgencies = ['Jung von Matt', 'BBDO', 'Scholz & Friends', 'Serviceplan']
  const fallbackPublications = ['SZ Magazin', 'Vogue Germany', 'STERN', 'Rolling Stone DE']

  const showBrands = brands.length > 0 ? brands.map(c => c.name) : fallbackBrands
  const showAgencies = agencies.length > 0 ? agencies.map(c => c.name) : fallbackAgencies
  const showPubs = publications.length > 0 ? publications.map(c => c.name) : fallbackPublications

  return (
    <section className="clients-section">
      <div className="clients-header">
        <p className="section-label">Vertrauen mir</p>
        <h2 className="section-title">Kunden &<br />Partner</h2>
      </div>

      <div className="clients-group">
        <p className="clients-group-label">Brands</p>
        <div className="clients-list">
          {showBrands.map((name, i) => (
            <span key={i} className="client-name">{name}</span>
          ))}
        </div>
      </div>

      <div className="clients-group">
        <p className="clients-group-label">Agenturen</p>
        <div className="clients-list">
          {showAgencies.map((name, i) => (
            <span key={i} className="client-name">{name}</span>
          ))}
        </div>
      </div>

      <div className="clients-group">
        <p className="clients-group-label">Publikationen</p>
        <div className="clients-list">
          {showPubs.map((name, i) => (
            <span key={i} className="client-name">{name}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

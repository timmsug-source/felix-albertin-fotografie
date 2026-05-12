export default function ClientsSection({ clients = [] }) {
  const brands = clients.filter(c => c.type === 'brand')
  const agencies = clients.filter(c => c.type === 'agency')
  const publications = clients.filter(c => c.type === 'publication')

  // Real client data
  const fallbackBrands = [
    'ABINBEV', 'ANTENNE NIEDERSACHSEN', 'BACARDI', 'BEAM SUNTORY', 'BONprix',
    'BORCO', 'BROWN-FORMAN', 'CAMPARI', 'DAIMLER', 'EDDING', 'ESPRIT',
    'GEBOTHERM', 'HANNOVER MARKETING', 'IDEEN EXPO', 'JÄGERMEISTER',
    'JO MALONE LONDON', 'KAIA HEALTH', 'KILIAN PARIS', 'LORENZ SNACK-WORLD',
    'MADSACK MEDIENGRUPPE', 'RIVAL DE LOOP', 'RÖCHLING', 'ROSSMANN',
    'SENNHEISER', 'SPARKASSE HANNOVER', 'STREET ONE / CECIL', 'SWISSLIFE', 'S.OLIVER',
  ]
  const fallbackAgencies = [
    'About Brand Communication', 'APD Events', 'BOOM', 'DIE RÜCKemänner',
    'EPIC', 'EVENT IT', 'GROße Liebe', 'IDENTITÄTSSTIFTUNG', 'JOKE',
    'LAUTSTARK', 'la red', 'PHILIPP UND KEUNTJE', 'POWER 4 BRANDS',
    'PROOF & SONS', 'TERRITORY', 'W&S EPIC', 'WIETHE OBJEKTIV', 'WINDRICH & SÖRGEL',
  ]
  const fallbackPublications = [
    'AXEL SPRINGER / BILD', 'FIZZZ', 'LEBEN. (SWISSLIFE)',
    'ROLLING PIN', 'SCHÖN FÜR MICH (ROSSMANN)', 'T3N MAGAZIN', 'WEB MAG. MERCEDES-BENZ',
  ]

  const showBrands = brands.length > 0 ? brands.map(c => c.name) : fallbackBrands
  const showAgencies = agencies.length > 0 ? agencies.map(c => c.name) : fallbackAgencies
  const showPubs = publications.length > 0 ? publications.map(c => c.name) : fallbackPublications

  return (
    <section className="clients-section">
      <div className="clients-header">
        <p className="section-label">Vertrauen mir</p>
        <h2 className="section-title">Leading Brands<br />&amp; Agencies</h2>
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

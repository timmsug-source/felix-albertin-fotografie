import { client } from '@/sanity/lib/client'
import { aboutQuery, featuredProjectsQuery, clientsQuery } from '@/sanity/lib/queries'
import Hero from '@/components/Hero'
import ServicesStrip from '@/components/ServicesStrip'
import WorkSection from '@/components/WorkSection'
import AboutSection from '@/components/AboutSection'
import ClientsSection from '@/components/ClientsSection'
import ContactSection from '@/components/ContactSection'

export const revalidate = 60

async function fetchData() {
  if (!client) return { about: null, projects: [], clients: [] }
  const [about, projects, clients] = await Promise.all([
    client.fetch(aboutQuery),
    client.fetch(featuredProjectsQuery),
    client.fetch(clientsQuery),
  ])
  return { about, projects: projects || [], clients: clients || [] }
}

export default async function HomePage() {
  const { about, projects, clients } = await fetchData()

  return (
    <>
      <Hero />
      <ServicesStrip />
      <WorkSection projects={projects} />
      <AboutSection about={about} />
      {about?.quote && (
        <section className="quote-section">
          <blockquote>„{about.quote}"</blockquote>
          <cite>— {about.name || 'Kevin Münkel'}</cite>
        </section>
      )}
      <ClientsSection clients={clients} />
      <ContactSection email={about?.email} />
    </>
  )
}

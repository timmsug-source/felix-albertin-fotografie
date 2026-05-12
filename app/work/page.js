import { client } from '@/sanity/lib/client'
import { projectsQuery } from '@/sanity/lib/queries'
import WorkPageClient from './WorkPageClient'

export const revalidate = 60

export const metadata = {
  title: 'Alle Projekte – Kevin Münkel Fotografie',
}

export default async function WorkPage() {
  const projects = client ? (await client.fetch(projectsQuery)) || [] : []
  return <WorkPageClient projects={projects} />
}

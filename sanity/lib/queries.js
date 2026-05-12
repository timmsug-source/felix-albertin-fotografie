export const aboutQuery = `*[_type == "about"][0]`

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id, title, category, image, featured
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc)[0...3] {
  _id, title, category, image
}`

export const clientsQuery = `*[_type == "client"] | order(order asc) {
  _id, name, type
}`

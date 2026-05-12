export default {
  name: 'project',
  title: 'Projekte',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string' },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Events & Music', value: 'events' },
          { title: 'Corporate', value: 'corporate' },
          { title: 'People', value: 'people' },
          { title: 'Advertising', value: 'advertising' },
        ],
      },
    },
    { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
    { name: 'featured', title: 'Featured (Startseite)', type: 'boolean' },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
  ],
  orderings: [{ title: 'Reihenfolge', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
}

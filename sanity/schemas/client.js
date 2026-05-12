export default {
  name: 'client',
  title: 'Kunden',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          { title: 'Brand', value: 'brand' },
          { title: 'Agentur', value: 'agency' },
          { title: 'Publikation', value: 'publication' },
        ],
      },
    },
    { name: 'order', title: 'Reihenfolge', type: 'number' },
  ],
}

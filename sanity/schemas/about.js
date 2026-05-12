export default {
  name: 'about',
  title: 'Über mich',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'location', title: 'Standort', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'body', title: 'Text', type: 'array', of: [{ type: 'block' }] },
    { name: 'portrait', title: 'Portrait', type: 'image', options: { hotspot: true } },
    { name: 'quote', title: 'Zitat', type: 'string' },
    { name: 'email', title: 'E-Mail', type: 'string' },
    { name: 'instagram', title: 'Instagram URL', type: 'url' },
    {
      name: 'expertise',
      title: 'Expertise',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'network',
      title: 'Netzwerk',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

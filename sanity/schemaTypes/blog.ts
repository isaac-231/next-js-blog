export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      title: 'Title of blog article',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug of blog article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
    },
    {
      name: 'contentDescription',
      type: 'text',
      title: 'Content title',
    },
    {
      name: 'content',
      title: 'content of blog article',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

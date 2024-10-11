export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'magazine_pdf',
      title: 'Magazine pdf',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
    },
    {
      name: 'review',
      title: 'Review',
      type: 'array',
      of: [{type: 'review'}],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}

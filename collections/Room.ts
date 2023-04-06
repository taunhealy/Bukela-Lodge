import { CollectionConfig } from 'payload/types';

const Room: CollectionConfig = {
    slug: 'rooms',
    fields: [
        {
            name: 'title',
            label: 'Room Title',
            type: 'text',
            required: true,
        },
{
    name: 'featuredImage',
    label: 'Featured Image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'images',
    label: 'Images',
    type: 'array',
    minRows: 1,
    fields: [
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
    ],
  },
  {
    name: 'description',
    label: 'Description',
    type: 'richText',
    required: true,
  },
  {
    name: 'price',
    label: 'Price',
    type: 'number',
    required: true,
  },
],
};

export default Room;
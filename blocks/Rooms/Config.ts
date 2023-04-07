
import React from 'react';
import { Block } from 'payload/types';

export const Rooms: Block = {
  slug: 'roomsblock',
  labels: {
    singular: 'Rooms Block',
    plural: 'Rooms Blocks',
  },
  fields: [
  {
      name: 'selectRooms',
      type: 'relationship',
      relationTo: 'rooms',
      hasMany: true,
    },
  ],
};
import React from 'react';
import NextImage from 'next/image';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import sizes from './sizes.json';
import { MediaType } from '../../collections/Media';
import { Rooms } from './Config';

export type Type = {
  blockType: 'rooms'
  blockName?: string
  selectRooms: any[];
    
  };

  export const Component: React.FC<Type> = ({ selectRooms }) => { 
    return ( 
    <div>
      {selectRooms.map((room) => (
        <div key={room._id}>
        <h2>{room.title}</h2>
        <img src={room.featuredImage.url} alt={room.featuredImage.alt} />
        <p>{room.description}</p>
        <p>Price: {room.price}</p>
        </div>
        ))}
    </div>
    );
  };
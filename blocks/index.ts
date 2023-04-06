import { CallToAction } from './CallToAction/Config';
import { Component as cta } from './CallToAction/Component';
import { Content } from './Content/Config';
import { Component as content } from './Content/Component';
import { Image } from './Image/Config';
import { Component as image } from './Image/Component';
import { Rooms } from './Rooms/Config';
import { RoomsBlock } from './Rooms/Component';

export const collections = {
  CallToAction,
  Content,
  Image,
  Rooms,
};

export const components = {
  cta,
  content,
  image,
  RoomsBlock,
};

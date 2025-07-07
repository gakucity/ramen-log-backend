import type { Schema, Struct } from '@strapi/strapi';

export interface StationArea extends Struct.ComponentSchema {
  collectionName: 'components_station_areas';
  info: {
    displayName: 'Area';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'station.area': StationArea;
    }
  }
}

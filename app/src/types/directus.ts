// Simple types matching our Directus schema
export interface DirectusBaseItem {
  id: string;
  title: string;
  item_type: 'event' | 'marketplace' | 'user' | 'group';
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude]
  };
  address?: string;
}

export interface DirectusResponse<T> {
  data: T[];
}

export interface DirectusError {
  errors: Array<{
    message: string;
    extensions: {
      code: string;
    };
  }>;
}
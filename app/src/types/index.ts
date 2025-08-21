// Core data types for LokalConnect - Geographic-focused application with generic Item system

// GeoJSON Types (compatible with Directus geometry fields)
export interface GeoJSONPoint {
  type: 'Point';
  coordinates: [number, number]; // [longitude, latitude]
}

export interface GeoJSONLineString {
  type: 'LineString';
  coordinates: [number, number][]; // Array of [longitude, latitude] points
}

export interface GeoJSONPolygon {
  type: 'Polygon';
  coordinates: [number, number][][]; // Array of linear rings
}

export type GeoJSONGeometry = GeoJSONPoint | GeoJSONLineString | GeoJSONPolygon;

// Base geographic object
export interface GeographicObject {
  geometry: GeoJSONGeometry;
  address?: string | null;
  city: string;
  postal_code?: string | null;
  country: string;
}

// Generic Item interface - base for all map-placeable objects
export interface BaseItem {
  id: string;
  title: string;
  description?: string | null;
  item_type: ItemType;
  location: GeographicObject;
  creator: User;
  status: ItemStatus;
  visibility: ItemVisibility;
  tags: string[];
  image?: string | null;
  created_at: string;
  updated_at: string;
  // Interaction capabilities
  is_interactive: boolean;
  interaction_radius?: number | null; // in meters - how close you need to be to interact
}

export type ItemType = 
  | 'user'
  | 'event' 
  | 'marketplace_item'
  | 'group'
  | 'track'
  | 'area'
  | 'poi'; // point of interest

export type ItemStatus = 
  | 'active'
  | 'inactive' 
  | 'pending'
  | 'archived'
  | 'deleted';

export type ItemVisibility =
  | 'public'     // visible to everyone
  | 'friends'    // visible to friends only
  | 'members'    // visible to group members only
  | 'private';   // visible to creator only

// User extends BaseItem
export interface User extends BaseItem {
  item_type: 'user';
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string | null;
  reputation: number;
  bio?: string | null;
  interests: string[];
  last_active: string;
  // Location-specific user settings
  location_privacy: ItemVisibility;
  search_radius: number; // in kilometers
  is_online: boolean;
  current_activity?: UserActivity | null;
}

export interface UserActivity {
  activity_type: 'walking' | 'cycling' | 'running' | 'driving' | 'stationary';
  last_seen: string;
  speed?: number | null; // in km/h
}

// Event extends BaseItem
export interface Event extends BaseItem {
  item_type: 'event';
  date_time: string;
  end_time?: string | null;
  organizer: User;
  participants: User[];
  max_participants?: number | null;
  category: EventCategory;
  // Event-specific location details
  venue_name?: string | null;
  is_indoor: boolean;
  accessibility_info?: string | null;
  // Event state
  participant_count: number;
  is_full: boolean;
  requires_approval: boolean;
}

export type EventCategory = 
  | 'sport'
  | 'culture'
  | 'food'
  | 'education'
  | 'networking'
  | 'entertainment'
  | 'outdoor'
  | 'wellness'
  | 'technology'
  | 'community';

// MarketplaceItem extends BaseItem
export interface MarketplaceItem extends BaseItem {
  item_type: 'marketplace_item';
  price: number;
  currency: string;
  seller: User;
  category: MarketplaceCategory;
  images: string[];
  condition: ItemCondition;
  // Marketplace-specific fields
  pickup_available: boolean;
  delivery_available: boolean;
  delivery_radius?: number | null; // in kilometers
  is_negotiable: boolean;
  sold_to?: User | null;
  sold_at?: string | null;
}

export type MarketplaceCategory =
  | 'electronics'
  | 'furniture'
  | 'clothing'
  | 'books'
  | 'sports'
  | 'home_garden'
  | 'vehicles'
  | 'services'
  | 'other';

export type ItemCondition = 'new' | 'like_new' | 'good' | 'fair' | 'poor';

// Group extends BaseItem
export interface Group extends BaseItem {
  item_type: 'group';
  admin: User;
  members: User[];
  category: GroupCategory;
  privacy: ItemVisibility;
  member_count: number;
  max_members?: number | null;
  // Group-specific geographic fields
  activity_area?: GeoJSONPolygon | null; // Area where group is active
  meeting_location?: GeographicObject | null; // Regular meeting spot
  // Group settings
  requires_approval: boolean;
  allow_member_posts: boolean;
}

export type GroupCategory =
  | 'hobby'
  | 'professional'
  | 'sports'
  | 'social'
  | 'learning'
  | 'volunteer'
  | 'parents'
  | 'neighborhood';

// Track extends BaseItem
export interface Track extends BaseItem {
  item_type: 'track';
  geometry: GeoJSONLineString; // Override to ensure LineString
  distance: number; // in meters
  elevation_gain?: number | null; // in meters
  difficulty: TrackDifficulty;
  category: TrackCategory;
  // Track metadata
  duration_estimate?: number | null; // in minutes
  surface_type?: TrackSurface | null;
  waypoints?: GeoJSONPoint[]; // Important points along the track
}

export type TrackDifficulty = 'easy' | 'moderate' | 'hard' | 'expert';

export type TrackCategory = 
  | 'hiking'
  | 'cycling' 
  | 'running'
  | 'walking'
  | 'motorcycle'
  | 'scenic_route';

export type TrackSurface = 
  | 'paved'
  | 'gravel'
  | 'dirt'
  | 'grass'
  | 'sand'
  | 'mixed';

// Area extends BaseItem  
export interface Area extends BaseItem {
  item_type: 'area';
  geometry: GeoJSONPolygon; // Override to ensure Polygon
  area_type: AreaType;
  area_size?: number | null; // in square meters
  // Area-specific fields
  access_restrictions?: string | null;
  opening_hours?: OpeningHours | null;
  contact_info?: ContactInfo | null;
}

export type AreaType =
  | 'neighborhood'
  | 'park'
  | 'commercial_area'
  | 'event_zone'
  | 'restricted_area'
  | 'point_of_interest'
  | 'nature_reserve'
  | 'playground'
  | 'sports_facility';

export interface OpeningHours {
  monday?: TimeSlot | null;
  tuesday?: TimeSlot | null;
  wednesday?: TimeSlot | null;
  thursday?: TimeSlot | null;
  friday?: TimeSlot | null;
  saturday?: TimeSlot | null;
  sunday?: TimeSlot | null;
  special_hours?: SpecialHours[];
}

export interface TimeSlot {
  open: string; // "09:00"
  close: string; // "18:00"
  is_closed: boolean;
}

export interface SpecialHours {
  date: string;
  hours: TimeSlot;
  note?: string;
}

export interface ContactInfo {
  phone?: string | null;
  email?: string | null;
  website?: string | null;
}

// Point of Interest
export interface PointOfInterest extends BaseItem {
  item_type: 'poi';
  poi_type: POIType;
  rating?: number | null; // 1-5 stars
  review_count: number;
  contact_info?: ContactInfo | null;
  opening_hours?: OpeningHours | null;
  amenities?: string[]; // ['wifi', 'parking', 'wheelchair_accessible']
}

export type POIType =
  | 'restaurant'
  | 'cafe'
  | 'shop'
  | 'service'
  | 'attraction'
  | 'landmark'
  | 'transport'
  | 'healthcare'
  | 'education'
  | 'government';

// Union type for all items
export type AnyItem = User | Event | MarketplaceItem | Group | Track | Area | PointOfInterest;

// Messages and Social Features (not map items)
export interface Message {
  id: string;
  sender: User;
  recipient: User;
  content: string;
  thread_id: string;
  read: boolean;
  sent_at: string;
  message_type: 'text' | 'image' | 'location' | 'system';
  attachments?: MessageAttachment[];
  shared_location?: GeographicObject | null;
}

export interface MessageAttachment {
  id: string;
  filename: string;
  url: string;
  mime_type: string;
  size: number;
}

export interface MessageThread {
  id: string;
  participants: User[];
  last_message: Message;
  unread_count: number;
  created_at: string;
  updated_at: string;
}

export interface Friendship {
  id: string;
  requester: User;
  addressee: User;
  status: 'pending' | 'accepted' | 'blocked';
  created_at: string;
  updated_at: string;
}

// Location-based search and filtering
export interface LocationFilter {
  center: GeoJSONPoint;
  radius: number; // in kilometers
  bbox?: [number, number, number, number]; // [minLng, minLat, maxLng, maxLat]
}

export interface ItemFilter {
  location_filter?: LocationFilter;
  item_types?: ItemType[];
  categories?: string[];
  tags?: string[];
  status?: ItemStatus[];
  visibility?: ItemVisibility[];
  date_range?: {
    start: string;
    end: string;
  };
  price_range?: {
    min: number;
    max: number;
  };
  creator_id?: string;
}

// Map-related types
export interface MapBounds {
  northeast: { lat: number; lng: number };
  southwest: { lat: number; lng: number };
}

export interface MapViewport {
  center: GeoJSONPoint;
  zoom: number;
  bounds: MapBounds;
}

export interface MapItem {
  item: AnyItem;
  distance?: number; // distance from search center in meters
  is_in_view: boolean;
  is_clustered: boolean;
  cluster_count?: number;
}

// UI Component Props
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps extends ComponentProps {
  title?: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  meta?: {
    total_count?: number;
    filter_count?: number;
  };
}

export interface ApiError {
  errors: Array<{
    message: string;
    extensions: {
      code: string;
    };
  }>;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  location?: GeographicObject;
}

export interface BaseItemForm {
  title: string;
  description?: string;
  location: GeographicObject;
  tags: string[];
  visibility: ItemVisibility;
  image?: File;
}

export interface EventForm extends BaseItemForm {
  date_time: string;
  end_time?: string;
  category: EventCategory;
  max_participants?: number;
  venue_name?: string;
  is_indoor: boolean;
  accessibility_info?: string;
  requires_approval: boolean;
}

export interface MarketplaceForm extends BaseItemForm {
  price: number;
  category: MarketplaceCategory;
  condition: ItemCondition;
  images: File[];
  pickup_available: boolean;
  delivery_available: boolean;
  delivery_radius?: number;
  is_negotiable: boolean;
}

export interface GroupForm extends BaseItemForm {
  category: GroupCategory;
  privacy: ItemVisibility;
  max_members?: number;
  activity_area?: GeoJSONPolygon;
  meeting_location?: GeographicObject;
  requires_approval: boolean;
  allow_member_posts: boolean;
}

export interface TrackForm extends BaseItemForm {
  geometry: GeoJSONLineString;
  difficulty: TrackDifficulty;
  category: TrackCategory;
  surface_type?: TrackSurface;
  waypoints?: GeoJSONPoint[];
}

export interface AreaForm extends BaseItemForm {
  geometry: GeoJSONPolygon;
  area_type: AreaType;
  access_restrictions?: string;
  opening_hours?: OpeningHours;
  contact_info?: ContactInfo;
}

export interface POIForm extends BaseItemForm {
  poi_type: POIType;
  contact_info?: ContactInfo;
  opening_hours?: OpeningHours;
  amenities?: string[];
}

// Utility types
export interface DistanceResult {
  distance: number; // in meters
  duration?: number; // estimated time in minutes
  route?: GeoJSONLineString; // optional route geometry
}
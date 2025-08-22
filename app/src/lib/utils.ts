import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { 
  GeoJSONPoint, 
  GeoJSONGeometry, 
  GeographicObject,
  LocationFilter 
} from '@/types';

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Geographic utility functions
export function calculateDistance(
  point1: GeoJSONPoint, 
  point2: GeoJSONPoint
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(point2.coordinates[1] - point1.coordinates[1]);
  const dLon = toRadians(point2.coordinates[0] - point1.coordinates[0]);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(point1.coordinates[1])) * 
    Math.cos(toRadians(point2.coordinates[1])) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c * 1000; // Return distance in meters
}

export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function toDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}

// Check if a point is within a location filter
export function isPointInLocationFilter(
  point: GeoJSONPoint,
  filter: LocationFilter
): boolean {
  const distance = calculateDistance(point, filter.center);
  return distance <= filter.radius * 1000; // Convert km to meters
}

// Get the center point of a geometry
export function getGeometryCenter(geometry: GeoJSONGeometry): GeoJSONPoint {
  switch (geometry.type) {
    case 'Point':
      return geometry;
    
    case 'LineString':
      // Return midpoint of the line
      const midIndex = Math.floor(geometry.coordinates.length / 2);
      const midCoord = geometry.coordinates[midIndex];
      if (!midCoord) {
        throw new Error('LineString has no coordinates');
      }
      return {
        type: 'Point',
        coordinates: midCoord
      };
    
    case 'Polygon':
      // Calculate centroid of the polygon
      const coordinates = geometry.coordinates[0]; // Outer ring
      if (!coordinates || coordinates.length === 0) {
        throw new Error('Polygon has no coordinates');
      }
      let x = 0, y = 0;
      coordinates.forEach(coord => {
        x += coord[0];
        y += coord[1];
      });
      return {
        type: 'Point',
        coordinates: [x / coordinates.length, y / coordinates.length]
      };
    
    default:
      throw new Error(`Unsupported geometry type: ${(geometry as any).type}`);
  }
}

// Format distance for display
export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  } else if (meters < 10000) {
    return `${(meters / 1000).toFixed(1)}km`;
  } else {
    return `${Math.round(meters / 1000)}km`;
  }
}

// Format coordinates for display
export function formatCoordinates(point: GeoJSONPoint, precision: number = 4): string {
  const [lng, lat] = point.coordinates;
  return `${lat.toFixed(precision)}, ${lng.toFixed(precision)}`;
}

// Create a bounding box around a point with given radius
export function createBoundingBox(
  center: GeoJSONPoint, 
  radiusKm: number
): [number, number, number, number] {
  const lat = center.coordinates[1];
  const lng = center.coordinates[0];
  
  // Approximate degrees per km (varies by latitude)
  const kmPerDegreeLat = 111;
  const kmPerDegreeLng = 111 * Math.cos(toRadians(lat));
  
  const deltaLat = radiusKm / kmPerDegreeLat;
  const deltaLng = radiusKm / kmPerDegreeLng;
  
  return [
    lng - deltaLng, // minLng
    lat - deltaLat, // minLat
    lng + deltaLng, // maxLng
    lat + deltaLat  // maxLat
  ];
}

// Validate GeoJSON coordinates
export function isValidCoordinates(coordinates: [number, number]): boolean {
  const [lng, lat] = coordinates;
  return lng >= -180 && lng <= 180 && lat >= -90 && lat <= 90;
}

// Parse location string to GeographicObject (useful for forms)
export function parseLocationString(locationStr: string): Partial<GeographicObject> {
  // Simple parser for "City, Country" or "Address, City, Country" format
  const parts = locationStr.split(',').map(part => part.trim());
  
  if (parts.length >= 2) {
    return {
      city: parts[parts.length - 2] || '',
      country: parts[parts.length - 1] || '',
      address: parts.length > 2 ? parts.slice(0, -2).join(', ') : null
    };
  }
  
  return { city: locationStr };
}

// Date and time utilities
export function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(date);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('de-DE', {
    dateStyle: 'medium'
  }).format(date);
}

export function formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('de-DE', {
    timeStyle: 'short'
  }).format(date);
}

export function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffMins < 1) return 'jetzt';
  if (diffMins < 60) return `vor ${diffMins}min`;
  if (diffHours < 24) return `vor ${diffHours}h`;
  if (diffDays < 7) return `vor ${diffDays}d`;
  
  return formatDate(dateStr);
}

// String utilities
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Price formatting
export function formatPrice(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

// Array utilities
export function groupBy<T, K extends keyof any>(
  array: T[], 
  key: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const group = key(item);
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

export function sortByDistance<T extends { distance?: number }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => (a.distance || 0) - (b.distance || 0));
}

// Validation utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Debounce utility for search inputs
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Local storage utilities with type safety
export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
}

export function removeStorageItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Failed to remove from localStorage:', error);
  }
}

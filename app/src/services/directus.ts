import { createDirectus, rest, readItems, readItem, createItem, updateItem, deleteItem } from '@directus/sdk';
import { DirectusBaseItem } from '@/types/directus';

// Define schema interface for Directus
interface DirectusSchema {
  base_items: DirectusBaseItem;
}

class DirectusService {
  private client;

  constructor() {
    this.client = createDirectus<DirectusSchema>('http://localhost:8056').with(rest());
  }

  /**
   * Get all base items from Directus
   */
  async getBaseItems(): Promise<DirectusBaseItem[]> {
    try {
      const items = await this.client.request(readItems('base_items'));
      return items;
    } catch (error) {
      console.error('Error fetching base items:', error);
      return [];
    }
  }

  /**
   * Get base items filtered by type
   */
  async getBaseItemsByType(itemType: string): Promise<DirectusBaseItem[]> {
    try {
      const items = await this.client.request(
        readItems('base_items', {
          filter: {
            item_type: {
              _eq: itemType
            }
          }
        })
      );
      return items;
    } catch (error) {
      console.error(`Error fetching ${itemType} items:`, error);
      return [];
    }
  }

  /**
   * Get base items within a geographic bounding box
   */
  async getBaseItemsInBounds(
    northEast: [number, number], 
    southWest: [number, number]
  ): Promise<DirectusBaseItem[]> {
    try {
      // For now, get all items and filter client-side
      // TODO: Implement proper geographic filtering in Directus
      const allItems = await this.getBaseItems();
      
      return allItems.filter(item => {
        if (!item.geometry || item.geometry.type !== 'Point') return false;
        
        const [lng, lat] = item.geometry.coordinates;
        return (
          lat >= southWest[1] && lat <= northEast[1] &&
          lng >= southWest[0] && lng <= northEast[0]
        );
      });
    } catch (error) {
      console.error('Error fetching items in bounds:', error);
      return [];
    }
  }

  /**
   * Create a new base item
   */
  async createBaseItem(item: Omit<DirectusBaseItem, 'id'>): Promise<DirectusBaseItem | null> {
    try {
      const newItem = await this.client.request(createItem('base_items', item));
      return newItem;
    } catch (error) {
      console.error('Error creating base item:', error);
      return null;
    }
  }

  /**
   * Get a single base item by ID
   */
  async getBaseItem(id: string): Promise<DirectusBaseItem | null> {
    try {
      const item = await this.client.request(readItem('base_items', id));
      return item;
    } catch (error) {
      console.error('Error fetching base item:', error);
      return null;
    }
  }

  /**
   * Update a base item
   */
  async updateBaseItem(id: string, updates: Partial<DirectusBaseItem>): Promise<DirectusBaseItem | null> {
    try {
      const updatedItem = await this.client.request(updateItem('base_items', id, updates));
      return updatedItem;
    } catch (error) {
      console.error('Error updating base item:', error);
      return null;
    }
  }

  /**
   * Delete a base item
   */
  async deleteBaseItem(id: string): Promise<boolean> {
    try {
      await this.client.request(deleteItem('base_items', id));
      return true;
    } catch (error) {
      console.error('Error deleting base item:', error);
      return false;
    }
  }
}

export const directusService = new DirectusService();
export default directusService;
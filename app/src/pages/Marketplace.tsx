
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Search,  Heart, MessageCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';
import { MarketplaceItem, MarketplaceCategory, ItemCondition, User } from '@/types';

const Marketplace = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const createMockUser = (name: string, rating: number): User => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts[1] || '';
    
    return {
      id: `user-${name.replace(' ', '-').toLowerCase()}`,
      title: name,
      item_type: 'user',
      location: {
        geometry: { type: 'Point', coordinates: [13.4050, 52.5200] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: {} as User,
      status: 'active',
      visibility: 'public',
      tags: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_interactive: false,
      email: `${name.toLowerCase().replace(' ', '.')}@lokalconnect.de`,
      first_name: firstName,
      last_name: lastName,
      reputation: rating,
      interests: [],
      last_active: new Date().toISOString(),
      location_privacy: 'public',
      search_radius: 5,
      is_online: Math.random() > 0.5
    };
  };

  const marketplaceItems: MarketplaceItem[] = [
    {
      id: 'marketplace-1',
      title: 'Mountainbike Trek',
      description: 'Gut erhaltenes Mountainbike, wenig gefahren',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.4050, 52.5200] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('Anna M.', 4.8),
      status: 'active',
      visibility: 'public',
      tags: ['mountainbike', 'trek', 'sport'],
      created_at: '2024-01-18T10:00:00Z',
      updated_at: '2024-01-18T10:00:00Z',
      is_interactive: true,
      price: 450,
      currency: 'EUR',
      seller: createMockUser('Anna M.', 4.8),
      category: 'sports' as MarketplaceCategory,
      images: ['bike1.jpg'],
      condition: 'like_new' as ItemCondition,
      pickup_available: true,
      delivery_available: true,
      delivery_radius: 10,
      is_negotiable: true
    },
    {
      id: 'marketplace-2',
      title: 'Vintage Sofa',
      description: 'Gemütliches Vintage-Sofa, perfekt für kleine Wohnungen',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.3777, 52.5162] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('Max K.', 4.6),
      status: 'active',
      visibility: 'public',
      tags: ['vintage', 'sofa', 'möbel'],
      created_at: '2024-01-19T14:00:00Z',
      updated_at: '2024-01-19T14:00:00Z',
      is_interactive: true,
      price: 200,
      currency: 'EUR',
      seller: createMockUser('Max K.', 4.6),
      category: 'furniture' as MarketplaceCategory,
      images: ['sofa1.jpg'],
      condition: 'good' as ItemCondition,
      pickup_available: true,
      delivery_available: false,
      is_negotiable: true
    },
    {
      id: 'marketplace-3',
      title: 'iPhone 13',
      description: 'iPhone 13 in perfektem Zustand, mit Originalverpackung',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.4105, 52.5244] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('Lisa S.', 4.9),
      status: 'active',
      visibility: 'public',
      tags: ['iphone', 'smartphone', 'elektronik'],
      created_at: '2024-01-20T09:00:00Z',
      updated_at: '2024-01-20T09:00:00Z',
      is_interactive: true,
      price: 650,
      currency: 'EUR',
      seller: createMockUser('Lisa S.', 4.9),
      category: 'electronics' as MarketplaceCategory,
      images: ['phone1.jpg'],
      condition: 'new' as ItemCondition,
      pickup_available: true,
      delivery_available: true,
      delivery_radius: 15,
      is_negotiable: false
    },
    {
      id: 'marketplace-4',
      title: 'Küchenmaschine',
      description: 'Hochwertige Küchenmaschine, selten benutzt',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.4070, 52.5190] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('Tom B.', 4.7),
      status: 'active',
      visibility: 'public',
      tags: ['küchenmaschine', 'haushalt', 'kochen'],
      created_at: '2024-01-15T16:00:00Z',
      updated_at: '2024-01-15T16:00:00Z',
      is_interactive: true,
      price: 80,
      currency: 'EUR',
      seller: createMockUser('Tom B.', 4.7),
      category: 'home_garden' as MarketplaceCategory,
      images: ['kitchen1.jpg'],
      condition: 'good' as ItemCondition,
      pickup_available: true,
      delivery_available: true,
      delivery_radius: 5,
      is_negotiable: true
    },
    {
      id: 'marketplace-5',
      title: 'Yoga Matte Set',
      description: 'Yoga Matte mit Zubehör, kaum benutzt',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.3950, 52.5150] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('Sarah L.', 4.8),
      status: 'active',
      visibility: 'public',
      tags: ['yoga', 'matte', 'sport'],
      created_at: '2024-01-13T11:00:00Z',
      updated_at: '2024-01-13T11:00:00Z',
      is_interactive: true,
      price: 25,
      currency: 'EUR',
      seller: createMockUser('Sarah L.', 4.8),
      category: 'sports' as MarketplaceCategory,
      images: ['yoga1.jpg'],
      condition: 'like_new' as ItemCondition,
      pickup_available: true,
      delivery_available: false,
      is_negotiable: false
    },
    {
      id: 'marketplace-6',
      title: 'Bücher Sammlung',
      description: 'Sammlung von 20 Romanen, verschiedene Genres',
      item_type: 'marketplace_item',
      location: {
        geometry: { type: 'Point', coordinates: [13.4200, 52.5300] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: createMockUser('David R.', 4.5),
      status: 'active',
      visibility: 'public',
      tags: ['bücher', 'romane', 'literatur'],
      created_at: '2024-01-16T13:00:00Z',
      updated_at: '2024-01-16T13:00:00Z',
      is_interactive: true,
      price: 35,
      currency: 'EUR',
      seller: createMockUser('David R.', 4.5),
      category: 'books' as MarketplaceCategory,
      images: ['books1.jpg'],
      condition: 'good' as ItemCondition,
      pickup_available: true,
      delivery_available: true,
      delivery_radius: 8,
      is_negotiable: true
    }
  ];

  const categories = ['Alle', 'sports', 'furniture', 'electronics', 'home_garden', 'books', 'clothing'] as const;
  const categoryLabels: Record<string, string> = {
    'Alle': 'Alle',
    'sports': 'Sport',
    'furniture': 'Möbel',
    'electronics': 'Elektronik',
    'home_garden': 'Haushalt',
    'books': 'Bücher',
    'clothing': 'Kleidung'
  };
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemClick = (item: MarketplaceItem) => {
    toast({
      title: `🛍️ ${item.title}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleLike = (item: MarketplaceItem) => {
    toast({
      title: "❤️ Favorit",
      description: `"${item.title}" zu Favoriten hinzugefügt! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleMessage = (item: MarketplaceItem) => {
    toast({
      title: "💬 Nachricht",
      description: `Nachricht an ${item.seller.first_name} ${item.seller.last_name} senden. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleCreateListing = () => {
    toast({
      title: "➕ Anzeige erstellen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Suche nach Artikeln..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <Button 
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          onClick={handleCreateListing}
        >
          <Plus className="h-4 w-4 mr-2" />
          Anzeige erstellen
        </Button>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "bg-gradient-to-r from-purple-500 to-blue-500"
                : "border-white/20 text-white hover:bg-white/10"
            }
          >
            {categoryLabels[category]}
          </Button>
        ))}
      </motion.div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="glass-effect border-white/20 card-hover cursor-pointer overflow-hidden">
              <div className="relative">
                <img  
                  className="w-full h-48 object-cover"
                  alt={`${item.title} - ${item.description}`}
                 src="https://placehold.co/600x400/EEE/31343C" />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Badge variant="default" className="bg-black/50 text-white">
                    {item.condition === 'new' ? 'Neu' : 
                     item.condition === 'like_new' ? 'Wie neu' :
                     item.condition === 'good' ? 'Gut' :
                     item.condition === 'fair' ? 'Akzeptabel' : 'Schlecht'}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
                    {item.price}€
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 
                    className="text-white font-semibold text-lg cursor-pointer hover:text-purple-300 transition-colors"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.title}
                  </h3>
                  <Badge variant="outline" className="border-white/20 text-gray-300 text-xs">
                    {categoryLabels[item.category] || item.category}
                  </Badge>
                </div>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                        {item.seller.first_name.charAt(0)}{item.seller.last_name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white text-sm font-medium">{item.seller.first_name} {item.seller.last_name}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-gray-400 text-xs">{item.seller.reputation}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">{item.location.city}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-gray-400 text-xs">
                    <span>{new Date(item.created_at).toLocaleDateString('de-DE')}</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 20) + 1}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 10) + 1}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(item);
                    }}
                  >
                    <Heart className="h-3 w-3 mr-1" />
                    Favorit
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMessage(item);
                    }}
                  >
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Nachricht
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Keine Artikel gefunden</h3>
          <p className="text-gray-400">Versuche andere Suchbegriffe oder erstelle eine neue Anzeige</p>
        </motion.div>
      )}
    </div>
  );
};

export default Marketplace;

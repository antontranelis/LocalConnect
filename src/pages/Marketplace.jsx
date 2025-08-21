
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Search, Filter, Heart, MessageCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';

const Marketplace = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const marketplaceItems = [
    {
      id: 1,
      title: 'Mountainbike Trek',
      price: 450,
      category: 'Sport',
      condition: 'Sehr gut',
      seller: 'Anna M.',
      sellerRating: 4.8,
      location: '2km entfernt',
      images: ['bike1.jpg'],
      description: 'Gut erhaltenes Mountainbike, wenig gefahren',
      postedDate: '2 Tage',
      likes: 12,
      messages: 5
    },
    {
      id: 2,
      title: 'Vintage Sofa',
      price: 200,
      category: 'Möbel',
      condition: 'Gut',
      seller: 'Max K.',
      sellerRating: 4.6,
      location: '1.5km entfernt',
      images: ['sofa1.jpg'],
      description: 'Gemütliches Vintage-Sofa, perfekt für kleine Wohnungen',
      postedDate: '1 Tag',
      likes: 8,
      messages: 3
    },
    {
      id: 3,
      title: 'iPhone 13',
      price: 650,
      category: 'Elektronik',
      condition: 'Wie neu',
      seller: 'Lisa S.',
      sellerRating: 4.9,
      location: '800m entfernt',
      images: ['phone1.jpg'],
      description: 'iPhone 13 in perfektem Zustand, mit Originalverpackung',
      postedDate: '3 Stunden',
      likes: 25,
      messages: 12
    },
    {
      id: 4,
      title: 'Küchenmaschine',
      price: 80,
      category: 'Haushalt',
      condition: 'Gut',
      seller: 'Tom B.',
      sellerRating: 4.7,
      location: '1.2km entfernt',
      images: ['kitchen1.jpg'],
      description: 'Hochwertige Küchenmaschine, selten benutzt',
      postedDate: '5 Tage',
      likes: 6,
      messages: 2
    },
    {
      id: 5,
      title: 'Yoga Matte Set',
      price: 25,
      category: 'Sport',
      condition: 'Sehr gut',
      seller: 'Sarah L.',
      sellerRating: 4.8,
      location: '600m entfernt',
      images: ['yoga1.jpg'],
      description: 'Yoga Matte mit Zubehör, kaum benutzt',
      postedDate: '1 Woche',
      likes: 4,
      messages: 1
    },
    {
      id: 6,
      title: 'Bücher Sammlung',
      price: 35,
      category: 'Bücher',
      condition: 'Gut',
      seller: 'David R.',
      sellerRating: 4.5,
      location: '2.5km entfernt',
      images: ['books1.jpg'],
      description: 'Sammlung von 20 Romanen, verschiedene Genres',
      postedDate: '4 Tage',
      likes: 9,
      messages: 4
    }
  ];

  const categories = ['Alle', 'Sport', 'Möbel', 'Elektronik', 'Haushalt', 'Bücher', 'Kleidung'];
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleItemClick = (item) => {
    toast({
      title: `🛍️ ${item.title}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleLike = (item) => {
    toast({
      title: "❤️ Favorit",
      description: `"${item.title}" zu Favoriten hinzugefügt! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleMessage = (item) => {
    toast({
      title: "💬 Nachricht",
      description: `Nachricht an ${item.seller} senden. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleCreateListing = () => {
    toast({
      title: "➕ Anzeige erstellen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <div className="space-y-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Lokaler Marktplatz 🛍️
        </h1>
        <p className="text-gray-300 text-lg">
          Kaufe und verkaufe in deiner Nachbarschaft
        </p>
      </motion.div>

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
            {category}
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
                 src="https://images.unsplash.com/photo-1571302171879-0965db383dc4" />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Badge className="bg-black/50 text-white">
                    {item.condition}
                  </Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold">
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
                    {item.category}
                  </Badge>
                </div>
                
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs">
                        {item.seller.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-white text-sm font-medium">{item.seller}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-gray-400 text-xs">{item.sellerRating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-gray-400 text-xs">
                    <span>{item.postedDate}</span>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{item.messages}</span>
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

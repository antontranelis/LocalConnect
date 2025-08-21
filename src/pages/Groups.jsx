
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { KeyRound as UsersRound, Plus, Search, Users, Calendar, MapPin, Star, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const Groups = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const groups = [
    {
      id: 1,
      name: 'Nachbarschaftsgruppe Mitte',
      description: 'Gemeinsame Aktivitäten und Austausch in der Nachbarschaft',
      members: 45,
      category: 'Nachbarschaft',
      isJoined: true,
      avatar: 'NG',
      lastActivity: 'Vor 2 Stunden',
      nextEvent: 'Community Grillen - Heute 18:00',
      location: 'Stadtpark',
      rating: 4.8,
      privacy: 'Öffentlich'
    },
    {
      id: 2,
      name: 'Laufgruppe Morgens',
      description: 'Wöchentliche Laufrunden für Frühaufsteher',
      members: 12,
      category: 'Sport',
      isJoined: true,
      avatar: 'LG',
      lastActivity: 'Vor 1 Tag',
      nextEvent: 'Laufrunde - Sa 07:00',
      location: 'Stadtpark',
      rating: 4.9,
      privacy: 'Öffentlich'
    },
    {
      id: 3,
      name: 'Yoga & Meditation',
      description: 'Entspannung und Achtsamkeit in der Gruppe',
      members: 28,
      category: 'Wellness',
      isJoined: false,
      avatar: 'YM',
      lastActivity: 'Vor 3 Stunden',
      nextEvent: 'Yoga Session - Mo 19:00',
      location: 'Rosengarten',
      rating: 4.7,
      privacy: 'Öffentlich'
    },
    {
      id: 4,
      name: 'Buchclub Literatur',
      description: 'Monatliche Diskussionen über aktuelle Bücher',
      members: 8,
      category: 'Kultur',
      isJoined: false,
      avatar: 'BL',
      lastActivity: 'Vor 1 Tag',
      nextEvent: 'Buchbesprechung - Di 19:00',
      location: 'Café Central',
      rating: 4.6,
      privacy: 'Geschlossen'
    },
    {
      id: 5,
      name: 'Hobbygärtner',
      description: 'Tipps und Tricks rund um Garten und Pflanzen',
      members: 22,
      category: 'Hobby',
      isJoined: true,
      avatar: 'HG',
      lastActivity: 'Vor 5 Stunden',
      nextEvent: 'Pflanzentausch - So 10:00',
      location: 'Gemeinschaftsgarten',
      rating: 4.8,
      privacy: 'Öffentlich'
    },
    {
      id: 6,
      name: 'Kochgruppe International',
      description: 'Gemeinsam kochen und internationale Küche entdecken',
      members: 16,
      category: 'Kulinarik',
      isJoined: false,
      avatar: 'KI',
      lastActivity: 'Vor 2 Tage',
      nextEvent: 'Italienischer Abend - Fr 18:30',
      location: 'Gemeinschaftsküche',
      rating: 4.9,
      privacy: 'Öffentlich'
    }
  ];

  const categories = ['Alle', 'Nachbarschaft', 'Sport', 'Wellness', 'Kultur', 'Hobby', 'Kulinarik'];
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || group.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleGroupClick = (group) => {
    toast({
      title: `👥 ${group.name}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleJoinGroup = (group) => {
    toast({
      title: `✅ Gruppe beitreten`,
      description: `Du bist "${group.name}" beigetreten! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleLeaveGroup = (group) => {
    toast({
      title: `❌ Gruppe verlassen`,
      description: `Du hast "${group.name}" verlassen. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleMessageGroup = (group) => {
    toast({
      title: `💬 Gruppenchat`,
      description: `Öffne Chat für "${group.name}". 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleCreateGroup = () => {
    toast({
      title: "➕ Gruppe erstellen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Nachbarschaft': 'bg-blue-500',
      'Sport': 'bg-green-500',
      'Wellness': 'bg-purple-500',
      'Kultur': 'bg-yellow-500',
      'Hobby': 'bg-pink-500',
      'Kulinarik': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getPrivacyColor = (privacy) => {
    return privacy === 'Öffentlich' ? 'text-green-400' : 'text-yellow-400';
  };

  return (
    <div className="space-y-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Gruppen 👥
        </h1>
        <p className="text-gray-300 text-lg">
          Finde und erstelle Interessensgruppen in deiner Nähe
        </p>
      </motion.div>

      {/* Search and Create */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Gruppen suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <Button 
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          onClick={handleCreateGroup}
        >
          <Plus className="h-4 w-4 mr-2" />
          Gruppe erstellen
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

      {/* Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group, index) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="glass-effect border-white/20 card-hover h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        {group.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle 
                        className="text-white text-lg cursor-pointer hover:text-purple-300 transition-colors"
                        onClick={() => handleGroupClick(group)}
                      >
                        {group.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={`${getCategoryColor(group.category)} text-white text-xs`}>
                          {group.category}
                        </Badge>
                        <span className={`text-xs ${getPrivacyColor(group.privacy)}`}>
                          {group.privacy}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{group.rating}</span>
                  </div>
                </div>
              </CardHeader><CardContent className="pt-0">
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {group.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{group.members} Mitglieder</span>
                    </div>
                    <span className="text-gray-400">{group.lastActivity}</span>
                  </div>
                  
                  {group.nextEvent && (
                    <div className="space-y-1">
                      <div className="flex items-center space-x-1 text-gray-300 text-sm">
                        <Calendar className="h-3 w-3" />
                        <span>{group.nextEvent}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <MapPin className="h-3 w-3" />
                        <span>{group.location}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  {group.isJoined ? (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        onClick={() => handleMessageGroup(group)}
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Chat
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                        onClick={() => handleLeaveGroup(group)}
                      >
                        Verlassen
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        onClick={() => handleJoinGroup(group)}
                      >
                        <UsersRound className="h-3 w-3 mr-1" />
                        Beitreten
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleGroupClick(group)}
                      >
                        Details
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredGroups.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <UsersRound className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Keine Gruppen gefunden</h3>
          <p className="text-gray-400">Versuche andere Suchbegriffe oder erstelle eine neue Gruppe</p>
        </motion.div>
      )}
    </div>
  );
};

export default Groups;

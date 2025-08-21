
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Search, MessageCircle, UserCheck, Star, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Friends = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const friends = [
    {
      id: 1,
      name: 'Anna M.',
      avatar: 'AM',
      status: 'online',
      location: '800m entfernt',
      reputation: 4.8,
      mutualFriends: 5,
      lastSeen: 'Jetzt online',
      interests: ['Sport', 'Yoga', 'Lesen'],
      joinedDate: 'Vor 2 Monaten'
    },
    {
      id: 2,
      name: 'Max K.',
      avatar: 'MK',
      status: 'offline',
      location: '1.2km entfernt',
      reputation: 4.6,
      mutualFriends: 3,
      lastSeen: 'Vor 2 Stunden',
      interests: ['Musik', 'Kochen', 'Wandern'],
      joinedDate: 'Vor 1 Monat'
    },
    {
      id: 3,
      name: 'Lisa S.',
      avatar: 'LS',
      status: 'online',
      location: '600m entfernt',
      reputation: 4.9,
      mutualFriends: 8,
      lastSeen: 'Jetzt online',
      interests: ['Fotografie', 'Reisen', 'Kunst'],
      joinedDate: 'Vor 3 Monaten'
    },
    {
      id: 4,
      name: 'Tom B.',
      avatar: 'TB',
      status: 'offline',
      location: '1.5km entfernt',
      reputation: 4.7,
      mutualFriends: 2,
      lastSeen: 'Vor 1 Tag',
      interests: ['Gaming', 'Technik', 'Filme'],
      joinedDate: 'Vor 3 Wochen'
    }
  ];

  const suggestions = [
    {
      id: 5,
      name: 'Sarah L.',
      avatar: 'SL',
      location: '500m entfernt',
      reputation: 4.8,
      mutualFriends: 4,
      reason: 'Gemeinsame Interessen: Yoga, Sport',
      interests: ['Yoga', 'Sport', 'Meditation']
    },
    {
      id: 6,
      name: 'David R.',
      avatar: 'DR',
      location: '2km entfernt',
      reputation: 4.5,
      mutualFriends: 2,
      reason: 'Lebt in deiner Nähe',
      interests: ['Bücher', 'Geschichte', 'Schach']
    },
    {
      id: 7,
      name: 'Emma W.',
      avatar: 'EW',
      location: '1.8km entfernt',
      reputation: 4.9,
      mutualFriends: 6,
      reason: 'Viele gemeinsame Freunde',
      interests: ['Kunst', 'Design', 'Kaffee']
    }
  ];

  const requests = [
    {
      id: 8,
      name: 'Julia K.',
      avatar: 'JK',
      location: '1km entfernt',
      reputation: 4.6,
      mutualFriends: 3,
      message: 'Hi! Ich habe dich beim Community Event gesehen.',
      sentDate: 'Vor 2 Tagen'
    },
    {
      id: 9,
      name: 'Michael S.',
      avatar: 'MS',
      location: '1.3km entfernt',
      reputation: 4.7,
      mutualFriends: 1,
      message: 'Wir haben ähnliche Interessen!',
      sentDate: 'Vor 1 Tag'
    }
  ];

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMessage = (friend) => {
    toast({
      title: `💬 Nachricht an ${friend.name}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleAddFriend = (person) => {
    toast({
      title: `👥 Freundschaftsanfrage`,
      description: `Freundschaftsanfrage an ${person.name} gesendet! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleAcceptRequest = (person) => {
    toast({
      title: `✅ Freundschaftsanfrage angenommen`,
      description: `${person.name} ist jetzt dein Freund! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleDeclineRequest = (person) => {
    toast({
      title: `❌ Freundschaftsanfrage abgelehnt`,
      description: `Freundschaftsanfrage von ${person.name} abgelehnt. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleViewProfile = (person) => {
    toast({
      title: `👤 Profil von ${person.name}`,
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
          Freunde 👥
        </h1>
        <p className="text-gray-300 text-lg">
          Vernetze dich mit Menschen in deiner Nachbarschaft
        </p>
      </motion.div>

      <Tabs defaultValue="friends" className="w-full">
        <TabsList className="grid w-full grid-cols-3 glass-effect border-white/20">
          <TabsTrigger value="friends" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            Freunde ({friends.length})
          </TabsTrigger>
          <TabsTrigger value="suggestions" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            Vorschläge ({suggestions.length})
          </TabsTrigger>
          <TabsTrigger value="requests" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
            Anfragen ({requests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="friends" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Freunde suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFriends.map((friend, index) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            {friend.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-gray-800 ${
                          friend.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(friend)}
                        >
                          {friend.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{friend.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{friend.reputation}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <p className="text-gray-400 text-sm">{friend.lastSeen}</p>
                      <p className="text-gray-400 text-sm">{friend.mutualFriends} gemeinsame Freunde</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {friend.interests.slice(0, 3).map((interest) => (
                          <Badge key={interest} variant="outline" className="border-white/20 text-gray-300 text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        onClick={() => handleMessage(friend)}
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Nachricht
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleViewProfile(friend)}
                      >
                        Profil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          {suggestion.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(suggestion)}
                        >
                          {suggestion.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{suggestion.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{suggestion.reputation}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <p className="text-gray-300 text-sm">{suggestion.reason}</p>
                      <p className="text-gray-400 text-sm">{suggestion.mutualFriends} gemeinsame Freunde</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {suggestion.interests.slice(0, 3).map((interest) => (
                          <Badge key={interest} variant="outline" className="border-white/20 text-gray-300 text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        onClick={() => handleAddFriend(suggestion)}
                      >
                        <UserPlus className="h-3 w-3 mr-1" />
                        Hinzufügen
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={() => handleViewProfile(suggestion)}
                      >
                        Profil
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card className="glass-effect border-white/20 card-hover">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          {request.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(request)}
                        >
                          {request.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{request.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{request.reputation}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <p className="text-gray-300 text-sm italic">"{request.message}"</p>
                      <p className="text-gray-400 text-sm">{request.mutualFriends} gemeinsame Freunde</p>
                      <p className="text-gray-400 text-sm">{request.sentDate}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                        onClick={() => handleAcceptRequest(request)}
                      >
                        <UserCheck className="h-3 w-3 mr-1" />
                        Annehmen
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10"
                        onClick={() => handleDeclineRequest(request)}
                      >
                        Ablehnen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Friends;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, MessageCircle, UserCheck, Star, MapPin } from 'lucide-react';
import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { User } from '@/types';

const Friends = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const createFriend = (name: string, isOnline: boolean, distance: string, rating: number, interests: string[]): FriendWithDistance => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts[1] || '';
    
    return {
      id: `user-${name.replace(' ', '-').toLowerCase()}`,
      title: name,
      item_type: 'user',
      location: {
        geometry: { type: 'Point', coordinates: [13.4050 + Math.random() * 0.1, 52.5200 + Math.random() * 0.1] },
        city: 'Berlin',
        country: 'Deutschland'
      },
      creator: {} as User,
      status: 'active',
      visibility: 'friends',
      tags: interests,
      created_at: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      updated_at: new Date().toISOString(),
      is_interactive: true,
      email: `${name.toLowerCase().replace(' ', '.')}@lokalconnect.de`,
      first_name: firstName,
      last_name: lastName,
      reputation: rating,
      interests,
      last_active: isOnline ? new Date().toISOString() : new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString(),
      location_privacy: 'friends',
      search_radius: 5,
      is_online: isOnline,
      distance: distance
    };
  };

  const friends: FriendWithDistance[] = [
    createFriend('Anna M.', true, '800m entfernt', 4.8, ['Sport', 'Yoga', 'Lesen']),
    createFriend('Max K.', false, '1.2km entfernt', 4.6, ['Musik', 'Kochen', 'Wandern']),
    createFriend('Lisa S.', true, '600m entfernt', 4.9, ['Fotografie', 'Reisen', 'Kunst']),
    createFriend('Tom B.', false, '1.5km entfernt', 4.7, ['Gaming', 'Technik', 'Filme'])
  ];

  interface FriendWithDistance extends User {
    distance: string;
  }

  interface FriendSuggestion extends FriendWithDistance {
    mutualFriends: number;
    reason: string;
  }

  interface FriendRequest extends FriendWithDistance {
    mutualFriends: number;
    message: string;
    sentDate: string;
  }

  const suggestions: FriendSuggestion[] = [
    {
      ...createFriend('Sarah L.', false, '500m entfernt', 4.8, ['Yoga', 'Sport', 'Meditation']),
      id: 'user-sarah-l',
      mutualFriends: 4,
      reason: 'Gemeinsame Interessen: Yoga, Sport'
    },
    {
      ...createFriend('David R.', false, '2km entfernt', 4.5, ['Bücher', 'Geschichte', 'Schach']),
      id: 'user-david-r',
      mutualFriends: 2,
      reason: 'Lebt in deiner Nähe'
    },
    {
      ...createFriend('Emma W.', true, '1.8km entfernt', 4.9, ['Kunst', 'Design', 'Kaffee']),
      id: 'user-emma-w',
      mutualFriends: 6,
      reason: 'Viele gemeinsame Freunde'
    }
  ];


  const requests: FriendRequest[] = [
    {
      ...createFriend('Julia K.', false, '1km entfernt', 4.6, ['Community', 'Events']),
      id: 'user-julia-k',
      mutualFriends: 3,
      message: 'Hi! Ich habe dich beim Community Event gesehen.',
      sentDate: 'Vor 2 Tagen'
    },
    {
      ...createFriend('Michael S.', true, '1.3km entfernt', 4.7, ['Sport', 'Musik']),
      id: 'user-michael-s',
      mutualFriends: 1,
      message: 'Wir haben ähnliche Interessen!',
      sentDate: 'Vor 1 Tag'
    }
  ];

  const filteredFriends = friends.filter(friend =>
    `${friend.first_name} ${friend.last_name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMessage = (friend: User) => {
    toast({
      title: `💬 Nachricht an ${friend.first_name} ${friend.last_name}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleAddFriend = (person: User) => {
    toast({
      title: `👥 Freundschaftsanfrage`,
      description: `Freundschaftsanfrage an ${person.first_name} ${person.last_name} gesendet! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleAcceptRequest = (person: User) => {
    toast({
      title: `✅ Freundschaftsanfrage angenommen`,
      description: `${person.first_name} ${person.last_name} ist jetzt dein Freund! 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleDeclineRequest = (person: User) => {
    toast({
      title: `❌ Freundschaftsanfrage abgelehnt`,
      description: `Freundschaftsanfrage von ${person.first_name} ${person.last_name} abgelehnt. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  const handleViewProfile = (person: User) => {
    toast({
      title: `👤 Profil von ${person.first_name} ${person.last_name}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <div className="space-y-6">
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

        <TabsContent value="friends" className="space-y-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            {friend.first_name.charAt(0)}{friend.last_name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-gray-800 ${
                          friend.is_online ? 'bg-green-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(friend)}
                        >
                          {friend.first_name} {friend.last_name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{friend.location.city} ({friend.distance})</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{friend.reputation}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-3">
                      <p className="text-gray-400 text-sm">{friend.is_online ? 'Jetzt online' : `Zuletzt aktiv: ${new Date(friend.last_active).toLocaleDateString('de-DE')}`}</p>
                      <p className="text-gray-400 text-sm">Seit: {new Date(friend.created_at).toLocaleDateString('de-DE')}</p>
                      
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
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                          {suggestion.first_name.charAt(0)}{suggestion.last_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(suggestion)}
                        >
                          {suggestion.first_name} {suggestion.last_name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{suggestion.location.city} ({suggestion.distance})</span>
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
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          {request.first_name.charAt(0)}{request.last_name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <h3 
                          className="text-white font-semibold cursor-pointer hover:text-purple-300 transition-colors"
                          onClick={() => handleViewProfile(request)}
                        >
                          {request.first_name} {request.last_name}
                        </h3>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <MapPin className="h-3 w-3" />
                          <span>{request.location.city} ({request.distance})</span>
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

import { motion } from 'framer-motion';
import { Edit, Star, MapPin, Calendar, Users, MessageCircle, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const { toast } = useToast();

  const userProfile = {
    name: 'Max Mustermann',
    avatar: 'MM',
    avatarImage: 'https://avatar.iran.liara.run/public/45',
    location: 'Berlin Mitte',
    joinDate: 'März 2023',
    reputation: 4.8,
    totalRatings: 24,
    bio: 'Ich liebe es, neue Menschen kennenzulernen und gemeinsam Aktivitäten zu unternehmen. Besonders interessiere ich mich für Sport, Kochen und Nachhaltigkeit.',
    interests: ['Sport', 'Kochen', 'Nachhaltigkeit', 'Fotografie', 'Reisen', 'Musik'],
    stats: {
      friends: 24,
      groups: 5,
      events: 12,
      trades: 8
    }
  };

  const activities = [
    {
      id: 1,
      type: 'event',
      title: 'Community Grillen organisiert',
      date: 'Vor 2 Tagen',
      participants: 15,
      rating: 4.9
    },
    {
      id: 2,
      type: 'trade',
      title: 'Fahrrad verkauft an Anna M.',
      date: 'Vor 1 Woche',
      rating: 5.0
    },
    {
      id: 3,
      type: 'group',
      title: 'Laufgruppe beigetreten',
      date: 'Vor 2 Wochen',
      members: 12
    },
    {
      id: 4,
      type: 'event',
      title: 'Yoga Session teilgenommen',
      date: 'Vor 3 Wochen',
      rating: 4.7
    }
  ];

  const reviews = [
    {
      id: 1,
      reviewer: 'Anna M.',
      rating: 5,
      comment: 'Super netter Kontakt! Das Fahrrad war genau wie beschrieben.',
      date: 'Vor 1 Woche',
      type: 'trade'
    },
    {
      id: 2,
      reviewer: 'Lisa S.',
      rating: 5,
      comment: 'Tolles Event organisiert! Sehr empfehlenswert.',
      date: 'Vor 2 Wochen',
      type: 'event'
    },
    {
      id: 3,
      reviewer: 'Tom B.',
      rating: 4,
      comment: 'Zuverlässig und freundlich. Gerne wieder!',
      date: 'Vor 1 Monat',
      type: 'general'
    }
  ];

  const handleEditProfile = () => {
    toast({
      title: "✏️ Profil bearbeiten",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleChangePhoto = () => {
    toast({
      title: "📷 Foto ändern",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleShareProfile = () => {
    toast({
      title: "🔗 Profil teilen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const getActivityIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      event: '🎉',
      trade: '🛍️',
      group: '👥',
      general: '⭐'
    };
    return icons[type] || '📅';
  };

  const getActivityColor = (type: string) => {
    const colors: { [key: string]: string } = {
      event: 'text-purple-400',
      trade: 'text-green-400',
      group: 'text-blue-400',
      general: 'text-yellow-400'
    };
    return colors[type] || 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="glass-effect border-white/20">
            <CardContent className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={userProfile.avatarImage} alt={userProfile.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-2xl">
                    {userProfile.avatar}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  onClick={handleChangePhoto}
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-2">{userProfile.name}</h2>
              
              <div className="flex items-center justify-center space-x-1 mb-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">{userProfile.location}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Dabei seit {userProfile.joinDate}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-white font-bold text-lg">{userProfile.reputation}</span>
                </div>
                <span className="text-gray-400 text-sm">({userProfile.totalRatings} Bewertungen)</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-6">{userProfile.bio}</p>
              
              <div className="flex flex-wrap gap-1 mb-6">
                {userProfile.interests.map((interest) => (
                  <Badge key={interest} variant="outline" className="border-white/20 text-gray-300 text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  onClick={handleEditProfile}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Profil bearbeiten
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  onClick={handleShareProfile}
                >
                  Profil teilen
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="glass-effect border-white/20 mt-6">
            <CardHeader>
              <CardTitle className="text-white text-center">Statistiken</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-blue-400 mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-bold text-lg">{userProfile.stats.friends}</span>
                </div>
                <p className="text-gray-400 text-xs">Freunde</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-purple-400 mb-1">
                  <Users className="h-4 w-4" />
                  <span className="font-bold text-lg">{userProfile.stats.groups}</span>
                </div>
                <p className="text-gray-400 text-xs">Gruppen</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-green-400 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="font-bold text-lg">{userProfile.stats.events}</span>
                </div>
                <p className="text-gray-400 text-xs">Events</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-1">
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-bold text-lg">{userProfile.stats.trades}</span>
                </div>
                <p className="text-gray-400 text-xs">Handel</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Tabs defaultValue="activities" className="w-full">
            <TabsList className="grid w-full grid-cols-2 glass-effect border-white/20">
              <TabsTrigger value="activities" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Aktivitäten
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
                Bewertungen
              </TabsTrigger>
            </TabsList>

            <TabsContent value="activities" className="space-y-4">
              <Card className="glass-effect border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Letzte Aktivitäten</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getActivityIcon(activity.type)}</span>
                        <div>
                          <p className="text-white font-medium text-sm">{activity.title}</p>
                          <p className="text-gray-400 text-xs">{activity.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {activity.participants && (
                          <Badge variant="outline" className="border-white/20 text-gray-300 text-xs">
                            {activity.participants} Teilnehmer
                          </Badge>
                        )}
                        {activity.members && (
                          <Badge variant="outline" className="border-white/20 text-gray-300 text-xs">
                            {activity.members} Mitglieder
                          </Badge>
                        )}
                        {activity.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-white text-xs">{activity.rating}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <Card className="glass-effect border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Bewertungen von anderen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="p-4 rounded-lg bg-white/5"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs">
                              {review.reviewer.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-white font-medium text-sm">{review.reviewer}</p>
                            <p className="text-gray-400 text-xs">{review.date}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm italic">"{review.comment}"</p>
                      
                      <Badge 
                        variant="outline" 
                        className={`mt-2 border-white/20 text-xs ${getActivityColor(review.type)}`}
                      >
                        {review.type === 'trade' ? 'Handel' : review.type === 'event' ? 'Event' : 'Allgemein'}
                      </Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

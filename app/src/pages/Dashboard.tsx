
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, MessageCircle, Users, TrendingUp, Star, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { PageProps } from '@/types';

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

const Dashboard: React.FC<PageProps> = () => {
  const { toast } = useToast();

  const handleCardClick = (feature: string) => {
    toast({
      title: `🎯 ${feature}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const stats: StatItem[] = [
    { icon: Users, label: 'Freunde', value: '24', color: 'text-blue-400' },
    { icon: MessageCircle, label: 'Nachrichten', value: '12', color: 'text-green-400' },
    { icon: Calendar, label: 'Events', value: '8', color: 'text-purple-400' },
    { icon: Star, label: 'Reputation', value: '4.8', color: 'text-yellow-400' },
  ];

  interface ActivityItem {
    type: 'event' | 'message' | 'marketplace' | 'friend';
    title: string;
    time: string;
    location: string | null;
  }

  const recentActivities: ActivityItem[] = [
    { type: 'event', title: 'Yoga im Park', time: '2 Std.', location: 'Stadtpark' },
    { type: 'message', title: 'Neue Nachricht von Anna', time: '1 Std.', location: null },
    { type: 'marketplace', title: 'Fahrrad verkauft', time: '3 Std.', location: 'Marktplatz' },
    { type: 'friend', title: 'Max ist jetzt dein Freund', time: '5 Std.', location: null },
  ];

  interface UpcomingEvent {
    title: string;
    date: string;
    participants: number;
  }

  const upcomingEvents: UpcomingEvent[] = [
    { title: 'Community Grillen', date: 'Heute 18:00', participants: 15 },
    { title: 'Flohmarkt', date: 'Morgen 10:00', participants: 32 },
    { title: 'Laufgruppe', date: 'Sa 07:00', participants: 8 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-effect border-white/20 card-hover cursor-pointer" onClick={() => handleCardClick(stat.label)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Letzte Aktivitäten</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleCardClick(activity.title)}
                >
                  <div>
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-gray-400 text-sm">
                      {activity.location && (
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{activity.location}</span>
                        </span>
                      )}
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-white/10 text-gray-300">
                    {activity.time}
                  </Badge>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Kommende Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleCardClick(event.title)}
                >
                  <div>
                    <p className="text-white font-medium">{event.title}</p>
                    <p className="text-gray-400 text-sm">{event.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-blue-500">
                      {event.participants} Teilnehmer
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Schnellaktionen</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            onClick={() => handleCardClick('Event erstellen')}
          >
            Event erstellen
          </Button>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => handleCardClick('Artikel verkaufen')}
          >
            Artikel verkaufen
          </Button>
          <Button 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => handleCardClick('Freunde finden')}
          >
            Freunde finden
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

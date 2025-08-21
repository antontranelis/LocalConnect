
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Plus, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const Calendar = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const events = [
    {
      id: 1,
      title: 'Community Grillen',
      date: '2024-01-20',
      time: '18:00',
      location: 'Stadtpark',
      participants: 15,
      type: 'social',
      description: 'Gemeinsames Grillen mit der Nachbarschaft'
    },
    {
      id: 2,
      title: 'Yoga im Park',
      date: '2024-01-21',
      time: '08:00',
      location: 'Rosengarten',
      participants: 8,
      type: 'sport',
      description: 'Entspannende Yoga-Session im Freien'
    },
    {
      id: 3,
      title: 'Flohmarkt',
      date: '2024-01-22',
      time: '10:00',
      location: 'Marktplatz',
      participants: 32,
      type: 'market',
      description: 'Großer Nachbarschaftsflohmarkt'
    },
    {
      id: 4,
      title: 'Buchclub Treffen',
      date: '2024-01-23',
      time: '19:00',
      location: 'Café Central',
      participants: 6,
      type: 'culture',
      description: 'Diskussion über "Der Alchemist"'
    },
    {
      id: 5,
      title: 'Laufgruppe',
      date: '2024-01-24',
      time: '07:00',
      location: 'Stadtpark',
      participants: 12,
      type: 'sport',
      description: 'Wöchentliche 5km Laufrunde'
    }
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      social: 'bg-blue-500',
      sport: 'bg-green-500',
      market: 'bg-purple-500',
      culture: 'bg-yellow-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getEventTypeIcon = (type) => {
    const icons = {
      social: '🎉',
      sport: '🏃',
      market: '🛍️',
      culture: '📚'
    };
    return icons[type] || '📅';
  };

  const handleEventClick = (event) => {
    toast({
      title: `📅 ${event.title}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleCreateEvent = () => {
    toast({
      title: "➕ Event erstellen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleJoinEvent = (event) => {
    toast({
      title: `✅ Event beitreten`,
      description: `Du möchtest "${event.title}" beitreten. 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
  };

  // Simple calendar grid
  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const hasEventOnDay = (day) => {
    if (!day) return false;
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  return (
    <div className="space-y-6 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Event Kalender 📅
        </h1>
        <p className="text-gray-300 text-lg">
          Entdecke und erstelle lokale Events
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-effect border-white/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5" />
                <span>Januar 2024</span>
              </CardTitle>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                onClick={handleCreateEvent}
              >
                <Plus className="h-4 w-4 mr-2" />
                Event erstellen
              </Button>
            </CardHeader>
            <CardContent>
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-gray-400 font-medium py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {generateCalendarDays().map((day, index) => (
                  <div
                    key={index}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all
                      ${day ? 'hover:bg-white/10' : ''}
                      ${day === new Date().getDate() ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'text-gray-300'}
                      ${hasEventOnDay(day) ? 'ring-2 ring-yellow-400' : ''}
                    `}
                    onClick={() => day && setSelectedDate(new Date(2024, 0, day))}
                  >
                    {day && (
                      <div className="relative">
                        <span className="text-sm font-medium">{day}</span>
                        {hasEventOnDay(day) && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Events List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Kommende Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 max-h-[500px] overflow-y-auto">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                      <h3 className="text-white font-medium text-sm">{event.title}</h3>
                    </div>
                    <Badge className={`${getEventTypeColor(event.type)} text-white text-xs`}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.date} um {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{event.participants} Teilnehmer</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs mt-2">{event.description}</p>
                  
                  <Button
                    size="sm"
                    className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleJoinEvent(event);
                    }}
                  >
                    Teilnehmen
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendar;

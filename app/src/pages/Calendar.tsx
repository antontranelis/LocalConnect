import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Plus, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Event, EventCategory, User } from '@/types';

const Calendar = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const mockUser: User = {
    id: 'user-1',
    title: 'Organizer',
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
    email: 'organizer@lokalconnect.de',
    first_name: 'Event',
    last_name: 'Organizer',
    reputation: 4.8,
    interests: ['events'],
    last_active: new Date().toISOString(),
    location_privacy: 'public',
    search_radius: 5,
    is_online: true
  };

  const events: Event[] = [
    {
      id: 'event-1',
      title: 'Community Grillen',
      description: 'Gemeinsames Grillen mit der Nachbarschaft',
      item_type: 'event',
      location: {
        geometry: { type: 'Point', coordinates: [13.4050, 52.5200] },
        address: 'Stadtpark 1',
        city: 'Berlin',
        postal_code: '10115',
        country: 'Deutschland'
      },
      creator: mockUser,
      status: 'active',
      visibility: 'public',
      tags: ['grillen', 'community', 'outdoor'],
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z',
      is_interactive: true,
      interaction_radius: 100,
      date_time: '2024-01-20T18:00:00Z',
      organizer: mockUser,
      participants: [],
      max_participants: 20,
      category: 'community' as EventCategory,
      venue_name: 'Stadtpark',
      is_indoor: false,
      participant_count: 15,
      is_full: false,
      requires_approval: false
    },
    {
      id: 'event-2',
      title: 'Yoga im Park',
      description: 'Entspannende Yoga-Session im Freien',
      item_type: 'event',
      location: {
        geometry: { type: 'Point', coordinates: [13.3777, 52.5162] },
        address: 'Rosengarten 5',
        city: 'Berlin',
        postal_code: '10178',
        country: 'Deutschland'
      },
      creator: mockUser,
      status: 'active',
      visibility: 'public',
      tags: ['yoga', 'wellness', 'outdoor'],
      created_at: '2024-01-16T08:00:00Z',
      updated_at: '2024-01-16T08:00:00Z',
      is_interactive: true,
      interaction_radius: 50,
      date_time: '2024-01-21T08:00:00Z',
      organizer: mockUser,
      participants: [],
      max_participants: 15,
      category: 'wellness' as EventCategory,
      venue_name: 'Rosengarten',
      is_indoor: false,
      participant_count: 8,
      is_full: false,
      requires_approval: true
    },
    {
      id: 'event-3',
      title: 'Flohmarkt',
      description: 'Großer Nachbarschaftsflohmarkt',
      item_type: 'event',
      location: {
        geometry: { type: 'Point', coordinates: [13.4105, 52.5244] },
        address: 'Marktplatz 1',
        city: 'Berlin',
        postal_code: '10117',
        country: 'Deutschland'
      },
      creator: mockUser,
      status: 'active',
      visibility: 'public',
      tags: ['flohmarkt', 'verkaufen', 'community'],
      created_at: '2024-01-17T09:00:00Z',
      updated_at: '2024-01-17T09:00:00Z',
      is_interactive: true,
      interaction_radius: 200,
      date_time: '2024-01-22T10:00:00Z',
      organizer: mockUser,
      participants: [],
      max_participants: 50,
      category: 'community' as EventCategory,
      venue_name: 'Marktplatz',
      is_indoor: false,
      participant_count: 32,
      is_full: false,
      requires_approval: false
    },
    {
      id: 'event-4',
      title: 'Buchclub Treffen',
      description: 'Diskussion über "Der Alchemist"',
      item_type: 'event',
      location: {
        geometry: { type: 'Point', coordinates: [13.4070, 52.5190] },
        address: 'Café Central, Unter den Linden 42',
        city: 'Berlin',
        postal_code: '10117',
        country: 'Deutschland'
      },
      creator: mockUser,
      status: 'active',
      visibility: 'public',
      tags: ['bücher', 'diskussion', 'kultur'],
      created_at: '2024-01-18T15:00:00Z',
      updated_at: '2024-01-18T15:00:00Z',
      is_interactive: true,
      interaction_radius: 25,
      date_time: '2024-01-23T19:00:00Z',
      organizer: mockUser,
      participants: [],
      max_participants: 10,
      category: 'culture' as EventCategory,
      venue_name: 'Café Central',
      is_indoor: true,
      participant_count: 6,
      is_full: false,
      requires_approval: true
    },
    {
      id: 'event-5',
      title: 'Laufgruppe',
      description: 'Wöchentliche 5km Laufrunde',
      item_type: 'event',
      location: {
        geometry: { type: 'Point', coordinates: [13.4050, 52.5200] },
        address: 'Stadtpark, Haupteingang',
        city: 'Berlin',
        postal_code: '10115',
        country: 'Deutschland'
      },
      creator: mockUser,
      status: 'active',
      visibility: 'public',
      tags: ['laufen', 'sport', 'gesundheit'],
      created_at: '2024-01-19T06:00:00Z',
      updated_at: '2024-01-19T06:00:00Z',
      is_interactive: true,
      interaction_radius: 50,
      date_time: '2024-01-24T07:00:00Z',
      organizer: mockUser,
      participants: [],
      max_participants: 20,
      category: 'sport' as EventCategory,
      venue_name: 'Stadtpark',
      is_indoor: false,
      participant_count: 12,
      is_full: false,
      requires_approval: false
    }
  ];

  const getEventTypeColor = (category: EventCategory) => {
    const colors: Record<EventCategory, string> = {
      sport: 'bg-green-500',
      culture: 'bg-yellow-500',
      food: 'bg-orange-500',
      education: 'bg-blue-500',
      networking: 'bg-purple-500',
      entertainment: 'bg-pink-500',
      outdoor: 'bg-emerald-500',
      wellness: 'bg-teal-500',
      technology: 'bg-indigo-500',
      community: 'bg-cyan-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getEventTypeIcon = (category: EventCategory) => {
    const icons: Record<EventCategory, string> = {
      sport: '🏃',
      culture: '📚',
      food: '🍽️',
      education: '🎓',
      networking: '🤝',
      entertainment: '🎭',
      outdoor: '🌲',
      wellness: '🧘',
      technology: '💻',
      community: '🏘️'
    };
    return icons[category] || '📅';
  };

  const handleEventClick = (event: Event) => {
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

  const handleJoinEvent = (event: Event) => {
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

  const hasEventOnDay = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date_time.startsWith(dateStr));
  };

  return (
    <div className="space-y-6">
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
                {selectedDate.getDate() !== new Date().getDate() && (
                  <span className="text-sm text-blue-300">
                    (Ausgewählt: {selectedDate.getDate()}.)
                  </span>
                )}
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
                      ${day === selectedDate.getDate() ? 'ring-2 ring-blue-400' : ''}
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
                      <span className="text-lg">{getEventTypeIcon(event.category)}</span>
                      <h3 className="text-white font-medium text-sm">{event.title}</h3>
                    </div>
                    <Badge variant="default" className={`${getEventTypeColor(event.category)} text-white text-xs`}>
                      {event.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-1 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(event.date_time).toLocaleDateString('de-DE')} um {new Date(event.date_time).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.venue_name || event.location.address || event.location.city}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{event.participant_count} Teilnehmer</span>
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

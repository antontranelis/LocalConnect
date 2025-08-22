
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Calendar, ShoppingBag, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { directusService } from '@/services/directus';
import { DirectusBaseItem } from '@/types/directus';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map = () => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<[number, number]>([52.5200, 13.4050]); // Berlin default
  const [baseItems, setBaseItems] = useState<DirectusBaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude] as [number, number]);
        },
        () => {
          toast({
            title: "📍 Standort",
            description: "Standort konnte nicht ermittelt werden. Verwende Berlin als Standard."
          });
        }
      );
    }
  }, [toast]);

  useEffect(() => {
    const loadBaseItems = async () => {
      try {
        setLoading(true);
        const items = activeFilter 
          ? await directusService.getBaseItemsByType(activeFilter)
          : await directusService.getBaseItems();
        setBaseItems(items);
        toast({
          title: "✅ Daten geladen",
          description: `${items.length} Items${activeFilter ? ` (${activeFilter})` : ''} aus der Datenbank geladen`
        });
      } catch (error) {
        console.error('Error loading base items:', error);
        toast({
          title: "❌ Fehler",
          description: "Konnte Daten nicht laden. Verwende Demo-Daten."
        });
      } finally {
        setLoading(false);
      }
    };

    loadBaseItems();
  }, [toast, activeFilter]);

  const mapMarkers = [
    {
      id: 1,
      position: [userLocation[0] + 0.01, userLocation[1] + 0.01],
      type: 'event',
      title: 'Community Grillen',
      description: 'Gemeinsames Grillen im Park',
      time: 'Heute 18:00',
      participants: 15
    },
    {
      id: 2,
      position: [userLocation[0] - 0.01, userLocation[1] + 0.005],
      type: 'marketplace',
      title: 'Fahrrad zu verkaufen',
      description: 'Gut erhaltenes Mountainbike',
      price: '250€',
      seller: 'Anna M.'
    },
    {
      id: 3,
      position: [userLocation[0] + 0.005, userLocation[1] - 0.01],
      type: 'group',
      title: 'Laufgruppe',
      description: 'Wöchentliche Laufrunde',
      members: 12,
      nextMeeting: 'Sa 07:00'
    },
    {
      id: 4,
      position: [userLocation[0] - 0.005, userLocation[1] - 0.005],
      type: 'event',
      title: 'Flohmarkt',
      description: 'Großer Nachbarschaftsflohmarkt',
      time: 'Morgen 10:00',
      participants: 32
    }
  ];

  const getMarkerIcon = (type: string) => {
    const colors: { [key: string]: string } = {
      event: '#8B5CF6',
      marketplace: '#10B981',
      group: '#F59E0B',
      user: '#EF4444'
    };
    
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${colors[type] || '#6B7280'}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  const handleMarkerClick = (marker: any) => {
    toast({
      title: `📍 ${marker.title}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleAddLocation = () => {
    toast({
      title: "➕ Standort hinzufügen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleFilterChange = (filterType: string | null) => {
    setActiveFilter(filterType);
  };

  const filterOptions = [
    { type: null, label: 'Alle', icon: '🗺️' },
    { type: 'event', label: 'Events', icon: '📅' },
    { type: 'marketplace', label: 'Marktplatz', icon: '🛒' },
    { type: 'group', label: 'Gruppen', icon: '👥' },
    { type: 'user', label: 'Nutzer', icon: '👤' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-effect border-white/20 h-[600px]">
            <CardContent className="p-0 h-full">
              <MapContainer
                center={userLocation}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
                className="rounded-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* User location */}
                <Marker position={userLocation as [number, number]} icon={getMarkerIcon('user')}>
                  <Popup>
                    <div className="text-center">
                      <strong>Dein Standort</strong>
                    </div>
                  </Popup>
                </Marker>

                {/* Backend data markers */}
                {baseItems.map((item) => (
                  <Marker
                    key={item.id}
                    position={[item.geometry.coordinates[1], item.geometry.coordinates[0]]} // lat, lng
                    icon={getMarkerIcon(item.item_type)}
                    eventHandlers={{
                      click: () => handleMarkerClick(item)
                    }}
                  >
                    <Popup>
                      <div className="min-w-[200px]">
                        <h3 className="font-bold text-gray-800">{item.title}</h3>
                        {item.address && (
                          <p className="text-gray-600 text-sm mb-2">{item.address}</p>
                        )}
                        <Badge className="text-xs">
                          {item.item_type === 'event' && '📅 Event'}
                          {item.item_type === 'marketplace' && '🛒 Marktplatz'}
                          {item.item_type === 'user' && '👤 Nutzer'}
                          {item.item_type === 'group' && '👥 Gruppe'}
                        </Badge>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* Demo markers (if no backend data) */}
                {baseItems.length === 0 && mapMarkers.map((marker) => (
                  <Marker
                    key={marker.id}
                    position={marker.position as [number, number]}
                    icon={getMarkerIcon(marker.type)}
                    eventHandlers={{
                      click: () => handleMarkerClick(marker)
                    }}
                  >
                    <Popup>
                      <div className="min-w-[200px]">
                        <h3 className="font-bold text-gray-800">{marker.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{marker.description}</p>
                        {marker.time && (
                          <p className="text-sm"><strong>Zeit:</strong> {marker.time}</p>
                        )}
                        {marker.participants && (
                          <p className="text-sm"><strong>Teilnehmer:</strong> {marker.participants}</p>
                        )}
                        {marker.price && (
                          <p className="text-sm"><strong>Preis:</strong> {marker.price}</p>
                        )}
                        {marker.members && (
                          <p className="text-sm"><strong>Mitglieder:</strong> {marker.members}</p>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Aktionen</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                onClick={handleAddLocation}
              >
                Standort hinzufügen
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <span>🔍</span>
                <span>Filter</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {filterOptions.map((filter) => (
                <Button
                  key={filter.type || 'all'}
                  variant={activeFilter === filter.type ? "default" : "outline"}
                  size="sm"
                  className={`w-full justify-start ${
                    activeFilter === filter.type 
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" 
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                  onClick={() => handleFilterChange(filter.type)}
                >
                  <span className="mr-2">{filter.icon}</span>
                  {filter.label}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-effect border-white/20">
            <CardHeader>
              <CardTitle className="text-white">In der Nähe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {loading && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="h-4 w-4 animate-spin text-white" />
                  <span className="ml-2 text-white text-sm">Lade Daten...</span>
                </div>
              )}
              {(baseItems.length > 0 ? baseItems : mapMarkers).slice(0, 3).map((item) => {
                const isBaseItem = 'geometry' in item;
                const marker = isBaseItem ? {
                  id: item.id,
                  title: item.title,
                  description: item.address || 'Kein Standort angegeben',
                  type: item.item_type
                } : item;
                
                return (
                <motion.div
                  key={marker.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + marker.id * 0.1 }}
                  className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => handleMarkerClick(marker)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {marker.type === 'event' && <Calendar className="h-4 w-4 text-purple-400" />}
                      {marker.type === 'marketplace' && <ShoppingBag className="h-4 w-4 text-green-400" />}
                      {marker.type === 'group' && <Users className="h-4 w-4 text-yellow-400" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm">{marker.title}</p>
                      <p className="text-gray-400 text-xs">{marker.description}</p>
                      <div className="mt-1">
                        {marker.participants && (
                          <Badge variant="secondary" className="text-xs bg-white/10">
                            {marker.participants} Teilnehmer
                          </Badge>
                        )}
                        {marker.price && (
                          <Badge variant="secondary" className="text-xs bg-white/10">
                            {marker.price}
                          </Badge>
                        )}
                        {marker.members && (
                          <Badge variant="secondary" className="text-xs bg-white/10">
                            {marker.members} Mitglieder
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;

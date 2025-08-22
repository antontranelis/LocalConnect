
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Smartphone, Link, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [inviteLink, setInviteLink] = useState('https://lokalconnect.app/invite/max-mustermann-abc123');

  const handleSaveProfile = () => {
    toast({
      title: "💾 Profil gespeichert",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "🔔 Benachrichtigungen gespeichert",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleSavePrivacy = () => {
    toast({
      title: "🔒 Datenschutz gespeichert",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleGenerateNewLink = () => {
    const newLink = `https://lokalconnect.app/invite/max-mustermann-${Math.random().toString(36).substr(2, 6)}`;
    setInviteLink(newLink);
    toast({
      title: "🔗 Neuer Link generiert",
      description: "Dein personalisierter Einladungslink wurde aktualisiert!"
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "📋 Link kopiert",
      description: "Einladungslink wurde in die Zwischenablage kopiert!"
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "⚠️ Account löschen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 glass-effect border-white/20">
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <User className="h-4 w-4 mr-2" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Bell className="h-4 w-4 mr-2" />
              Benachrichtigungen
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Shield className="h-4 w-4 mr-2" />
              Datenschutz
            </TabsTrigger>
            <TabsTrigger value="invite" className="text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-500">
              <Link className="h-4 w-4 mr-2" />
              Einladung
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profil Informationen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      defaultValue="Max Mustermann"
                      className="glass-effect border-white/20 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="max@example.com"
                      className="glass-effect border-white/20 text-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-white">Standort</Label>
                  <Input
                    id="location"
                    defaultValue="Berlin Mitte"
                    className="glass-effect border-white/20 text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-white">Über mich</Label>
                  <Textarea
                    id="bio"
                    defaultValue="Ich liebe es, neue Menschen kennenzulernen und gemeinsam Aktivitäten zu unternehmen."
                    className="glass-effect border-white/20 text-white"
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interests" className="text-white">Interessen (kommagetrennt)</Label>
                  <Input
                    id="interests"
                    defaultValue="Sport, Kochen, Nachhaltigkeit, Fotografie"
                    className="glass-effect border-white/20 text-white"
                  />
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  onClick={handleSaveProfile}
                >
                  Profil speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Benachrichtigungseinstellungen</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Neue Nachrichten</h4>
                      <p className="text-gray-400 text-sm">Benachrichtigungen für neue Chat-Nachrichten</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-green-400" />
                      <Bell className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Event Erinnerungen</h4>
                      <p className="text-gray-400 text-sm">Erinnerungen für bevorstehende Events</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-green-400" />
                      <Bell className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Freundschaftsanfragen</h4>
                      <p className="text-gray-400 text-sm">Benachrichtigungen für neue Freundschaftsanfragen</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-green-400" />
                      <Bell className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Marktplatz Updates</h4>
                      <p className="text-gray-400 text-sm">Benachrichtigungen für Marktplatz-Aktivitäten</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4 text-gray-400" />
                      <Bell className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  onClick={handleSaveNotifications}
                >
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Datenschutz & Sicherheit</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Profil Sichtbarkeit</h4>
                      <p className="text-gray-400 text-sm">Wer kann dein Profil sehen</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-white text-sm">
                      <option value="public">Öffentlich</option>
                      <option value="friends">Nur Freunde</option>
                      <option value="private">Privat</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Standort teilen</h4>
                      <p className="text-gray-400 text-sm">Deinen ungefähren Standort mit anderen teilen</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-white text-sm">
                      <option value="enabled">Aktiviert</option>
                      <option value="friends">Nur Freunde</option>
                      <option value="disabled">Deaktiviert</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Online Status</h4>
                      <p className="text-gray-400 text-sm">Anderen zeigen, wann du online bist</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-white text-sm">
                      <option value="enabled">Aktiviert</option>
                      <option value="friends">Nur Freunde</option>
                      <option value="disabled">Deaktiviert</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="text-white font-medium">Nachrichten von Fremden</h4>
                      <p className="text-gray-400 text-sm">Nachrichten von Personen, die nicht deine Freunde sind</p>
                    </div>
                    <select className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-white text-sm">
                      <option value="enabled">Erlauben</option>
                      <option value="disabled">Blockieren</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  onClick={handleSavePrivacy}
                >
                  Einstellungen speichern
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invite" className="space-y-6">
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Link className="h-5 w-5" />
                  <span>Personalisierter Einladungslink</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Teile deinen personalisierten Link mit Freunden, damit sie dich einfach auf LokalConnect finden können.
                  </p>
                  
                  <div className="space-y-2">
                    <Label htmlFor="invite-link" className="text-white">Dein Einladungslink</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="invite-link"
                        value={inviteLink}
                        readOnly
                        className="glass-effect border-white/20 text-white flex-1"
                      />
                      <Button
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                        onClick={handleCopyLink}
                      >
                        Kopieren
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                      onClick={handleGenerateNewLink}
                    >
                      Neuen Link generieren
                    </Button>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="text-blue-400 font-medium mb-2">💡 Tipp</h4>
                    <p className="text-gray-300 text-sm">
                      Wenn du deinen Link teilst, können Freunde dich direkt als Freund hinzufügen und sehen deine öffentlichen Aktivitäten.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="glass-effect border-red-500/20">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center space-x-2">
                  <Trash2 className="h-5 w-5" />
                  <span>Gefahrenbereich</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Diese Aktionen sind unwiderruflich. Bitte sei vorsichtig.
                </p>
                
                <Button 
                  variant="outline"
                  className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                  onClick={handleDeleteAccount}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Account löschen
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Settings;

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Bell, Search, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/components/ui/use-toast';

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, sidebarOpen }) => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "🔔 Benachrichtigungen",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleSearchClick = () => {
    toast({
      title: "🔍 Suche",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleProfileClick = () => {
    toast({
      title: "👤 Profil",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-40 w-full glass-effect border-b border-white/20"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="text-white hover:bg-white/10"
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-white hidden sm:block"
          >
            LokalConnect
          </motion.h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearchClick}
            className="text-white hover:bg-white/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNotificationClick}
            className="text-white hover:bg-white/10 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full notification-dot"></span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleProfileClick}
            className="text-white hover:bg-white/10"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
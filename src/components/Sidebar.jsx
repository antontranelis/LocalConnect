import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Map, Calendar, ShoppingBag, MessageCircle, Users, KeyRound as UsersRound, User, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Map, label: 'Karte', path: '/map' },
    { icon: Calendar, label: 'Kalender', path: '/calendar' },
    { icon: ShoppingBag, label: 'Marktplatz', path: '/marketplace' },
    { icon: MessageCircle, label: 'Nachrichten', path: '/messages' },
    { icon: Users, label: 'Freunde', path: '/friends' },
    { icon: UsersRound, label: 'Gruppen', path: '/groups' },
    { icon: User, label: 'Profil', path: '/profile' },
    { icon: Settings, label: 'Einstellungen', path: '/settings' },
  ];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 glass-effect border-r border-white/20 z-50"
      >
        <div className="flex items-center justify-between p-4 pt-5 border-b border-white/20">
          <h2 className="text-lg font-semibold text-white">LokalConnect</h2>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 sidebar-item ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass-effect rounded-lg p-3 text-center">
            <p className="text-sm text-gray-300">Reputation</p>
            <div className="flex items-center justify-center mt-1">
              <span className="reputation-badge px-2 py-1 rounded-full text-xs font-bold">
                ⭐ 4.8
              </span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
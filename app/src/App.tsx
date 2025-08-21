import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Dashboard from '@/pages/Dashboard';
import Map from '@/pages/Map';
import Calendar from '@/pages/Calendar';
import Marketplace from '@/pages/Marketplace';
import Messages from '@/pages/Messages';
import Friends from '@/pages/Friends';
import Groups from '@/pages/Groups';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';

function App() {
  return (
    <>
      <Helmet>
        <title>LokalConnect - Lokale Vernetzungsplattform</title>
        <meta name="description" content="Vernetze dich lokal mit Menschen in deiner Umgebung. Entdecke Events, tausche auf dem Marktplatz und baue echte Verbindungen auf." />
        <meta property="og:title" content="LokalConnect - Lokale Vernetzungsplattform" />
        <meta property="og:description" content="Vernetze dich lokal mit Menschen in deiner Umgebung. Entdecke Events, tausche auf dem Marktplatz und baue echte Verbindungen auf." />
      </Helmet>
      
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/map" element={<Map />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
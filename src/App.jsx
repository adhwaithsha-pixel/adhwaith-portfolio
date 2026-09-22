import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-slate-100 font-sans selection:bg-sapling-400 selection:text-dark-950 flex flex-col">
        {/* Minimal Animated Background */}
        <AnimatedBackground />

        {/* Subtle Interactive Mouse Glow */}
        <MouseGlow />

        {/* Route Change Scroll Reset */}
        <ScrollToTop />

        {/* Modern Sticky Navbar */}
        <Navbar />

        {/* Page Content Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services/*" element={<Navigate to="/#services" replace />} />
            <Route path="/skills/*" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* High-End Modern Footer */}
        <Footer />
      </div>
    </Router>
  );
}

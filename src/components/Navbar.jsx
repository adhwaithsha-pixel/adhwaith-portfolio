import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Clients', href: 'clients' },
    { label: 'Projects', href: 'projects' },
    { label: 'Services', href: 'services' },
    { label: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center group"
        >
          {/* Minimal Clean Name & Subtitle */}
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl text-white group-hover:text-sapling-300 transition-colors tracking-tight leading-tight">
              Adhwaith <span className="text-sapling-400">MV</span>
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sapling-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-slate-400 font-medium">
                Digital Marketing Specialist
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links - Box removed, enlarged & clean minimal */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sapling-400 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm text-black bg-[#8EE54F] hover:bg-[#9cf257] hover:shadow-glow-sapling transition-all duration-300 cursor-pointer font-display font-bold active:scale-95"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl glass-card border border-sapling-400/20 text-slate-300 hover:text-sapling-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-dark-950/95 backdrop-blur-2xl border-b border-sapling-400/15 shadow-2xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium text-slate-200 hover:text-sapling-400 hover:bg-white/[0.06] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-sapling-400">→</span>
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-sapling-400/15">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#8EE54F] text-black font-display font-bold text-sm shadow-glow-sapling hover:bg-[#9cf257]"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

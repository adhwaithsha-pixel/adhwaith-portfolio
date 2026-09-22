import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <div className="w-20 h-20 rounded-3xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 text-3xl font-display font-black text-gradient-primary">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-display mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm sm:text-base max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sapling-400 via-sapling-300 to-sapling-500 text-dark-950 text-xs font-bold font-display shadow-glow-sapling"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio Home</span>
      </Link>
    </div>
  );
}

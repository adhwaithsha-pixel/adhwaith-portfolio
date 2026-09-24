import React from 'react';
import { clientsData } from '../data/portfolioData';

export default function ClientMarquee() {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedClients = [...clientsData, ...clientsData];

  return (
    <div className="relative w-full overflow-hidden py-4 group">
      {/* Edge Blur Faders */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex gap-4 sm:gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
        {duplicatedClients.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="flex items-center gap-3.5 px-5 py-3.5 rounded-xl glass-card border border-sapling-400/10 hover:border-sapling-400/40 transition-all duration-300 min-w-[250px] sm:min-w-[280px] shadow-sm hover:shadow-glow-sapling cursor-default"
          >
            {/* Logo Emblem */}
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-dark-900 border border-sapling-400/20 flex items-center justify-center shrink-0 shadow-inner p-0.5">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <span className="font-display font-bold text-sapling-400 text-sm tracking-wider">
                  {client.symbol}
                </span>
              )}
            </div>

            {/* Client Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-white truncate font-display">{client.name}</h4>
                <span className="text-[10px] font-mono text-sapling-400 font-semibold px-1.5 py-0.5 rounded bg-sapling-400/10 border border-sapling-400/25 whitespace-nowrap">
                  {client.result}
                </span>
              </div>
              <p className="text-xs text-sapling-300/90 font-mono font-medium truncate">{client.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

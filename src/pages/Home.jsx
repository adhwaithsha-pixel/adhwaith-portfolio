import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Share2, 
  TrendingUp, 
  PenTool, 
  Target, 
  ExternalLink, 
  GraduationCap,
  Briefcase,
  Zap,
  Layers
} from 'lucide-react';
import { 
  personalInfo, 
  statsData, 
  experienceTimeline, 
  clientsData,
  projectsData, 
  servicesData 
} from '../data/portfolioData';
import AnimatedCounter from '../components/AnimatedCounter';
import ClientMarquee from '../components/ClientMarquee';
import ContactSection from '../components/ContactSection';
import profileDefaultImg from '../assets/adhwaith-profile.jpg';
import aboutImg from '../assets/adhwaith-about.jpg';

export default function Home() {
  // Clear any old stored photo from localStorage to ensure crisp original photo is used
  useEffect(() => {
    localStorage.removeItem('adhwaith_custom_photo');
  }, []);


  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search className="w-6 h-6 text-sapling-400" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-sapling-300" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-sapling-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-sapling-300" />;
      case 'Target': return <Target className="w-6 h-6 text-sapling-400" />;
      default: return <Layers className="w-6 h-6 text-white" />;
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-[#8EE54F]/10 via-[#1c2824]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#8EE54F]/08 via-[#1c2824]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_auto_1fr] gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Availability Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-white tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#8EE54F] animate-ping" />
                <span className="font-mono text-[#8EE54F] font-bold tracking-wider uppercase">Adhwaith MV</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-300">Digital Marketing Specialist</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-[1.12]">
                Turning Digital Strategies{' '}
                <span className="text-gradient-primary">
                  Into Real Business Growth
                </span>
              </h1>

              {/* Short Professional Introduction */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {personalInfo.shortIntro}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-sm text-black bg-[#8EE54F] hover:bg-[#9cf257] hover:shadow-glow-sapling transition-all duration-300 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm text-white bg-[#0f1413]/80 hover:bg-[#151d1b] border border-white/15 hover:border-[#8EE54F]/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-glow-sapling"
                >
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8EE54F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
                </button>
              </div>

              {/* Bullet checkmarks matching reference image */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-2 text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#8EE54F]" /> Performance Marketing</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#8EE54F]" /> Meta & Google Ads Expert</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#8EE54F]" /> Data-Driven SEO Strategy</span>
              </div>
            </div>

            {/* Center Vertical Divider (Desktop) */}
            <div className="hidden lg:flex items-center justify-center self-stretch px-2 xl:px-4">
              <div className="w-[1.5px] h-full min-h-[460px] max-h-[520px] bg-gradient-to-b from-transparent via-[#8EE54F]/50 via-50% to-transparent relative flex items-center justify-center">
                {/* Center Glowing Accent Node */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#8EE54F] shadow-[0_0_12px_#8EE54F] border-2 border-black" />
              </div>
            </div>

            {/* Mobile Divider (Between text and photo on smaller screens) */}
            <div className="lg:hidden flex items-center justify-center py-2">
              <div className="w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#8EE54F]/50 via-50% to-transparent relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#8EE54F] shadow-[0_0_8px_#8EE54F]" />
              </div>
            </div>

            {/* Right Photo Column - Clear, Crisp & High Definition */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[470px] xl:max-w-[500px] aspect-[3.4/4.5] rounded-3xl overflow-hidden border border-[#8EE54F]/25 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] bg-[#0b0f0e] backdrop-blur-sm group">
                {/* Crisp Photo with natural brightness & zero dark mask over face */}
                <img 
                  src={profileDefaultImg} 
                  alt="Adhwaith MV - Digital Marketing Specialist" 
                  width="768"
                  height="1024"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_12%] brightness-100 contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle bottom edge rest */}
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Fine sapling border frame */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 group-hover:ring-[#8EE54F]/40 transition-all pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ANIMATED STATS SECTION */}
      {/* ========================================================================= */}
      <section id="stats" className="relative py-12 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl p-5 sm:p-6 lg:p-6 xl:p-7 bg-[#0b0f0e] border border-white/10 hover:border-[#8EE54F]/30 transition-all duration-300 flex flex-col justify-center min-h-[140px] sm:min-h-[155px] group shadow-lg"
              >
                <div className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-black font-display tracking-tight text-[#8EE54F] flex items-baseline leading-none">
                  <AnimatedCounter targetValue={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm sm:text-[14px] xl:text-[15px] font-medium text-zinc-400 mt-3 font-sans leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ABOUT ME SECTION */}
      {/* ========================================================================= */}
      <section id="about" className="relative py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1211] border border-[#8EE54F]/30 text-[#8EE54F] text-sm sm:text-base font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#8EE54F]" />
                <span>ABOUT ME</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.18]">
                I Turn Digital Strategies <br className="hidden sm:inline" />
                <span className="text-gradient-gold">Into Business Growth</span>
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutDetailed.map((paragraph, index) => (
                  <p key={index} className="text-slate-300/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-7 py-3.5 rounded-full bg-[#8EE54F] hover:bg-[#9cf257] text-black font-bold font-display text-sm shadow-glow-sapling transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Let's Discuss Growth</span>
                  <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-7 py-3.5 rounded-full bg-[#0f1413]/80 hover:bg-[#151d1b] border border-white/15 hover:border-[#8EE54F]/50 text-white font-semibold text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>View Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8EE54F] stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="w-full rounded-2xl glass-card p-6 sm:p-7 border border-white/15 shadow-2xl relative bg-[#0e1312]/80 backdrop-blur-xl hover:border-[#8EE54F]/35 transition-all">
                {/* Photo at the top of Right Card */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg mb-6 group">
                  <img
                    src={aboutImg}
                    alt="Adhwaith MV"
                    width="684"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-60 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-sapling-400/30 text-sapling-300 text-[11px] font-mono font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-400 animate-pulse" />
                      Digital Marketing Specialist
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 bg-dark-950/70 px-2 py-0.5 rounded backdrop-blur-md">
                      Adhwaith MV
                    </span>
                  </div>
                </div>

                {/* Right Card Details */}
                <div className="space-y-4">
                  {/* Experience */}
                  <div className="p-3.5 rounded-xl bg-[#8EE54F] border border-[#8EE54F] hover:bg-[#9cf257] transition-all shadow-sm">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/75 mb-1">
                      Experience
                    </div>
                    <div className="text-black font-extrabold text-base font-display flex items-center gap-2">
                      <Zap className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                      <span>{personalInfo.rightCard.experience}</span>
                    </div>
                  </div>

                  {/* Specialism */}
                  <div className="p-3.5 rounded-xl bg-[#8EE54F] border border-[#8EE54F] hover:bg-[#9cf257] transition-all shadow-sm">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/75 mb-1">
                      Specialism
                    </div>
                    <div className="text-black font-extrabold text-sm sm:text-base font-display flex items-center gap-2">
                      <Target className="w-4 h-4 text-black shrink-0 stroke-[2.5]" />
                      <span>{personalInfo.rightCard.specialism}</span>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div className="p-3.5 rounded-xl bg-[#8EE54F] border border-[#8EE54F] hover:bg-[#9cf257] transition-all shadow-sm">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/75 mb-2">
                      Core Skills
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {personalInfo.rightCard.coreSkills.split('•').map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-black/10 border border-black/20 text-black text-xs font-bold"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Worked With */}
                  <div className="p-3.5 rounded-xl bg-[#8EE54F] border border-[#8EE54F] hover:bg-[#9cf257] transition-all shadow-sm">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/75 mb-2">
                      Worked With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {personalInfo.rightCard.workedWith.split('•').map((brand, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-black/10 border border-black/20 text-black text-xs font-bold"
                        >
                          {brand.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready to grow your brand?</span>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-xs font-semibold text-sapling-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EXPERIENCE SECTION */}
      {/* ========================================================================= */}
      <section id="experience" className="relative py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-base font-bold text-[#8EE54F] uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#8EE54F]" />
              <span>My Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Professional <span className="text-gradient-primary">Experience</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Driving brand growth through strategic campaigns, performance marketing, SEO, social media, and automation.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#8EE54F] via-[#1c2824] to-[#8EE54F]/30" />

            <div className="space-y-12">
              {experienceTimeline.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-8 group`}
                  >
                    {/* Glowing Node on the line */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 z-20 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-dark-950 border-2 border-sapling-400 flex items-center justify-center shadow-glow-sapling group-hover:scale-125 group-hover:border-sapling-200 transition-all duration-300">
                        <div className="w-2 h-2 rounded-full bg-sapling-400 group-hover:bg-sapling-200" />
                      </div>
                    </div>

                    {/* Content Card (Half Width) */}
                    <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                      <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 relative">
                        {/* Header Details */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-sapling-400 px-2.5 py-1 rounded-md bg-sapling-400/10 border border-sapling-400/20">
                            {item.duration}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                          {item.role}
                        </h3>
                        <div className="flex items-center justify-between text-sm font-semibold text-sapling-300 mt-0.5 mb-4">
                          <span>{item.company}</span>
                          {item.location && (
                            <span className="text-xs font-mono text-slate-400 font-normal">
                              {item.location}
                            </span>
                          )}
                        </div>

                        {/* Responsibilities */}
                        {item.responsibilities && item.responsibilities.length > 0 && (
                          <div className="space-y-2 mb-4">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                              Core Responsibilities:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {item.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <span className="text-sapling-400 mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Key Achievements */}
                        {item.achievements && item.achievements.length > 0 && (
                          <div className="pt-3 border-t border-white/10 space-y-2">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-sapling-400 block font-semibold">
                              Key Impact & Results:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-200 font-medium">
                              {item.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-sapling-400 shrink-0 mt-0.5" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLIENT EXPERIENCE SECTION */}
      {/* ========================================================================= */}
      <section id="clients" className="relative py-24 scroll-mt-20 border-y border-white/5 bg-dark-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-sapling-400/30 text-sapling-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Brands & Clients <span className="text-gradient-primary">Collaborated With</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hands-on digital marketing execution, social media management, SEO optimization, Meta Ads, and automated communication funnels.
          </p>
        </div>

        {/* Infinite Scrolling Client Marquee */}
        <ClientMarquee />

        {/* Client Experience Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientsData.map((client) => (
              <div
                key={client.id || client.name}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between relative group hover:border-sapling-400/40 transition-all duration-300 shadow-lg"
              >
                <div>
                  {/* Top Header: Emblem + Name + Role */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-dark-800 to-dark-700 border border-sapling-400/30 flex items-center justify-center font-display font-bold text-sapling-400 text-sm shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                      {client.symbol}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-sapling-300 transition-colors truncate">
                        {client.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-sapling-400 truncate">
                        {client.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-white/5 mb-4" />

                  {/* Bullet Points */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Deliverables & Scope:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {(client.activities || []).map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sapling-400 shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Tag Footer */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{client.industry}</span>
                  <span className="text-[10px] font-mono text-sapling-400 font-semibold px-2 py-0.5 rounded bg-sapling-400/10 border border-sapling-400/20">
                    {client.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED PROJECTS SECTION */}
      {/* ========================================================================= */}
      <section id="projects" className="relative py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-sapling-400/30 text-sapling-400 text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-sapling-400" />
                <span>Selected Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Featured <span className="text-gradient-primary">Projects & Campaigns</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Explore comprehensive case studies showing the exact mathematical strategies, creative iterations, and quantitative outcomes achieved.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                Click any case study to view full page breakdown →
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group glass-card glass-card-hover rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#8EE54F]/50 bg-[#0b0f0e] hover:shadow-2xl shadow-lg"
              >
                {/* Visual Header: Flush Full-Bleed Real Image or Graphic Header */}
                {(project.cardImage || project.image) ? (
                  <div className="relative w-full h-60 sm:h-72 overflow-hidden border-b border-white/10 bg-dark-950">
                    <img
                      src={project.cardImage || project.image}
                      alt={project.title}
                      width="1024"
                      height="576"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-60 sm:h-72 overflow-hidden bg-gradient-to-br from-dark-850 to-dark-950 border-b border-white/10 p-6 flex flex-col justify-between group-hover:border-sapling-400/40 transition-colors">
                    <div className="absolute inset-0 grid-pattern opacity-25" />
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#8EE54F]/10 rounded-full blur-2xl group-hover:bg-[#8EE54F]/20 transition-colors" />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-900/90 text-[#8EE54F] border border-[#8EE54F]/30 font-semibold">
                        {project.client}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#8EE54F] group-hover:text-black transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <span className="block text-[11px] font-mono text-slate-400 uppercase">Primary Metric</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-gradient-primary">
                        {project.metrics?.[0]?.value || "10x"}
                      </span>
                      <span className="block text-xs text-slate-300 font-medium mt-0.5">{project.metrics?.[0]?.label || "Performance"}</span>
                    </div>
                  </div>
                )}

                {/* Card Body - Styled identically to Reference Image 2 */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  {/* Top Meta Line: Category on left, Live site / Case study on right */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-sans text-slate-400 font-medium lowercase">
                      {project.category}
                    </span>
                    <span className="text-sm font-sans font-bold text-[#8EE54F] flex items-center gap-1 group-hover:underline">
                      <span>Live site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display group-hover:text-[#8EE54F] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack / Tools - Comma-separated exactly like Image 2 */}
                  <div className="text-xs sm:text-sm font-sans text-slate-400 leading-relaxed font-medium pt-1">
                    {project.tools.join(' , ')}
                  </div>

                  {/* Large Bright Lime Pill Button matching Image 2 */}
                  <div className="pt-3">
                    <div className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#8EE54F] hover:bg-[#9cf257] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-glow hover:shadow-glow-sapling group-hover:scale-[1.01]">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section id="services" className="relative py-24 scroll-mt-20 bg-dark-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1211] border border-[#8EE54F]/30 text-[#8EE54F] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#8EE54F]" />
              <span>CORE SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              End-to-End <span className="text-gradient-primary">Growth Solutions</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every service is engineered around measurable revenue metrics, strategic execution, and sustainable customer acquisition.
            </p>
          </div>

          {/* 3 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#8EE54F]/40 hover:shadow-2xl bg-[#0b0f0e] group"
              >
                {/* Visual Image Header */}
                {service.image && (
                  <div className="relative w-full aspect-video overflow-hidden border-b border-white/10 bg-white flex items-center justify-center p-2.5">
                    <img
                      src={service.image}
                      alt={service.name}
                      width="735"
                      height="490"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-sapling-400/10 text-sapling-400 border border-sapling-400/30 font-semibold">
                        {service.badge}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-sapling-400">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-sapling-400 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Highlights / Deliverables */}
                    <div className="space-y-2 pt-3 border-t border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold mb-2">
                        Deliverables:
                      </span>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONTACT CTA SECTION */}
      {/* ========================================================================= */}
      <ContactSection />
    </div>
  );
}

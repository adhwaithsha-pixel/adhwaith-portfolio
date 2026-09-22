import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Wrench, 
  Calendar, 
  User, 
  Building, 
  Target, 
  Image as ImageIcon, 
  ZoomIn, 
  X 
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const [zoomedImg, setZoomedImg] = useState(null);

  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-bold text-white font-display mb-3">Project Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested case study could not be located.</p>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sapling-400 to-sapling-300 text-dark-950 text-xs font-bold"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="relative py-12 sm:py-16">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#1c2824]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sapling-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation & Breadcrumb Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sapling-400/15 pb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sapling-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Portfolio & Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="text-sapling-400 truncate max-w-[200px]">{project.title}</span>
          </div>
        </div>

        {/* Conditional View: Custom Structured Case Study (e.g. Fontspell) vs Default Case Study */}
        {project.challenge ? (
          <div className="space-y-12">
            {/* Header / Title / Subtitle */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-sapling-400/10 text-sapling-400 border border-sapling-400/30">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                    {project.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.2]">
                {project.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                {project.shortDesc}
              </p>
            </div>

            {/* Single Image Showcase */}
            {project.image && (
              <div className="rounded-2xl border border-white/10 bg-black/90 p-3 sm:p-6 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 via-transparent to-transparent pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[500px] object-contain rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            )}

            {/* Challenge Section */}
            <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sapling-400" />
                <span>Challenge</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.challenge.intro}
              </p>
              <ul className="space-y-3 pt-2">
                {project.challenge.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sapling-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Strategy Section */}
            <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sapling-300" />
                <span>Strategy</span>
              </h2>
              <ul className="space-y-3 pt-2">
                {project.strategy.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-sapling-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Execution Section */}
            <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-sapling-400" />
                <span>Execution</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.execution}
              </p>
            </section>

            {/* Results Section */}
            {((project.resultsMetrics && project.resultsMetrics.length > 0) || (project.resultsList && project.resultsList.length > 0) || project.resultsSummary) && (
              <section className="glass-card rounded-2xl p-6 sm:p-8 border border-sapling-400/30 bg-sapling-400/[0.02] space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-sapling-400" />
                  <span>Results</span>
                </h2>
                
                {project.resultsMetrics && project.resultsMetrics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.resultsMetrics.map((metric, idx) => (
                      <div key={idx} className="p-5 sm:p-6 rounded-xl bg-dark-950/80 border border-sapling-400/20 hover:border-sapling-400/40 transition-all text-center sm:text-left">
                        <div className="text-3xl sm:text-4xl font-extrabold text-white font-display text-gradient-primary mb-1.5">
                          {metric.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-400 font-medium">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {project.resultsList && project.resultsList.length > 0 && (
                  <ul className="space-y-3 pt-1">
                    {project.resultsList.map((res, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-sapling-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.resultsSummary && (
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-3 border-t border-white/10">
                    {project.resultsSummary}
                  </p>
                )}
              </section>
            )}

            {/* Tools & Services */}
            {project.tools && project.tools.length > 0 && project.showToolsInDetail !== false && (
              <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-sapling-400" />
                  <span>Tools & Services</span>
                </h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold bg-white/[0.05] text-slate-200 border border-white/10 hover:border-sapling-400/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Call to Action */}
            {project.cta && (
              <section className="glass-card rounded-3xl p-8 sm:p-12 border border-sapling-400/40 bg-gradient-to-b from-dark-900 to-dark-950 text-center space-y-6 shadow-glow-sapling">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display max-w-xl mx-auto">
                  {project.cta.headline}
                </h3>
                <div>
                  <Link
                    to={project.cta.link}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-sapling-400 hover:bg-sapling-300 text-dark-950 font-bold text-base transition-all shadow-glow hover:shadow-glow-sapling hover:scale-105"
                  >
                    <span>{project.cta.buttonText}</span>
                  </Link>
                </div>
              </section>
            )}
          </div>
        ) : (
          <>
            {/* Hero Case Study Header */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-sapling-400/10 text-sapling-400 border border-sapling-400/30">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                  {project.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.2]">
                {project.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                {project.shortDesc}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl glass-card border border-sapling-400/15">
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase">
                    <Building className="w-3.5 h-3.5 text-sapling-400" />
                    <span>Client / Brand</span>
                  </span>
                  <p className="text-sm font-bold text-white font-display">{project.client}</p>
                </div>
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase">
                    <User className="w-3.5 h-3.5 text-sapling-300" />
                    <span>My Role</span>
                  </span>
                  <p className="text-sm font-bold text-white font-display">{project.role}</p>
                </div>
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase">
                    <Calendar className="w-3.5 h-3.5 text-sapling-400" />
                    <span>Timeline</span>
                  </span>
                  <p className="text-sm font-bold text-white font-display">{project.timeline}</p>
                </div>
                <div className="space-y-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase">
                    <Target className="w-3.5 h-3.5 text-sapling-400" />
                    <span>Impact</span>
                  </span>
                  <p className="text-sm font-bold text-sapling-400 font-display">High ROI Scale</p>
                </div>
              </div>
            </div>

            {/* Quantifiable Results KPI Cards */}
            {project.metrics && (
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-sapling-400/70 font-semibold">
                  Key Performance Indicators & Quantitative Results
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-5 rounded-2xl glass-card border border-sapling-400/15 hover:border-sapling-400/40 transition-all">
                      <span className="block text-[11px] uppercase font-mono text-slate-400 mb-1">{metric.label}</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-display text-gradient-primary">
                        {metric.value}
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">{metric.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Screenshot Showcase (if available) */}
            {project.image && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-sapling-400 font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Verified Meta Ads Performance Dashboard</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Live Campaign Evidence</span>
                </div>
                <div 
                  onClick={() => setZoomedImg(project.image)}
                  className="rounded-2xl overflow-hidden border border-sapling-400/20 shadow-2xl bg-dark-950 p-2 sm:p-3 group cursor-pointer relative"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Evidence Screenshot`}
                    className="w-full rounded-xl object-cover object-top max-h-[500px] group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 rounded-full bg-dark-950/90 text-sapling-300 text-xs font-mono border border-sapling-400/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Click to Zoom
                    </span>
                  </div>
                  <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                    <span>Account: {project.client}</span>
                    <span className="text-sapling-400 font-semibold">Active Campaigns & Conversion Funnel</span>
                  </div>
                </div>
              </div>
            )}

            {/* Individual Campaign Performance Evidence */}
            {project.proofImages && project.proofImages.length > 0 && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-sapling-400 font-semibold flex items-center gap-2">
                    <Target className="w-3.5 h-3.5" />
                    <span>Individual Campaign Results & Proofs</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Verified Ad Set Proofs</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.proofImages.map((proof, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() => setZoomedImg(proof.image)}
                      className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-sapling-400/40 transition-all group overflow-hidden bg-dark-950/70 hover:shadow-glow-sapling cursor-pointer flex flex-col justify-between"
                    >
                      <div className="relative rounded-xl overflow-hidden border border-white/10 mb-3.5 bg-dark-950">
                        <img
                          src={proof.image}
                          alt={proof.title}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="px-3 py-1.5 rounded-full bg-dark-950/90 text-sapling-300 text-xs font-mono font-semibold border border-sapling-400/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Click to Enlarge
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm sm:text-base font-bold text-white font-display group-hover:text-sapling-300 transition-colors">
                            {proof.title}
                          </h4>
                          <span className="text-xs font-mono font-bold text-sapling-400 px-2 py-0.5 rounded bg-sapling-400/10 border border-sapling-400/20 whitespace-nowrap">
                            {proof.stat}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {proof.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deep Dive Case Study Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* 1. Project Overview */}
                {project.overview && (
                  <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-400" />
                      <span>Project Overview</span>
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.overview}
                    </p>
                  </section>
                )}

                {/* 2. Project Goals */}
                {project.goals && (
                  <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-300" />
                      <span>Project Goals & Benchmarks</span>
                    </h2>
                    <ul className="space-y-2.5">
                      {project.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 glass-card p-3 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* 3. Mathematical & Strategic Approach */}
                {project.strategy && (
                  <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-400" />
                      <span>Strategic & Mathematical Approach</span>
                    </h2>
                    <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.strategy}
                      </p>
                    </div>
                  </section>
                )}

                {/* 4. Work Completed */}
                {project.workCompleted && (
                  <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-300" />
                      <span>Work Completed & Deliverables</span>
                    </h2>
                    <div className="space-y-2.5">
                      {project.workCompleted.map((work, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300">
                          <span className="w-5 h-5 rounded-full bg-sapling-400/10 text-sapling-400 flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{work}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 5. Results & Business Impact */}
                {project.results && (
                  <section className="space-y-3">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-sapling-400" />
                      <span>Results & Business Impact</span>
                    </h2>
                    <div className="p-5 rounded-2xl glass-card border border-sapling-400/20 bg-sapling-400/[0.03] space-y-3">
                      {project.results.map((res, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium">{res}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 6. Image Gallery & Campaign Visual Showcase */}
                {project.gallery && (
                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2.5">
                      <ImageIcon className="w-5 h-5 text-sapling-400" />
                      <span>Project Visual Showcase & Evidence</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project.gallery.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl glass-card border border-white/10 relative overflow-hidden group">
                          <div className="w-full aspect-[4/3] rounded-lg bg-dark-900 border border-white/10 flex flex-col items-center justify-center p-3 text-center mb-3 relative">
                            <div className="absolute inset-0 grid-pattern opacity-20" />
                            <span className="text-xl font-extrabold text-gradient-gold font-display mb-1">
                              {item.stat}
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                              {item.type}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-white font-display mb-1">{item.title}</h4>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Right Sidebar (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                {/* Tools Used Box */}
                {project.tools && (
                  <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                    <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-sapling-400" />
                      <span>Tools & Platforms Mastered</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-300 border border-white/10 hover:border-sapling-400/40 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Consultation CTA */}
                <div className="glass-card rounded-2xl p-6 border border-sapling-400/30 shadow-glow-sapling relative overflow-hidden space-y-4 text-center">
                  <div className="w-10 h-10 rounded-xl bg-sapling-400/20 text-sapling-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    Need Results Like This?
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    I can audit your current marketing funnel and build a customized execution roadmap for your brand.
                  </p>
                  <Link
                    to="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sapling-400 via-sapling-300 to-sapling-500 text-dark-950 font-display font-bold text-xs shadow-glow-sapling"
                  >
                    <span>Let's Work Together</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Project Pagination Footer */}
        <div className="pt-10 border-t border-white/10 flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sapling-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left hidden sm:block">
                <span className="block text-[10px] text-slate-500 uppercase">Previous Project</span>
                <span className="font-semibold text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : <div />}

          <Link
            to="/#projects"
            className="px-4 py-2 rounded-xl glass-card border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
          >
            All Projects
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sapling-400 transition-colors"
            >
              <div className="text-right hidden sm:block">
                <span className="block text-[10px] text-slate-500 uppercase">Next Project</span>
                <span className="font-semibold text-white">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox Modal */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 bg-dark-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
          onClick={() => setZoomedImg(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-dark-900 rounded-2xl border border-white/20 p-2 sm:p-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-dark-950/90 text-white hover:text-sapling-400 flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedImg}
              alt="Enlarged Campaign Proof"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

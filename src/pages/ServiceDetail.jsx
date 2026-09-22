import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Wrench, 
  Search, 
  Share2, 
  TrendingUp, 
  PenTool, 
  Target, 
  Layers,
  ArrowUpRight,
  ShieldCheck,
  BarChart2
} from 'lucide-react';
import { servicesData, projectsData } from '../data/portfolioData';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-bold text-white font-display mb-3">Service Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested service could not be located.</p>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sapling-400 to-sapling-300 text-dark-950 text-xs font-bold"
        >
          Return to Services
        </Link>
      </div>
    );
  }

  // Retrieve relevant project data
  const relevantProjects = projectsData.filter((p) => 
    service.relevantProjectIds && service.relevantProjectIds.includes(p.id)
  );

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Search': return <Search className="w-7 h-7 text-sapling-400" />;
      case 'Share2': return <Share2 className="w-7 h-7 text-sapling-300" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-sapling-400" />;
      case 'PenTool': return <PenTool className="w-7 h-7 text-sapling-300" />;
      case 'Target': return <Target className="w-7 h-7 text-sapling-400" />;
      default: return <Layers className="w-7 h-7 text-white" />;
    }
  };

  return (
    <div className="relative py-12 sm:py-16">
      {/* Ambient backgrounds */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-dark-700/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-sapling-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sapling-400/15 pb-6">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sapling-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Services</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-sapling-400 truncate max-w-[200px]">{service.name}</span>
          </div>
        </div>

        {/* Hero Service Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner">
              {getServiceIcon(service.icon)}
            </div>
            <div>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sapling-400/10 text-sapling-400 border border-sapling-400/20 font-semibold uppercase">
                {service.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mt-1">
                {service.name}
              </h1>
            </div>
          </div>

          <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl text-gradient-gold">
            {service.tagline}
          </p>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            {service.overview}
          </p>
        </div>

        {/* What I Provide - Deliverables Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-sapling-400" />
            <h2 className="text-2xl font-bold text-white font-display">
              What I Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/10 flex items-start gap-3 hover:border-sapling-400/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach - 4 Step Framework */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-sapling-400" />
            <h2 className="text-2xl font-bold text-white font-display">
              My Execution Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.approach.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl glass-card border border-white/10 space-y-3 relative group">
                <span className="font-mono text-2xl font-black text-white/20 group-hover:text-sapling-400 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white font-display">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Measurable Benefits */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-sapling-400" />
            <h2 className="text-2xl font-bold text-white font-display">
              Measurable Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-4 rounded-xl glass-card border border-sapling-400/20 bg-sapling-400/[0.03] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms Used */}
        <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
            <Wrench className="w-4 h-4 text-sapling-400" />
            <span>Platforms & Toolsets Utilized</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/10 hover:border-sapling-400/40 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Relevant Case Studies */}
        {relevantProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-display">
              Relevant Case Studies & Proof
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relevantProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sapling-400/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-mono text-sapling-400 uppercase">{p.category}</span>
                    <h3 className="text-lg font-bold text-white font-display mt-1 group-hover:text-sapling-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{p.shortDesc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-sapling-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Direct Service CTA */}
        <div className="glass-card rounded-2xl p-8 border border-sapling-400/30 shadow-glow-sapling text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sapling-400 to-sapling-200 p-[1px] mx-auto">
            <div className="w-full h-full rounded-2xl bg-dark-900 flex items-center justify-center text-sapling-400">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Ready to Scale Your {service.name}?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Let's conduct a complimentary strategic audit to uncover untapped opportunities and build a tailored growth blueprint.
          </p>
          <div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-bold text-sm text-dark-950 bg-gradient-to-r from-sapling-400 via-sapling-300 to-sapling-500 shadow-glow-sapling hover:shadow-glow-gold transition-all"
            >
              <span>Contact Me for {service.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

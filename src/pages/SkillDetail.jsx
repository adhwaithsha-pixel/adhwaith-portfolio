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
  GraduationCap,
  Award,
  BarChart3
} from 'lucide-react';
import { skillsData, projectsData } from '../data/portfolioData';

export default function SkillDetail() {
  const { id } = useParams();
  const skill = skillsData.find((s) => s.id === id);

  if (!skill) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-3xl font-bold text-white font-display mb-3">Skill Not Found</h2>
        <p className="text-slate-400 text-sm mb-6">The requested skill deep-dive could not be located.</p>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sapling-400 to-sapling-300 text-dark-950 text-xs font-bold"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  // Retrieve relevant project data
  const relevantProjects = projectsData.filter((p) => 
    skill.relevantProjectIds && skill.relevantProjectIds.includes(p.id)
  );

  const getSkillIcon = (iconName) => {
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
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-dark-700/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-sapling-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sapling-400/15 pb-6">
          <Link
            to="/#skills"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sapling-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Skills & Capabilities</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Skills</span>
            <span>/</span>
            <span className="text-sapling-400 truncate max-w-[200px]">{skill.name}</span>
          </div>
        </div>

        {/* Hero Skill Header */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-inner">
              {getSkillIcon(skill.icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sapling-400/10 text-sapling-400 border border-sapling-400/20 font-semibold uppercase">
                  {skill.category}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 font-bold">
                  {skill.proficiency}% Mastered
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mt-1">
                {skill.name}
              </h1>
            </div>
          </div>

          <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl text-gradient-gold">
            {skill.tagline}
          </p>

          {/* Analytical Advantage Callout */}
          <div className="p-6 rounded-2xl glass-card border border-sapling-400/30 bg-sapling-400/[0.03] relative overflow-hidden space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sapling-400 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>BSc Mathematics Analytical Edge</span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {skill.analyticalEdge}
            </p>
          </div>
        </div>

        {/* Real-World Experience Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <Award className="w-5 h-5 text-sapling-400" />
            <span>Real-World Experience</span>
          </h2>
          <div className="p-6 rounded-2xl glass-card border border-white/10">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {skill.experienceSummary}
            </p>
          </div>
        </div>

        {/* What I Can Do - Actionable Competencies */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-sapling-400" />
            <span>Actionable Capabilities & What I Can Do</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skill.whatICanDo.map((cap, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/10 flex items-start gap-3 hover:border-sapling-400/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-sapling-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mastered Tools and Platforms */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-display flex items-center gap-2">
            <Wrench className="w-5 h-5 text-sapling-400" />
            <span>Mastered Tools & Platforms</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skill.toolsAndPlatforms.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-card border border-white/10 space-y-2 hover:border-sapling-400/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-display">{tool.name}</h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-sapling-400 border border-sapling-400/20">
                    {tool.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Projects */}
        {relevantProjects.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white font-display">
              Case Studies Demonstrating This Skill
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
                    <span>View Project Breakdown</span>
                    <ArrowUpRight className="w-4 h-4 text-sapling-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Skill CTA */}
        <div className="glass-card rounded-2xl p-8 border border-sapling-400/30 shadow-glow-sapling text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sapling-400/20 text-sapling-400 border border-sapling-400/30 flex items-center justify-center mx-auto">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Need Expert {skill.name} Execution?
          </h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Let's apply mathematical precision to your campaigns and unlock predictable ROI.
          </p>
          <div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-display font-bold text-sm text-dark-950 bg-gradient-to-r from-sapling-400 via-sapling-300 to-sapling-500 shadow-glow-sapling hover:shadow-glow-gold transition-all"
            >
              <span>Discuss This Skill for Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, Clock, Check, Send, Copy, ArrowUpRight } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, WhatsAppIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Performance Marketing',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const text = `Hi Adhwaith, I found your website and I'd like to discuss a project:

*Name:* ${formData.name || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Company:* ${formData.company || 'N/A'}
*Service Interested In:* ${formData.service}
*Message:* ${formData.message || 'I would like to discuss my requirements.'}`;

    const waUrl = `https://wa.me/919048832173?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-20 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#1c2824]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#8EE54F]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[#8EE54F] text-xs font-mono font-bold tracking-widest uppercase block mb-3">
                CONTACT
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4 leading-[1.15]">
                Let’s grow <br className="hidden sm:inline" />your business
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Tell me what you are working on and where you want to grow. I will reply with honest, specific next steps — whether or not we end up working together.
              </p>
            </div>

            {/* List items with rounded square icon containers */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#8EE54F]/30 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0f0e] border border-white/10 flex items-center justify-center text-[#8EE54F] shrink-0">
                    <Mail className="w-5 h-5 text-[#8EE54F]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-mono text-slate-400">Email</span>
                    <a 
                      href={`mailto:${personalInfo.contact.email}`} 
                      className="text-sm sm:text-base text-white font-semibold hover:text-[#8EE54F] transition-colors truncate block"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={copyEmail}
                  className="p-2 text-slate-400 hover:text-[#8EE54F] transition-colors shrink-0 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#8EE54F]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#8EE54F]/30 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0b0f0e] border border-white/10 flex items-center justify-center text-[#8EE54F] shrink-0">
                    <Phone className="w-5 h-5 text-[#8EE54F]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-mono text-slate-400">Phone number</span>
                    <a 
                      href={`tel:${personalInfo.contact.phone}`} 
                      className="text-sm sm:text-base text-white font-semibold hover:text-sapling-400 transition-colors"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sapling-400/10 text-sapling-300 border border-sapling-400/20">
                  Fast Reply
                </span>
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#0e1718] border border-white/10 flex items-center justify-center text-sapling-400 shrink-0">
                  <Clock className="w-5 h-5 text-sapling-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">Response time</span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    Replies within 24 hours
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-[#0e1718] border border-white/10 flex items-center justify-center text-sapling-400 shrink-0">
                  <Check className="w-5 h-5 text-sapling-400" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-400">Availability</span>
                  <span className="text-sm sm:text-base text-white font-semibold">
                    {personalInfo.contact.availability}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons: WhatsApp, Instagram, LinkedIn */}
            <div className="space-y-3 pt-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Direct Channels
              </span>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Chat on WhatsApp */}
                <a
                  href={personalInfo.contact.whatsappChatUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-display font-bold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-sapling-400 via-sapling-300 to-sapling-500 hover:shadow-glow-sapling transition-all duration-300 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-dark-950" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 transition-all duration-300 cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-display font-semibold text-xs sm:text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 transition-all duration-300 cursor-pointer"
                >
                  <LinkedInIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl bg-[#0e1718]/90 relative">
              <form onSubmit={handleSendMessage} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sapling-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sapling-400 transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sapling-400 transition-colors"
                  />
                </div>

                {/* Service interested in */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Service interested in
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-sapling-400 transition-colors"
                  >
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="SEO Growth">SEO Growth</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Meta Ads">Meta Ads</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Poster Designing">Poster Designing</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Comprehensive Growth Strategy">Comprehensive Growth Strategy</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What are you working on?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sapling-400 transition-colors resize-none"
                  />
                </div>

                {/* Send message button */}
                <button
                  type="submit"
                  className="w-full bg-[#8EE54F] hover:bg-[#9ef55f] text-black font-bold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-glow-sapling cursor-pointer mt-2"
                >
                  <span>Send message</span>
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

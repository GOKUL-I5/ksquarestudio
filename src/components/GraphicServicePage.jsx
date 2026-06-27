import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Image, Palette, Shapes, Sliders } from 'lucide-react';
import SEO from './SEO';
import './About.css';

export default function GraphicServicePage({ playTransition }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    if (playTransition) {
      playTransition(() => {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('services');
          if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 50);
      });
    } else {
      navigate('/');
    }
  };

  const serviceBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin + "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": window.location.origin + "/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Branding & Graphic Design",
        "item": window.location.href
      }
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <SEO 
        title="Graphic Design Chennai | Branding & Identity Systems | KSquareStudio"
        description="Looking for creative branding & graphic design in Chennai? KSquareStudio designs logos, brand systems, and digital assets that capture attention."
        canonical={window.location.origin + "/services/branding-graphic-design"}
        schema={serviceBreadcrumbSchema}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          <li>
            <button onClick={() => navigate('/')} className="hover:text-purple-400 transition-colors">
              Home
            </button>
          </li>
          <li><span>/</span></li>
          <li>
            <button onClick={handleBack} className="hover:text-purple-400 transition-colors">
              Services
            </button>
          </li>
          <li><span>/</span></li>
          <li className="text-purple-300 font-medium" aria-current="page">Graphic Design</li>
        </ol>
      </nav>

      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 mb-10 text-sm text-gray-400 hover:text-white transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      {/* Hero Header */}
      <header className="mb-12">
        <span className="text-[#a855f7] font-bold tracking-wider uppercase text-sm block mb-2">
          Visual Identity
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
          Graphic Design Chennai & Branding
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          At KSquareStudio, we shape how brands are perceived. We formulate bespoke brand identities, logo suites, 
          and creative graphic systems that communicate expertise and hold visual presence.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Main Body */}
        <section className="md:col-span-2 space-y-8 text-gray-300">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Palette size={24} className="text-[#a855f7]" />
              Consistent Brand Architecture
            </h2>
            <p className="leading-relaxed text-gray-300">
              Branding is more than a logo; it is a consistent design language. Our graphic design Chennai team works closely with founders and startups to define typography guidelines, color palettes, and structural layouts that stay consistent across digital media, social networks, and print packaging.
            </p>
            <p className="leading-relaxed text-gray-300">
              We design specialized vector graphics, illustration assets, and presentation layouts tailored for pitch decks. By crafting modern layouts with clean lines and strong typographic hierarchy, we make sure your business communicates confidence and commands attention.
            </p>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Sliders size={24} className="text-[#a855f7]" />
              Creative Deliverables
            </h2>
            <p className="leading-relaxed text-gray-300">
              Our comprehensive creative services cover everything needed to establish your brand's digital footprints:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <Shapes size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Corporate Logo Suites:</strong> Designing versatile, scalable vector logos that look sharp on a tiny browser favicon or a large physical billboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <Shapes size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Pitch Deck & Presentation Systems:</strong> Crafting high-end visual slide decks that present data cleanly, helping you win clients and secure funding.</span>
              </li>
              <li className="flex items-start gap-3">
                <Shapes size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>SEO Optimized Vector Assets:</strong> Generating high-contrast, scalable SVG assets to ensure fast page load times and zero layout shift.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar Info Card */}
        <aside className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Design Deliverables</h3>
            <div className="flex flex-wrap gap-2">
              {["Logo Design", "Brand Guidelines", "Typography Systems", "Color Palettes", "Pitch Decks", "Corporate Slides", "Social Media Kits", "Vector SVGs", "Asset Optimization", "Print Styling"].map((tech) => (
                <span key={tech} className="bg-purple-900/20 border border-purple-500/30 text-purple-200 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Design Principles</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Typography & Spacing Balance
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Scalable SVGs for Fast Loading
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Modern Glass & Dark Styling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Consistent Visual Guidelines
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Service FAQs Accordion */}
      <section className="glass p-6 md:p-8 rounded-2xl border border-white/5 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Image size={24} className="text-[#a855f7]" />
          Branding FAQs
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">What is included in a complete branding package?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Our packages include a core primary logo, responsive sub-marks, visual guidelines (specifying typography scales, spacing, color hex codes), social media asset templates, and optimized digital graphics.
            </p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">Why are optimized vector assets important for website speed?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Large raster images (like JPEGs or PNGs) take longer to load, increasing LCP latency. Vector SVGs are code-based, infinitely scalable, and load almost instantly, preserving high performance on mobile devices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Do you assist with presentation slide designs?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes, KSquareStudio provides high-end presentation design, formatting raw slides and financial data into polished pitch decks for investors and sales conferences.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/15 via-[#8f00ff]/10 to-blue-900/10 border border-purple-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">Shape a Memorable Identity Today</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Contact KSquareStudio. Let's design a custom, cohesive visual identity system that builds brand recognition and elevates your market positioning.
        </p>
        <button 
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="bg-[#8f00ff] hover:bg-[#7b00ff] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(143,0,255,0.4)] hover:shadow-[0_0_30px_rgba(143,0,255,0.6)]"
        >
          Consult Our Chennai Graphic Designers
        </button>
      </div>
    </div>
  );
}

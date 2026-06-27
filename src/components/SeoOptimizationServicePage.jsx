import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart3, Search, Settings, TrendingUp } from 'lucide-react';
import SeoMetadataManager from './SeoMetadataManager';
import './About.css';

export default function SeoOptimizationServicePage({ playTransition }) {
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
        "name": "SEO Services",
        "item": window.location.href
      }
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <SeoMetadataManager
        title="SEO Services Chennai | Local Google Search Optimization | KSquareStudio"
        description="Rank #1 with the best SEO services Chennai has to offer. KSquareStudio specializes in technical SEO, Core Web Vitals optimization, and local search growth."
        canonical={window.location.origin + "/services/seo"}
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
          <li className="text-purple-300 font-medium" aria-current="page">SEO Services</li>
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
          Search Visibility
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
          SEO Services Chennai
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          At KSquareStudio, we decode the Google search algorithm. We implement precision-engineered
          search engine optimization strategies that place your Chennai business at the top of search rankings.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* Main Body */}
        <section className="md:col-span-2 space-y-8 text-gray-300">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Search size={24} className="text-[#a855f7]" />
              Data-Driven Organic Growth
            </h2>
            <p className="leading-relaxed text-gray-300">
              Good SEO is not about tricks; it is about providing clear, structured context to search crawlers. Our SEO services Chennai team optimizes every layer of your website, from HTML headings and sitemaps to structured Schema.org JSON-LD data. This ensures search engines index your pages correctly and reward you with organic traffic.
            </p>
            <p className="leading-relaxed text-gray-300">
              We perform deep keyword research to target queries with high commercial intent in Chennai. By mapping custom service landing pages, we build authority for keywords like <em>Web Design Company Chennai</em> and <em>Website Development Chennai</em>, allowing you to bypass competitors and secure prime organic positions.
            </p>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Settings size={24} className="text-[#a855f7]" />
              Our Technical SEO Stack
            </h2>
            <p className="leading-relaxed text-gray-300">
              We structure our SEO integrations to follow Google's latest ranking factors:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <TrendingUp size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Structured Schema.org Markups:</strong> Injecting specific LocalBusiness, ProfessionalService, Product, and FAQ schemas so Google understands who you are and highlights your search listings.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Core Web Vitals & Speed:</strong> Minimizing script sizes, setting caching headers, pre-rendering static routes, and ensuring INP (Interaction to Next Paint) stays below 200ms.</span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Content Relevance & Accessibility:</strong> Writing descriptive image alt text, ensuring correct heading hierarchies (one H1 per page), and verifying mobile responsive crawlability.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar Info Card */}
        <aside className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">SEO Checklist</h3>
            <div className="flex flex-wrap gap-2">
              {["Technical SEO", "Local SEO", "JSON-LD Schemas", "Sitemap Optimization", "Robots.txt", "Canonical Links", "Keyword Research", "On-Page Audits", "Core Web Vitals", "Link Building"].map((tech) => (
                <span key={tech} className="bg-purple-900/20 border border-purple-500/30 text-purple-200 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Key Metrics Handled</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Google Search Console Setup
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                XML Sitemap Audits
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Interaction to Next Paint (INP)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Google E-E-A-T Compliance
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Service FAQs Accordion */}
      <section className="glass p-6 md:p-8 rounded-2xl border border-white/5 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <BarChart3 size={24} className="text-[#a855f7]" />
          Search Optimization FAQs
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">How long does it take to see results from SEO?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Organic search optimization is a long-term investment. While technical updates (like fixing speed, canonicals, and structured schemas) can show results in 2 to 4 weeks, significant keyword ranking improvements typically take 3 to 6 months of steady content authority building.
            </p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">What is Local SEO and why is it important for Chennai businesses?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Local SEO optimizes your digital presence to rank for location-specific search queries (like "services near me" or "in Chennai"). By implementing localized schemas and referencing target zones (OMR, Velachery, T. Nagar), you ensure local decision-makers find your business first.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Do you assist with Google Search Console and Analytics?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes, we handle the complete configuration, verification, and sitemap submission in Google Search Console, as well as installing privacy-friendly tracking tags to monitor traffic metrics and search queries.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/15 via-[#8f00ff]/10 to-blue-900/10 border border-purple-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">Dominating Google Search Results Starts Here</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Partner with KSquareStudio. Let us implement a robust, data-backed SEO structure to drive qualified organic traffic, leads, and sales to your business.
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
          Consult Our Chennai SEO Experts
        </button>
      </div>
    </div>
  );
}

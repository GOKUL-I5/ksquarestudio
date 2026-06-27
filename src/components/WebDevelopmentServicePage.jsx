import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Cpu, Globe, Layout, ShieldAlert } from 'lucide-react';
import SEO from './SEO';
import './About.css'; // Leverage existing typographic and grid structures for consistency

export default function WebServicePage({ playTransition }) {
  const navigate = useNavigate();

  // Scroll to top of the page when loaded
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
        "name": "Web Design & Development",
        "item": window.location.href
      }
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <SEO
        title="Web Design & Development Company in Chennai | KSquareStudio"
        description="Looking for the best web design & development company in Chennai? KSquareStudio builds custom, high-performance, and SEO-optimized websites that scale your business."
        canonical={window.location.origin + "/services/web-development"}
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
          <li className="text-purple-300 font-medium" aria-current="page">Web Development</li>
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
          Core Expertise
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
          Web Design & Development Company in Chennai
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          At KSquareStudio, we construct performance-driven, custom-engineered digital systems.
          As the leading website development firm in Chennai, we bridge the gap between stunning visual aesthetics
          and high-performance backend technology.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* Main Body */}
        <section className="md:col-span-2 space-y-8 text-gray-300">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Globe size={24} className="text-[#a855f7]" />
              Custom Website Development Chennai
            </h2>
            <p className="leading-relaxed text-gray-300">
              Generic templates don't rank, nor do they engage your users. We deliver fully tailored website development Chennai startups and enterprises rely on to scale. From architecture setup to visual design, everything is crafted from the ground up to represent your brand's unique identity.
            </p>
            <p className="leading-relaxed text-gray-300">
              We leverage modern technology stacks—specializing in React, Vite, Node.js, and clean Tailwind CSS architectures. This ensures your website loads instantly, is resilient under high traffic, and provides responsive mobile-first layouts that adapt perfectly to any screen size.
            </p>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Cpu size={24} className="text-[#a855f7]" />
              Optimizing for Google Core Web Vitals
            </h2>
            <p className="leading-relaxed text-gray-300">
              In 2026, user experience and speed are direct ranking indicators. Google demands websites that achieve near-perfect performance. We build with optimization at the forefront:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Largest Contentful Paint (LCP):</strong> Preloaded critical assets, lightweight layouts, and responsive, compressed images to minimize load latency.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Cumulative Layout Shift (CLS):</strong> Declared dimensions on all visual elements and static layouts to prevent shifts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Interaction to Next Paint (INP):</strong> Highly optimized event listeners, lightweight frameworks, and async script loading to keep the interface highly responsive.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar Info Card */}
        <aside className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {["React 19", "Vite", "Tailwind CSS", "GSAP Animations", "Framer Motion", "Lenis Scroll", "HTML5 Semantics", "Node.js", "REST APIs", "JSON-LD Schemas"].map((tech) => (
                <span key={tech} className="bg-purple-900/20 border border-purple-500/30 text-purple-200 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Why KSquareStudio?</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Chennai Local Business Focus
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Clean, Commented Source Code
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                E-E-A-T Aligned Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                100/100 Core Web Vitals Focus
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Service FAQs Accordion */}
      <section className="glass p-6 md:p-8 rounded-2xl border border-white/5 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Layout size={24} className="text-[#a855f7]" />
          Web Development FAQs
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">How long does it take to develop a custom website?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Typically, a custom single-page portfolio or landing page takes 1 to 2 weeks, while more complex multi-page applications with CMS integration or specific API automation take 3 to 5 weeks.
            </p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">Do you provide maintenance and updates post-launch?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes, KSquareStudio provides complete maintenance plans, including page performance monitoring, Core Web Vital tracking, security patches, and structural schema modifications to align with search algorithms.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Will my website be mobile friendly?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Absolutely. We implement a mobile-first design strategy, ensuring that visual interfaces look premium, render clearly, and behave responsive-adaptively across laptops, tablets, and smartphone layouts.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/15 via-[#8f00ff]/10 to-blue-900/10 border border-purple-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">Ready to Build Your Digital Legacy?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Get in touch with KSquareStudio today. Let's create a custom, lightning-fast, and search-optimized website that drives tangible business growth.
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
          Consult Our Chennai Developers
        </button>
      </div>
    </div>
  );
}

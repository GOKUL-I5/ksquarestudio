import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Compass, Eye, Heart, Users } from 'lucide-react';
import SEO from './SEO';
import './About.css';

export default function UxServicePage({ playTransition }) {
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
        "name": "UI/UX Design",
        "item": window.location.href
      }
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <SEO 
        title="UI/UX Design Chennai | Best Digital Product Agency | KSquareStudio"
        description="Looking for expert UI/UX design in Chennai? KSquareStudio is a top digital product agency crafting custom, beautiful, and user-centric interfaces."
        canonical={window.location.origin + "/services/ui-ux"}
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
          <li className="text-purple-300 font-medium" aria-current="page">UI/UX Design</li>
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
          Design Excellence
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
          UI/UX Design Chennai
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          At KSquareStudio, we bridge human behavior and visual interfaces. We design user-centric solutions 
          that look premium, communicate complex ideas clearly, and drive maximum conversions.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Main Body */}
        <section className="md:col-span-2 space-y-8 text-gray-300">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Users size={24} className="text-[#a855f7]" />
              User-Centric Visual Design
            </h2>
            <p className="leading-relaxed text-gray-300">
              Great product experience is built on deep empathy. Our UI/UX design Chennai service starts by mapping user behaviors, analyzing target audiences, and identifying layout frictions. This thorough approach ensures every dashboard, application, or landing page is custom-built for real people.
            </p>
            <p className="leading-relaxed text-gray-300">
              We translate conceptual frameworks into functional, high-fidelity prototypes. Using glassmorphism aesthetics, dark mode design patterns, and harmonic typography, we build products that make your brand stand out in a saturated digital landscape.
            </p>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Compass size={24} className="text-[#a855f7]" />
              Our UX Methodology
            </h2>
            <p className="leading-relaxed text-gray-300">
              We structure our workflow into clear, iterative stages to ensure alignment with user requirements and business objectives:
            </p>
            <ul className="space-y-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="bg-purple-900/40 text-purple-300 font-bold px-2.5 py-0.5 rounded text-xs mt-1">1</span>
                <span><strong>Research & Discovery:</strong> Analyzing competitor benchmarks, conducting user interviews, and establishing user personas to discover key friction areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-900/40 text-purple-300 font-bold px-2.5 py-0.5 rounded text-xs mt-1">2</span>
                <span><strong>Wireframing & Prototyping:</strong> Creating low and high-fidelity structural layouts (Figma) to align user journeys and logic flows before writing any code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-purple-900/40 text-purple-300 font-bold px-2.5 py-0.5 rounded text-xs mt-1">3</span>
                <span><strong>UI Design & Micro-Interactions:</strong> Applying our signature visual style with responsive styling, subtle animations, hover effects, and compliant accessibility parameters.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar Info Card */}
        <aside className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Design Tooling</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe XD", "Prototyping", "Design Systems", "User Research", "Wireframing", "Micro-Interactions", "Mobile Responsive", "Accessibility", "A/B Testing"].map((tech) => (
                <span key={tech} className="bg-purple-900/20 border border-purple-500/30 text-purple-200 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Design Objectives</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Vibrant & Curved UI Layouts
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Accessibility & ARIA Compliant
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Seamless Micro-animations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Conversion Rate Optimization
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Service FAQs Accordion */}
      <section className="glass p-6 md:p-8 rounded-2xl border border-white/5 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Eye size={24} className="text-[#a855f7]" />
          UI/UX Design FAQs
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">What is the difference between UI and UX?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              UX (User Experience) focuses on the logical structure, functionality, and ease of navigation of the application, while UI (User Interface) focuses on the visual look, coloring, layout shifts, typography, and interactive aesthetic details.
            </p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">Do you create full Figma design files?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes, we create fully documented Figma design systems, wireframes, and high-fidelity interactive prototypes. These components are structured to allow a smooth handoff to your engineering team.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Can you redesign an existing digital product?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Absolutely. We perform heuristic evaluations of your existing website or application to identify friction points and redesign it to look premium, modern, and improve your overall conversion rate.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/15 via-[#8f00ff]/10 to-blue-900/10 border border-purple-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">Looking to Revamp Your Digital Experience?</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Contact KSquareStudio. Let's design an elegant, high-impact digital product that keeps your users engaged and delivers measurable business results.
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
          Consult Our Chennai Designers
        </button>
      </div>
    </div>
  );
}

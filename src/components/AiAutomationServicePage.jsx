import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Eye, Terminal } from 'lucide-react';
import SeoMetadataManager from './SeoMetadataManager';
import './About.css';

export default function AiAutomationServicePage({ playTransition }) {
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
        "name": "AI Automation",
        "item": window.location.href
      }
    ]
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-5xl mx-auto z-10">
      <SeoMetadataManager
        title="AI Automation Services | Workflow & Chatbot Systems | KSquareStudio"
        description="Streamline your workflows with premium AI automation services. KSquareStudio builds custom AI bots, automated data feeds, and API integrations."
        canonical={window.location.origin + "/services/ai-automation"}
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
          <li className="text-purple-300 font-medium" aria-current="page">AI Automation</li>
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
          Intelligent Systems
        </span>
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
          AI Automation Services
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
          At KSquareStudio, we make machine intelligence actionable. We integrate custom AI solutions,
          automated workflows, and natural language chatbots to drive operational efficiency.
        </p>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

        {/* Main Body */}
        <section className="md:col-span-2 space-y-8 text-gray-300">
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Cpu size={24} className="text-[#a855f7]" />
              Bespoke Workflow Automation
            </h2>
            <p className="leading-relaxed text-gray-300">
              Repetitive manual tasks limit your company's potential to scale. Our AI automation services focus on connecting core software databases with generative AI agents. This allows startups and businesses to automate customer intake, analyze documents, and generate content pipelines with zero manual overhead.
            </p>
            <p className="leading-relaxed text-gray-300">
              We focus on building resilient backend pipelines that connect custom databases and public APIs. By integrating smart agents and retrieval-augmented systems directly into your web applications, we build tools that act as virtual extensions of your team.
            </p>
          </div>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-purple-500/20 pb-3 flex items-center gap-2">
              <Terminal size={24} className="text-[#a855f7]" />
              AI Integration Stack
            </h2>
            <p className="leading-relaxed text-gray-300">
              We design and implement custom automations using industry-leading AI models and frameworks:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <Database size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Conversational Chatbots:</strong> Custom-trained customer support agents capable of answering enquiries, managing appointments, and directing leads 24/7.</span>
              </li>
              <li className="flex items-start gap-3">
                <Database size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>API & Database Connectors:</strong> Connecting systems like Stripe, Slack, Gmail, and Google Sheets to create unified automated workflows.</span>
              </li>
              <li className="flex items-start gap-3">
                <Database size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <span><strong>Structured Data Processing:</strong> Extracting and categorizing unstructured PDF and email data directly into searchable database systems.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sidebar Info Card */}
        <aside className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent">
            <h3 className="text-xl font-bold text-white mb-4">Automation Scope</h3>
            <div className="flex flex-wrap gap-2">
              {["AI Integrations", "Chatbot Design", "Workflow Triggers", "API Connections", "Data Extraction", "OpenAI / Claude", "Vector Databases", "LangChain", "Process Audits", "Custom Scripts"].map((tech) => (
                <span key={tech} className="bg-purple-900/20 border border-purple-500/30 text-purple-200 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5">
            <h3 className="text-xl font-bold text-white mb-4">Automation Goals</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                90% Reduction in Manual Tasks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                24/7 Instant Support Responses
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Zero Manual Data Entry Errors
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Scalable Cloud Infrastructure
              </li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Service FAQs Accordion */}
      <section className="glass p-6 md:p-8 rounded-2xl border border-white/5 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Eye size={24} className="text-[#a855f7]" />
          AI Automation FAQs
        </h2>
        <div className="space-y-4 text-gray-300">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">Can AI automation connect with my existing CRM database?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes. We build custom API connectors that integrate with CRMs (like HubSpot, Salesforce, or Airtable) to pull data, update client status, and trigger notification workflows.
            </p>
          </div>
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-semibold text-white mb-2">How secure is AI customer data handling?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Data security is our primary focus. We implement end-to-end encryption, respect GDPR and privacy regulations, and use official OpenAI or Claude API endpoints that do not train models on client data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Do you provide custom chatbot training?</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Yes, we set up retrieval-augmented generation (RAG) pipelines. This trains the AI chatbot on your specific company documents, product catalogs, and support guidelines to ensure highly accurate, contextual answers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-purple-900/15 via-[#8f00ff]/10 to-blue-900/10 border border-purple-500/20 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">Scale Your Operations Automatically</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Partner with KSquareStudio. Let's design and deploy custom AI automation systems to optimize your business workflows and maximize team efficiency.
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
          Consult Our AI Architects
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './LocalSeoFaq.css';
import { Plus } from 'lucide-react';

export default function LocalSeoFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes KSquareStudio the leading web design and development company in Chennai?",
      answer: "KSquareStudio is the premier digital product agency and web design company in Chennai, Tamil Nadu. We combine high-end dark-mode aesthetics, responsive glassmorphism, and performance-optimized clean code to build bespoke websites that load instantly, score 100/100 on Core Web Vitals, and dominate Google search results. Our Chennai-based experts craft custom digital experiences that turn raw traffic into enterprise-level growth."
    },
    {
      question: "What custom website development services do you offer to startups?",
      answer: "We offer end-to-end custom website development services tailored for startups and businesses. This includes React/Vite development, interactive UI/UX designs, comprehensive branding, and API/third-party software integrations. We build responsive and scalable single-page and multi-page web applications designed to load lightning fast, serving as a powerful engine for lead generation and brand authority."
    },
    {
      question: "How do your SEO services Chennai help scale search rankings?",
      answer: "Our SEO services in Chennai focus on the latest ranking factors including site speed, clean semantic HTML5, canonical structure, page-specific JSON-LD structured schemas, mobile friendliness, and strict Core Web Vitals optimization (LCP, CLS, INP). By executing precise local keyword strategies, we guarantee that Chennai startups, entrepreneurs, and enterprises rank on the first page of Google."
    },
    {
      question: "What is your UI/UX design process for digital products?",
      answer: "Our UI/UX design process centers on user research, wireframing, interactive prototyping, and beautiful, high-contrast visual styling. We design interfaces that are responsive, accessible (compliant with ARIA guidelines), and feature micro-interactions. Our designs maximize user retention and engagement, keeping clients hooked from the very first click."
    },
    {
      question: "Do you serve clients outside of Chennai, Tamil Nadu?",
      answer: "Yes! While we are proud to be a top web design and development company in Chennai, we serve startups, businesses, and enterprises globally. Our remote digital product agency structure allows us to collaborate seamlessly with partners worldwide while keeping our core engineering and creative hub based in Tamil Nadu, India."
    },
    {
      question: "How can AI automation services benefit my business?",
      answer: "Our AI automation services help businesses streamline workflows, integrate smart conversational chatbots, automate data entry, and use generative AI to optimize day-to-day operations. This reduces administrative overhead, enhances customer experience, and allows teams to focus on scaling creative and strategic initiatives."
    }
  ];

  // Inject FAQPage Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema-jsonld';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema-jsonld');
      if (existingScript) existingScript.remove();
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="localseo-faq-section">
      <div className="localseo-glow"></div>
      
      <div className="localseo-container">
        <div className="localseo-header">
          <div className="localseo-logo">
            <img src="/Logo full.png" alt="KSquareStudio Logo" />
          </div>
          <h2 className="localseo-title">FAQ & Local Presence</h2>
          <p className="localseo-subtitle">
            Answering your questions and establishing our local footprint in Chennai.
          </p>
        </div>

        <div className="localseo-grid">
          {/* FAQ Accordion */}
          <div className="faq-wrapper">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <Plus size={20} className="faq-toggle-icon" />
                  </button>
                  <div 
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    style={{ maxHeight: activeIndex === index ? '300px' : '0' }}
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Local SEO Details & Interactive Map representation */}
          <div className="localseo-sidebar-wrapper">
            <div>
              <h3 className="localseo-card-title">Chennai Office</h3>
              <div className="localseo-details-card">
                <div className="localseo-info-group">
                  <span className="localseo-info-label">Agency Address</span>
                  <span className="localseo-info-value">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
                
                <div className="localseo-info-group">
                  <span className="localseo-info-label">Contact Details</span>
                  <span className="localseo-info-value">
                    Phone: <a href="tel:7305962714" style={{ color: '#fff', textDecoration: 'underline' }}>7305962714</a><br />
                    Email: <a href="mailto:ksquarestudio2025@gmail.com" style={{ color: '#fff', textDecoration: 'underline' }}>ksquarestudio2025@gmail.com</a>
                  </span>
                </div>

                <div className="localseo-info-group">
                  <span className="localseo-info-label">Key Service Regions</span>
                  <div className="localseo-areas">
                    <span className="localseo-tag">Adyar</span>
                    <span className="localseo-tag">T. Nagar</span>
                    <span className="localseo-tag">Velachery</span>
                    <span className="localseo-tag">Guindy</span>
                    <span className="localseo-tag">OMR</span>
                    <span className="localseo-tag">Nungambakkam</span>
                    <span className="localseo-tag">ECR</span>
                  </div>
                </div>

                <div className="localseo-info-group">
                  <span className="localseo-info-label">Hours of Operation</span>
                  <span className="localseo-info-value">
                    Monday – Saturday: 9:00 AM – 7:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Gray/Dark stylized map indicating precise location coordinate focus */}
            <div className="localseo-map-container">
              <div className="localseo-map-overlay"></div>
              {/* Using a privacy-friendly OpenStreetMap/Google Maps embed configured to look dark/monochrome */}
              <iframe 
                title="KSquareStudio Chennai Office Location"
                className="localseo-map-embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88653935955!2d80.11713175892556!3d13.082680214691456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6a61a9911e2c6360!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="localseo-map-marker">
                <div className="marker-pin"></div>
                <div className="marker-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import './LocalPresenceAndFaq.css';
import { Plus } from 'lucide-react';

export default function LocalPresenceAndFaq() {
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
          <h2 className="localseo-title">Frequently Asked Questions</h2>
          <p className="localseo-subtitle">
            Answering your questions and clarifying our capabilities.
          </p>
        </div>

        <div className="localseo-grid-single">
          {/* FAQ Accordion */}
          <div className="faq-wrapper">
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
        </div>
      </div>
    </section>
  );
}

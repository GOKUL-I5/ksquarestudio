import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = ({ playTransition }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesList = [
    { id: '01', category: 'Service 1', title: 'Website Development', path: '/services/web-development' },
    { id: '02', category: 'Service 2', title: 'UI/UX Design', path: '/services/ui-ux' },
    { id: '03', category: 'Service 3', title: 'Graphic Design', path: '/services/branding-graphic-design' },
    { id: '04', category: 'Service 4', title: 'AI Automation', path: '/services/ai-automation' },
    { id: '05', category: 'Service 5', title: 'Presentation Design', path: '/services/branding-graphic-design' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin and reveal the left panel
      gsap.from(leftPanelRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6
      });

      // Stagger the right panel service rows horizontally inward
      gsap.from(".service-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        x: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleServiceClick = (path) => {
    if (playTransition) {
      playTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  return (
    <section id="services" ref={containerRef} className="services-section">
      <div className="services-container">
        
        {/* Left Side (Purple Gradient) */}
        <div ref={leftPanelRef} className="services-left">
          <div className="services-logo">
            <img src="/Logo full.png" alt="KSquareStudio Services Overview" />
          </div>
          <div className="services-left-content">
            <h2>Services</h2>
            <p>We Provide</p>
          </div>
        </div>

        {/* Right Side (Light) */}
        <div className="services-right">
          <div className="services-list">
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id} 
                className={`service-row ${hoveredIndex === index ? 'is-hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleServiceClick(service.path)}
                style={{ cursor: 'pointer' }}
                whileHover={{ x: 20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Background Sweep Layer */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="service-hover-bg"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0, originX: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </AnimatePresence>

                <div className="service-content-wrapper">
                  <div className="service-info">
                    <span className="service-category">{service.category}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>

                  <div className="service-action">
                    <div className={`service-number ${(index) % 2 === 0 ? 'purple-number' : 'black-number'}`}>
                      {service.id}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;

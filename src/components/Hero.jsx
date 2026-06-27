import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HeroSection.css";
import gsap from "gsap";
import SplitType from "split-type";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function HeroSection({ playTransition }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headingRef = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Premium GSAP Stagger Animations (Desktop Load)
    const ctx = gsap.context(() => {
      const text = new SplitType(headingRef.current, { types: 'words, chars' });

      gsap.from(text.chars, {
        opacity: 0,
        y: 40,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(".hero-background-bars div", {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "bottom center",
        stagger: 0.1,
        duration: 1.5,
        ease: "power3.inOut"
      });

      gsap.from(logoRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      });

      gsap.from(btnRef.current, {
        y: 30,
        scale: 0.9,
        duration: 1.2,
        delay: 0.8,
        ease: "back.out(1.7)"
      });
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (tabName) => {
    setActiveTab(tabName);
    setIsMenuOpen(false); // Close mobile menu if open
    
    const targetId = tabName.toLowerCase();
    
    const scrollAction = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Use auto scrolling when screen transition cover is active, smooth fallback
        targetElement.scrollIntoView({ 
          behavior: playTransition ? 'auto' : 'smooth', 
          block: 'start' 
        });
      }
    };

    if (location.pathname !== '/') {
      // If we are not on the homepage, route back to home first, then scroll
      if (playTransition) {
        playTransition(() => {
          navigate('/');
          setTimeout(scrollAction, 100);
        });
      } else {
        navigate('/');
        setTimeout(scrollAction, 100);
      }
    } else {
      // We are already on the homepage
      if (playTransition) {
        playTransition(scrollAction);
      } else {
        scrollAction();
      }
    }
  };

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: "none" },
    open: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div id="home" className="hero">
      
      {/* 7 Vertical Bars Background starting below the top text */}
      <div className="hero-background-bars">
        <div className="bar-1"></div>
        <div className="bar-2"></div>
        <div className="bar-3"></div>
        <div className="bar-4"></div>
        <div className="bar-5"></div>
        <div className="bar-6"></div>
        <div className="bar-7"></div>
      </div>
      
      {/* Black background for the top portion */}
      <div className="hero-bg-top"></div>
      <div className="center-glow"></div>

      {/* Navbar with Declarative Framer Motion Physics */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-container">
          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
             {isMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
          </button>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-nav">
            {navItems.map((tab, i) => (
              <motion.li
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => scrollToSection(tab)}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                whileHover={{ scale: 1.05, color: '#ccaaff' }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <ul className="mobile-nav-links">
              {navItems.map((tab) => (
                <li
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => scrollToSection(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="hero-content">
        <img 
          ref={logoRef}
          src="/Logo full.png" 
          alt="KSquareStudio Logo - Digital Product Agency Chennai" 
          className="logo-image" 
          fetchPriority="high"
        />

        <h1 ref={headingRef} style={{ perspective: "1000px" }}>
          Brand that turn your Digital <br />
          Dream into Reality
        </h1>

        <motion.button 
          ref={btnRef}
          className="hero-btn"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(123, 0, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('Contact')}
        >
          Get Started
        </motion.button>
      </div>

    </div>
  );
}
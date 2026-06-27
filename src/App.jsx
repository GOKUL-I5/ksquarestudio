import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Founder from './components/Founder';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleNetwork from './components/ParticleNetwork';
import PageTransition from './components/PageTransition';

// New Components
import LocalSeoFaq from './components/LocalSeoFaq';
import WebServicePage from './components/WebServicePage';
import UxServicePage from './components/UxServicePage';
import SeoServicePage from './components/SeoServicePage';
import GraphicServicePage from './components/GraphicServicePage';
import AiServicePage from './components/AiServicePage';
import SEO from './components/SEO';

// Scroll to top helper to trigger on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Subcomponent representing the homepage layout
function HomeView({ playTransition }) {
  return (
    <>
      <SEO 
        title="Web Design & Development Company in Chennai | KSquareStudio"
        description="KSquareStudio is a premier web design & development company in Chennai, delivering custom websites, UI/UX design, SEO, branding, and AI automation."
        canonical={window.location.origin + "/"}
      />
      <main>
        {/* We pass the transition trigger down to Hero for the nav links */}
        <Hero playTransition={playTransition} />
        <About />
        <Services playTransition={playTransition} />
        <Founder />
        <Projects />
        <LocalSeoFaq />
        <Contact />
      </main>
    </>
  );
}

function App() {
  const transitionRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis scroll engine
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Seamless snappable ease
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Cleanup 
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const triggerTransition = (cb) => {
    if (transitionRef.current) {
      transitionRef.current.playTransition(cb);
    } else if (cb) {
      cb();
    }
  };

  return (
    <div className="bg-[#050012] min-h-screen text-white font-sans selection:bg-purple-600 selection:text-white relative">
      <CustomCursor />
      
      {/* Volumetric Particle Network serving as endless depth backdrop */}
      <ParticleNetwork />
      
      {/* Cinematic Transition Overlay */}
      <PageTransition ref={transitionRef} />

      {/* Auto scroll reset on navigate */}
      <ScrollToTop />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomeView playTransition={triggerTransition} />} />
          <Route path="/services/web-development" element={<WebServicePage playTransition={triggerTransition} />} />
          <Route path="/services/ui-ux" element={<UxServicePage playTransition={triggerTransition} />} />
          <Route path="/services/seo" element={<SeoServicePage playTransition={triggerTransition} />} />
          <Route path="/services/branding-graphic-design" element={<GraphicServicePage playTransition={triggerTransition} />} />
          <Route path="/services/ai-automation" element={<AiServicePage playTransition={triggerTransition} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

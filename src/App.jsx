import React, { useEffect, useRef } from 'react';
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

function App() {
  const transitionRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis exactly once to seize viewport physics scrolling engine
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

    // Request animation frame recursion directly binding GSAP timeline data or native sync
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Hard cleanup 
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="bg-[#050012] min-h-screen text-white font-sans selection:bg-primary selection:text-white relative">
      <CustomCursor />
      
      {/* Volumetric Particle Network serving as endless depth backdrop */}
      <ParticleNetwork />
      
      {/* Cinematic Transition Overlay */}
      <PageTransition ref={transitionRef} />

      <div className="relative z-10">
        <main>
          {/* We pass the transition trigger down to Hero for the nav links */}
          <Hero playTransition={(cb) => transitionRef.current?.playTransition(cb)} />
          <About />
          <Services />
          <Founder />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

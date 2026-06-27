import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = new SplitType(textRef.current, { types: 'lines, words' });
      
      // Animate heading
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6 // Wait for curtains
      });

      // Animate words staggered
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        opacity: 0.1,
        stagger: 0.05,
        duration: 1,
        ease: "power2.out",
        delay: 0.7
      });

      // Animate background glow
      gsap.to(".about-glow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        scale: 1.5,
        rotate: 45
      });
      
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      
      {/* Background soft glow to enhance the gradient, now mapped to scroll scrub parallax */}
      <div className="about-glow"></div>

      <div className="about-container">
        <h2 className="about-heading">About</h2>
        
        <p ref={textRef} className="about-paragraph">
          At KSquareStudio, we don't just build websites or design logos; we create digital legacies. Born from a passion for clean lines, dark-mode aesthetics, and glassmorphism, our studio is a playground for innovation. We help brands evolve by stripping away the noise and focusing on high-impact, high-resolution storytelling.
        </p>
        
        <img ref={logoRef} src="/Logo full.png" alt="KSquareStudio Branding" className="about-logo" />
      </div>
    </section>
  );
};

export default About;

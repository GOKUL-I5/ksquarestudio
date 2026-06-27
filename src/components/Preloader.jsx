import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter simulation
      let progressValue = { val: 0 };
      
      gsap.to(progressValue, {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          setProgress(Math.floor(progressValue.val));
          gsap.set(progressBarRef.current, { width: `${progressValue.val}%` });
        },
        onComplete: () => {
          // Cinematic Slice Out Reveal
          const tl = gsap.timeline({ onComplete });
          
          tl.to(textRef.current, {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in"
          })
          .to(".preloader-slice-top", {
            yPercent: -100,
            duration: 0.8,
            ease: "expo.inOut"
          }, "-=0.2")
          .to(".preloader-slice-bottom", {
            yPercent: 100,
            duration: 0.8,
            ease: "expo.inOut"
          }, "<");
        }
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader-container">
      {/* Slices that open like sliding doors to reveal the site */}
      <div className="preloader-slice preloader-slice-top"></div>
      <div className="preloader-slice preloader-slice-bottom"></div>
      
      <div className="preloader-content" ref={textRef}>
        <div className="preloader-logo-wrapper">
            <h1 className="preloader-brand">KSquareStudio</h1>
        </div>
        <div className="preloader-percent">{progress}%</div>
        
        <div className="preloader-bar-bg">
          <div className="preloader-bar-fill" ref={progressBarRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

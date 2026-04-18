import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './ParticleNetwork.css';

const ParticleNetwork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grab all cinematic orbs
      const orbs = gsap.utils.toArray('.ambient-orb');
      
      orbs.forEach((orb) => {
        // Random organic floating physics routine
        gsap.to(orb, {
          x: `random(-150, 150, 10)`,
          y: `random(-150, 150, 10)`,
          rotation: `random(0, 360)`,
          scale: `random(0.8, 1.4)`,
          duration: `random(10, 20)`,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="particle-network-fixed">
      {/* 
        Colossal volumetric blurred spheres mapped to the absolute background Z-index.
        These will slowly breathe and mutate across the screen creating endless depth.
      */}
      <div className="ambient-orb orb-primary"></div>
      <div className="ambient-orb orb-secondary"></div>
      <div className="ambient-orb orb-accent"></div>
      <div className="ambient-orb orb-core"></div>
    </div>
  );
};

export default ParticleNetwork;

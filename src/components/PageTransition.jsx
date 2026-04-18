import React, { useImperativeHandle, forwardRef, useRef } from 'react';
import './PageTransition.css';
import gsap from 'gsap';

const PageTransition = forwardRef((props, ref) => {
    const containerRef = useRef(null);
    const barsRef = useRef([]);

    useImperativeHandle(ref, () => ({
        playTransition: (midpointCallback) => {
            const tl = gsap.timeline();

            // Reset bars position and show container
            tl.set(containerRef.current, { visibility: 'visible', pointerEvents: 'auto' });
            tl.set(barsRef.current, { scaleY: 0, transformOrigin: 'top' });

            // Animate bars down (Staircase)
            tl.to(barsRef.current, {
                scaleY: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power4.inOut'
            });

            // Mid-point: Screen is covered. Execute scroll.
            tl.add(() => {
                if (midpointCallback) midpointCallback();
            });

            // Small pause while covered
            tl.to({}, { duration: 0.2 });

            // Animate bars out (slide down further)
            tl.to(barsRef.current, {
                scaleY: 0,
                transformOrigin: 'bottom',
                duration: 0.5,
                stagger: 0.1,
                ease: 'power4.inOut'
            });

            // Hide container
            tl.set(containerRef.current, { visibility: 'hidden', pointerEvents: 'none' });

            return tl;
        }
    }));

    return (
        <div ref={containerRef} className="transition-container">
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i} 
                    ref={el => barsRef.current[i] = el} 
                    className="transition-bar"
                    style={{ backgroundColor: i % 2 === 0 ? '#7b00ff' : '#1a0033' }}
                />
            ))}
        </div>
    );
});

export default PageTransition;

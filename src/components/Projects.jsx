import React, { useEffect, useRef } from 'react';
import './Projects.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    const projects = [
        {
            id: 'formiqx',
            title: 'Formiqx',
            description: 'A Form with timer and export options.',
            color: '#ffb900', // Yellow
            link: 'https://formiqx.netlify.app/'
        },
        {
            id: 'certifiqx',
            title: 'Certifiqx',
            description: 'Custom bulk Certificate downloader and Sender.',
            color: '#0066ff', // Blue
            link: 'https://certifiqx.netlify.app/'
        },
        {
            id: 'notifiqx',
            title: 'Notifiqx',
            description: 'A digital Notice Board with RBCA controls',
            color: '#ff0000', // Red
            link: 'https://notifiqx.me/'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".projects-header", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: -30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });

            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 75%",
                },
                y: 100,
                opacity: 0,
                stagger: 0.2, // Elite stagger upward cascade
                duration: 1.2,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="projects-section">
            
            {/* Header Content */}
            <div className="projects-header">
                <div className="projects-logo">
                    <img 
                      src="/Logo full.png" 
                      alt="KSquareStudio Portfolio Showcase" 
                      loading="lazy"
                      width="150"
                      height="150"
                    />
                </div>
                <h2 className="projects-title">Projects</h2>
            </div>

            {/* Cards Grid */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <TiltCard 
                        className="project-card" 
                        key={project.id}
                    >
                        <div style={{ '--card-color': project.color, width: '100%', height: '100%' }}>
                            {/* The upper colored area */}
                        <div className="card-colored-top" style={{ backgroundColor: project.color }}>
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-desc">{project.description}</p>
                        </div>
                        
                        {/* The bottom split area containing Explore and the sweeping diagonal slope */}
                        <div className="card-bottom-split">
                            
                            <motion.div 
                                className="card-explore-area"
                                whileHover="hover"
                                initial="initial"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.open(project.link, '_blank')}
                            >
                                <motion.span 
                                    className="explore-text"
                                    variants={{
                                        initial: { color: '#000' },
                                        hover: { color: project.color }
                                    }}
                                >
                                    Explore
                                </motion.span>
                                <motion.div 
                                    className="explore-icon"
                                    variants={{
                                        initial: { x: 0, y: 0, color: '#000' },
                                        hover: { x: 5, y: -5, color: project.color }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <ArrowUpRight size={28} strokeWidth={3} color="currentColor" />
                                </motion.div>
                            </motion.div>

                            <div className="card-slope-area">
                                <svg width="100%" height="100%" viewBox="0 0 150 100" preserveAspectRatio="none" style={{ display: 'block' }}>
                                    <polygon 
                                        points="0,0 150,0 150,100" 
                                        fill={project.color}
                                    />
                                </svg>
                            </div>

                        </div>
                        </div>
                    </TiltCard>
                ))}
            </div>
            
        </section>
    );
};

export default Projects;

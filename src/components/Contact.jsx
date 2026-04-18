import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwbA5FhcNUfEZZNzG6KkvHKny8dKRYJBva8laJA_UHz2nSq5idfx5R6JJnAOEfZ8yh6/exec";

const Contact = () => {
    const containerRef = useRef(null);
    const formCardRef = useRef(null);
    const watermarkRef = useRef(null);
    const infoRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        enquiry: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax massive watermark
            gsap.to(watermarkRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
                y: -150,
                ease: "none"
            });

            // Float up the entire contact card orchestrating its entrance
            gsap.from(formCardRef.current, {
                scrollTrigger: {
                    trigger: formCardRef.current,
                    start: "top 95%",
                },
                y: 150,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });

            // Stagger form field entrances
            gsap.from(".form-group", {
                scrollTrigger: {
                    trigger: formCardRef.current,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5
            });

            // Animate Info Sidebar
            gsap.from(".contact-info-item", {
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top 90%",
                },
                x: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                delay: 0.8
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;

        setStatus('submitting');

        try {
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('email', formData.email);
            params.append('enquiry', formData.enquiry);

            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params
            });

            setStatus('success');
            setFormData({ name: '', email: '', enquiry: '' });
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" ref={containerRef} className="contact-section">
            
            {/* The Massive translucent vertical watermark text */}
            <div ref={watermarkRef} className="contact-watermark">
                contact
            </div>

            <div className="contact-container">
                {/* Logo Area */}
                <div className="contact-header">
                    <img src="/Logo full.png" alt="K2 KSquare Studio" className="contact-logo" />
                </div>

                <div className="contact-grid">
                    {/* Form Card */}
                    <div ref={formCardRef} className="contact-form-wrapper">
                        <TiltCard className="contact-card">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        className="success-view"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div className="success-icon-wrapper">
                                            <CheckCircle size={80} color="#7b00ff" />
                                        </div>
                                        <h2 className="success-title">Message Sent!</h2>
                                        <p className="success-desc">
                                            Thank you for reaching out. <br />
                                            Our team will get back to you shortly.
                                        </p>
                                        <button 
                                            className="reset-btn"
                                            onClick={() => setStatus('idle')}
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        key="form"
                                        className="contact-form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                className="form-input" 
                                                placeholder="Enter your name"
                                                required 
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                className="form-input" 
                                                placeholder="Enter your email"
                                                required 
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group form-group-grow">
                                            <label htmlFor="enquiry" className="form-label">Enquiry About</label>
                                            <textarea 
                                                id="enquiry" 
                                                className="form-textarea" 
                                                placeholder="What would you like to discuss?"
                                                required
                                                value={formData.enquiry}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <div className="form-submit-wrapper">
                                            <motion.button 
                                                type="submit" 
                                                className={`form-submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                                                disabled={status === 'submitting'}
                                                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(123, 0, 255, 0.4)" }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {status === 'submitting' ? (
                                                    <>
                                                        <Loader2 className="spinner" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send size={18} />
                                                        Submit
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                        {status === 'error' && (
                                            <p className="error-text">Something went wrong. Please try again.</p>
                                        )}
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </TiltCard>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div ref={infoRef} className="contact-info-sidebar">
                        <div className="contact-info-content">
                            <h2 className="info-title">Let's Connect</h2>
                            <p className="info-subtitle">Have a project in mind? reach out directly and let's build something legacy-worthy.</p>
                            
                            <div className="contact-info-items">
                                <motion.a 
                                    href="tel:7305962714" 
                                    className="contact-info-item"
                                    whileHover={{ x: 10, color: '#fff' }}
                                >
                                    <div className="info-icon-box">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-text-box">
                                        <span className="info-label">Call Us</span>
                                        <span className="info-value">7305962714</span>
                                    </div>
                                </motion.a>

                                <motion.a 
                                    href="mailto:ksquarestudio2025@gmail.com" 
                                    className="contact-info-item"
                                    whileHover={{ x: 10, color: '#fff' }}
                                >
                                    <div className="info-icon-box">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-text-box">
                                        <span className="info-label">Email Us</span>
                                        <span className="info-value">ksquarestudio2025@gmail.com</span>
                                    </div>
                                </motion.a>

                                <div className="contact-info-item">
                                    <div className="info-icon-box">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-text-box">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">Remote / Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Contact;

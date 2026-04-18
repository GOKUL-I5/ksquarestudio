import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder-section">
      <div className="founder-logo">
        <img src="/Logo full.png" alt="K² Studios Branding" />
      </div>

      <div className="founder-container">

        {/* Left Side Founder Portrait */}
        <div className="founder-image-wrapper">
          <img src="/person bw.png" alt="Karthik krishnan GS - Founder of K² Studios" className="founder-portrait" />
        </div>

        {/* Right Side Quote */}
        <div className="founder-quote-wrapper">
          <span className="quote-mark open-quote">“</span>
          <h2 className="quote-text">
            <span style={{ whiteSpace: 'nowrap' }}>In the depth of simplicity, we</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>find the clarity to <span className="highlight-dark">build</span> what</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>others can only <span className="highlight-dark">imagine.</span></span>
          </h2>
          <span className="quote-mark close-quote">”</span>

          <div className="founder-author">
            <h3 className="author-name">Karthik krishnan GS</h3>
            <p className="author-role">Founder, K² Studios</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;

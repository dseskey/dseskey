import React from 'react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onDownloadResume: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, onDownloadResume }) => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-image">
          <div className="placeholder-image">DS</div>
        </div>
        <h1 className="hero-title">Daniel Seskey</h1>
        <p className="hero-subtitle">Senior Software Engineer & Technical Leader</p>
        <p className="hero-description">
          Passionate software engineer with 10+ years of experience building scalable web applications, 
          leading engineering teams, and delivering innovative solutions that drive business growth.
        </p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={() => onNavigate('portfolio')}>View My Work</button>
          <button className="resume-button" onClick={onDownloadResume}>Download Resume</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
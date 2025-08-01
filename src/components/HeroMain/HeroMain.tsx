import React from 'react';
import './HeroMain.css';

const HeroMain: React.FC = () => {
  return (
    <div className="hero-main">
      <div className="hero-background">
        <div className="hero-image-backdrop fade-to-bottom"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title minisonFont dropShadow">NOISELESS</h1>
        <h2 className="hero-subtitle-1 minisonFont dropShadow">3D Artist</h2>
        <h3 className="hero-subtitle-2 minisonFont dropShadow">Creating Digital Experiences</h3>

        {/* <div className="hero-text minisonFont dropShadow">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae ab animi numquam rem laboriosam?   dicta voluptatibus ex totam, libero, eos similique ut blanditiis!</p>
        </div> */}
      </div>
    </div>
  );
};

export default HeroMain;

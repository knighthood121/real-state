import React, { useEffect } from 'react'
import './Header.css'
import heroImage from '../asets/first.jpeg'

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const heroImg = document.querySelector('.hero-image img');
      const heroContainer = document.querySelector('.hero-image');
      
      if (heroImg && heroContainer) {
        const rect = heroContainer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how far the image is from the center of the viewport
        const distanceFromCenter = Math.abs((rect.top + rect.height / 2) - (viewportHeight / 2));
        const maxDistance = viewportHeight;
        
        // Calculate scale factor - starts at 1.2 and scales down to 1.0
        // This creates an "inner zoom" effect as you scroll
        const minScale = 1.0;
        const maxScale = 1.2;
        const scale = maxScale - (Math.min(1, distanceFromCenter / maxDistance) * (maxScale - minScale));
        
        // Apply the transform with easing
        heroImg.style.transform = `scale(${scale})`;
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="#" className="nav-link">Projects</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Pricing</a>
          </div>
          
          <div className="logo">
            <h1>Arcadium</h1>
          </div>
          
          <div className="nav-right">
            <a href="#" className="nav-link">FAQ</a>
            <a href="#" className="nav-link">Testimonials</a>
            <a href="#" className="nav-link">Clients</a>
            <a href="#" className="contact-btn">CONTACT</a>
          </div>
        </div>
      </nav>
      
      <div className="hero-section">
        <div className="hero-content">
          <h3 className="hero-title">Timeless Design That<br />Shapes a New Tomorrow</h3>
        </div>
        <div className="hero-text">
          <p>At core, design is about more than art, it's about envisioning the future.</p>
          <a href="#" className="learn-more">LEARN MORE<span className="arrow">→</span></a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </header>
  )
}

export default Header
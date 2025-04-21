import React from 'react'
import './services.css'

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <span className="services-label">+ SERVICES</span>
        <h1 className="services-title">Tailored services, unique spaces</h1>
        <p className="services-subtitle">See how we can help you achieve your goals.</p>
      </div>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon expand-icon"></i>
          </div>
          <h2 className="service-title">Full Service</h2>
          <p className="service-description">
            Comprehensive design solutions for residential and commercial spaces,
            from concept to finish.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon cube-icon"></i>
          </div>
          <h2 className="service-title">3D Visuals</h2>
          <p className="service-description">
            Realistic 3D visualizations to help you envision your space before it's build
            in real life.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon color-icon"></i>
          </div>
          <h2 className="service-title">Color Selection</h2>
          <p className="service-description">
            Professional guidance on color schemes, materials, and finishes to bring
            your vision to life.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon project-icon"></i>
          </div>
          <h2 className="service-title">Project Management</h2>
          <p className="service-description">
            Seamless coordination with contractors, vendors, and trades to ensure
            timely project delivery.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon sourcing-icon"></i>
          </div>
          <h2 className="service-title">Custom Sourcing</h2>
          <p className="service-description">
            Handpicked furniture, decor, and accessories tailored to match your style
            and budget.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="service-icon planning-icon"></i>
          </div>
          <h2 className="service-title">Space Planning</h2>
          <p className="service-description">
            Expert space planning to maximize functionality and flow in any room or
            office environment.
          </p>
          <a href="#" className="learn-more-link">
            LEARN MORE <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Services

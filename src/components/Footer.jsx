import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-company">
          <div className="copyright">
            <p>© Arcadium Template</p>
          </div>
          <p className="company-info">
            Designed and developed by <a href="https://toms-design.com" className="footer-link">Toms Design</a> | Powered by <a href="https://webflow.com" className="footer-link">Webflow</a>
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Pages</h3>
          <nav className="footer-nav">
            <a href="/" className="footer-link">Home</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Admin</h3>
          <nav className="footer-nav">
            <a href="/style-guide" className="footer-link">Style Guide</a>
            <a href="/licensing" className="footer-link">Licensing</a>
            <a href="/change-log" className="footer-link">Change Log</a>
            <a href="/password" className="footer-link">Password</a>
            <a href="/404" className="footer-link">404</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Social</h3>
          <nav className="footer-nav">
            <a href="https://instagram.com" className="footer-link">Instagram</a>
            <a href="https://facebook.com" className="footer-link">Facebook</a>
            <a href="https://youtube.com" className="footer-link">Youtube</a>
            <a href="https://linkedin.com" className="footer-link">Linkedin</a>
            <a href="https://twitter.com" className="footer-link">X</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <nav className="footer-nav">
            <a href="tel:+0042429821" className="footer-link">+00 42429821</a>
            <a href="mailto:info@arcadium.io" className="footer-link">info@arcadium.io</a>
            <a href="/templates" className="footer-link">All Templates</a>
          </nav>
        </div>
      </div>
      
      <div className="footer-logo">
        <a href="/" className="logo-link">
          <h1 className="logo-text">Arcadium</h1>
        </a>
      </div>
    </footer>
  )
}

export default Footer
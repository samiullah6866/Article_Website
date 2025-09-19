import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'News Categories',
      links: [
        'Breaking News',
        'Politics',
        'Sports',
        'Technology',
        'Business',
        'Entertainment',
        'Health',
        'Science'
      ]
    },
    {
      title: 'Company',
      links: [
        'About Us',
        'Contact',
        'Careers',
        'Press',
        'Advertise',
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Newsletter',
        'RSS Feeds',
        'Mobile Apps',
        'API Access',
        'Media Kit',
        'Archives',
        'Sitemap',
        'Help Center'
      ]
    },
    {
      title: 'Follow Us',
      links: [
        'Facebook',
        'Twitter',
        'Instagram',
        'LinkedIn',
        'YouTube',
        'TikTok',
        'Pinterest',
        'Reddit'
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-mag">MAG</span>
              <span className="logo-news">NEWS</span>
            </Link>
            <p className="footer-description">
              Your trusted source for breaking news, in-depth analysis, and comprehensive coverage 
              of world events. Stay informed with our 24/7 news service.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon facebook">f</a>
              <a href="#" className="social-icon twitter">t</a>
              <a href="#" className="social-icon instagram">i</a>
              <a href="#" className="social-icon linkedin">in</a>
              <a href="#" className="social-icon youtube">y</a>
            </div>
          </div>
          
          <div className="footer-sections">
            {footerSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; {currentYear} MAGNEWS. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
              <a href="#" className="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

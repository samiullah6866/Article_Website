import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
    { name: 'Entertainment', path: '/entertainment' },
    { name: 'Business', path: '#' },
    { name: 'Travel', path: '#' },
    { name: 'Life Style', path: '#' },
    { name: 'Video', path: '#' },
    { name: 'Features', path: '#' }
  ];

  const socialIcons = [
    { name: 'facebook', icon: 'f' },
    { name: 'twitter', icon: 'y' },
    { name: 'pinterest', icon: 'p' },
    { name: 'vimeo', icon: 'v' },
    { name: 'youtube', icon: 'o' }
  ];

  return (
    <header className="header">
      {/* Top Utility Bar */}
      <div className="utility-bar">
        <div className="utility-content">
          <div className="moving-text">
            <span>News & Entertain</span>
            <span>News & Entertain</span>
            <span>News & Entertain</span>
          </div>
        </div>
      </div>

      {/* Logo and Ad Section */}
      <div className="logo-ad-section">
        <div className="logo-ad-content">
                      <div className="logo-section">
                        <Link to="/" className="logo">
                          <span className="logo-mag">MAG</span>
                          <span className="logo-news">NEWS</span>
                        </Link>
                      </div>
          <div className="ad-banner">
            <div className="ad-text">
              <span className="ad-main">NEW! YOU CAN NOW BLOG ON</span>
              <span className="ad-sub">HARNEWS TEMPLATE</span>
            </div>
            <button className="download-btn">DOWNLOAD</button>
          </div>
        </div>
      </div>

      {/* Main Navigation with Search */}
      <nav className="main-nav">
                  <div className="nav-content">
                    {navigationItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => setActiveCategory(item.name)}
                      >
                        {item.name}
                        <span className="dropdown-arrow">▼</span>
                      </Link>
                    ))}
          <div className="nav-search">
            <input 
              type="text" 
              placeholder="Search" 
              className="nav-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="nav-search-btn" onClick={handleSearch}>
              <span className="nav-search-icon">🔍</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const trendingTopics = [
    { rank: 1, topic: 'Qatar Security Alert', tweets: '125K' },
    { rank: 2, topic: 'Cricket World Cup 2024', tweets: '98K' },
    { rank: 3, topic: 'AI Medical Breakthrough', tweets: '87K' },
    { rank: 4, topic: 'Climate Change Bill', tweets: '76K' },
    { rank: 5, topic: 'Oil Price Surge', tweets: '65K' },
    { rank: 6, topic: 'FIFA World Cup 2026', tweets: '54K' },
    { rank: 7, topic: 'Hollywood Awards', tweets: '43K' },
    { rank: 8, topic: 'Global Markets', tweets: '32K' },
    { rank: 9, topic: 'Tech Giants', tweets: '28K' },
    { rank: 10, topic: 'Entertainment News', tweets: '21K' }
  ];

  const quickNews = [
    {
      title: 'Breaking: New Security Measures Announced',
      time: '1 hour ago',
      category: 'Breaking'
    },
    {
      title: 'Cricket: India Wins T20 Series',
      time: '3 hours ago',
      category: 'Sports'
    },
    {
      title: 'Tech: AI Revolution Continues',
      time: '5 hours ago',
      category: 'Technology'
    },
    {
      title: 'Politics: Climate Bill Passes',
      time: '7 hours ago',
      category: 'Politics'
    },
    {
      title: 'Economy: Market Recovery Expected',
      time: '9 hours ago',
      category: 'Economy'
    }
  ];

  const weatherData = {
    location: 'New York, NY',
    temperature: '58°F',
    condition: 'Partly Cloudy',
    high: '62°F',
    low: '54°F',
    humidity: '65%',
    wind: '8 mph'
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Weather Widget */}
        <div className="weather-widget">
          <h3 className="widget-title">Weather</h3>
          <div className="weather-info">
            <div className="weather-main">
              <span className="weather-location">{weatherData.location}</span>
              <span className="weather-temp">{weatherData.temperature}</span>
              <span className="weather-condition">{weatherData.condition}</span>
            </div>
            <div className="weather-details">
              <div className="weather-item">
                <span>High</span>
                <span>{weatherData.high}</span>
              </div>
              <div className="weather-item">
                <span>Low</span>
                <span>{weatherData.low}</span>
              </div>
              <div className="weather-item">
                <span>Humidity</span>
                <span>{weatherData.humidity}</span>
              </div>
              <div className="weather-item">
                <span>Wind</span>
                <span>{weatherData.wind}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="trending-widget">
          <h3 className="widget-title">Trending Now</h3>
          <div className="trending-list">
            {trendingTopics.map((item, index) => (
              <div key={index} className="trending-item">
                <span className="trending-rank">{item.rank}</span>
                <div className="trending-content">
                  <span className="trending-topic">{item.topic}</span>
                  <span className="trending-tweets">{item.tweets} tweets</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick News */}
        <div className="quick-news-widget">
          <h3 className="widget-title">Quick News</h3>
          <div className="quick-news-list">
            {quickNews.map((news, index) => (
              <div key={index} className="quick-news-item">
                <div className="quick-news-content">
                  <span className="quick-news-category">{news.category}</span>
                  <span className="quick-news-title">{news.title}</span>
                  <span className="quick-news-time">{news.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-widget">
          <h3 className="widget-title">Stay Updated</h3>
          <div className="newsletter-content">
            <p>Get the latest news delivered to your inbox</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-widget">
          <h3 className="widget-title">Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link facebook">Facebook</a>
            <a href="#" className="social-link twitter">Twitter</a>
            <a href="#" className="social-link instagram">Instagram</a>
            <a href="#" className="social-link linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

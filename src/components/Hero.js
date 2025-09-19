import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update date daily
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 24 * 60 * 60 * 1000); // Update every 24 hours

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Daily articles - Current news with colorful images
  const dailyArticles = [
    {
      id: 1,
      category: 'Breaking News',
      title: 'Qatar Attack: Security Forces Respond to Multiple Incidents in Doha',
      author: 'Ahmed Al-Rashid',
      date: 'Dec 19',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhdJ4K8l4J-YepbvkNwZbE1wUEFirwxmsAA&s',
      featured: true,
      color: '#E53E3E'
    },
    {
      id: 2,
      category: 'Cricket',
      title: 'India vs Australia: Rohit Sharma Leads India to Victory in T20 Series',
      author: 'Rajesh Kumar',
      date: 'Dec 19',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=300&h=200&fit=crop&sat=120&contrast=110',
      featured: false,
      color: '#38A169'
    },
    {
      id: 3,
      category: 'Politics',
      title: 'US Congress Passes Historic Climate Change Bill with Bipartisan Support',
      author: 'Jennifer Martinez',
      date: 'Dec 19',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a89e?w=300&h=200&fit=crop&sat=110&contrast=115',
      featured: false,
      color: '#3182CE'
    },
    {
      id: 4,
      category: 'Technology',
      title: 'OpenAI Releases GPT-5: Revolutionary AI Model Shows Human-Level Reasoning',
      author: 'David Chen',
      date: 'Dec 19',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop&sat=130&contrast=125',
      featured: false,
      color: '#805AD5'
    }
  ];

  // Additional current news articles with colorful images
  const additionalArticles = [
    {
      id: 5,
      category: 'Sports',
      title: 'FIFA World Cup 2026: Qatar Prepares for Next Tournament After Security Review',
      author: 'Mohammed Al-Thani',
      date: 'Dec 19',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop&sat=115&contrast=120',
      featured: false,
      color: '#D69E2E'
    },
    {
      id: 6,
      category: 'International',
      title: 'Global Markets React to Middle East Tensions: Oil Prices Surge 15%',
      author: 'Sarah Williams',
      date: 'Dec 19',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop&sat=125&contrast=130',
      featured: false,
      color: '#E53E3E'
    }
  ];

  const featuredArticle = dailyArticles.find(article => article.featured);
  const otherArticles = [...dailyArticles.filter(article => !article.featured), ...additionalArticles];

  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-grid">
          {/* Featured Article - Large */}
          <div className="featured-article">
            <div className="article-image">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
              <div className="article-overlay">
                <div className="article-category" style={{ backgroundColor: featuredArticle.color }}>
                  {featuredArticle.category}
                </div>
                <div className="article-content">
                  <h3 className="article-title">{featuredArticle.title}</h3>
                  <div className="article-meta">
                    <span className="article-author">{featuredArticle.author}</span>
                    <span className="article-date">- {featuredArticle.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Articles - Grid */}
          <div className="other-articles">
            {otherArticles.slice(0, 3).map((article, index) => (
              <div key={article.id} className="article-card">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-overlay">
                    <div className="article-category" style={{ backgroundColor: article.color }}>
                      {article.category}
                    </div>
                    <div className="article-content">
                      <h4 className="article-title">{article.title}</h4>
                      <div className="article-meta">
                        <span className="article-author">{article.author}</span>
                        <span className="article-date">- {article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Articles Row */}
        <div className="additional-articles">
          <h3 className="section-title">More Breaking News</h3>
          <div className="articles-row">
            {otherArticles.slice(3).map((article, index) => (
              <div key={article.id} className="article-card-small">
                <div className="article-image">
                  <img src={article.image} alt={article.title} />
                  <div className="article-overlay">
                    <div className="article-category" style={{ backgroundColor: article.color }}>
                      {article.category}
                    </div>
                    <div className="article-content">
                      <h4 className="article-title">{article.title}</h4>
                      <div className="article-meta">
                        <span className="article-author">{article.author}</span>
                        <span className="article-date">- {article.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

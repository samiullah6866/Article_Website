import React, { useState } from 'react';
import './EntertainmentPage.css';

const EntertainmentPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const entertainmentCategories = [
    'All', 'Movies', 'TV Shows', 'Music', 'Celebrities', 'Gaming', 'Books', 'Events'
  ];

  const entertainmentArticles = [
    {
      id: 1,
      title: 'Hollywood Awards Season Kicks Off with Stunning Red Carpet Events',
      excerpt: 'The entertainment industry celebrates another year of outstanding performances and groundbreaking films with glamorous award ceremonies across Los Angeles.',
      author: 'Emma Thompson',
      time: '2 hours ago',
      category: 'Movies',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=400&fit=crop&sat=140&contrast=135',
      featured: true
    },
    {
      id: 2,
      title: 'Taylor Swift Announces World Tour 2024 with Surprise Album Release',
      excerpt: 'Pop superstar Taylor Swift has announced her biggest world tour yet, spanning 50 cities across 6 continents, alongside a surprise album drop.',
      author: 'Jessica Parker',
      time: '4 hours ago',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&sat=130&contrast=125',
      featured: false
    },
    {
      id: 3,
      title: 'Netflix Original Series Breaks Streaming Records Worldwide',
      excerpt: 'The latest Netflix thriller has become the most-watched series in the platform\'s history, with over 100 million views in its first week.',
      author: 'Michael Chen',
      time: '6 hours ago',
      category: 'TV Shows',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=400&fit=crop&sat=135&contrast=130',
      featured: false
    },
    {
      id: 4,
      title: 'Gaming Industry Hits $200 Billion Revenue Milestone',
      excerpt: 'The global gaming industry has reached unprecedented heights, with mobile gaming leading the charge and esports continuing its explosive growth.',
      author: 'Alex Rodriguez',
      time: '8 hours ago',
      category: 'Gaming',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&sat=140&contrast=135',
      featured: false
    },
    {
      id: 5,
      title: 'Celebrity Couple Announces Engagement After Secret Romance',
      excerpt: 'Hollywood\'s hottest couple has finally confirmed their engagement after months of speculation, sharing the news on social media with millions of fans.',
      author: 'Sarah Johnson',
      time: '10 hours ago',
      category: 'Celebrities',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop&sat=125&contrast=130',
      featured: false
    },
    {
      id: 6,
      title: 'Best-Selling Author Releases Highly Anticipated Novel',
      excerpt: 'The acclaimed author\'s latest work has already topped bestseller lists worldwide, with critics calling it a masterpiece of contemporary literature.',
      author: 'David Miller',
      time: '12 hours ago',
      category: 'Books',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&sat=120&contrast=125',
      featured: false
    },
    {
      id: 7,
      title: 'Coachella 2024 Lineup Revealed with Surprise Headliners',
      excerpt: 'The iconic music festival has announced its 2024 lineup, featuring a mix of legendary artists and rising stars across multiple genres.',
      author: 'Lisa Wang',
      time: '14 hours ago',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop&sat=130&contrast=135',
      featured: false
    },
    {
      id: 8,
      title: 'Marvel Studios Announces Phase 5 Movie Slate',
      excerpt: 'The superhero franchise has unveiled its ambitious Phase 5 plans, including new characters, storylines, and crossovers that will reshape the MCU.',
      author: 'Robert Kim',
      time: '16 hours ago',
      category: 'Movies',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&h=400&fit=crop&sat=140&contrast=135',
      featured: false
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? entertainmentArticles 
    : entertainmentArticles.filter(article => article.category === activeCategory);

  const featuredArticle = entertainmentArticles.find(article => article.featured);

  return (
    <div className="entertainment-page">
      <div className="entertainment-page-container">
        {/* Page Header */}
        <div className="entertainment-page-header">
          <h1>Entertainment</h1>
          <p>Discover the latest in movies, music, TV shows, and celebrity news</p>
        </div>

        {/* Category Filter */}
        <div className="entertainment-category-filter">
          {entertainmentCategories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === 'All' && (
          <div className="featured-entertainment-section">
            <h2>Featured Story</h2>
            <div className="featured-article-card">
              <div className="featured-article-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <div className="featured-article-overlay">
                  <div className={`article-category-badge category-${featuredArticle.category.toLowerCase().replace(' ', '')}`}>{featuredArticle.category}</div>
                  <h3 className="featured-article-title">{featuredArticle.title}</h3>
                  <p className="featured-article-excerpt">{featuredArticle.excerpt}</p>
                  <div className="featured-article-meta">
                    <span className="article-author">{featuredArticle.author}</span>
                    <span className="article-time">{featuredArticle.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Entertainment Grid */}
        <div className="entertainment-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="entertainment-article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className={`article-category-badge category-${article.category.toLowerCase().replace(' ', '')}`}>{article.category}</div>
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span className="article-author">{article.author}</span>
                  <span className="article-time">{article.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntertainmentPage;

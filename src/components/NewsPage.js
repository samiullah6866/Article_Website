import React, { useState } from 'react';
import './NewsPage.css';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const newsCategories = [
    'All', 'Breaking', 'Politics', 'World', 'Business', 'Technology', 'Health', 'Sports'
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Qatar Security Update: Authorities Confirm Multiple Arrests Made',
      excerpt: 'Security forces in Doha have made significant progress in their investigation following yesterday\'s incidents. Multiple suspects have been apprehended and are currently being questioned.',
      author: 'Ahmed Al-Rashid',
      time: '2 hours ago',
      category: 'Breaking',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&sat=120&contrast=125',
      featured: true
    },
    {
      id: 2,
      title: 'US Congress Passes Historic Climate Change Legislation',
      excerpt: 'In a landmark decision, the US Congress has approved the most comprehensive climate change bill in history, allocating $370 billion for clean energy initiatives.',
      author: 'Jennifer Martinez',
      time: '4 hours ago',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a89e?w=600&h=400&fit=crop&sat=125&contrast=130',
      featured: false
    },
    {
      id: 3,
      title: 'Global Markets React to Middle East Tensions',
      excerpt: 'Oil prices have surged 15% following recent security incidents, affecting global markets worldwide. Analysts predict continued volatility in the coming weeks.',
      author: 'Sarah Williams',
      time: '6 hours ago',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&sat=135&contrast=140',
      featured: false
    },
    {
      id: 4,
      title: 'Tech Giants Announce Major AI Breakthrough in Medical Diagnosis',
      excerpt: 'Leading technology companies have unveiled new AI systems capable of detecting diseases with 99% accuracy, potentially revolutionizing healthcare worldwide.',
      author: 'David Chen',
      time: '8 hours ago',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&sat=140&contrast=135',
      featured: false
    },
    {
      id: 5,
      title: 'New Study Reveals Breakthrough in Cancer Treatment',
      excerpt: 'Researchers have discovered a new immunotherapy approach that shows promising results in treating aggressive forms of cancer, offering hope to millions of patients.',
      author: 'Dr. Maria Rodriguez',
      time: '10 hours ago',
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&sat=130&contrast=125',
      featured: false
    },
    {
      id: 6,
      title: 'FIFA World Cup 2026: Qatar Prepares for Next Tournament',
      excerpt: 'Qatar officials announce enhanced security measures and infrastructure improvements for the upcoming tournament, ensuring a safe and memorable experience.',
      author: 'Mohammed Al-Thani',
      time: '12 hours ago',
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop&sat=130&contrast=125',
      featured: false
    },
    {
      id: 7,
      title: 'European Union Announces New Economic Recovery Plan',
      excerpt: 'The EU has unveiled a comprehensive €750 billion recovery fund to help member states rebuild their economies post-pandemic and invest in green technologies.',
      author: 'Elena Kowalski',
      time: '14 hours ago',
      category: 'World',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&sat=120&contrast=130',
      featured: false
    },
    {
      id: 8,
      title: 'SpaceX Successfully Launches Mars Mission',
      excerpt: 'Elon Musk\'s SpaceX has successfully launched its most ambitious Mars mission yet, carrying advanced rovers and scientific equipment to the red planet.',
      author: 'Alex Thompson',
      time: '16 hours ago',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&sat=140&contrast=135',
      featured: false
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const otherArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="news-page">
      <div className="news-page-container">
        {/* Page Header */}
        <div className="news-page-header">
          <h1>Latest News</h1>
          <p>Stay informed with the most recent developments from around the world</p>
        </div>

        {/* Category Filter */}
        <div className="news-category-filter">
          {newsCategories.map((category) => (
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
          <div className="featured-news-section">
            <h2>Featured Story</h2>
            <div className="featured-article-card">
              <div className="featured-article-image">
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <div className="featured-article-overlay">
                  <div className={`article-category-badge category-${featuredArticle.category.toLowerCase()}`}>{featuredArticle.category}</div>
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

        {/* News Grid */}
        <div className="news-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="news-article-card">
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className={`article-category-badge category-${article.category.toLowerCase()}`}>{article.category}</div>
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

export default NewsPage;

import React from 'react';
import './NewsSection.css';

const NewsSection = () => {
  const newsCategories = [
    {
      title: 'Latest News',
      articles: [
        {
          id: 1,
          title: 'Qatar Security Update: Authorities Confirm Multiple Arrests Made',
          excerpt: 'Security forces in Doha have made significant progress in their investigation following yesterday\'s incidents...',
          author: 'Ahmed Al-Rashid',
          time: '2 hours ago',
          category: 'Breaking',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&sat=120&contrast=125'
        },
        {
          id: 2,
          title: 'Cricket World Cup 2024: India Defeats Australia in Thrilling Final',
          excerpt: 'Rohit Sharma\'s brilliant century led India to a historic victory over Australia in the T20 World Cup final...',
          author: 'Rajesh Kumar',
          time: '4 hours ago',
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=250&fit=crop&sat=130&contrast=120'
        },
        {
          id: 3,
          title: 'Tech Giants Announce Major AI Breakthrough in Medical Diagnosis',
          excerpt: 'Leading technology companies have unveiled new AI systems capable of detecting diseases with 99% accuracy...',
          author: 'David Chen',
          time: '6 hours ago',
          category: 'Technology',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&sat=140&contrast=135'
        }
      ]
    },
    {
      title: 'Politics & World Affairs',
      articles: [
        {
          id: 4,
          title: 'US Congress Passes Historic Climate Change Legislation',
          excerpt: 'In a landmark decision, the US Congress has approved the most comprehensive climate change bill in history...',
          author: 'Jennifer Martinez',
          time: '8 hours ago',
          category: 'Politics',
          image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a89e?w=400&h=250&fit=crop&sat=125&contrast=130'
        },
        {
          id: 5,
          title: 'Global Markets React to Middle East Tensions',
          excerpt: 'Oil prices have surged 15% following recent security incidents, affecting global markets worldwide...',
          author: 'Sarah Williams',
          time: '10 hours ago',
          category: 'Economy',
          image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&sat=135&contrast=140'
        }
      ]
    },
    {
      title: 'Sports & Entertainment',
      articles: [
        {
          id: 6,
          title: 'FIFA World Cup 2026: Qatar Prepares for Next Tournament',
          excerpt: 'Qatar officials announce enhanced security measures and infrastructure improvements for the upcoming tournament...',
          author: 'Mohammed Al-Thani',
          time: '12 hours ago',
          category: 'Sports',
          image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=250&fit=crop&sat=130&contrast=125'
        },
        {
          id: 7,
          title: 'Hollywood Awards Season Kicks Off with Stunning Red Carpet Events',
          excerpt: 'The entertainment industry celebrates another year of outstanding performances and groundbreaking films...',
          author: 'Emma Thompson',
          time: '14 hours ago',
          category: 'Entertainment',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=250&fit=crop&sat=140&contrast=135'
        }
      ]
    }
  ];

  return (
    <section className="news-section">
      <div className="news-container">
        {newsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="news-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="articles-grid">
              {category.articles.map((article, articleIndex) => (
                <article key={article.id} className="news-article">
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                    <div className="article-category-badge">{article.category}</div>
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
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

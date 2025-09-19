import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="article-card">
      <div className="article-image">
        <img src={article.image} alt={article.title} />
        <div className="article-category">{article.category}</div>
      </div>
      <div className="article-content">
        <h3 className="article-title">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <div className="article-author">
            <span className="author-name">{article.author}</span>
            <span className="article-date">{formatDate(article.date)}</span>
          </div>
          <div className="article-read-time">{article.readTime}</div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;


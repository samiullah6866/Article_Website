import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="container">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="article-detail">
      <div className="container">
        <div className="article-header">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Article</span>
          </div>
          
          <div className="article-meta">
            <span className="category">{article.category}</span>
            <span className="read-time">{article.readTime}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          <p className="article-excerpt">{article.excerpt}</p>
          
          <div className="article-author-info">
            <div className="author-details">
              <span className="author-name">By {article.author}</span>
              <span className="publish-date">{formatDate(article.date)}</span>
            </div>
          </div>
        </div>

        <div className="article-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div className="article-content">
          <div 
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="article-footer">
          <div className="share-buttons">
            <h4>Share this article:</h4>
            <div className="share-links">
              <a href="#" className="share-btn twitter">Twitter</a>
              <a href="#" className="share-btn facebook">Facebook</a>
              <a href="#" className="share-btn linkedin">LinkedIn</a>
            </div>
          </div>
          
          <div className="back-to-home">
            <Link to="/" className="btn btn-secondary">← Back to Articles</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;


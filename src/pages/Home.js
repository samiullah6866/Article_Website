import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="hero">
          <h1>Welcome to Article Hub</h1>
          <p>Discover the latest insights, tutorials, and best practices in web development and technology.</p>
        </section>

        <section className="featured-articles">
          <h2>Latest Articles</h2>
          <div className="articles-grid">
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest articles and updates.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;


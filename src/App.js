import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import NewsPage from './components/NewsPage';
import EntertainmentPage from './components/EntertainmentPage';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="main-content">
                <div className="content-wrapper">
                  <NewsSection />
                  <Sidebar />
                </div>
              </div>
            </>
          } />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


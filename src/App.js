import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import CarListings from './components/CarListings';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import NewsSection from './components/NewsSection';
import AppDownload from './components/AppDownload';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <SearchForm />
      <CarListings />
      <BrandLogos />
      <NewsSection />
      <AppDownload />
      <Footer />
      {showCookieBanner && (
        <CookieBanner onClose={() => setShowCookieBanner(false)} />
      )}
    </div>
  );
}

export default App;
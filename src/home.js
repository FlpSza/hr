// src/pages/Home.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      {/* Cabeçalho */}
      <Header />

      {/* Seção Hero (Carrossel) */}
      <HeroSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default Home;

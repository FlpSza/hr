// src/pages/Home.js
import React from 'react';
import HeroSection from './components/HeroSection';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - MBR</title>
        <meta name="description" content="Descrição da página inicial da sua empresa." />
        <meta property="og:image" content="/path-to-home-image.jpg" />
      </Helmet>
      {/* Cabeçalho */}
      {/* <Header /> */}

      {/* Seção Hero (Carrossel) */}
      <HeroSection />

      {/* Rodapé */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

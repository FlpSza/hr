import React from 'react';
import '../style/HeroSection.css'; // Arquivo de estilo CSS opcional

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <h2>Bem-vindo à Nossa Landing Page</h2>
      <p>Descubra nossos produtos e serviços.</p>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button>Saiba Mais</button>
    </section>
  );
};

export default HeroSection;

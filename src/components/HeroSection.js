// src/components/HeroSection.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Caso ainda não tenha importado o Bootstrap
import '../style/HeroSection.css'; // Estilo personalizado

const HeroSection = () => {
  return (
    <body>
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/1200x500" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/1200x500" className="d-block w-100" alt="Second slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </a>
    </div>

      <div className="text-center my-5 sectionDois">
      <h5>Reciclar, valorizar a vida</h5>
      <h5>AQUI PRESERVAMOS O MEIO AMBIENTE</h5>
      <p>A MBR está equipada para o tratamento de óleos e gorduras vegetais e os resíduos gerados pelo processo de reciclagem, garantindo 100% de aproveitamento. As coletas são feitas em estabelecimentos comerciais: restaurantes, padarias, cozinhas industriais, indústrias alimentícias, residências, além de pontos de coletas distribuídos em supermercados em toda Baixada Santista. O óleo tratado é enviado para a indústria de biodiesel.</p>
    </div>

    <div className="video-container text-center">
      <iframe
        width="860"
        height="630"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </body>
  );
};

export default HeroSection;

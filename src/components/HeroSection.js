import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap
import '../style/HeroSection.css'; // Estilo personalizado
import banner1 from '../img/banner1.png';
import banner2 from '../img/banner2.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Second slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
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
          src="https://www.youtube.com/embed/Pafsuc3S6OI?si=ac4Nmhgb8QwScMtT"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className='porquereciclar'> 
        <h4>POR QUE RECICLAR?</h4>
        <p>Ajude a melhorar nosso planeta</p>
        <div className='image-gallery'>
          <div className='image-item'>
            <img src='https://amda.org.br/wp-content/uploads/2023/12/2013.02.04_oleo_de_cozinha.jpg' alt='Óleo de Cozinha' className='imgOleo'/>
            <hr />
            <h3>Você sabia?</h3>
            <p>Que 1 litro de óleo pode poluir 1 milhão de litros de água</p>
          </div>
          <div className='image-item'>
            <img src='https://cdn.vnda.com.br/bracci/2023/09/26/08_46_58_965_8_9_1_175_b09006c_fechado.jpg?v=1695728821' alt='Imagem 2' className='imgOleo'/>
            <hr />
            <h3>O óleo jogado no ralo</h3>
            <p>Pode entupir os encanamentos e a caixa de gordura</p>
          </div>
          <div className='image-item'>
            <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/2367511-homem-bebendo-agua-com-os-olhos-fechados-apos-exercicios-gratis-vetor.jpg' alt='Imagem 3' className='imgOleo'/>
            <hr />
            <h3>1 MILHÃO DE LITROS DE ÁGUA</h3>
            <p>Equivale ao consumo de uma pessoa de 14 anos</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <div className="info-container text-center">
          <h2>SOBRE A MBR</h2>
          <p>Especializada na coleta e reciclagem.</p>
        </div>
        <div className="info-container">
          <div className="info-content">
            <h1>Aqui preservamos o meio ambiente</h1>
            <p>A MBR está equipada para o tratamento de óleos e gorduras vegetais e os resíduos gerados pelo processo de reciclagem, garantindo 100% de aproveitamento. As coletas são feitas em estabelecimentos comerciais: restaurantes, padarias, cozinhas industriais, indústrias alimentícias, residências, além de pontos de coletas distribuídos em supermercados em toda Baixada Santista. O óleo tratado é enviado para a indústria de biodiesel.</p>
            <div className="circle">
              <div className="circle-content">
                <span className="circle-text">100%</span>
              </div>
              <div className="circle-description">
                <h6>MISSÃO</h6>
                <p>Conscientizar a população sobre a necessidade de preservar o meio ambiente e a água.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='cuideDaNat'>
        <h3>Cuide da Natureza</h3>
        <p>Pequenas ações hoje vão garantir grandes resultados no futuro.</p>

        <div className='image-gallery'>
          <div className='image-item'>
            <img src='https://www.biolitoral.com.br/imagens/cuidar-meio-ambiente.png' alt='Imagem 1' className='img-circle' />
            <h6>CUIDAR DO MEIO AMBIENTE</h6>
            <hr />
            <p>Preservar é qualidade de vida.</p>
          </div>
          <div className='image-item'>
            <img src='https://www.biolitoral.com.br/imagens/cuide-futuro.png' alt='Imagem 2' className='img-circle' />
            <h6>CUIDE DO FUTURO</h6>
            <hr />
            <p>O futuro é o “hoje”.</p>
          </div>
          <div className='image-item'>
            <img src='https://www.biolitoral.com.br/imagens/pequenos-gestos.png' alt='Imagem 3' className='img-circle' />
            <h6>PEQUENOS GESTOS</h6>
            <hr />
            <p>Geram grandes resultados.</p>
          </div>
          <div className='image-item'>
            <img src='https://www.biolitoral.com.br/imagens/reciclar.png' alt='Imagem 4' className='img-circle' />
            <h6>RECICLAR</h6>
            <hr />
            <p>Esse é o caminho</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

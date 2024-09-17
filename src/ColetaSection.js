import React from 'react';
import processo1 from './img/processo1.png'
import './style/ColetaSection.css'; // Estilo personalizado
import img1 from './img/porque-reciclar.png'
import { Helmet } from 'react-helmet';
import processo2 from './img/processo2.png'
import processo3 from './img/processo3.png'

const ColetaSection = () => {
  return (
    <div className="coleta-section">
      <Helmet>
        <title>Coleta - MBR</title>
        <meta name="description" content="Descrição da página inicial da sua empresa." />
        <meta property="og:image" content="./img/logo_mbr.png" />
      </Helmet>
      {/* Título e introdução */}
      <section className="intro-coleta">
        <h4>Nosso Serviço de Coleta</h4>
        <hr />
      </section>

      {/* Texto grande e imagem ao lado */}
      <section className="text-image-section">
        <div className="text-content">
          <p>
          As coletas são feitas em estabelecimentos comerciais como restaurantes, padarias, cozinhas industriais, indústrias alimentícias, residências, além de pontos de coletas distribuídos em supermercados em toda Rio de Janeiro, Espirito Santo e Volta Redonda. Este serviço não tem custo para os estabelecimentos e certifica que o mesmo não está prejudicando o meio ambiente.<br/>
<br/>
A MBR é uma empresa estruturada e toda a coleta é realizada por colaboradores uniformizados e com crachá de identificação, e a frota é identificada também. É disponibilizado um recipiente para o óleo vegetal e a retirada do resíduo é feita conforme a necessidade, podendo ser semanal, quinzenal ou mensal.<br></br>
<br/>
Precisamos conscientizar a população a respeito do meio ambiente. Óleo e gordura vegetal não se dissolvem o que torna um problema para rios, lagos e represas. A gordura também interfere negativamente no tratamento de esgoto, contaminando o lençol freático ou atingindo a superfície. Estimativas indicam que apenas 10% do óleo usado no mundo é tratado e reaproveitado como matéria-prima para a confecção de produtos como o Biodiesel e, é com isso que a Biolitoral se compromete. Em resumo reciclar é reaproveitar, reutilizar.
          </p>
        </div>
        <div className="image-content">
          <img src={img1} alt="Processo de Coleta" />
        </div>
      </section>

      {/* Texto adicional abaixo da imagem e do texto */}
      <section className="additional-text">
        <p>
        Portanto produzir materiais reciclados significa que utilizaremos menos recursos naturais da Terra, teremos um menor consumo de energia, menos lixos e uma redução na poluição, além do fato de que a indústria da reciclagem gera emprego e riqueza para o Brasil.
        </p>
      </section>

      {/* Título e três imagens lado a lado */}
      <section className="image-section">
        <h1>Como funciona o Processo de Coleta</h1>
        <hr className='image-section-hr'/>
        <div className="three-images">
          <img src={processo1} alt="Imagem 1" />
          {/* <img src={processo2} alt="Imagem 2" />
          <img src={processo3} alt="Imagem 3" /> */}
        </div>
      </section>
    </div>
  );
};

export default ColetaSection;

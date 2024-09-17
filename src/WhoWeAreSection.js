import React from 'react';
import { Helmet } from 'react-helmet';
import './style/WhoWeAreSection.css'; // Estilo personalizado
import img from './img/LOGO2.png'

const WhoWeAreSection = () => {
  return (
    <div className="who-we-are-page">
      <Helmet>
        <title>Quem somos - MBR</title>
        <meta name="description" content="Descrição da página inicial da sua empresa." />
        <meta property="og:image" content="./img/logo_mbr.png" />
      </Helmet>
      <section className="identifypage">
        <h4>Conheça nossa empresa</h4>
        <hr />
      </section>

      <section className="who-we-are-content">
        {/* Primeira linha - Texto e Imagem */}
        <div className="row">
          <div className="text-box">
            <p>
              Fundada há 25 anos e sendo pioneira no mercado a MBR, tem como princípio o conceito de sustentabilidade e respeito ao meio ambiente. A MBR é especializada na coleta e reciclagem de óleos e gorduras vegetais.
              Mais do que reciclar, eles trabalham para conscientizar a população sobre a necessidade de preservar o meio ambiente e principalmente a água, um bem tão precioso.
            </p>
          </div>
          <div className="image-box">
            <img src={img} alt="Nossa equipe" className="team-photo" />
          </div>
        </div>

        {/* Segunda linha - Dois textos */}
        <div className="row">
          <div className="text-box">
            <h4>MISSÃO</h4>
            <br/>
            <p>
              A MBR está equipada e estruturada adequadamente para o tratamento de óleos e gorduras vegetais e os resíduos gerados pelo processo de reciclagem, garantindo 100% de aproveitamento.
            </p>
          </div>
          <div className="text-box">
            <h4>VALORES</h4>
            <br/>
            <p>
              Com agilidade e atendimento diferenciados, oferecemos soluções práticas e inteligentes para parceiros e clientes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAreSection;

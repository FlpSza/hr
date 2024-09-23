import React from 'react';
import { Helmet } from 'react-helmet';
import './style/ContactSection.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Helmet>
        <title>Contato - MBR</title>
        <meta name="description" content="Descrição da página inicial da sua empresa." />
        <meta property="og:image" content="./img/logo_mbr.png" />
      </Helmet>
      <h1>Entre em Contato Conosco</h1>
      <div className="contact-container">
        {/* Formulário de Contato */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" placeholder="Seu nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" placeholder="Seu telefone" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="4" placeholder="Sua mensagem" required></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Informações de Contato e Mapa */}
        <div className="contact-info">
          <h3>Informações de Contato</h3>
          <p><strong>Endereço:</strong> Rua Honduras, 25 - Penha, RJ</p>
          <p>(21) 99965-0670</p>
          <p>(21) 96841-1741</p>
          <p>3654-3128</p>
          <p><strong>E-mail:</strong> contato@mbroleovegetal.com</p>

          <div className="google-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.147527041172!2d-43.277721799999995!3d-22.8340308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bbd8c4f51fd%3A0x4d9704f45ecf2e3!2sR.%20Honduras%2C%2025%20-%20Penha%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021020-210!5e0!3m2!1spt-BR!2sbr!4v1726581961225!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

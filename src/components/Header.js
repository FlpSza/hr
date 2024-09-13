import React from 'react';
import '../style/Header.css'; // Arquivo de estilo CSS opcional
import logo from '../img/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <p className='endereco'>Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
        <div className="social">
          <a rel="nofollow" className="social-icons" href="mailto:ofellipe2023@gmail.com" target="_blank" title="Envie um E-mail">
            <i className="fa fa-envelope fa-x3"></i>
          </a>
          <a rel="nofollow" className="social-icons" href="https://www.facebook.com/" target="_blank" title="Visite nossa página no Facebook">
            <i className="fa fa-facebook fa-x3"></i>
          </a>
          <p>(21) 99999-9999</p>
          <p>(21) 11111-1111</p>
          <p>(21) 22222-2222</p>
        </div>

      </div>
      <div className="main-header">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>nome da empresa</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Quem somos</a></li>
            <li><a href="#coleta-oleo">Coleta de óleo</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#info">Informações</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

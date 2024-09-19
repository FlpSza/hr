import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'; // Arquivo de estilo CSS opcional
import logo from '../img/logo_mbr.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="top-bar">
        <p className='endereco'>
          <i className="fa fa-map-marker"></i> Rua Honduras, 25 - Penha, RJ
        </p> 
        <div className="social">
          <a rel="nofollow" className="social-icons" href="mailto:ofellipe2023@gmail.com" target="_blank" title="Envie um E-mail">
            <i className="fa fa-envelope fa-x3"></i>
          </a>
          <a rel="nofollow" className="social-icons" href="https://www.facebook.com/" target="_blank" title="Visite nossa página no Facebook">
            <i className="fa fa-facebook fa-x3"></i>
          </a>
          <p>(21) 99965-0670</p>
          <p>(21) 96841-1741</p>
          <p>3654-3128 </p>
        </div>
      </div>
      
      <div className="main-header">
        <img src={logo} alt="Logo" className="header-logo" />
        
        {/* Ícone do menu hamburger */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        
        {/* Menu de navegação condicional */}
        <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><a href="/coleta">Coleta</a></li>
            <li><a href="/info">Informações</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

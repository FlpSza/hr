import React, { useState, useEffect } from 'react';
import '../style/Footer.css'; // Estilo personalizado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true); // Sempre exibir o Footer

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= fullHeight - 50) {
          setIsVisible(true); // Exibe o Footer
        } else {
          setIsVisible(false); // Esconde o Footer
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-email">
          {/* <FontAwesomeIcon icon={faEnvelope} />
          <p>contato@empresa.com</p> */}
        </div>
        <p>© 2024 Mbr II Comércio de Materiais Recicláveis LTDA. Todos os direitos reservados.</p>
        <p className="watermark">Desenvolvido por <a href="https://www.linkedin.com/in/fellipesouza" target="_blank" rel="noopener noreferrer">Fellipe Souza</a></p>
      </div>
    </footer>
  );
};

export default Footer;

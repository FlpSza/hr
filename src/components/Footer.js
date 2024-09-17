import React, { useState, useEffect } from 'react';
import '../style/Footer.css'; // Estilo personalizado
// Se estiver usando Font Awesome ou outro pacote de ícones, importe aqui
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= fullHeight - 50) {
          setIsVisible(true);  // Exibe o Footer
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
    <>
      {isVisible && (
        <footer className="footer">
          <div className="container">
            <p>© 2024 Mbr II Comercio de Materiais Recicláveis LTDA. Todos os direitos reservados.</p>
            {/* Marca d'água */}
            <p className="watermark">Desenvolvido por <a>Fellipe Souza</a></p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

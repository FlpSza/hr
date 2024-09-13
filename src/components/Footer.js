import React, { useState, useEffect } from 'react';
import '../style/Footer.css'; // Estilo personalizado

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      // Limpa o timeout para evitar múltiplas chamadas
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        // Verifica se o usuário chegou ao final da página (com uma pequena margem)
        if (scrollTop + windowHeight >= fullHeight - 50) {
          setIsVisible(true);  // Exibe o Footer
        } else {
          setIsVisible(false); // Esconde o Footer
        }
      }, 100); // Atraso de 100ms para evitar múltiplas verificações rápidas
    };

    // Adiciona o event listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId); // Limpa o timeout
    };
  }, []);

  return (
    <>
      {isVisible && (
        <footer className="footer">
          <div className="container">
            <p>© 2024 Mbr II Comercio de Materiais Reciclaveis LTDA. Todos os direitos reservados.</p>
            <p>@</p>
            {/* <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="mailto:email@empresa.com">E-mail</a>
            </div> */}
            
          </div>

        </footer>
      )}
    </>
  );
};

export default Footer;

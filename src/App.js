// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home'; // Importa a página Home
import WhoWeAre from './WhoWeAreSection'; // A nova página
import Header from './components/Header';
import Footer from './components/Footer';
import ColetaSection from './ColetaSection';
import ContatoSection from './ContactSection';
import InfoSection from './InfoSection';


const App = () => {
  return (
    <Router>
      <div>
        {/* Cabeçalho */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<WhoWeAre />} />
          <Route path="/coleta" element= {<ColetaSection/>}/>
          <Route path="/contato" element= {<ContatoSection/>}/>
          <Route path="/info" element= {<InfoSection/>}/>
          {/* Outras rotas */}
        </Routes>

        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

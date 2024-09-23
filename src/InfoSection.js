import React, { useState } from "react";
import './style/info.css'; // Estilo personalizado
import ColetaOleo from './img/pic2.jpeg';
import ColetaGarrafa from './img/pic3.jpeg';
import OleoUsado from './img/pic4.jpeg';
import Descarte from './img/pic15.jpeg';
import ColetaOleoVegetal from './img/coleta-oleo-vegetal-usado-01.jpg'
import post5 from './img/pic8.jpeg'
import post6 from './img/pic13.jpeg'
import { Helmet } from 'react-helmet';

const InfoSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "Coleta de Óleo",
      image: ColetaOleo,
      description: "Informações sobre a coleta de óleo.",
      content: {
        header1: "A REALIZAÇÃO DA COLETA DE ÓLEO COZINHA",
        paragraphs1: [
          "A coleta de oleo cozinha feita por empresa especializada é essencial para o material seja destinado corretamente. Tanto cozinhas residenciais quanto estabelecimentos comerciais podem possuir alto uso de óleo para fritura, sendo que este resíduo, quando descartado de forma imprópria, causa sérios danos ao meio ambiente.",
          "Além disso, o atendimento para o serviço de coleta de oleo cozinha é feito em até 3 dias úteis após o contato de solicitação. E as empresas especializadas, como a MBR, fornecem ponto de coleta ou trabalham com equipe coletora que vai até o cliente."
        ],
        header2: "VANTAGENS OFERECIDAS PELO SERVIÇO DE COLETA DE ÓLEO COZINHA",
        paragraphs2: [
          "Uma das grandes vantagens que a coleta de oleo cozinha oferece é que não há quantidade mínima para o recebimento do material no ponto de coleta da empresa, isso permite que o cliente se desfaça do óleo utilizado com a periodicidade que for mais conveniente.",
          "Ademais, se tratando de coleta por parte da empresa, após agendamento prévio uma equipe se desloca até o cliente e realiza a retirada. Nesse caso, a quantidade mínima é de 10 litros de óleo somente na baixada santista, podendo chegar em cerca de 40 toneladas dependendo de sua localização, em caso de clientes com grande geração do resíduo.",
          "Além disso, a coleta é vantajosa financeiramente, pois o cliente pode optar por receber o pagamento em dinheiro, pelo óleo fornecido ou em produtos de limpeza. Outras vantagens que a coleta de oleo cozinha oferece são:",
          "• emissão de certificado de destinação final do óleo;",
          "• atendimento feito por profissionais treinados;",
          "• análise do óleo na frente do cliente e emissão do resultado;",
          "• pagamento feito no ato da análise.",
          "Dessa forma, os serviços de coleta são extremamente benéficos para todos os tipos de clientes, pois recebem pagamento em produtos de limpeza ou em dinheiro, por um material que não possui mais utilidade e que seria descartado de forma incorreta."
        ],
        header3: "MELHOR EMPRESA DE COLETA DE OLEO COZINHA",
        paragraphs3: [
          "A empresa MBR começou a atividade de coleta de oleo cozinha em 2008 e, desde então, oferece o melhor atendimento em São Paulo, Guarulhos, Ribeirão Preto e região. Além disso, a companhia conta com a maior estrutura de coleta e possui maquinários especializados para o tratamento e decantação."
        ],
        header4: "PARA SABER MAIS SOBRE A COLETA DE OLEO DE COZINHA",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ]
      }
    },
    {
      id: 2,
      title: "Coleta de Garrafa de Óleo Usado",
      image: ColetaGarrafa,
      description: "Informações sobre a coleta de garrafas.",
      content: {
        header1: "VANTAGENS DA COLETA DE OLEO DE COZINHA USADO EM CONDOMINIO",
        paragraphs1: [
          "Em um condomínio residencial ou corporativo, as atitudes sustentáveis conseguem gerar um impacto expressivo para preservação do meio ambiente. A reunião de esforços dos condôminos proporciona ótimos resultados. Uma iniciativa interessante é a coleta de oleo de cozinha usado em condominio, feita para garantir o descarte adequado desse resíduo.",
          "Apenas 1 litro de óleo pode poluir 1 milhão de litros de água. Por isso, a destinação adequada do resíduo é fundamental para evitar a poluição do meio ambiente, principalmente dos lençóis freáticos, rios, lagos e da água do mar.",
          "Além disso, quando descartado pelo ralo, o óleo pode entupir o encanamento e lotar a caixa de gordura do esgoto do condomínio. Isso gera gastos expressivos de manutenção e, assim, impacta a conta da taxa condominial.",
          "A coleta de oleo de cozinha usado em condominio é feita por empresas especializadas, como a MBR. Esse trabalho protege o meio ambiente, minimiza gastos com manutenção e também evita a aplicação de pesadas multas ambientais.",
          "O descarte inadequado de óleo usado é punido pela legislação ambiental, especialmente para empresas e indústrias. Por isso, a destinação correta do óleo usado é tão importante, a aplicação das melhores práticas garante o sucesso desse trabalho."
        ],
        header2: "A REALIZAÇÃO DA COLETA DE OLEO DE COZINHA USADO EM CONDOMINIO",
        paragraphs2: [
          "A coleta de oleo de cozinha usado em condominio é feita em diferentes etapas, que incluem:",
          "• reunião do material em garrafas pet ou recipientes específicos;",
          "• coleta pela MBR;",
          "• transporte até a sede de tratamento;",
          "• análise, tratamento e armazenagem;",
          "• destinação para reuso do óleo pela indústria de biodiesel;",
          "• fornecimento do certificado de destinação do resíduo.",
          "Dessa forma, a partir da coleta de oleo de cozinha usado em condominio, é assegurada a destinação correta desse resíduo."
        ],
        header3: "A MBR REALIZA A COLETA DE OLEO DE COZINHA USADO EM CONDOMINIO",
        paragraphs3 : [
          "A MBR é a empresa mais qualificada para realizar a coleta de oleo de cozinha usado em condominio. A região de coleta da empresa inclui condomínios localizados na grande São Paulo e no litoral paulista, onde mantém uma ampla e moderna sede de tratamento do óleo de cozinha usado.",
          "Fundada em 2008, a MBR é uma empresa que estimula a conscientização ambiental e atua para minimizar o impacto do descarte de óleos e gorduras vegetais. A empresa é licenciada pela CETESB e IBAMA para o serviço, garantindo confiabilidade em todas as etapas."
        ],
        header4: "Para saber mais sobre Coleta de oleo cozinha",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ] 
      }
    },
    {
      id: 3,
      title: "Coleta de óleo vegetal usado",
      image: ColetaOleoVegetal,
      description: "Informações sobre a coleta de óleo vegetal usado.",
      content: {
        header1: "IMPORTÂNCIA DA COLETA DE OLEO VEGETAL USADO",
        paragraphs1: ["A coleta de oleo vegetal usado é essencial para evitar uma série de problemas ambientais e até para evitar entupimento de encanamentos quando o descarte é feito incorretamente. O serviço de coleta garante o destino adequado ao material usado em fritura de alimentos, pois faz uma análise do óleo e depois realiza processo de tratamento e decantação.",
          "Além disso, a coleta de oleo vegetal usado é indispensável em caso de empresas e estabelecimentos, pois existe legislação municipal que requer a destinação correta para o material, o que evita multa e problemas de licenças.",
          "Dessa forma, a contratação do serviço de coleta é de grande importância a todos os tipos de clientes. Por isso, a empresa MBR oferece mão de obra qualificada e conta com estrutura adequada para efetuar o serviço. O pagamento pelo óleo fornecido pelo cliente pode ser feito em dinheiro ou produtos de limpeza."
        ],
        header2: "PRINCIPAIS CARACTERÍSTICAS DA COLETA DE OLEO VEGETAL USADO",
        paragraphs2: ["Após o cliente utilizar o óleo vegetal, ele pode se dirigir à sede da empresa e realizar a entrega do material. Nesse caso, não existe quantidade mínima para a coleta de oleo vegetal usado, o que é uma grande vantagem para empresas de porte menor ou clientes residenciais.",
          "Ademais, a empresa disponibiliza serviço de coleta fora da sede. Nesse caso, há quantidade mínima de 10 litros para a prestação do serviço, podendo chegar em volumes de aproximadamente 30 toneladas.",
          "O processo de coleta ocorre com os seguintes passos:",
          "• entrega ou retirada do óleo;",
          "• análise do material na frente do cliente;",
          "• emissão do resultado da análise;",
          "• pagamento no momento da análise;",
          "• fornecimento de certificação de destinação final do material.",
          "Dessa forma, a coleta de oleo vegetal usado é extremamente benéfica aos clientes dos mais variados portes."
        ],
        header3: "DIFERENCIAIS DA EMPRESA ESPECIALIZADA EM COLETA DE OLEO VEGETAL USADO",
        paragraphs3: ["A MBR presta serviço de compra, tratamento, destinação final e coleta de oleo vegetal usado. E, para isso, a companhia conta com infraestrutura adequada e possui autorização de funcionamento, licença de operação da CETESB e IBAMA. Ademais, a empresa possui atendimento em São Paulo e cidades próximas, como São Bernardo do Campo e Guarulhos, oferecendo o melhor atendimento."],
        header4: "Para saber mais sobre Coleta de oleo cozinha",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ]
      }
    },
    {
      id: 4,
      title: "Descarte de Óleo",
      image: Descarte,
      description: "Informações sobre o descarte de óleo.",
      content: {
        header1: "IMPORTÂNCIA DA COLETA DE OLEO VEGETAL",
        paragraphs1: ["Os óleos são grandes poluidores do meio ambiente, apenas 1 litro desse material é capaz de poluir 1 milhão de litros de água. Por isso, a coleta de oleo vegetal é importante, já que esse trabalho direciona o resíduo para destinação mais adequada.",
          "Muitas pessoas descartam o óleo pelo encanamento da pia da cozinha, mas nesse caso, o óleo pode entupir as tubulações do encanamento, além de lotar a caixa de gordura. Por outro lado, muitas empresas já conhecem o trabalho da coleta de oleo vegetal, pois existem rigorosas legislações ambientais vigentes para o descarte desse resíduo",
          "Com a coleta adequada, o óleo poderá ser tratado e reaproveitado, destinado principalmente para a indústria de biodiesel. No entanto, é importante contar com uma empresa de coleta confiável, que tenha experiência nesse tipo de serviço."
        ],
        header2: "MELHOR COLETA DE OLEO VEGETAL EM SÃO PAULO E LITORAL",
        paragraphs2: ["A melhor coleta de oleo vegetal na região metropolitana de São Paulo e litoral paulista é feita pela MBR. A empresa possui diferenciais relevantes nesse setor, como:",
          "• experiência desde 2008 na coleta e destinação correta de óleos e gorduras vegetais;",
          "• licença da CETESB e IBAMA;",
          "• infraestrutura completa para análise, armazenamento, tratamento e destinação do óleo;",
          "• frota própria, para logística eficiente das coletas.",
          "A MBR é uma empresa de coleta de oleo vegetal confiável, que oferece o certificado de destinação do resíduo para o fornecedor do resíduo. Isso garante tranquilidade quanto a destinação adequada do óleo, sendo esse um registro fundamental para empresas manterem os registros dos descartes feitos."
        ],
        header3: "MBR REALIZA A COLETA DE OLEO VEGETAL",
        paragraphs3: [
          "A coleta de oleo vegetal da MBR é feita para residências, comércios e indústrias, a partir de uma quantidade mínima, mas sem limitações em relação à quantidade máxima. A coleta deve ser agendada previamente, junto a uma equipe de atendimento qualificada, que esclarece todas as dúvidas sobre o serviço.",
          "Além disso, também é possível deixar o óleo vegetal usado na própria sede da empresa, que está localizada na cidade de Praia Grande, litoral de São Paulo. No local, também é possível conhecer a infraestrutura completa que a MBR dispõe para o processamento do óleo usado até a destinação final, o que inclui diversos tanques de armazenamento, tratamento e decantação."
        ],
        header4: "Para saber mais sobre Coleta de oleo cozinha",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ]
      }
    },
    {
      id: 5,
      title: "Empresa de reciclagem de oleo",
      image: post5,
      description: "Informações sobre o descarte de óleo.",
      content: {
        header1: "PRODUTOS FABRICADOS POR EMPRESA DE RECICLAGEM DE OLEO",
        paragraphs1: ["O serviço executado por empresa de reciclagem de oleo tem grande contribuição para o meio ambiente. Primeiramente, esse procedimento permite o reaproveitamento de uma substância com grande potencial de contaminação, visto que um litro de óleo pode contaminar um milhão de litros de água.",
          "A empresa de reciclagem de oleo realiza etapas de decantação e remoção de impurezas ou umidade misturadas, para adequar o resíduo às condições de reaproveitamento. A principal alternativa é a fabricação de sabão, mas ainda há outras opções, como:",
          "• biodiesel;",
          "• detergente e glicerina;",
          "• tintas a óleo;",
          "• asfalto;",
          "• massa de vidraceiro.",
          "Como todos os produtos são fabricados com matéria-prima barata, as empresas conseguem oferecer soluções com preço competitivo e boa relação custo benefício. Tudo isso integrado com responsabilidade e conservação ambiental."
        ],
        header2: "COLETA EXECUTADA POR EMPRESA DE RECICLAGEM DE OLEO",
        paragraphs2: ["Antes da empresa de reciclagem de oleo executar os procedimentos de transformação, é fundamental fazer a coleta dos resíduos. Para isso, a prestadora de serviços pode comprar os resíduos, em troca de dinheiro ou produtos d elimpeza, em restaurantes, indústrias e condomínios residenciais.",
          "A empresa de reciclagem de oleo pode disponibilizar galões para acúmulo de resíduos, feitos em um plástico resistente. Quando o interior está cheio, é feito o agendamento de um horário para retirar o produto diretamente no endereço do cliente.",
          "Antes de contratar os serviços de coleta, é fundamental observar as condições comerciais oferecidas pela empresa. Além disso, o óleo deve passar por análise antes do recolhimento, o que indica se está apto para ser reaproveitado."
        ],
        header3: "A ATUAÇÃO DE UMA EMPRESA DE RECICLAGEM DE OLEO",
        paragraphs3: [
          "A Biolitral é uma empresa de reciclagem de oleo que possui excelente estrutura para tratamento dos dejetos. A companhia dispõe de tanques em diversos tamanhos, sendo que os maiores têm capacidade de acondicionar até 30 mil litros.",
          "A empresa conta ainda com laboratório equipado com centrífuga de tubos para realizar adequada filtragem e análise do óleo que será usado para reciclagem. A equipe de profissionais da MBR possui amplo treinamento para efetuar serviços com total eficiência.",
          "A empresa também realiza coleta, por meio da compra ou troca por produtos de limpeza, em diversos empreendimentos. A MBR trabalha com retirada de no mínimo 10 litros e máximo de 30 toneladas."
        ],
        header4: "Para saber mais sobre Coleta de oleo cozinha",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ]
      }
    },
    {
      id: 6,
      title: "Recebimento de oleo vegetal usado",
      image: post6,
      description: "Informações sobre o descarte de óleo.",
      content: {
        header1: "A PRÁTICA DO RECEBIMENTO DE OLEO VEGETAL USADO",
        paragraphs1: ["O recebimento de oleo vegetal usado é fundamental para transformar essa substância em matéria-prima para a produção do biodiesel. Além de dar uma nova finalidade para o material, essa prática contribui para a preservação do meio ambiente.",
          "Muitos bares, restaurantes, hotéis e demais estabelecimentos ainda descartam o óleo utilizado na cozinha diretamente na rede de esgoto, através do encanamento. Além de causar entupimento na rede de esgotos, caso não haja tratamento no sistema, é possível que o resíduo se espalhe na superfície de rios e represas. Por essa razão, é imprescindível que o recebimento de oleo vegetal usado seja efetuado por uma empresa especializada.",
          ],
        header2: "VANTAGENS DO RECEBIMENTO DE OLEO VEGETAL USADO",
        paragraphs2: ["Atuando no ramo desde 2008, a MBR é uma empresa que atua com seriedade no recebimento de oleo vegetal usado, analisando o material perante o cliente fornecedor com a utilização de maquinários apropriados. Nesse momento, é oferecido o pagamento ao cliente diretamente em dinheiro ou em troca por produtos de limpeza. Em seguida, o material é enviado para tratamento, onde pode ser útil para outras finalidades.",
          "Entre os diversos benefícios proporcionados no recebimento de oleo vegetal usado, os principais são:",
          "• redução de danos ambientais;",
          "• redução de entupimentos no sistema de encanação;",
          "• geração de renda;",
          "• produção de biodiesel, sabão biodegradável, tintas e vernizes e vela ecológica.",
        ],
        header3: "EXCELÊNCIA NA COLETA E RECEBIMENTO DE OLEO VEGETAL USADO",
        paragraphs3: [
          "Situada na Praia Grande, em São Paulo, a MBR oferece atendimento para toda a Grande São Paulo, além de diversas cidades do interior e do litoral paulista. Sem exigência de quantidade mínima para o recebimento de oleo vegetal usado em sua sede, a empresa determina a quantidade de 10 litros para a retirada do material nas residências e comércios com agendamento prévio.",
          "Destaca-se que a MBR conta com profissionais capacitados e treinados para melhor atender seus clientes e realizar os serviços de análise e tratamento do óleo coletado. Além disso, a empresa possui alvará de funcionamento e licença de operação da CETESB, IBAMA, com capacidade também para o fornecimento de certificação de destinação do resíduo coletado para comprovação com os órgãos competentes."
        ],
        header4: "Para saber mais sobre Coleta de oleo cozinha",
        paragraphs4: [
          "Ligue para 13 3473-8800 ou clique aqui e entre em contato por email."
        ]
      }
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="info-section">
      <Helmet>
        <title>Galeria de Informações</title>
      </Helmet>
      <h2 className="info-title">Galeria de Informações</h2>
      <div className="info-grid">
        {items.map((item) => (
          <div className="info-item" key={item.id} onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.title} className="info-image" />
            <h3 className="info-item-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal">
  <div className="modal-content">
    <span className="close" onClick={closeModal}>&times;</span>
    <div className="content-section">
      <img src={selectedItem.image} alt={selectedItem.title} className="content-image" />
      <div className="text-content">
        <h4>{selectedItem.content.header1}</h4>
        {selectedItem.content.paragraphs1.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        <h4>{selectedItem.content.header2}</h4>
        {selectedItem.content.paragraphs2 && selectedItem.content.paragraphs2.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        <h4>{selectedItem.content.header3}</h4>
        {selectedItem.content.paragraphs3 && selectedItem.content.paragraphs3.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
    {/* Adicionando o header4 e seus parágrafos abaixo da imagem */}
    <h4 >{selectedItem.content.header4}</h4>
    {selectedItem.content.paragraphs4 && selectedItem.content.paragraphs4.map((para, index) => (
      <p  key={index}>{para}</p>
    ))}
  </div>
      </div>
    </div>

</div>
      )}
    </div>
  );
};

export default InfoSection;

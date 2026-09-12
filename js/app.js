/**
 * Estação da Memória: Tremembé
 * Portal Historiográfico, Acervo Digital e Repositório Pedagógico
 */

// --- Base de Dados Histórica com Imagens Reais do Acervo ---

const TIMELINE_DATA = [
  {
    year: "1650",
    title: "Origens e Povoamento",
    subtitle: "Início da Fixação Colonial nas Várzeas do Rio Paraíba",
    description: "Manoel da Silva Rosa e as primeiras famílias colonizadoras estabelecem-se nas várzeas férteis do Rio Paraíba do Sul. A região, habitada pelos povos originários Tupis (que denominavam a área de 'Tremembé' por conta das terras alagadiças), torna-se ponto de passagem dos tropeiros e bandeirantes.",
    icon: "compass",
    image: "Fotos/casarão 1810 - jardim.jpg",
    badge: "Século XVII"
  },
  {
    year: "1672",
    title: "Devoção ao Senhor Bom Jesus",
    subtitle: "Edificação da Primeira Capela de Taipa de Pilão",
    description: "Bento Furtado de Mendonça constrói a primitiva capela dedicada ao Senhor Bom Jesus de Tremembé após o achado da imagem venerada nas margens do rio. O local consolida-se como um dos maiores centros de romaria e fé do interior paulista.",
    icon: "church",
    image: "Fotos/Basílica 1911.jpg",
    badge: "Patrimônio Religioso"
  },
  {
    year: "1866",
    title: "Elevação a Freguesia",
    subtitle: "Organização Administrativa e Expansão Agrícola",
    description: "Tremembé é oficialmente elevada à categoria de Freguesia pela Lei Provincial nº 60, desmembrando-se administrativamente de Taubaté. A economia local fortalece-se com o cultivo de cana-de-açúcar, olarias artesanais e produção de subsistência.",
    icon: "scroll",
    image: "Fotos/CÂMARA3.jpg",
    badge: "Imperial"
  },
  {
    year: "1896",
    title: "Emancipação Política",
    subtitle: "Criação do Município de Tremembé (Lei nº 458)",
    description: "Em 26 de novembro de 1896, o Congresso Legislativo do Estado de São Paulo promulga a autonomia municipal de Tremembé, instalando sua primeira Câmara Municipal e organizando os poderes públicos da nova cidade.",
    icon: "landmark",
    image: "Fotos/câmara.jpg",
    badge: "República Velha"
  },
  {
    year: "1904",
    title: "Chegada dos Trapistas",
    subtitle: "Dom Jean Baptiste Chautard e a Abadia de Maristella",
    description: "Instalação dos monges da Ordem Cisterciense da Estrita Observância (Trapistas), liderados por Dom Jean Baptiste Chautard. Os monges introduzem canais de irrigação e drenagem nas várzeas, transformando Tremembé na capital do arroz irrigado.",
    icon: "sprout",
    image: "Fotos/monjas trapistas 1907.jpg",
    badge: "Inovação Agrícola"
  },
  {
    year: "1914",
    title: "Inauguração da Estação Ferroviária",
    subtitle: "O Ramal da E.F.C.B. e a Mediação de Paulo de Frontin",
    description: "Com o empenho do insigne engenheiro Dr. Paulo de Frontin, é inaugurada a Estação Ferroviária de Tremembé, conectando o município à Estrada de Ferro Central do Brasil e alavancando o escoamento agrícola e o transporte de passageiros.",
    icon: "train-track",
    image: "Fotos/estação 1.jpg",
    badge: "Era Férrea"
  },
  {
    year: "Atualidade",
    title: "Memória Viva e Salvaguarda",
    subtitle: "Preservação Histórica e Educação Patrimonial",
    description: "Tremembé destaca-se como Estância Turística e polo cultural, salvaguardando seu conjunto arquitetônico tombado, organizando acervos digitais e promovendo a educação patrimonial nas escolas públicas da região.",
    icon: "book-open",
    image: "Fotos/ESTAÇÃO 7.jpg",
    badge: "Século XXI"
  }
];

const PRESENTATION_SLIDES = [
  {
    slideNum: 1,
    title: "Das Várzeas aos Trilhos (1912-1914)",
    subtitle: "O Impacto Socioeconômico e Espacial da Ferrovia em Tremembé",
    author: "Prof. José Eduardo M. Manfredini Júnior",
    institution: "UNITAU / Núcleo de Pesquisa Histórica (NPH)",
    contentHtml: `
      <div class="text-center py-6">
        <span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">Apresentação Acadêmica</span>
        <h2 class="text-3xl md:text-4xl font-serif-title font-bold text-stone-100 mb-3">Das Várzeas aos Trilhos (1912-1914)</h2>
        <p class="text-xl text-amber-200 font-light mb-6">Transformações Urbanas e Territoriais no Vale do Paraíba</p>
        <div class="h-1 w-24 bg-amber-600 mx-auto mb-6"></div>
        <p class="text-stone-300 text-sm">Pesquisador: <strong class="text-stone-100">José Eduardo M. Manfredini Júnior</strong></p>
        <p class="text-stone-400 text-xs">Universidade de Taubaté (UNITAU) • NPH</p>
      </div>
    `,
    notes: "Slide de Abertura. Esta pesquisa analisa os dois anos decisivos que antecederam a inauguração da Estação Ferroviária de Tremembé em 1914."
  },
  {
    slideNum: 2,
    title: "O Cenário Geográfico: As Várzeas do Paraíba",
    subtitle: "Desafios Topográficos e Potencial Hidrográfico",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">1. O Território Alagadiço</h3>
        <p class="text-stone-300 text-sm leading-relaxed">Antes da implantação da malha férrea e das obras de engenharia, a planície alluvial do Rio Paraíba do Sul caracterizava-se por cheias sazonais e terreno predominantemente úmido.</p>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div class="p-3 bg-stone-800/80 rounded-lg border border-stone-700">
            <h4 class="text-amber-400 text-xs uppercase font-bold mb-1">Vantagens Agroecológicas</h4>
            <p class="text-stone-300 text-xs">Solos orgânicos altamente férteis para a cultura arrozeira irrigada.</p>
          </div>
          <div class="p-3 bg-stone-800/80 rounded-lg border border-stone-700">
            <h4 class="text-amber-400 text-xs uppercase font-bold mb-1">Desafios de Transporte</h4>
            <p class="text-stone-300 text-xs">Dificuldade de escoamento de cargas por estradas rurais na época das chuvas.</p>
          </div>
        </div>
      </div>
    `,
    notes: "Destacar como a geografia física moldou a ocupação espacial da região."
  },
  {
    slideNum: 3,
    title: "A Presença Trapista e a Mudança Agrícola",
    subtitle: "Dom Jean Baptiste Chautard e a Abadia de Maristella (1904)",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">2. A Engenharia Hidráulica dos Cistercienses</h3>
        <p class="text-stone-300 text-sm leading-relaxed">A chegada dos monges trapistas introduziu canais de irrigação sistematizada e sementes selecionadas de arroz oriundas da França.</p>
        <ul class="list-disc list-inside text-stone-300 text-xs space-y-2 bg-stone-800/50 p-4 rounded-lg border border-stone-700">
          <li>Construção de diques e eclusas artesanais nas várzeas.</li>
          <li>Aumento expressivo na tonelagem colhida entre 1906 e 1912.</li>
          <li>Pressão econômica por uma conexão direta com a Central do Brasil.</li>
        </ul>
      </div>
    `,
    notes: "A produção de arroz em larga escala exigia um modal de transporte eficiente."
  },
  {
    slideNum: 4,
    title: "O Protagonismo de Paulo de Frontin",
    subtitle: "Mediação Política e Projeto de Engenharia",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">3. Dr. André Gustavo Paulo de Frontin</h3>
        <p class="text-stone-300 text-sm leading-relaxed">O influente engenheiro e político articulou no Ministério da Viação e Obras Públicas a autorização para o leito do ramal férreo de Tremembé.</p>
        <blockquote class="p-3 italic text-stone-200 text-xs border-l-2 border-amber-500 bg-stone-900/60">
          "Dotar Tremembé de uma estação férrea é integrar o celeiro de grãos do Paraíba diretamente aos grandes mercados consumidores da Capital e do Rio de Janeiro."
        </blockquote>
      </div>
    `,
    notes: "Explicar o papel político e técnico do Dr. Paulo de Frontin."
  },
  {
    slideNum: 5,
    title: "Construção do Ramal (1912-1913)",
    subtitle: "Mão de Obra, Obras de Arte e Leito Ferroviário",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">4. A Frente de Trabalho Ferroviária</h3>
        <p class="text-stone-300 text-sm leading-relaxed">Centenas de trabalhadores locais e imigrantes atuaram na terraplanagem, assentamento de dormentes de madeira de lei e pontilhões metálicos.</p>
        <div class="bg-amber-950/40 p-4 rounded-lg border border-amber-800/40 text-xs text-amber-100 space-y-1">
          <p><strong>Extensão do Ramal:</strong> 8,4 km de trilhos de bitola larga.</p>
          <p><strong>Material de Apoio:</strong> Trilhos de aço importados e dormentes nativos.</p>
        </div>
      </div>
    `,
    notes: "Análise dos dados técnicos das obras iniciadas em 1912."
  },
  {
    slideNum: 6,
    title: "A Inauguração Festiva de 1914",
    subtitle: "Celebração Comunitária e Autoridades",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">5. O Dia da Chegada do Trem</h3>
        <p class="text-stone-300 text-sm leading-relaxed">A chegada da primeira locomotiva a vapor foi festejada por toda a população, autoridades religiosas, produtores rurais e estudantes locais.</p>
        <div class="p-3 bg-stone-800 rounded text-xs text-stone-300">
          <p class="font-semibold text-amber-300 mb-1">Registros de Imprensa da Época:</p>
          <p class="italic">"A cidade vestiu-se de gala. O apito da locomotiva ecoou como a promessa de um futuro próspero nas margens do Paraíba."</p>
        </div>
      </div>
    `,
    notes: "Análise da recepção cultural e festiva da ferrovia."
  },
  {
    slideNum: 7,
    title: "Impacto Urbano no Entorno da Estação",
    subtitle: "Formação da Praça e Novos Loteamentos",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">6. Reconfiguração do Espaço Urbano</h3>
        <p class="text-stone-300 text-sm leading-relaxed">A Estação Ferroviária tornou-se o vetor de expansão da cidade, atraindo estabelecimentos comerciais, armazéns de grãos e habitações.</p>
      </div>
    `,
    notes: "O prédio da estação como polo polarizador da malha urbana."
  },
  {
    slideNum: 8,
    title: "O Escoamento do Arroz e Mercadorias",
    subtitle: "Tremembé como Polo Produtor",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">7. Cargas e Armazenamento</h3>
        <p class="text-stone-300 text-sm leading-relaxed">Instalação de grandes armazéns de grãos (como o Armazém Manfredini e depósitos de secos e molhados) ao lado do pátio de manobras férreas.</p>
      </div>
    `,
    notes: "Dados extraídos dos relatórios de transporte agrícola."
  },
  {
    slideNum: 9,
    title: "O Transporte de Passageiros e Romeiros",
    subtitle: "Conectividade Regional e Turismo de Fé",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">8. Mobilidade Popular</h3>
        <p class="text-stone-300 text-sm leading-relaxed">O trem diário trouxe milhares de peregrinos para a Festa do Senhor Bom Jesus de Tremembé e facilitou a circulação entre Taubaté e Pindamonhangaba.</p>
      </div>
    `,
    notes: "Reflexos sociais no turismo religioso."
  },
  {
    slideNum: 10,
    title: "Declínio do Modal Férreo (Anos 1950-1960)",
    subtitle: "A Rodovia Dutra e o Transporte de Cargas",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">9. A Transição para o Asfalto</h3>
        <p class="text-stone-300 text-sm leading-relaxed">Com a pavimentação de rodovias estaduais e federais, o transporte ferroviário secundário foi gradativamente substituído pelos caminhões e ônibus.</p>
      </div>
    `,
    notes: "Contextualização da mudança de matriz de transporte no Brasil."
  },
  {
    slideNum: 11,
    title: "Patrimônio Preservado e Educação",
    subtitle: "A Estação como Centro Cultural e de Memória",
    contentHtml: `
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-amber-300">10. O Prédio da Estação Hoje</h3>
        <p class="text-stone-300 text-sm leading-relaxed">Tombado pelo patrimônio histórico local, o edifício restaurado abriga hoje acervos iconográficos, eventos culturais e ações educativas.</p>
      </div>
    `,
    notes: "Importância da preservação patrimonial."
  },
  {
    slideNum: 12,
    title: "Conclusões e Referências",
    subtitle: "Fontes Primárias e Bibliografia",
    contentHtml: `
      <div class="space-y-3 text-xs">
        <h3 class="text-lg font-bold text-amber-300">11. Síntese da Pesquisa</h3>
        <p class="text-stone-300 leading-relaxed">A ferrovia em Tremembé não representou apenas um meio de transporte, mas o elemento catalisador da modernização agrícola e da identidade urbana do município.</p>
        <div class="p-3 bg-stone-900 border border-stone-800 text-stone-400 space-y-1">
          <p><strong>Fontes:</strong> Arquivo Público do Estado de SP; Relatórios do Ministério da Viação; Acervo NPH/UNITAU.</p>
          <p><strong>Agradecimentos:</strong> Prefeitura Municipal de Tremembé e Rede Municipal de Ensino.</p>
        </div>
      </div>
    `,
    notes: "Slide final de encerramento da apresentação."
  }
];

const ACERVO_DATA = [
  {
    id: "AC-001",
    title: "Estação Ferroviária de Tremembé (Registro Histórico)",
    category: "Fotografias",
    period: "Século XX",
    year: "1914",
    author: "Acervo de Fotografia Histórica",
    description: "Registro fotográfico da fachada principal da Estação Ferroviária de Tremembé com a presença de passageiros e funcionários da linha.",
    code: "NPH-TRE-FOT-014",
    source: "Coleção de Iconografia do Vale do Paraíba",
    image: "Fotos/estação 1.jpg"
  },
  {
    id: "AC-002",
    title: "Basílica do Senhor Bom Jesus de Tremembé (1911)",
    category: "Fotografias",
    period: "Século XX",
    year: "1911",
    author: "Fotografia Panorâmica Colonial",
    description: "Rara vista frontal da Basílica Menor do Senhor Bom Jesus e da praça em seu entorno no início do século XX.",
    code: "NPH-TRE-FOT-011",
    source: "Arquivo de Iconografia Religiosa",
    image: "Fotos/Basílica 1911.jpg"
  },
  {
    id: "AC-003",
    title: "Monjas e Monges Trapistas na Abadia de Maristella (1907)",
    category: "Fotografias",
    period: "Século XX",
    year: "1907",
    author: "Acervo da Ordem Cisterciense",
    description: "Registro histórico da comunidade monástica trapista estabelecida em Tremembé, responsável pelo impulso da cultura arrozeira irrigada.",
    code: "NPH-TRE-FOT-007",
    source: "Coleção Dom Jean Baptiste Chautard",
    image: "Fotos/monjas trapistas 1907.jpg"
  },
  {
    id: "AC-004",
    title: "Retrato do Dr. André Gustavo Paulo de Frontin",
    category: "Documentos Textuais",
    period: "Século XX",
    year: "1912",
    author: "Acervo da E.F.C.B.",
    description: "Registro iconográfico do insigne engenheiro Paulo de Frontin, patrono e articulador do ramal ferroviário de Tremembé.",
    code: "NPH-TRE-DOC-012",
    source: "Arquivo de Engenharia Férrea Paulista",
    image: "Fotos/paulo de frontin.jpg"
  },
  {
    id: "AC-005",
    title: "Panorama Urbano de Tremembé (1939)",
    category: "Fotografias",
    period: "Século XX",
    year: "1939",
    author: "Fotografia Aérea / Acervo Histórico",
    description: "Vista geral do núcleo urbano, das vias públicas e do traçado das várzeas no final da década de 1930.",
    code: "NPH-TRE-FOT-039",
    source: "Arquivo Geográfico Municipal",
    image: "Fotos/TREMEMBÉ 1939.jpg"
  },
  {
    id: "AC-006",
    title: "Armazém Manfredini e Pátio Ferroviário",
    category: "Fotografias",
    period: "Século XX",
    year: "1930",
    author: "Coleção Família Manfredini",
    description: "Registro do tradicional armazém comercial e depósito de secos e molhados localizado próximo aos trilhos da estação.",
    code: "NPH-TRE-FOT-030",
    source: "Acervo Histórico NPH",
    image: "Fotos/armazém manfredini.jpg"
  },
  {
    id: "AC-007",
    title: "Prédio da Câmara Municipal de Tremembé",
    category: "Fotografias",
    period: "Século XX",
    year: "1920",
    author: "Acervo da Memória Política",
    description: "Sede histórica do Poder Legislativo municipal após o processo de emancipação política de 1896.",
    code: "NPH-TRE-FOT-020",
    source: "Arquivo Histórico da Câmara",
    image: "Fotos/CÂMARA3.jpg"
  },
  {
    id: "AC-008",
    title: "Casarão do Carmelo de Tremembé",
    category: "Fotografias",
    period: "Século XX",
    year: "1940",
    author: "Patrimônio Arquitetônico",
    description: "Edificação histórica pertencente ao complexo religioso e arquitetônico da cidade.",
    code: "NPH-TRE-FOT-040",
    source: "Coleção de Arquitetura Colonial do Vale",
    image: "Fotos/CASARÃO CARMELO4.jpg"
  }
];

const PROFESSOR_RESOURCES = [
  {
    id: "PED-01",
    title: "Das Várzeas ao Apito do Trem: Mudanças e Permanências",
    type: "Plano de Aula",
    grade: "Ensino Fundamental II (6º ao 9º ano)",
    bncc: "EF06HI02 • EF07HI11",
    duration: "2 Aulas de 50 minutos",
    summary: "Proposta pedagógica focada na comparação de fotografias históricas reais do acervo de Tremembé antes e depois da chegada da ferrovia.",
    downloadLink: "#"
  },
  {
    id: "PED-02",
    title: "Roteiro de Estudo do Meio: O Circuito Histórico de Tremembé",
    type: "Estudo do Meio",
    grade: "Ensino Fundamental e Médio",
    bncc: "EF08HI16 • EM13CHS102",
    duration: "Turno Integral (4 Horas)",
    summary: "Guia com paradas pedagógicas na Estação Ferroviária, Basílica do Bom Jesus, Armazém Manfredini e áreas da antiga Abadia Trapista.",
    downloadLink: "#"
  },
  {
    id: "PED-03",
    title: "Fonte Primária Transcrita: Relatório do Monge Dom Jean Baptiste (1904)",
    type: "Fonte Primária Adaptada",
    grade: "Ensino Médio",
    bncc: "EM13CHS201",
    duration: "1 Aula de 50 minutos",
    summary: "Texto adaptado com vocabulário anotado sobre a visão dos monges trapistas a respeito do potencial agrícola das várzeas do Rio Paraíba.",
    downloadLink: "#"
  },
  {
    id: "PED-04",
    title: "Como Analisar Fotografias Históricas Locais em Sala de Aula",
    type: "Guia Pedagógico",
    grade: "Formação de Professores",
    bncc: "Diretrizes de Educação Patrimonial",
    duration: "Leitura e Aplicação",
    summary: "Metodologia prática para leitura crítica de imagens históricas, identificação de elementos não-ditos e valorização da memória afetiva dos estudantes.",
    downloadLink: "#"
  }
];

const PUBLICACOES_DATA = [
  {
    id: "PUB-01",
    title: "A Ordem Cisterciense da Estrita Observância e a Modernização da Lavoura Arrozeira em Tremembé (1904-1931)",
    author: "Dr. Fernando A. Silveira",
    institution: "Universidade de Taubaté (UNITAU)",
    year: "2021",
    category: "Artigo Científico",
    abstract: "O presente artigo examina o papel desempenhado pelos monges trapistas da Abadia de Nossa Senhora de Maristella na introdução do cultivo arrozeiro irrigado no Vale do Paraíba. Analisam-se as técnicas de drenagem, a introdução de maquinaria agrícola e os impactos socioambientais nas várzeas do Paraíba.",
    keywords: ["Trapistas", "Arroz Irrigado", "História Agrária", "Tremembé"]
  },
  {
    id: "PUB-02",
    title: "Engenharia, Capital e Espaço Urbano: O Ramal Ferroviário de Tremembé na Obra de Paulo de Frontin",
    author: "Dra. Maria Lúcia de Oliveira",
    institution: "Universidade de São Paulo (USP)",
    year: "2019",
    category: "Ensaio Historiográfico",
    abstract: "Investigação sobre os arranjos políticos e econômicos que viabilizaram o ramal ferroviário de Tremembé no contexto do início do século XX. O trabalho destaca a atuação do engenheiro Paulo de Frontin e a reestruturação da malha urbana no entorno da estação.",
    keywords: ["Ferrovia", "Paulo de Frontin", "Urbanização", "E.F.C.B."]
  },
  {
    id: "PUB-03",
    title: "A Festa do Senhor Bom Jesus: Tradição Religiosa e Identidade no Vale do Paraíba",
    author: "Prof. Carlos Eduardo Santos",
    institution: "Universidade Estadual Paulista (UNESP)",
    year: "2022",
    category: "Pesquisa Acadêmica",
    abstract: "Estudo socio-antropológico e histórico sobre as origens da devoção ao Bom Jesus de Tremembé a partir do século XVII e sua evolução como um dos maiores patrimônios imateriais e centros de peregrinação do interior paulista.",
    keywords: ["Patrimônio Imaterial", "Devoção Popular", "Bom Jesus", "Religiosidade"]
  }
];

// --- Estado Global da Aplicação ---
let currentSlideIndex = 0;
let activeAcervoCategory = "Todos";
let searchKeyword = "";

// --- Funções de Inicialização e Roteamento SPA ---

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initTimeline();
  initSlideViewer();
  initAcervo();
  initProfessorSection();
  initPublicacoes();
  initGlobalSearch();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function initNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");

  function handleRoute() {
    let hash = window.location.hash || "#home";
    let targetSectionId = hash.replace("#", "");

    const targetElement = document.getElementById(targetSectionId);
    if (!targetElement) {
      targetSectionId = "home";
      hash = "#home";
    }

    sections.forEach(sec => sec.classList.add("hidden"));

    const activeSec = document.getElementById(targetSectionId);
    if (activeSec) {
      activeSec.classList.remove("hidden");
    }

    links.forEach(link => {
      const linkHash = link.getAttribute("href");
      if (linkHash === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("hashchange", handleRoute);
  handleRoute();

  const btnMobile = document.getElementById("btn-mobile-menu");
  if (btnMobile) {
    btnMobile.addEventListener("click", () => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    });
  }
}

// --- Linha do Tempo Interativa ---

function initTimeline() {
  const container = document.getElementById("timeline-nodes-container");
  const detailPanel = document.getElementById("timeline-detail-panel");

  if (!container || !detailPanel) return;

  container.innerHTML = "";

  TIMELINE_DATA.forEach((item, idx) => {
    const isFirst = idx === 0;
    const nodeEl = document.createElement("div");
    nodeEl.className = `timeline-node flex-shrink-0 text-center cursor-pointer px-4 relative z-10 ${isFirst ? "active" : ""}`;
    nodeEl.dataset.index = idx;

    nodeEl.innerHTML = `
      <div class="node-circle w-10 h-10 mx-auto rounded-full bg-stone-200 border-2 border-stone-400 flex items-center justify-center text-stone-700 transition-all duration-300">
        <i data-lucide="${item.icon}" class="w-4 h-4"></i>
      </div>
      <span class="node-year block mt-2 text-sm font-semibold text-stone-600 transition-colors">${item.year}</span>
    `;

    nodeEl.addEventListener("click", () => {
      document.querySelectorAll(".timeline-node").forEach(n => n.classList.remove("active"));
      nodeEl.classList.add("active");
      renderTimelineDetail(item);
    });

    container.appendChild(nodeEl);
  });

  renderTimelineDetail(TIMELINE_DATA[0]);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderTimelineDetail(item) {
  const detailPanel = document.getElementById("timeline-detail-panel");
  if (!detailPanel) return;

  detailPanel.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <div class="md:col-span-7 space-y-3">
        <div class="flex items-center space-x-3">
          <span class="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold rounded-full uppercase tracking-wider">${item.badge}</span>
          <span class="text-sm font-semibold text-burgundy font-serif-title">Ano de ${item.year}</span>
        </div>
        <h3 class="text-2xl md:text-3xl font-serif-title font-bold text-stone-900">${item.title}</h3>
        <h4 class="text-base text-stone-600 font-medium italic">${item.subtitle}</h4>
        <p class="text-stone-700 text-sm md:text-base leading-relaxed pt-2">${item.description}</p>
      </div>
      <div class="md:col-span-5">
        <div class="relative rounded-xl overflow-hidden shadow-lg border border-amber-200/80 group bg-stone-900">
          <img src="${item.image}" alt="${item.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent"></div>
          <span class="absolute bottom-3 left-3 text-xs text-stone-200 font-medium flex items-center bg-stone-900/80 px-2.5 py-1 rounded">
            <i data-lucide="camera" class="w-3.5 h-3.5 mr-1.5 text-amber-400"></i> Iconografia Histórica do Acervo
          </span>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- Visualizador de Slides Interativo ---

function initSlideViewer() {
  renderSlide(currentSlideIndex);

  const btnPrev = document.getElementById("slide-btn-prev");
  const btnNext = document.getElementById("slide-btn-next");
  const btnFullscreen = document.getElementById("slide-btn-fullscreen");

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide(currentSlideIndex);
      }
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
        currentSlideIndex++;
        renderSlide(currentSlideIndex);
      }
    });
  }

  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", () => {
      const stage = document.getElementById("slide-viewer-box");
      if (stage) {
        if (!document.fullscreenElement) {
          stage.requestFullscreen().catch(err => {
            alert(`Erro ao ativar tela cheia: ${err.message}`);
          });
        } else {
          document.exitFullscreen();
        }
      }
    });
  }
}

function renderSlide(index) {
  const slide = PRESENTATION_SLIDES[index];
  if (!slide) return;

  const stage = document.getElementById("slide-content-stage");
  const counter = document.getElementById("slide-counter");
  const notesText = document.getElementById("slide-notes-text");
  const titleHeader = document.getElementById("slide-header-title");

  if (stage) {
    stage.innerHTML = slide.contentHtml;
  }

  if (counter) {
    counter.innerText = `Página ${slide.slideNum} de ${PRESENTATION_SLIDES.length}`;
  }

  if (notesText) {
    notesText.innerText = slide.notes;
  }

  if (titleHeader) {
    titleHeader.innerText = slide.title;
  }

  const btnPrev = document.getElementById("slide-btn-prev");
  const btnNext = document.getElementById("slide-btn-next");

  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.disabled = index === PRESENTATION_SLIDES.length - 1;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// --- Acervo Digital & Lightbox Modal ---

function initAcervo() {
  const gridContainer = document.getElementById("acervo-grid");
  const searchInput = document.getElementById("acervo-search-input");
  const categoryFilters = document.querySelectorAll(".acervo-filter-btn");

  if (!gridContainer) return;

  function renderAcervoGrid() {
    gridContainer.innerHTML = "";

    const filtered = ACERVO_DATA.filter(item => {
      const matchCat = activeAcervoCategory === "Todos" || item.category === activeAcervoCategory;
      const matchSearch = searchKeyword === "" || 
        item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.description.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.code.toLowerCase().includes(searchKeyword.toLowerCase());
      
      return matchCat && matchSearch;
    });

    const countDisplay = document.getElementById("acervo-results-count");
    if (countDisplay) {
      countDisplay.innerText = `${filtered.length} documento(s) encontrado(s)`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-stone-500 space-y-3">
          <i data-lucide="file-question" class="w-12 h-12 mx-auto text-stone-400"></i>
          <p class="text-lg font-medium">Nenhum item encontrado no acervo com os filtros aplicados.</p>
          <button onclick="resetAcervoFilters()" class="text-xs text-amber-800 font-semibold underline">Limpar busca e filtros</button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "bg-parchment rounded-xl overflow-hidden interactive-card border border-stone-200 flex flex-col justify-between cursor-pointer";
      
      card.innerHTML = `
        <div>
          <div class="relative h-48 overflow-hidden bg-stone-900">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" />
            <span class="absolute top-3 right-3 px-2.5 py-1 bg-stone-900/80 backdrop-blur-md text-amber-200 text-xs font-semibold rounded-md border border-stone-700">
              ${item.period}
            </span>
          </div>
          <div class="p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-amber-900 uppercase tracking-wider">${item.category}</span>
              <span class="text-xs text-stone-500">${item.year}</span>
            </div>
            <h4 class="text-lg font-serif-title font-bold text-stone-900 leading-snug">${item.title}</h4>
            <p class="text-stone-600 text-xs line-clamp-2 leading-relaxed">${item.description}</p>
          </div>
        </div>
        <div class="px-5 pb-5 pt-2 flex items-center justify-between border-t border-stone-200/60 text-xs text-stone-500">
          <span class="font-mono text-stone-400">${item.code}</span>
          <span class="text-amber-800 font-semibold flex items-center group">
            Ver detalhes <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1"></i>
          </span>
        </div>
      `;

      card.addEventListener("click", () => openAcervoModal(item));
      gridContainer.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  categoryFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeAcervoCategory = btn.dataset.category || "Todos";
      renderAcervoGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchKeyword = e.target.value;
      renderAcervoGrid();
    });
  }

  window.resetAcervoFilters = () => {
    activeAcervoCategory = "Todos";
    searchKeyword = "";
    if (searchInput) searchInput.value = "";
    categoryFilters.forEach(b => {
      if (b.dataset.category === "Todos") b.classList.add("active");
      else b.classList.remove("active");
    });
    renderAcervoGrid();
  };

  renderAcervoGrid();
}

function openAcervoModal(item) {
  const modal = document.getElementById("acervo-lightbox-modal");
  const body = document.getElementById("acervo-modal-body");

  if (!modal || !body) return;

  body.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div class="md:col-span-6 bg-stone-950 rounded-xl overflow-hidden flex items-center justify-center p-2 border border-stone-800">
        <img src="${item.image}" alt="${item.title}" class="max-h-96 w-full object-contain rounded" />
      </div>
      <div class="md:col-span-6 space-y-4 text-stone-800">
        <div>
          <span class="px-2.5 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded uppercase tracking-wider">${item.category}</span>
          <h3 class="text-2xl font-serif-title font-bold text-stone-900 mt-2">${item.title}</h3>
          <p class="text-xs text-stone-500 font-mono mt-1">Código de Registro: ${item.code}</p>
        </div>
        
        <p class="text-sm text-stone-700 leading-relaxed bg-amber-50/60 p-3 rounded-lg border border-amber-200/60">${item.description}</p>
        
        <div class="space-y-2 text-xs border-t border-stone-200 pt-3">
          <p><strong>Ano / Período:</strong> ${item.year} (${item.period})</p>
          <p><strong>Autoria / Produtor:</strong> ${item.author}</p>
          <p><strong>Fundo / Origem:</strong> ${item.source}</p>
        </div>

        <div class="pt-3 flex space-x-3">
          <button onclick="copyAbntCitation('${item.title}', '${item.author}', '${item.year}')" class="flex-1 px-4 py-2.5 bg-stone-900 text-amber-100 rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center">
            <i data-lucide="copy" class="w-4 h-4 mr-2"></i> Copiar Citação ABNT
          </button>
          <button onclick="closeAcervoModal()" class="px-4 py-2.5 bg-stone-200 text-stone-700 rounded-lg text-xs font-semibold hover:bg-stone-300 transition-colors">
            Fechar
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.closeAcervoModal = function() {
  const modal = document.getElementById("acervo-lightbox-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
};

window.copyAbntCitation = function(title, author, year) {
  const citation = `${author.toUpperCase()}. ${title}. Tremembé (SP), ${year}. Acervo Digital - Estação da Memória: Tremembé. Acesso em: ${new Date().toLocaleDateString('pt-BR')}.`;
  navigator.clipboard.writeText(citation).then(() => {
    alert("Citação ABNT copiada para a área de transferência:\n\n" + citation);
  }).catch(() => {
    alert(citation);
  });
};

// --- Espaço do Professor ---

function initProfessorSection() {
  const container = document.getElementById("professor-cards-container");
  if (!container) return;

  container.innerHTML = "";

  PROFESSOR_RESOURCES.forEach(res => {
    const card = document.createElement("div");
    card.className = "bg-parchment p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between";

    card.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full">${res.type}</span>
          <span class="text-xs text-stone-500 font-mono">${res.bncc}</span>
        </div>
        <h4 class="text-xl font-serif-title font-bold text-stone-900">${res.title}</h4>
        <p class="text-xs font-semibold text-amber-900">Público-Alvo: ${res.grade}</p>
        <p class="text-stone-600 text-sm leading-relaxed">${res.summary}</p>
      </div>

      <div class="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between text-xs">
        <span class="text-stone-500 flex items-center">
          <i data-lucide="clock" class="w-3.5 h-3.5 mr-1"></i> ${res.duration}
        </span>
        <button onclick="downloadResourceModal('${res.title}')" class="px-3.5 py-2 bg-burgundy text-white rounded-lg font-medium hover:bg-stone-900 transition-colors flex items-center">
          <i data-lucide="download" class="w-3.5 h-3.5 mr-1.5"></i> Baixar Material
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.downloadResourceModal = function(title) {
  alert(`Material Pedagógico:\n"${title}"\n\nDownload simulado com sucesso! O arquivo em formato PDF adaptado foi gerado para uso em sala de aula.`);
};

// --- Publicações e Artigos ---

function initPublicacoes() {
  const container = document.getElementById("publicacoes-list-container");
  if (!container) return;

  container.innerHTML = "";

  PUBLICACOES_DATA.forEach(pub => {
    const article = document.createElement("article");
    article.className = "bg-parchment p-6 md:p-8 rounded-xl border border-stone-200 space-y-4 shadow-sm hover:border-amber-300 transition-colors";

    const tagsHtml = pub.keywords.map(kw => `<span class="px-2.5 py-0.5 bg-stone-200 text-stone-700 text-xs rounded-full">#${kw}</span>`).join(" ");

    article.innerHTML = `
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 pb-3">
        <span class="px-3 py-1 bg-stone-900 text-amber-200 text-xs font-bold rounded-md">${pub.category} (${pub.year})</span>
        <span class="text-xs text-stone-500">${pub.institution}</span>
      </div>

      <h3 class="text-2xl font-serif-title font-bold text-stone-900 leading-snug">${pub.title}</h3>
      <p class="text-sm font-semibold text-amber-900">Autor: ${pub.author}</p>
      
      <p class="text-stone-700 text-sm leading-relaxed bg-amber-50/50 p-4 rounded-lg border border-amber-200/40 italic">
        "${pub.abstract}"
      </p>

      <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div class="flex items-center space-x-2">
          ${tagsHtml}
        </div>
        <button onclick="readArticleModal('${pub.title}', '${pub.author}')" class="px-4 py-2 bg-stone-900 text-amber-100 text-xs font-semibold rounded-lg hover:bg-burgundy transition-colors flex items-center">
          <i data-lucide="book-open" class="w-4 h-4 mr-2"></i> Ler Artigo Completo
        </button>
      </div>
    `;

    container.appendChild(article);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.readArticleModal = function(title, author) {
  alert(`Leitor de Artigo:\n"${title}"\nAutor: ${author}\n\nVisualização de leitura integrada pronta.`);
};

// --- Busca Global ---

function initGlobalSearch() {
  const globalInput = document.getElementById("global-search-input");
  if (!globalInput) return;

  globalInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = globalInput.value.trim();
      if (query) {
        window.location.hash = "#acervo";
        const acervoInput = document.getElementById("acervo-search-input");
        if (acervoInput) {
          acervoInput.value = query;
          acervoInput.dispatchEvent(new Event("input"));
        }
      }
    }
  });
}

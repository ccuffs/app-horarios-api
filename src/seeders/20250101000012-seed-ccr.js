"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		const data = [
  {
    id: "1118",
    codigo: "GCH290",
    nome: "INICIAÇÃO À PRÁTICA CIENTÍFICA",
    ementa: "A instituição Universidade: ensino, pesquisa e extensão. Ciência e tipos de conhecimento. Método científico. Metodologia científica. Ética na prática científica. Constituição de campos e construção do saber. Emergência da noção de ciência. O estatuto de cientificidade e suas problematizações.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1119",
    codigo: "GCH012",
    nome: "FUNDAMENTOS DA CRÍTICA SOCIAL",
    ementa: "Elementos de antropologia. Noções de epistemologia, ética e estética. Materialismo e Idealismo. As críticas da modernidade. Tópicos de filosofia contemporânea.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1120",
    codigo: "GCH011",
    nome: "INTRODUÇÃO AO PENSAMENTO SOCIAL",
    ementa: "Cultura e processos sociais: senso comum e desnaturalização. As origens da Sociologia e o Positivismo. Os clássicos da Sociologia: Karl Marx, Émile Durkheim e Max Weber. Temas contemporâneos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1064",
    codigo: "GEX658",
    nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
    ementa: "Desenvolvimento das atividades previstas no projeto de pesquisa elaborada em TCC I e produção do texto final do TCC, seguida de defesa perante banca.",
    creditos: "12",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1061",
    codigo: "GEX1226",
    nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
    ementa: "Iniciação à Metodologia da Pesquisa. Aspectos de escrita científica. Fontes de Pesquisa em Computação. Normas para elaboração do Trabalho de Conclusão de Curso. Elaboração do projeto de conclusão de curso.",
    creditos: "6",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1062",
    codigo: "GEX657",
    nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
    ementa: "Conhecimento científico. Metodologia de pesquisa científica. Aspectos de escrita científica. Elaboração de projeto de pesquisa científica na área do conhecimento de ciência da computação.",
    creditos: "10",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1063",
    codigo: "GEX1227",
    nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
    ementa: "Desenvolvimento das atividades previstas no projeto elaborado em TCC I e produção do texto final do TCC, seguida de defesa perante a banca.",
    creditos: "8",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1085",
    codigo: "GEX1094",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLIV",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1086",
    codigo: "GEX1099",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLIX",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "965",
    codigo: "GEX438",
    nome: "ADMINISTRAÇÃO E GERÊNCIA DE REDES",
    ementa: "Princípios, organização e métodos de administração de rede. Tecnologias para operação e gerência de rede. Recursos humanos para administração de rede. Plataformas de gerência de redes. Aplicações de gerência de rede.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "966",
    codigo: "GCS319",
    nome: "ADMINISTRAÇÃO E ORGANIZAÇÃO",
    ementa: "O papel da administração geral das organizações, quanto aos seus princípios, desenvolvimento e áreas de conhecimento correlatas. Caracterização da evolução das organizações empresariais, no que se refere aos seus sistemas de produção e à sua organização do trabalho. Mudanças econômicas ocorridas e seus impactos nas organizações. Tratamento dos conceitos de marketing e gestão de marketing nas empresas. Contextualização para a pequena empresa de tecnologia de informática.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "967",
    codigo: "GEX003",
    nome: "ALGORITMOS E PROGRAMAÇÃO",
    ementa: "Conceito e construção de algoritmos. Tipos básicos de dados. Comandos de atribuição, condicionais e de repetição. Registros/estruturas. Vetores e Matrizes. Strings. Modulariza- ção. Operações básicas em arquivos. Recursão. Ponteiros.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "968",
    codigo: "GEX1206",
    nome: "ALGORITMOS E PROGRAMAÇÃO",
    ementa: "Conceito e construção de algoritmos. Tipos básicos de dados. Operadores. Expressões e diretivas. Comandos condicionais e de repetição. Vetores e matrizes. Funções. Estruturas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "969",
    codigo: "GEX621",
    nome: "ANÁLISE DE ALGORITMOS",
    ementa: "Prova de corretude e de parada de algoritmos. Assintótica: notações O, o, Ω, ω e Θ. Análise de complexidade de tempo e de espaço: melhor caso, pior caso e caso-médio. Recorrências. Análise de algoritmos de ordenação e busca.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "970",
    codigo: "GEX620",
    nome: "ARQUITETURA DE COMPUTADORES",
    ementa: "RISC vs. CISC. Arquitetura do Processador MIPS: MIPS Monociclo e MIPS Multiciclo. MIPS Pipeline. Conflitos estruturais de dados e de controle. Processador superescalar. Pro- cessador VLIW. Multicore System on Chip.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "971",
    codigo: "GEX090",
    nome: "BANCO DE DADOS I",
    ementa: "Conceitos de banco de dados. Sistemas Gerenciadores de Banco de Dados (SGBDs). Mode- los de dados. Modelagem conceitual e projeto de banco de dados. Modelo relacional: con- ceitos, restrições, linguagens de consulta (álgebra relacional, cálculo relacional, SQL), nor- malização.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1080",
    codigo: "GEX641",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XIX",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "972",
    codigo: "GEX1214",
    nome: "BANCO DE DADOS I",
    ementa: "Conceitos de banco de dados. Sistemas Gerenciadores de Banco de Dados (SGBDs). Modelos de dados. Modelagem conceitual e projeto de banco de dados. Modelo relacional: conceitos, restrições, linguagens de consulta (e.g., álgebra relacional e SQL), normalização.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "973",
    codigo: "GEN506",
    nome: "BANCO DE DADOS II",
    ementa: "Conceitos avançados de SQL. Gerenciamento de Transações. Processamento e otimização de consultas. Controle de concorrência. Recuperação e Segurança. Integração de banco de dados. Banco de dados não convencionais.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "974",
    codigo: "GEX091",
    nome: "BANCO DE DADOS II",
    ementa: "Armazenamento físico. Estruturas de indexação. Processamento e otimização de consultas. Processamento de transações. Controle de concorrência. Recuperação após falhas. Concei- tos avançados de SQL.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "975",
    codigo: "GEN253",
    nome: "CIRCUITOS DIGITAIS",
    ementa: "Fundamentos de Eletrônica. Famílias Lógicas. Simulação de Circuitos Lógicos. Álgebra de Boole. Circuitos Combinacionais: codificadores, multiplexadores e aritméticos. Circuitos Sequenciais: Latches, Flip-Flops e Registradores. Memórias.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "976",
    codigo: "GEN504",
    nome: "CIRCUITOS DIGITAIS",
    ementa: "Fundamentos de Eletrônica. Famílias Lógicas. Simulação de Circuitos Lógicos. Álgebra de Boole. Circuitos Combinacionais: codificadores, multiplexadores e aritméticos. Circuitos Sequenciais: Latches, Flip-Flops e Registradores. Memórias.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "977",
    codigo: "GEX654",
    nome: "COMPUTAÇÃO ALEATORIZADA",
    ementa: "Algoritmos de Monte Carlo e de Las Vegas. Algoritmos probabilísticos para os problemas de satisfatibilidade MAX SAT e MAX 3-SAT. Quicksort aleatorizado. Máquinas de Turing probabilísticas. Classes computacionais probabilísticas. Passeios aleatórios em grafos. Algoritmos distribuídos aleatorizados. Testes de primalidade aleatorizados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "978",
    codigo: "GEX106",
    nome: "COMPUTAÇÃO DISTRIBUÍDA",
    ementa: "Arquitetura de Sistemas Distribuídos. Paradigmas de Computação Distribuída: Troca de Mensagens, Cliente/Servidor, Comunicação em Grupo, Objetos Distribuídos. Comunicação entre Processos Distribuídos. Suporte de SO para Computação Distribuída. Concorrência e Sincronização em Sistemas Distribuídos. Consistência e Replicação de Dados em Sistemas Distribuídos. Sistemas de Arquivo Distribuídos. Computação em grade (grid computing). Arquiteturas e modelos de programação paralela.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "979",
    codigo: "GEX107",
    nome: "COMPUTAÇÃO GRÁFICA",
    ementa: "Conceitos básicos. Dispositivos gráficos. Sistemas de cores. Transformações geométricas. Primitivas gráficas. Visibilidade. Rendering (modelos de iluminação, shading, textura, antialiasing).",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "980",
    codigo: "GEX1229",
    nome: "COMPUTAÇÃO GRÁFICA",
    ementa: "Conceitos básicos. Dispositivos gráficos. Sistemas de cores. Transformações geométricas. Primitivas gráficas. Visibilidade. Rendering (modelos de iluminação, shading, textura, antialiasing).",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "981",
    codigo: "GEX653",
    nome: "COMPUTAÇÃO GRÁFICA AVANÇADA",
    ementa: "Introdução à programação de Shaders. Diversos tipos de mapeamento de textura: mapeamento de rugosidade (bump mapping), mapeamento de ambiente (environment mapping), mapeamento de reflexão (reflection mapping), mapeamento de relevo (relief mapping). Algoritmos para geração de sombras. Equação de Rendering. Modelos de iluminação. Algoritmos de iluminação global. Ray tracing. Radiosidade. Photon mapping. Pre-computed radiance transfer. Rendering baseado em imagens. Iluminação baseada em imagens.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "982",
    codigo: "GEX108",
    nome: "CONSTRUÇÃO DE COMPILADORES",
    ementa: "Projeto de especificação de linguagens de programação. Etapas que compreendem o processo de compilação: análise léxica, análise sintática, análise semântica, geração e otimização de código. Evolução e tendências da área de compiladores e linguagens de programação. Implementação de analisadores.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "983",
    codigo: "GEX1223",
    nome: "CONSTRUÇÃO DE COMPILADORES",
    ementa: "Projeto de especificação de linguagens de programação. Etapas que compreendem o processo de compilação: análise léxica, análise sintática, análise semântica, geração e otimização de código. Evolução e tendências da área de compiladores e linguagens de programação. Implementação de analisadores léxicos e sintáticos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "984",
    codigo: "GEX1143",
    nome: "CÁLCULO I",
    ementa: "Limite e continuidade de funções de uma variável real. Derivadas. Aplicações da derivada. Integrais definidas e indefinidas. Teorema fundamental do Cálculo. Cálculo de áreas. Aplicações da integral.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "985",
    codigo: "GEX178",
    nome: "CÁLCULO I",
    ementa: "Limite e continuidade de funções de uma variável real. Derivadas. Aplicações da derivada. Integrais definidas e indefinidas. Teorema fundamental do Cálculo. Cálculo de áreas. Aplicações da integral.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "986",
    codigo: "GEX1146",
    nome: "CÁLCULO II",
    ementa: "Algumas técnicas de integração e aplicações da integral. Funções de várias variáveis. Limite e continuidade de funções de várias variáveis. Derivadas parciais e aplicações. Gradiente. Diferenciabilidade. Multiplicadores de Lagrange. Integrais múltiplas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "987",
    codigo: "GEX392",
    nome: "CÁLCULO II",
    ementa: "Algumas técnicas de integração e aplicações da integral. Funções de várias variáveis. Limi- te e continuidade de funções de várias variáveis. Derivadas parciais e aplicações. Gradiente. Diferenciabilidade. Multiplicadores de Lagrange. Integrais múltiplas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "988",
    codigo: "GEX1149",
    nome: "CÁLCULO NUMÉRICO",
    ementa: "Erros computacionais e aproximação numérica. Cálculo de raízes de funções reais. Resolução de sistemas lineares: métodos diretos e iterativos. Interpolação polinomial. Ajuste de curvas: quadrados mínimos lineares. Integração numérica. Tratamento numérico de equações diferenciais ordinárias.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "989",
    codigo: "GEX395",
    nome: "CÁLCULO NUMÉRICO",
    ementa: "Erros computacionais e aproximação numérica. Cálculo de raízes de funções reais. Resolução de sistemas lineares: métodos diretos e iterativos. Interpolação polinomial. Ajuste de curvas: quadrados mínimos lineares. Diferenciação e integração numérica. Tratamento numérico de equações diferenciais ordinárias.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "990",
    codigo: "GEX1215",
    nome: "DESENVOLVIMENTO DE SISTEMAS WEB",
    ementa: "Funcionamento de aplicações e sistemas Web: arquitetura cliente-servidor, protocolos de rede, padrões de projeto e servidores de aplicação Web. Desenvolvimento de sistemas Web: frameworks de front-end e back-end. Conceitos e práticas de segurança da informação. Integração de sistemas Web com sistemas gerenciadores de banco de dados. Conceitos e aplicações de web services.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "991",
    codigo: "GCS0877",
    nome: "DIREITOS E CIDADANIA",
    ementa: "Origens históricas e teóricas da noção de cidadania. O processo moderno de constituição dos direitos civis, políticos, sociais e culturais. Políticas de reconhecimento e promoção da cidadania. Direitos e cidadania no Brasil.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "992",
    codigo: "GCS239",
    nome: "DIREITOS E CIDADANIA",
    ementa: "Origens históricas e teóricas da noção de cidadania. O processo moderno de constituição dos direitos civis, políticos, sociais e culturais. Políticas de reconhecimento e promoção da cidadania. Direitos e cidadania no Brasil.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "993",
    codigo: "GCS320",
    nome: "EMPREENDEDORISMO",
    ementa: "A informática como área de negócios: análise dos diversos setores de mercado, suas características e tendências. O empreendimento e o empreendedor. Técnicas de negociação. Desenvolvimento organizacional. Qualidade total. Planejamento de empreendimentos em Informática.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1081",
    codigo: "GEX1090",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XL",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1082",
    codigo: "GEX1091",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLI",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "994",
    codigo: "GCS815",
    nome: "EMPREENDEDORISMO E CRIAÇÃO DE NEGÓCIOS",
    ementa: "Conceito de empreendedorismo e empreendedor. Características empreendedoras. Atividade Empreendedora. Empreendedorismo e educação. Empreendedorismo e criatividade. Vias empreendedoras. Empreendedorismo e empregabilidade. Desenvolvimento de conhecimentos, atitudes e habilidades empreendedoras. Plano de negócios: conceito, composição e elaboração de um plano de negócios.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "995",
    codigo: "GEX435",
    nome: "ENGENHARIA DA USABILIDADE",
    ementa: "Fundamentos de interação humano-computador. Usabilidade. Critérios e recomendações ergonômicas. Estilos de interação. Metodologias, técnicas e ferramentas de concepção, projeto e implementação de sistemas interativos. Avaliação de interfaces. Normas técnicas. Acessibilidade. Usabilidade na Web.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "996",
    codigo: "GEX1216",
    nome: "ENGENHARIA DE SOFTWARE I",
    ementa: "Engenharia De Software: Histórico, Objetivo, Importância e Principais Desafios. Padrões de processos de desenvolvimento de software. Engenharia de Requisitos. Gerência de Configuração de Software. Qualidade de Software: Qualidade de processos e de produto. Gerenciamento da Qualidade de Software e Métricas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "997",
    codigo: "GEX615",
    nome: "ENGENHARIA DE SOFTWARE I",
    ementa: "Engenharia de software: evolução, conceito e objetivo. Processo e ciclo de vida de desenvolvimento de software. Métodos de análise e de projeto de software. Engenharia de requisitos. Gerenciamento de configuração de software e ferramentas para controle de versão. Verificação, validação e teste. Entrega e manutenção. Medição de software. Garantia da qualidade de software. Métodos ágeis de desenvolvimento de software. Comparação entre métodos ágeis e métodos tradicionais. Ambientes de desenvolvimento de software.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "998",
    codigo: "GEX1222",
    nome: "ENGENHARIA DE SOFTWARE II",
    ementa: "Padrões de Projetos. Modelagem de Software Orientada a Objetos: Conceitos e Diagramas da UML. Gerência De Projetos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "999",
    codigo: "GEX616",
    nome: "ENGENHARIA DE SOFTWARE II",
    ementa: "Análise de requisitos. Técnicas para levantamento e representação de requisitos. Modelos de Processos existentes para o desenvolvimento de aplicações orientadas a objetos. O paradigma orientado a objetos. Técnicas de análise orientada a objetos. UML e seus diagramas. Padrões de projeto. Arquitetura de software. Noções de usabilidade e critérios ergonômicos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1000",
    codigo: "GEX1047",
    nome: "ESTATÍSTICA BÁSICA",
    ementa: "Noções básicas de Estatística. Séries e gráficos estatísticos. Distribuições de frequências. Medidas de tendência central. Medidas de dispersão. Medidas separatrizes. Análise de Assimetria. Noções de probabilidade e inferência.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1001",
    codigo: "GEX210",
    nome: "ESTATÍSTICA BÁSICA",
    ementa: "Noções básicas de Estatística. Séries e gráficos estatísticos. Distribuições de frequências. Medidas de tendência central. Medidas de dispersão. Medidas separatrizes. Análise de Assimetria. Noções de probabilidade e inferência.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1002",
    codigo: "GEX605",
    nome: "ESTRUTURAS DE DADOS",
    ementa: "Conceitos básicos de complexidade de algoritmos. Alocação dinâmica de memória. Tipos Abstratos de Dados. Listas lineares e suas generalizações: listas ordenadas, listas encadea- das, pilhas e filas. Hashing: funções e tratamento de colisões. Árvores: representação, ope- rações e percursos em árvores. Árvores binárias de busca e balanceadas. Heaps. Árvore de Fenwick. Implementações com linguagem imperativa estruturada.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1003",
    codigo: "GEX1207",
    nome: "ESTRUTURAS DE DADOS I",
    ementa: "Funções recursivas. Ponteiros. Alocação dinâmica de memória. Tipos Abstratos de Dados. Listas lineares: listas encadeadas, pilhas, filas. Árvores: representação, operações e percursos. Árvores binárias de busca. Heaps.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1004",
    codigo: "GEX1210",
    nome: "ESTRUTURAS DE DADOS II",
    ementa: "Organização de arquivos e persistência de dados. Conceitos básicos de complexidade de algoritmos. Ordenação interna. Ordenação externa. Técnicas de pesquisa: busca sequencial, busca binária, tabelas de dispersão (hash), árvores de busca balanceadas (AVL, B, B+).",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1005",
    codigo: "GEX1142",
    nome: "GEOMETRIA ANALÍTICA",
    ementa: "Sistema de coordenadas cartesianas. Vetores no plano e no espaço. Estudo analítico de retas e planos. Distâncias. Cônicas. Superfícies quádricas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1006",
    codigo: "GEX195",
    nome: "GEOMETRIA ANALÍTICA",
    ementa: "Sistema de coordenadas cartesianas. Vetores no plano e no espaço. Estudo analítico de retas e planos. Distâncias. Cônicas. Superfícies quádricas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1007",
    codigo: "GCS813",
    nome: "GESTÃO DA INOVAÇÃO",
    ementa: "Conceito de inovação. Tipos de inovação. Evolução conceitual e teórica da relação entre Ciência, Tecnologia e Inovação. Inovação e competitividade. Competências organizacionais e estratégias de inovação. Inovação e especificidades setoriais. Sistemas de inovação. Interação Universidade/Empresa/Governo. Transferência de Tecnologia. Planejamento e gestão do processo de inovação. Implicações da inovação na estrutura da empresa. Difusão de Inovações. Indicadores de inovação. Políticas públicas para inovação. Acumulação de competências tecnológicas",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1008",
    codigo: "GEN254",
    nome: "GRAFOS",
    ementa: "Definições básicas de Teoria dos Grafos: vizinhança, isomorfismo, subgrafo, clique e con- junto independente. Representação computacional de grafos. Modelagem de problemas com grafos. Grafos bipartidos e cortes. Caminhos, ciclos, diâmetro e cintura. Conexidade e al- cançabilidade. Grafos biconexos e articulações. Grafos dirigidos e caminho mínimo. Busca. Árvores e árvores geradoras de custo mínimo. Grafos eulerianos e hamiltonianos. Estabili- dade e emparelhamento. Fluxo. Coloração e Planaridade. Problemas da Cobertura e da Tra- vessia.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1009",
    codigo: "GEN505",
    nome: "GRAFOS",
    ementa: "Definições básicas de Teoria dos Grafos. Representação computacional de grafos. Modelagem de problemas com grafos. Caminhos e ciclos. Conexidade e alcançabilidade. Grafos dirigidos e caminhos de custo mínimo. Busca. Árvores e árvores geradoras de custo mínimo. Grafos eulerianos e hamiltonianos. Estabilidade e emparelhamento. Fluxo. Coloração e Planaridade.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1010",
    codigo: "GCH1739",
    nome: "HISTÓRIA DA FRONTEIRA SUL",
    ementa: "Construção dos sentidos históricos. Noções de Identidade e de Fronteira. Invenção das tradições. Processos de povoamento, despovoamento e colonização. Conflitos econômicos e políticos. Choques culturais no processo de colonização. Questão indígena, cabocla e afrodescendente.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1011",
    codigo: "GEX208",
    nome: "INFORMÁTICA BÁSICA",
    ementa: "Fundamentos de informática. Conhecimentos de sistemas operacionais. Utilização da rede mundial de computadores. Ambientes virtuais de aprendizagem. Conhecimentos de softwares de produtividade para criação de projetos educativos e/ou técnicos e/ou multimidiáticos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1012",
    codigo: "GCS318",
    nome: "INFORMÁTICA E SOCIEDADE",
    ementa: "Ética pessoal, profissional e pública na área da informática. Dilemas éticos do profissional da informática: privacidade, vírus, hacking, uso da Internet, direitos autorais, etc. Desemprego e informatização. Responsabilidade social. O profissional e o mercado de trabalho. Trabalho e relações humanas. O empreendedorismo como opção do profissional da informática. Legislação: política nacional e tendências atuais referentes à regulamentação da profissão.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1013",
    codigo: "GCH416",
    nome: "INFORMÁTICA NA EDUCAÇÃO",
    ementa: "Histórico, evolução e tendências. Instrumentação computacional do ensino. Sistemas de tutoria. Sistemas de autoria. Ambientes de aprendizagem. Ensino a distância.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1083",
    codigo: "GEX1092",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1014",
    codigo: "GCH1992",
    nome: "INICIAÇÃO À PRÁTICA DE EXTENSÃO",
    ementa: "Concepções teóricas sobre extensão universitária. Ligação da extensão com as atividades de pesquisa e ensino na formação do discente. Concepção, prática, acompanhamento, sistematização e avaliação das atividades de extensão na área da Ciência da Computação. Elaboração, desenvolvimento e submissão de um projeto nos seguintes eixos temáticos: Comunicação; Cultura; Direitos Humanos e Justiça; Meio Ambiente; Educação; Saúde; Tecnologia e Produção; e Trabalho, que integram o Plano Nacional de Extensão.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1015",
    codigo: "GEX618",
    nome: "INTELIGÊNCIA ARTIFICIAL",
    ementa: "Definição e conceitos de Inteligência Artificial. Lógica Nebulosa. Algoritmos Genéticos. Redes Neurais Artificiais. Redes Bayesianas. Agentes lógicos, inferência, planejamento e representação de conhecimento. Aprendizagem de máquina. Técnicas de inteligência artificial aplicadas à resolução de problemas. Representação de conhecimento. Sistemas baseados em conhecimento. Aprendizagem de máquina. Arquiteturas de sistemas de Inteligência Artificial.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1016",
    codigo: "GEX1205",
    nome: "INTRODUÇÃO AO DESENVOLVIMENTO WEB",
    ementa: "Introdução à Web: histórico, estrutura e funcionamento. Desenvolvimento front-end para a Web: páginas estáticas com HTML e CSS. Conceitos sobre responsividade, acessibilidade e usabilidade em sistemas Web. Introdução a linguagem Javascript e a frameworks CSS.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1017",
    codigo: "GEX1163",
    nome: "INTRODUÇÃO À COMPUTAÇÃO",
    ementa: "Introdução ao Curso de Ciência da Computação e à Universidade Federal da Fronteira Sul: principais estruturas e regulamentos. Introdução à área da Computação: inserção e desenvolvimento profissional, carreira acadêmica e técnica, tecnologias e seus impactos nas relações Étnico-Raciais e culturais. Conhecimentos e comandos básicos em sistemas operacionais abertos. Fundamentos básicos da Computação: história, principais componentes de hardware e software, sistemas de numeração, aritmética binária e suas operações. Principais ferramentas e tecnologias para o desenvolvimento e versionamento de código.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1018",
    codigo: "GCH1740",
    nome: "INTRODUÇÃO À FILOSOFIA",
    ementa: "A natureza e especificidade do discurso filosófico e sua relação com outros campos do conhecimento; principais correntes do pensamento filosófico; Fundamentos filosóficos da Modernidade. Tópicos de Ética e de Epistemologia.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1019",
    codigo: "GCH293",
    nome: "INTRODUÇÃO À FILOSOFIA",
    ementa: "A natureza e especificidade do discurso filosófico e sua relação com outros campos do conhecimento; principais correntes do pensamento filosófico; Fundamentos filosóficos da Modernidade. Tópicos de Ética e de Epistemologia.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1020",
    codigo: "GEX1224",
    nome: "LINGUAGENS DE PROGRAMAÇÃO",
    ementa: "Conceitos e evolução das principais linguagens de programação. Visão geral sobre diferentes paradigmas de programação. Desenvolvimento em paradigmas não usuais de programação. Análise léxica, sintática e semântica. Aspectos de implementação de linguagens de programação: expressões, tipos de dados, operadores, desvios condicionais, subprogramas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1021",
    codigo: "GEX101",
    nome: "LINGUAGENS FORMAIS E AUTÔMATOS",
    ementa: "Alfabeto, palavras, linguagens, autômatos, gramáticas e suas representações. A hierarquia de Chomsky. Linguagens regulares, autômatos finitos, gramáticas regulares e expressões regulares. Linguagens livres de contexto, gramáticas livres do contexto e autômatos de pilha. Linguagens sensíveis ao contexto e irrestritas. Gramáticas: ambiguidade e desambiguação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1022",
    codigo: "GEX1218",
    nome: "LINGUAGENS FORMAIS E AUTÔMATOS",
    ementa: "Alfabeto, palavras, linguagens, autômatos, gramáticas e suas representações. A hierarquia de Chomsky. Linguagens regulares, autômatos finitos, gramáticas regulares e expressões regulares. Linguagens livres de contexto, gramáticas livres do contexto e autômatos de pilha. Linguagens sensíveis ao contexto e irrestritas. Gramáticas: ambiguidade e desambiguação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1023",
    codigo: "GLA045",
    nome: "LÍNGUA BRASILEIRA DE SINAIS (Libras)",
    ementa: "Visão contemporânea da inclusão e da educação especial na área da surdez. Cultura e identidade da pessoa surda. Tecnologias voltadas para a surdez. História da linguagem de movimentos e gestos. Breve introdução aos aspectos clínicos, educacionais e socioantropológicos da surdez. Características básicas da fonologia de Libras: configurações de mão, movimento, locação, orientação da mão, expressões não-manuais. O alfabeto: expressões manuais e não manuais. Sistematização e operacionalização do léxico. Morfologia, sintaxe, semântica e pragmática da Libras; Diálogo e conversação. Didática para o ensino de Libras.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1024",
    codigo: "GEX1053",
    nome: "MATEMÁTICA C",
    ementa: "Grandezas proporcionais. Noções de geometria. Conjuntos numéricos. Equações e inequações. Funções.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1025",
    codigo: "GEX213",
    nome: "MATEMÁTICA C",
    ementa: "Grandezas proporcionais. Noções de geometria. Conjuntos numéricos. Equações e inequações. Funções.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1026",
    codigo: "GEX1217",
    nome: "MATEMÁTICA DISCRETA",
    ementa: "Noções de Lógica proporcional e de predicado e Teoria dos Conjuntos. Relações. Funções. Prova por redução ao absurdo, por indução e por indução generalizada. Recorrências lineares. Combinatória finita: princípios aditivos, multiplicativo e da casa dos pombos, permutações, combinações e binômio de Newton.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1027",
    codigo: "GEX608",
    nome: "MATEMÁTICA DISCRETA",
    ementa: "Noções de Lógica e de Teoria dos Conjuntos. Relações. Funções. Prova por redução ao ab- surdo, por indução e por indução generalizada. Recorrências lineares. Combinatória finita: princípios aditivos, multiplicativo e da casa dos pombos, permutações, combinações e binô- mio de Newton. Notação, definições e introdução a lógica matemática e teoria dos conjun- tos. Relações, funções, números naturais, conjuntos contáveis e incontáveis, indução mate- mática, relações de recorrência.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1028",
    codigo: "GCS0686",
    nome: "MEIO AMBIENTE, ECONOMIA E SOCIEDADE",
    ementa: "Modos de produção: organização social, Estado, mundo do trabalho, ciência e tecnologia. Elementos de economia ecológica e política. Estado atual do capitalismo. Modelos produtivos e sustentabilidade. Experiências produtivas alternativas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1029",
    codigo: "GCS238",
    nome: "MEIO AMBIENTE, ECONOMIA E SOCIEDADE",
    ementa: "Modos de produção: organização social, Estado, mundo do trabalho, ciência e tecnologia. Elementos de economia ecológica e política. Estado atual do capitalismo. Modelos produtivos e sustentabilidade. Experiências produtivas alternativas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1030",
    codigo: "GEX1230",
    nome: "MODELAGEM E SIMULAÇÃO",
    ementa: "Conceitos e aplicações de modelagem e simulação. Propriedades, classificação e processo de projeto de modelos de simulação. Simulação discreta e contínua. Escalonamento, probabilidade e variabilidade em modelos. Metodologias, técnicas e ferramentas para modelagem e simulação computacional. Verificação e validação de modelos. Simulação paralela e distribuída. Modelos heterogêneos e de sincronização híbrida. Arquiteturas e formalismos de simulação. Estudos de casos e tendências em simulação computacional.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1031",
    codigo: "GEX622",
    nome: "MODELAGEM E SIMULAÇÃO",
    ementa: "Conceitos e aplicações de modelagem e simulação. Propriedades, classificação e processo de projeto de modelos de simulação. Simulação discreta e contínua. Escalonamento, probabilidade e variabilidade em modelos. Metodologias, técnicas e ferramentas para modelagem e simulação computacional. Verificação e validação de modelos. Simulação paralela e distribuída. Modelos heterogêneos e de sincronização híbrida. Arquiteturas e formalismos de simulação. Estudos de casos e tendências em simulação computacional.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1032",
    codigo: "GEX1213",
    nome: "ORGANIZAÇÃO DE COMPUTADORES",
    ementa: "Tendências tecnológicas de CPUs, memórias e barramentos. CPU: arquitetura do conjunto de instruções, modos de endereçamento, formatos de instruções e linguagem de montagem. Implementação do conjunto de instruções. Hierarquia de memória e associatividade (cache e TLB). Dispositivos de entrada e saída: tipos, características e sua conexão à CPU e à memória. Comunicação com a CPU (polling, interrupção, DMA). Medidas de desempenho.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1033",
    codigo: "GEX612",
    nome: "ORGANIZAÇÃO DE COMPUTADORES",
    ementa: "Tendências tecnológicas de CPUs, memórias e barramentos. Hierarquia de memória e asso- ciatividade (cache e TLB). Dispositivos de entrada e saída: tipos, características e sua cone- xão à CPU e à memória. Comunicação com a CPU (polling, interrupção, DMA). CPU: ins- truções e modos de endereçamento. Formatos de instruções e linguagem de montagem. Si- mulador e montador. Exceções e interrupções. Medidas de desempenho.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1034",
    codigo: "GEX609",
    nome: "PESQUISA E ORDENAÇÃO DE DADOS",
    ementa: "Métodos de ordenação. Busca linear e binária. Organização de arquivos. Persistência de da- dos. Ordenação externa. Índices (árvores B+ e hashing). Compactação de dados. Implemen- tações com linguagem imperativa estruturada.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1035",
    codigo: "GEX441",
    nome: "PESQUISA OPERACIONAL",
    ementa: "Modelagem. Modelos lineares determinísticos contínuos: revisão de álgebra linear, programação linear, simplex e sensibilidade. Modelos determinísticos lineares discretos: problemas simples em redes, programação linear inteira, cortes e branch-and-bound. Processos de decisão sequencial: programação dinâmica e heurística. Cadeias de Markov: estabilidade e otimalidade, aplicação a filas elementares.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1036",
    codigo: "GCS580",
    nome: "PLANEJAMENTO E GESTÃO DE PROJETOS",
    ementa: "Projetos. Gerenciamento de projetos. Gerenciamento de projetos de software. Metodologias de planejamento e gestão de projetos. Áreas de conhecimento da gerência de projetos: Escopo, Tempo, Risco, Integração, Comunicação, Custo, Recursos Humanos, Aquisição e Qualidade. Grupos de processos: Iniciação, Planejamento, Execução, Controle, Encerramento. Técnicas de acompanhamento de projetos. Metodologias ágeis para gerenciamento de projetos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1037",
    codigo: "GCS817",
    nome: "PLANEJAMENTO E GESTÃO DE PROJETOS",
    ementa: "Metodologias para planejamento e gestão de projetos. Gerenciamento de projetos de software. Metodologias ágeis para gerenciamento de projetos. Comparação entre PMBOK e Scrum. Técnicas ágeis de monitoramento de projetos. Gerência de requisitos em projetos ágeis. MVP (Mínimo Produto Viável). Kanban. Métricas do Kanban. Estimativas ágeis. Testes de software no desenvolvimento ágil. Princípios da Startup Enxuta (Lean Startup). Business Model Canvas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1038",
    codigo: "GEX055",
    nome: "PROBABILIDADE E ESTATÍSTICA",
    ementa: "Probabilidade. Teorema de Bayes. Variáveis aleatórias discretas e contínuas. Principais dis- tribuições discretas. Principais distribuições contínuas. Estimação de parâmetros. Testes de hipóteses. Correlação e Regressão. Princípios Básicos de Experimentação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1039",
    codigo: "GEX1212",
    nome: "PROBABILIDADE E ESTATÍSTICA",
    ementa: "Probabilidade. Teorema de Bayes. Variáveis aleatórias discretas e contínuas. Principais distribuições discretas. Principais distribuições contínuas. Estimação de parâmetros. Testes de hipóteses. Correlação e Regressão. Princípios Básicos de Experimentação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1040",
    codigo: "GLA0689",
    nome: "PRODUÇÃO TEXTUAL ACADÊMICA",
    ementa: "Língua, linguagem e sociedade. Leitura e produção de textos. Mecanismos de textualização e de argumentação dos gêneros acadêmicos: resumo, resenha, handout, seminário. Estrutura geral e função sociodiscursiva do artigo científico. Tópicos de revisão textual.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1041",
    codigo: "GLA104",
    nome: "PRODUÇÃO TEXTUAL ACADÊMICA",
    ementa: "Língua, linguagem e sociedade. Leitura e produção de textos. Mecanismos de textualização e de argumentação dos gêneros acadêmicos: resumo, resenha, handout, seminário. Estrutura geral e função sociodiscursiva do artigo científico. Tópicos de revisão textual.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1042",
    codigo: "GEX432",
    nome: "PROGRAMAÇÃO FUNCIONAL E LÓGICA",
    ementa: "Introdução ao paradigma de programação funcional: nomes, funções, tipos, funções de ordem superior, polimorfismos, linguagens funcionais. Introdução ao paradigma de programação lógica: lógica de primeira ordem, lógica clausal, resoluções SLD e Chã, unificação, estratégias de procura, corte e negação, linguagens lógicas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1043",
    codigo: "GEX098",
    nome: "PROGRAMAÇÃO I",
    ementa: "Conceitos de programação orientada a objetos. Classes. Herança. Encapsulamento. Poli- morfismo. Sobreposição e sobrecarga. Associações. Reusabilidade de software. Componen- tes. Criação e uso de bibliotecas de classes. Interface gráfica com o usuário. Persistência de dados e de objetos. Tratamento de exceções e erros. Pacotes. Aspectos de projeto orientado a objetos. Prática de programação usando uma linguagem de programação orientada a obje- tos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1044",
    codigo: "GEX613",
    nome: "PROGRAMAÇÃO II",
    ementa: "Conceitos de aplicações para a Web. Conceitos básicos sobre estrutura cliente/servidor, arquitetura em camadas. Servidores web. Mecanismos de renderização de conteúdo. Linguagens de marcação. Folhas de CSS. Linguagens clientside e server-side. Protocolo HTTP/HTTPS e troca de informa- ções entre clientes e servidores. Cookies, sessões e autenticação. Integração de aplicações web com banco de dados. Padrão MVC e frameworks de desenvolvimento. Desenvolvimento de aplicações para a Web. Noções de segurança em aplicações Web.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1045",
    codigo: "GEX1211",
    nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
    ementa: "Conceitos de programação orientada a objetos. Classes e Interfaces. Abstração. Herança. Encapsulamento. Polimorfismo. Sobrecarga e Sobrescrita. Associações. Reusabilidade de software. Tratamento de exceções. Interface gráfica com o usuário. Coleções, streams, expressões lambda e funções de alta ordem. Prática de programação usando uma linguagem de programação orientada a objetos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1046",
    codigo: "GCH1993",
    nome: "PROJETO DE INTEGRAÇÃO DE EXTENSÃO",
    ementa: "Concepção, prática, acompanhamento, sistematização e avaliação das atividades de extensão na Computação. Elaboração, submissão e execução de atividade de extensão, no formato de programa, projeto, curso, evento, prestação de serviços, publicações ou outros produtos acadêmicos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1047",
    codigo: "GEX105",
    nome: "REDES DE COMPUTADORES",
    ementa: "Fundamentos de transmissão de dados e sistemas de comunicação. Conceitos, classificação e topologias das redes. Modelos de referência: OSI e TCP/IP. Protocolos e serviços de co- municação. Internet e Intranets. Meios de transmissão de dados. Equipamentos de interco- nexão. Avaliação de desempenho.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1048",
    codigo: "GEX1221",
    nome: "REDES DE COMPUTADORES",
    ementa: "Fundamentos de sistemas de comunicação de dados. Arquiteturas de redes: modelos OSI e TCP/IP. Protocolos de comunicação na Internet: camadas de aplicação, transporte, rede e enlace. Avaliação de desempenho.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1049",
    codigo: "GEX112",
    nome: "SEGURANÇA E AUDITORIA DE SISTEMAS",
    ementa: "Segurança em aplicações: programação segura, detecção de falhas, códigos maliciosos (malware). Segurança em sistemas operacionais: princípios de controle de acesso, sistemas confiáveis. Segurança em redes de computadores: ataques e defesas. Princípios de criptografia: criptografia simétrica e assimétrica, integridade de dados. Protocolos de autenticação: princípios, infraestrutura de chaves públicas e aplicações e protocolos criptográficos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1084",
    codigo: "GEX1093",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLIII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1050",
    codigo: "GEX1228",
    nome: "SEGURANÇA E AUDITORIA DE SISTEMAS",
    ementa: "Segurança em aplicações: programação segura, detecção de falhas, códigos maliciosos (malware). Segurança em sistemas operacionais: princípios de controle de acesso, sistemas confiáveis. Segurança em redes de computadores: ataques e defesas. Princípios de criptografia: criptografia simétrica e assimétrica, integridade de dados. Protocolos de autenticação: princípios, infraestrutura de chaves públicas e aplicações e protocolos criptográficos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1051",
    codigo: "GEX440",
    nome: "SISTEMAS DE INFORMAÇÃO",
    ementa: "Conceitos e teoria de sistemas. Classificação, objetivos, funções e componentes dos sistemas de informação. Níveis de sistemas: estratégico, tático e operacional. Dimensões tecnológica, organizacional e humana. Administração de sistemas de informação. Planejamento estratégico de sistemas de informação. Governança de tecnologia de informação. Planejamento estratégico de sistemas de informação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1052",
    codigo: "GEX437",
    nome: "SISTEMAS DE TEMPO REAL",
    ementa: "Conceituação básica e caracterização de um sistema de tempo real. Escalonamento de tempo real: modelo de tarefas; abordagens de escalonamento de tempo real. Controle de acesso a recursos: uso de protocolos de acesso a recursos. Comunicação em tempo real: requisitos, protocolos. Sistemas operacionais de tempo real: aspectos funcionais, aspectos temporais, estudo de casos. Linguagens de programação de tempo real: características, requisitos, software, estudo de casos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1053",
    codigo: "GEX1209",
    nome: "SISTEMAS DIGITAIS",
    ementa: "Dispositivos Lógicos Programáveis. Introdução à Linguagem de Descrição de Hardware. Prototipação de hardware utilizando FPGAs. Circuitos contadores. Máquinas Sequenciais Síncronas (Mealy e Moore). Síntese de Circuitos Sequenciais. Descrição de Sistemas Digitais no nível de RT. Projeto de Sistemas Digitais no nível de RT (datapath x controle).",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1054",
    codigo: "GEX606",
    nome: "SISTEMAS DIGITAIS",
    ementa: "Dispositivos Lógicos Programáveis. Introdução à Linguagem de Descrição de Hardware. Prototipação de hardware utilizando FPGAs. Máquinas Sequenciais Síncronas (Mealy e Moore). Síntese de Circuitos Sequenciais. Descrição de Sistemas Digitais no nível de RT. Projeto de Sistemas Digitais no nível de RT (datapath x controle).",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1055",
    codigo: "GEX434",
    nome: "SISTEMAS MULTIMÍDIA",
    ementa: "Definição de sistemas multimídia e problemática envolvida. Representação digital de áudio, imagens e vídeos. Técnicas e padrões de compressão. Aplicações de multimídia: caracterização e requisitos. Protocolos de transporte de mídia e de controle-sinalização. Qualidade de Serviço.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1056",
    codigo: "GEX110",
    nome: "SISTEMAS OPERACIONAIS",
    ementa: "Histórico de Sistemas Operacionais. Arquitetura de Sistemas Operacionais. Funcionalida- des de Sistemas Operacionais. Gerência de Processos e Threads: Controle e Escalonamen- to. Impasses: Modelagem e Tratamento. Memória: Alocação, Gerência e Memória Virtual. Entrada e Saída: princípios de hardware e software, dispositivos periféricos. Sistema de Ar- quivos: Arquivos, Diretórios e Implementação. Proteção e Segurança. Sistemas com Múlti- plos Processadores.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1057",
    codigo: "GEX1219",
    nome: "SISTEMAS OPERACIONAIS",
    ementa: "Histórico de Sistemas Operacionais. Arquitetura de Sistemas Operacionais. Funcionalidades de Sistemas Operacionais. Gerência de Processos e Threads: Controle e Escalonamento. Impasses: Modelagem e Tratamento. Memória: Alocação, Gerência e Memória Virtual. Entrada e Saída: princípios de hardware e software, dispositivos periféricos. Sistema de Arquivos: Arquivos, Diretórios e Implementação. Proteção e Segurança. Sistemas com Múltiplos Processadores.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1058",
    codigo: "GEX656",
    nome: "TECNOLOGIA E DESENVOLVIMENTO",
    ementa: "Preceitos e contribuições dos estudos CTS. Definições de ciência, tecnologia e técnica. As imagens da tecnologia. Relações entre ciência, tecnologia e sociedade. Desenvolvimento tecnológico e desenvolvimento social. Difusão de novas tecnologias. Sociedade tecnológica e suas implicações. As noções de risco e de impacto tecnológico. Modelos de produção e modelos de sociedade. Influências da ciência e da tecnologia na organização social. Questões contemporâneas.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1059",
    codigo: "GEX1220",
    nome: "TEORIA DA COMPUTAÇÃO",
    ementa: "Máquinas de Turing e variantes. A tese de Church-Turing. Computabilidade. Decidibilidade. Redutibilidade. Teoria da Complexidade. Complexidade de Tempo. As classes P, NP e Np Completude. Complexidade de Espaço. Tópicos avançados em Teoria da Computação.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1060",
    codigo: "GEX614",
    nome: "TEORIA DA COMPUTAÇÃO",
    ementa: "Introdução a modelos formais de computação. Máquinas de Turing. Funções Recursivas. Computabilidade. Decidibilidade. Classes de complexidade de problemas computacionais. Circuitos booleanos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1065",
    codigo: "GEX623",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO I",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1066",
    codigo: "GEX624",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO II",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1067",
    codigo: "GEX625",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO III",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1068",
    codigo: "GEX626",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO IV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1069",
    codigo: "GEX631",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO IX",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1070",
    codigo: "GEX1100",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO L",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1071",
    codigo: "GEX627",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO V",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1072",
    codigo: "GEX628",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO VI",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1073",
    codigo: "GEX629",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO VII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1074",
    codigo: "GEX630",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO VIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1075",
    codigo: "GEX632",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO X",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1076",
    codigo: "GEX633",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XI",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1077",
    codigo: "GEX634",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1078",
    codigo: "GEX635",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1079",
    codigo: "GEX636",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XIV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1087",
    codigo: "GEX1095",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1088",
    codigo: "GEX1096",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLVI",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1089",
    codigo: "GEX1097",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLVII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1090",
    codigo: "GEX1098",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XLVIII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1091",
    codigo: "GEX637",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1092",
    codigo: "GEX638",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XVI",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1093",
    codigo: "GEX639",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XVII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1094",
    codigo: "GEX640",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XVIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1095",
    codigo: "GEX642",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XX",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1096",
    codigo: "GEX643",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXI",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1097",
    codigo: "GEX644",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1098",
    codigo: "GEX645",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1099",
    codigo: "GEX646",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXIV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1100",
    codigo: "GEX651",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXIX",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1101",
    codigo: "GEX647",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXV",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1102",
    codigo: "GEX648",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXVI",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1103",
    codigo: "GEX649",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXVII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1104",
    codigo: "GEX650",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXVIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1105",
    codigo: "GEX652",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXX",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1106",
    codigo: "GEX1081",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXI",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1107",
    codigo: "GEX1082",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1108",
    codigo: "GEX1083",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXIII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1109",
    codigo: "GEX1084",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXIV",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1110",
    codigo: "GEX1089",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXIX",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1111",
    codigo: "GEX1085",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXV",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1112",
    codigo: "GEX1086",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXVI",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1113",
    codigo: "GEX1087",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXVII",
    ementa: "Ementa aberta conforme tema a ser trabalhado.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1114",
    codigo: "GEX1088",
    nome: "TÓPICOS ESPECIAIS EM COMPUTAÇÃO XXXVIII",
    ementa: "Conteúdo variável respeitando os objetivos mencionados.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1115",
    codigo: "GEX517",
    nome: "ÁLGEBRA",
    ementa: "Anéis. Ideais. Corpos. Anéis de polinômios. Grupos.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1116",
    codigo: "GEX1144",
    nome: "ÁLGEBRA LINEAR",
    ementa: "Matrizes. Determinantes. Sistemas de equações lineares. Espaços Vetoriais. Espaços com produto interno. Transformações Lineares. Autovalores e autovetores. Diagonalização.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  },
  {
    id: "1117",
    codigo: "GEX607",
    nome: "ÁLGEBRA LINEAR",
    ementa: "Matrizes. Determinantes. Sistemas de equações lineares. Espaços vetoriais. Transformações lineares. Espaços com produto interno. Autovalores e autovetores. Diagonalização.",
    creditos: "4",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
  }
];

				await queryInterface.bulkInsert("ccr", data, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("ccr", null, {});
	},
};


export interface Entity {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  logo?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
  whatsapp?: string;
  website?: string;
  president: string;
  founded: number;
  members: number;
  tags: string[];
  events: Event[];
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
}

export const categories = [
  "Acadêmica",
  "Empreendedorismo",
  "Cultura",
  "Esportes",
  "Responsabilidade Social",
  "Tecnologia",
  "Finanças",
  "Consultoria",
  "Pesquisa",
  "Networking"
];

export const entities: Entity[] = [
  {
    id: "1",
    name: "Insper Jr.",
    category: "Consultoria",
    description: "Empresa júnior de consultoria em gestão e estratégia",
    longDescription: "A Insper Jr. é a empresa júnior oficial do Insper, focada em consultoria empresarial. Desenvolvemos projetos de gestão, estratégia e análise de mercado para empresas de diversos setores, proporcionando experiência prática aos alunos.",
    instagram: "@insperjr",
    linkedin: "insper-jr",
    email: "contato@insperjr.com.br",
    president: "Maria Silva",
    founded: 2010,
    members: 45,
    tags: ["consultoria", "estratégia", "gestão", "projetos"],
    events: [
      {
        id: "1",
        title: "Workshop de Consultoria",
        date: "2024-08-15",
        description: "Aprenda as principais metodologias de consultoria",
        location: "Auditório Principal"
      }
    ],
    featured: true
  },
  {
    id: "2",
    name: "Insper Ventures",
    category: "Empreendedorismo",
    description: "Incubadora de startups e projetos empreendedores",
    longDescription: "O Insper Ventures é o hub de empreendedorismo do Insper, focado em fomentar o ecossistema de startups e inovação. Oferecemos mentorias, workshops e suporte para transformar ideias em negócios de sucesso.",
    instagram: "@insperventures",
    linkedin: "insper-ventures",
    email: "ventures@insper.edu.br",
    president: "João Santos",
    founded: 2015,
    members: 32,
    tags: ["startups", "inovação", "mentoria", "pitch"],
    events: [
      {
        id: "2",
        title: "Pitch Day",
        date: "2024-08-20",
        description: "Apresentação de startups desenvolvidas pelos alunos",
        location: "Espaço Inovação"
      }
    ],
    featured: true
  },
  {
    id: "3",
    name: "Liga de Mercado Financeiro",
    category: "Finanças",
    description: "Estudo e análise dos mercados financeiros",
    longDescription: "A Liga de Mercado Financeiro promove o conhecimento sobre investimentos, análise de mercado e economia. Realizamos simulações de trading, estudos de caso e palestras com profissionais do mercado.",
    instagram: "@lmfinsper",
    linkedin: "liga-mercado-financeiro-insper",
    email: "lmf@insper.edu.br",
    president: "Ana Costa",
    founded: 2012,
    members: 28,
    tags: ["investimentos", "trading", "análise", "economia"],
    events: [
      {
        id: "3",
        title: "Simulação de Trading",
        date: "2024-08-25",
        description: "Competição de trading com prêmios",
        location: "Lab de Finanças"
      }
    ],
    featured: false
  },
  {
    id: "4",
    name: "Enactus Insper",
    category: "Responsabilidade Social",
    description: "Projetos de impacto social através do empreendedorismo",
    longDescription: "A Enactus Insper desenvolve projetos de empreendedorismo social, criando soluções inovadoras para problemas sociais e ambientais. Nosso foco é gerar impacto positivo na comunidade através de negócios sustentáveis.",
    instagram: "@enactusinsper",
    linkedin: "enactus-insper",
    email: "enactus@insper.edu.br",
    president: "Carlos Oliveira",
    founded: 2014,
    members: 38,
    tags: ["impacto social", "sustentabilidade", "comunidade", "inovação"],
    events: [
      {
        id: "4",
        title: "Feira de Impacto Social",
        date: "2024-09-05",
        description: "Apresentação dos projetos sociais desenvolvidos",
        location: "Pátio Central"
      }
    ],
    featured: true
  },
  {
    id: "5",
    name: "Atlética Insper",
    category: "Esportes",
    description: "Organização esportiva oficial do Insper",
    longDescription: "A Atlética Insper promove atividades esportivas, competições e eventos que fortalecem o espírito de equipe e a vida social dos alunos. Participamos de campeonatos universitários e organizamos torneios internos.",
    instagram: "@atleticainsper",
    linkedin: "atletica-insper",
    email: "atletica@insper.edu.br",
    president: "Pedro Almeida",
    founded: 2009,
    members: 120,
    tags: ["esportes", "competições", "equipe", "saúde"],
    events: [
      {
        id: "5",
        title: "Torneio Interno de Futebol",
        date: "2024-09-10",
        description: "Campeonato entre as turmas do Insper",
        location: "Quadra Esportiva"
      }
    ],
    featured: false
  },
  {
    id: "6",
    name: "Insper Coding",
    category: "Tecnologia",
    description: "Comunidade de programação e desenvolvimento",
    longDescription: "O Insper Coding é a comunidade de tecnologia do Insper, focada em desenvolvimento de software, programação competitiva e projetos de tecnologia. Organizamos hackathons, workshops e grupos de estudo.",
    instagram: "@inspercoding",
    linkedin: "insper-coding",
    email: "coding@insper.edu.br",
    president: "Julia Ferreira",
    founded: 2016,
    members: 55,
    tags: ["programação", "hackathon", "desenvolvimento", "tecnologia"],
    events: [
      {
        id: "6",
        title: "Hackathon Insper",
        date: "2024-09-15",
        description: "Maratona de programação de 48 horas",
        location: "Labs de Informática"
      }
    ],
    featured: true
  },
  {
    id: "7",
    name: "Grêmio Estudantil",
    category: "Acadêmica",
    description: "Representação estudantil oficial do Insper",
    longDescription: "O Grêmio Estudantil representa os interesses dos alunos perante a administração, organiza eventos acadêmicos e sociais, e atua como ponte entre estudantes e instituição para melhorias contínuas.",
    instagram: "@gremioinsper",
    linkedin: "gremio-estudantil-insper",
    email: "gremio@insper.edu.br",
    president: "Fernanda Lima",
    founded: 2008,
    members: 15,
    tags: ["representação", "eventos", "estudantes", "advocacy"],
    events: [
      {
        id: "7",
        title: "Assembleia Geral",
        date: "2024-09-20",
        description: "Discussão sobre melhorias para os estudantes",
        location: "Auditório Principal"
      }
    ],
    featured: false
  },
  {
    id: "8",
    name: "Coral Insper",
    category: "Cultura",
    description: "Grupo musical e cultural do Insper",
    longDescription: "O Coral Insper promove a cultura musical dentro da instituição, realizando apresentações, workshops e eventos culturais. Somos um espaço de expressão artística e desenvolvimento de talentos musicais.",
    instagram: "@coralinsper",
    email: "coral@insper.edu.br",
    president: "Ricardo Moura",
    founded: 2013,
    members: 22,
    tags: ["música", "cultura", "apresentações", "arte"],
    events: [
      {
        id: "8",
        title: "Concerto de Outono",
        date: "2024-09-25",
        description: "Apresentação musical do coral",
        location: "Teatro Insper"
      }
    ],
    featured: false
  }
];

export const featuredEntities = entities.filter(entity => entity.featured);

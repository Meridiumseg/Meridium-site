import { EngineeringCategory } from "./types";

export const engineeringSolutions: EngineeringCategory[] = [
  {
    id: "residencial",

    title: "Elétrica Residencial",

    subtitle: "Projetos • Instalações • Modernização",

    description:
      "Serviços completos para instalações elétricas residenciais, reformas, ampliações, inspeções e adequações conforme normas técnicas.",

    icon: "Home",

    color: "#0F5C3A",

    image: "/images/engineering/residential.webp",

    services: [
      "Projeto Elétrico Residencial",
      "Dimensionamento de Circuitos",
      "Quadros de Distribuição",
      "Instalação de Disjuntores",
      "Troca de Fiação",
      "Adequações Elétricas",
      "Instalação de Iluminação",
      "Circuitos Dedicados",
      "Levantamento de Carga",
      "Inspeções Técnicas",
      "Correção de Não Conformidades",
      "Ampliação de Instalações",
    ],
  },

  {
    id: "predial",

    title: "Elétrica Predial",

    subtitle: "Infraestrutura • Eficiência • Segurança",

    description:
      "Projetos e serviços destinados a edifícios comerciais, condomínios, centros empresariais e instalações institucionais.",

    icon: "Building2",

    color: "#166534",

    image: "/images/engineering/building.webp",

    services: [
      "Projetos Prediais",
      "Infraestrutura Elétrica",
      "Quadros Gerais",
      "Circuitos Trifásicos",
      "Barramentos",
      "SPDA",
      "Aterramento",
      "Laudos Técnicos",
      "Inspeções",
      "Balanceamento de Carga",
      "Diagramas Unifilares",
      "As Built",
    ],
  },

  {
    id: "industrial",

    title: "Instalações Industriais",

    subtitle: "Montagem • Retrofit • Performance",

    description:
      "Execução de instalações industriais, adequações, ampliações e modernizações em processos produtivos.",

    icon: "Factory",

    color: "#14532D",

    image: "/images/engineering/industrial.webp",

    services: [
      "Infraestrutura Industrial",
      "Eletrocalhas",
      "Leitos",
      "Painéis",
      "Retrofit",
      "Substituição de Cabos",
      "Alimentadores",
      "Comandos",
      "Centro de Controle de Motores",
      "Painéis Elétricos",
      "Comissionamento",
      "Start-up",
    ],
  },

  {
    id: "automation",

    title: "Automação Industrial",

    subtitle: "CLP • IHM • Supervisórios",

    description:
      "Automação de processos industriais utilizando tecnologias modernas para aumento da produtividade.",

    icon: "Cpu",

    color: "#1E8449",

    image: "/images/engineering/automation.webp",

    services: [
      "Programação CLP",
      "IHM",
      "Sensores",
      "Inversores",
      "Soft Starter",
      "Painéis",
      "Integração",
      "Retrofit",
      "Supervisórios",
      "Controle Industrial",
      "Diagnóstico",
      "Otimização",
    ],
  },

  {
    id: "spda",

    title: "SPDA e Aterramento",

    subtitle: "Proteção Elétrica",

    description:
      "Projetos, inspeções e avaliações de sistemas de proteção contra descargas atmosféricas e aterramentos.",

    icon: "Shield",

    color: "#0E6655",

    image: "/images/engineering/spda.webp",

    services: [
      "Projeto SPDA",
      "Inspeção SPDA",
      "Medição de Aterramento",
      "Malha de Terra",
      "Equipotencialização",
      "Dimensionamento",
      "Inspeção Visual",
      "Continuidade Elétrica",
      "Correções",
      "Adequações",
    ],
  },

  {
    id: "substations",

    title: "Subestações até 500 kVA",

    subtitle: "Projeto • Adequação • Manutenção",

    description:
      "Soluções para sistemas elétricos dentro do limite de atribuições do Técnico em Eletrotécnica.",

    icon: "Zap",

    color: "#145A32",

    image: "/images/engineering/substation.webp",

    services: [
      "Projetos até 500 kVA",
      "Diagramas",
      "Dimensionamentos",
      "Inspeções",
      "Adequações",
      "Retrofit",
      "Laudos Técnicos",
      "Comissionamento",
      "Estudos de Carga",
      "Documentação Técnica",
    ],
  },
];

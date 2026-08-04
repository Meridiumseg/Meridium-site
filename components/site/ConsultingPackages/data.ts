import { ConsultingPackage } from "./types";

export const consultingPackages: ConsultingPackage[] = [
  {
    id: "essential",

    name: "Essential",

    badge: "Pequenas Empresas",

    description:
      "Estrutura inicial para empresas que desejam atender aos requisitos legais, reduzir riscos operacionais e iniciar uma gestão profissional de Segurança do Trabalho.",

    idealFor:
      "Empresas iniciando sua estrutura de SST.",

    icon: "Shield",

    color: "#0F5C3A",

    highlight: false,

    features: [
      { title: "Diagnóstico Inicial", included: true },
      { title: "Inspeções Técnicas", included: true },
      { title: "Fiscalizações Operacionais", included: true },
      { title: "Checklists Digitais", included: true },
      { title: "Avaliações de Campo", included: true },
      { title: "Suporte Técnico", included: true },
      { title: "Relatórios Técnicos", included: true },
      { title: "Plano de Melhorias", included: true },
      { title: "Dashboard BI", included: false },
      { title: "Auditorias Estratégicas", included: false },
      { title: "Gestão de Indicadores", included: false },
      { title: "Consultoria Contínua", included: false },
    ],
  },

  {
    id: "professional",

    name: "Professional",

    badge: "Médias Empresas",

    description:
      "Consultoria completa para empresas que necessitam de acompanhamento técnico periódico, auditorias e gestão estratégica.",

    idealFor:
      "Empresas em crescimento.",

    icon: "Briefcase",

    color: "#166534",

    highlight: true,

    features: [
      { title: "Diagnóstico Inicial", included: true },
      { title: "Inspeções Técnicas", included: true },
      { title: "Fiscalizações Operacionais", included: true },
      { title: "Checklists Digitais", included: true },
      { title: "Avaliações de Campo", included: true },
      { title: "Suporte Técnico", included: true },
      { title: "Relatórios Técnicos", included: true },
      { title: "Plano de Melhorias", included: true },
      { title: "Dashboard BI", included: true },
      { title: "Auditorias Estratégicas", included: true },
      { title: "Gestão de Indicadores", included: true },
      { title: "Consultoria Contínua", included: false },
    ],
  },

  {
    id: "enterprise",

    name: "Enterprise",

    badge: "Grandes Empresas",

    description:
      "Modelo premium voltado para empresas que buscam transformação operacional, Business Intelligence e gestão integrada de Segurança, Engenharia e Performance.",

    idealFor:
      "Indústrias, concessionárias e grandes operações.",

    icon: "Building2",

    color: "#14532D",

    highlight: false,

    features: [
      { title: "Diagnóstico Inicial", included: true },
      { title: "Inspeções Técnicas", included: true },
      { title: "Fiscalizações Operacionais", included: true },
      { title: "Checklists Digitais", included: true },
      { title: "Avaliações de Campo", included: true },
      { title: "Suporte Técnico", included: true },
      { title: "Relatórios Técnicos", included: true },
      { title: "Plano de Melhorias", included: true },
      { title: "Dashboard BI", included: true },
      { title: "Auditorias Estratégicas", included: true },
      { title: "Gestão de Indicadores", included: true },
      { title: "Consultoria Contínua", included: true },
    ],
  },
];

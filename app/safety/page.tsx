import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionTemplate from "@/components/site/DivisionTemplate";
import { getContact } from "@/lib/getContact";

export const revalidate = 60;

export default async function SafetyPage() {
  const contact = await getContact();

  return (
    <>
      <Header contact={contact} />
      <DivisionTemplate
        eyebrow="MERIDIUM Safety"
        title="Segurança do Trabalho, muito além da conformidade legal."
        intro="Consultoria, auditorias, inspeções e gestão de riscos para operações que não podem parar. Transformamos exigência normativa em processo estruturado e mensurável."
        categories={[
          {
            name: "Consultoria em SST",
            items: [
              "Diagnóstico de Conformidade Legal",
              "Gestão Mensal de SST",
              "Auditoria Técnica",
              "Auditoria Operacional",
              "Fiscalização de Obras",
              "Fiscalização Industrial",
              "Gestão de Terceiros",
              "Planejamento Estratégico de SST",
              "Organização Documental",
              "Preparação para Fiscalizações",
            ],
          },
          {
            name: "Inspeções especializadas",
            items: [
              "Inspeção NR-12",
              "Inspeção NR-10",
              "Inspeção de Painéis Elétricos",
              "Inspeção de Extintores",
              "Inspeção de Hidrantes",
              "Inspeção de Linhas de Vida",
              "Inspeção de Andaimes",
              "Inspeção de EPC e EPI",
            ],
          },
          {
            name: "Bombeiro Civil",
            items: [
              "Plano de Emergência",
              "Brigada de Incêndio",
              "Simulados",
              "Avaliação de Risco de Incêndio",
              "Rotas de Fuga",
            ],
          },
        ]}
        flagship={{
          serviceName: '"Inspeção NR-12"',
          solutionName: "Integridade de Máquinas Industriais®",
          tagline: "Diagnóstico completo, não apenas uma inspeção pontual.",
          deliverables: [
            "Diagnóstico completo",
            "Inspeção técnica",
            "Inventário fotográfico",
            "Checklist técnico",
            "Relatório executivo",
            "Plano de adequação priorizado",
            "Acompanhamento das correções",
            "Reinspeção",
          ],
        }}
      />
      <Footer contact={contact} />
    </>
  );
}

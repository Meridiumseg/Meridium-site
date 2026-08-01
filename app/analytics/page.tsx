import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionTemplate from "@/components/site/DivisionTemplate";
import { getContact } from "@/lib/getContact";

export const revalidate = 60;

export default async function AnalyticsPage() {
  const contact = await getContact();

  return (
    <>
      <Header contact={contact} />
      <DivisionTemplate
        eyebrow="MERIDIUM Analytics"
        title="Transformando informações em vantagem competitiva."
        intro="Dashboards, indicadores e inteligência de dados aplicados à segurança e à operação — para decisões mais rápidas e assertivas."
        categories={[
          {
            name: "Business Intelligence",
            items: [
              "Dashboards Power BI",
              "Indicadores de SST",
              "Indicadores Operacionais",
              "Dashboards Gerenciais",
              "BI para SESMT",
              "BI para Engenharia",
            ],
          },
        ]}
        flagship={{
          serviceName: '"Dashboard Power BI"',
          solutionName: "Visão Executiva de Risco®",
          tagline: "Indicadores que viram decisão, não só relatório.",
          deliverables: [
            "Levantamento de dados e fontes",
            "Modelagem de indicadores",
            "Dashboard executivo em Power BI",
            "Reunião de leitura dos indicadores",
            "Atualização periódica",
          ],
        }}
      />
      <Footer contact={contact} />
    </>
  );
}

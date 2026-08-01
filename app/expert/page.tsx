import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionTemplate from "@/components/site/DivisionTemplate";
import { getContact } from "@/lib/getContact";

export const revalidate = 60;

export default async function ExpertPage() {
  const contact = await getContact();

  return (
    <>
      <Header contact={contact} />
      <DivisionTemplate
        eyebrow="MERIDIUM Expert"
        title="Análises fundamentadas em evidências."
        intro="Perícias técnicas, assistência técnica judicial e investigação de acidentes — pareceres que resistem a qualquer questionamento."
        categories={[
          {
            name: "Perícias e assistência técnica",
            items: [
              "Assistência Técnica Judicial",
              "Parecer Técnico",
              "Investigação de Acidentes",
              "Análise de Causa Raiz",
              "Vistorias",
              "Perícias Extrajudiciais",
            ],
          },
        ]}
        flagship={{
          serviceName: '"Parecer Técnico"',
          solutionName: "Evidência Técnica Defensável®",
          tagline: "Um parecer construído para resistir a qualquer questionamento.",
          deliverables: [
            "Levantamento de evidências",
            "Análise técnica fundamentada",
            "Registro fotográfico",
            "Parecer redigido tecnicamente",
            "Suporte à assistência técnica judicial",
          ],
        }}
      />
      <Footer contact={contact} />
    </>
  );
}

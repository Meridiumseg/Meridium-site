import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionTemplate from "@/components/site/DivisionTemplate";
import { getContact } from "@/lib/getContact";

export const revalidate = 60;

export default async function AcademyPage() {
  const contact = await getContact();

  return (
    <>
      <Header contact={contact} />
      <DivisionTemplate
        eyebrow="MERIDIUM Academy"
        title="Capacitando pessoas para transformar organizações."
        intro="Treinamentos normativos e desenvolvimento de cultura de segurança — porque toda solução técnica depende de pessoas preparadas para sustentá-la."
        categories={[
          {
            name: "Treinamentos normativos",
            items: ["NR-01", "NR-05", "NR-06", "NR-10", "NR-11", "NR-12", "NR-18", "NR-20", "NR-33", "NR-35"],
          },
          {
            name: "Desenvolvimento corporativo",
            items: ["Workshops", "Palestras técnicas", "Cursos sob medida"],
          },
        ]}
        flagship={{
          serviceName: '"Treinamento NR-35"',
          solutionName: "Programa Corporativo de Capacitação®",
          tagline: "Formação que muda comportamento, não só cumpre carga horária.",
          deliverables: [
            "Diagnóstico de necessidade de treinamento",
            "Conteúdo adaptado à operação do cliente",
            "Certificação dos participantes",
            "Avaliação de aprendizagem",
            "Relatório de participação",
          ],
        }}
      />
      <Footer contact={contact} />
    </>
  );
}

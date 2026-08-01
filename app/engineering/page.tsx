import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import DivisionTemplate from "@/components/site/DivisionTemplate";
import { getContact } from "@/lib/getContact";

export const revalidate = 60;

export default async function EngineeringPage() {
  const contact = await getContact();

  return (
    <>
      <Header contact={contact} />
      <DivisionTemplate
        eyebrow="MERIDIUM Engineering"
        title="Projetos desenvolvidos com precisão técnica."
        intro="Engenharia elétrica, eletrotécnica, automação e manutenção — do projeto ao as built, com rigor normativo em cada etapa."
        categories={[
          {
            name: "Engenharia elétrica",
            items: [
              "Projeto Elétrico Industrial",
              "Projeto Elétrico Comercial",
              "Projeto de Entrada de Energia",
              "Projeto de Quadros Elétricos",
              "Projeto de SPDA",
              "Projeto de Aterramento",
              "As Built",
              "Estudos de Carga",
              "Eficiência Energética",
            ],
          },
          {
            name: "Manutenção elétrica",
            items: [
              "Manutenção Preventiva",
              "Manutenção Corretiva",
              "Adequação NR-10",
              "Troca de Quadros e Disjuntores",
              "Instalação de DPS e DR",
            ],
          },
          {
            name: "Automação",
            items: [
              "Programação CLP",
              "Painéis de Automação",
              "Retrofit Industrial",
              "Diagnóstico de Automação",
              "Integração de Sistemas",
            ],
          },
        ]}
        flagship={{
          serviceName: '"Projeto Elétrico Industrial"',
          solutionName: "Continuidade Operacional Elétrica®",
          tagline: "Um projeto pensado para durar, não só para aprovar.",
          deliverables: [
            "Levantamento de carga completo",
            "Projeto elétrico dimensionado",
            "Memorial de cálculo",
            "As built",
            "Plano de manutenção associado",
            "Acompanhamento de execução",
          ],
        }}
      />
      <Footer contact={contact} />
    </>
  );
}

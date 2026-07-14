import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Prevenção de Quedas | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba por que idosos caem e como prevenir quedas graves através de avaliação clínica, fortalecimento muscular e segurança doméstica em Maringá.",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.checkIcon}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PrevencaoQuedasPage() {
  const paragraphs = [
    "Quedas na terceira idade não devem ser tratadas como ocorrências naturais da idade. Elas são sinais de alerta clínicos importantes que indicam desequilíbrios físicos, cognitivos ou metabólicos subjacentes que precisam de investigação.",
    "Um evento de queda pode resultar em sérias fraturas (como no fêmur e punho), internações clínicas prolongadas e no 'medo de cair' (síndrome pós-queda), que restringe severamente a mobilidade e o convívio social do paciente.",
    "A prevenção sistemática exige uma abordagem integrada: a melhora da força motora, a eliminação de riscos físicos no lar e a revisão atenta de medicamentos que possam induzir hipotensão (queda de pressão) ou tonturas.",
  ];

  const listItems = [
    "Fraqueza muscular dos membros inferiores e diminuição da flexibilidade articular",
    "Alterações visuais não compensadas ou óculos com lentes desatualizadas",
    "Presença de obstáculos físicos em casa (tapetes soltos, fios, pisos escorregadios, escadas sem corrimão)",
    "Falta de iluminação adequada nos caminhos noturnos (como o trajeto para o banheiro)",
    "Uso de calmantes, diuréticos ou remédios de pressão que causam tontura ou sonolência",
    "Tontura ao se levantar rapidamente da cama ou cadeira (hipotensão ortostática)",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Avaliação da Marcha",
      description: "Teste clínico focado na qualidade do caminhar, velocidade e reflexo corretivo.",
    },
    {
      number: "02",
      title: "Revisão Farmacológica",
      description: "Descontinuação ou ajuste de medicamentos que afetam o equilíbrio do paciente.",
    },
    {
      number: "03",
      title: "Segurança Doméstica",
      description: "Orientações práticas para instalar barras de apoio e remover armadilhas do lar.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Prevenção
            <br />
            de Quedas
          </>
        }
        description="Preservação da integridade física e segurança. Investigação clínica de desequilíbrios, fortalecimento motor e adaptações seguras no lar."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Importância</span>
              <p className={styles.sidebarText}>
                As quedas são as principais causas de internações e cirurgias ortopédicas em idosos.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Intervenção</span>
              <p className={styles.sidebarText}>
                Fisioterapia de equilíbrio, ganho de massa magra e revisão de receitas de múltiplos médicos.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “A maioria das quedas pode ser evitada com pequenos ajustes na rotina de medicamentos,
                fortalecimento muscular e organização física dos cômodos da casa.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Fatores que aumentam o risco de acidentes e quedas:
              </h2>
              <ul className={styles.list}>
                {listItems.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <article className={styles.textBlock}>
              <h2 className={styles.sectionHeading}>Ações Práticas para a Autonomia</h2>
              <p className={styles.paragraph}>
                Ao realizar a avaliação no consultório, o Dr. Adilson auxilia a traçar um roteiro
                de modificações residenciais (como iluminação de sensores noturnos, barras de segurança
                no chuveiro e vaso, e remoção de tapetes) aliado ao fortalecimento esquelético, devolvendo
                segurança e autoconfiança no dia a dia do paciente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/prevencao-quedas" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de avaliação de equilíbrio e marcha?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

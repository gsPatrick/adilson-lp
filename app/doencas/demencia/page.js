import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Outras Demências | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba mais sobre os diferentes tipos de demências, como Demência Vascular, Corpos de Lewy e Frontotemporal. Diagnóstico e tratamento em Maringá e Paranavaí.",
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

export default function DemenciaPage() {
  const paragraphs = [
    "Além da Doença de Alzheimer, existem múltiplos tipos de síndromes demenciais que afetam a cognição, a linguagem e o comportamento de forma variada. O diagnóstico diferencial preciso é fundamental para direcionar a medicação correta e o suporte clínico.",
    "A Demência Vascular, associada a múltiplos pequenos acidentes vasculares (isquemias) silenciosos, é o segundo tipo mais frequente. O controle rigoroso de hipertensão e diabetes ajuda a deter sua progressão, protegendo as funções cerebrais.",
    "Outras formas, como a Demência por Corpos de Lewy (que causa alucinações visuais e rigidez motora) e a Demência Frontotemporal (que altera a personalidade e o comportamento social precocemente), necessitam de estratégias terapêuticas específicas e cautelosas.",
  ];

  const listItems = [
    "Demência Vascular (comprometimento por lesões de vasos cerebrais e infartos prévios)",
    "Demência por Corpos de Lewy (flutuações na cognição, parkinsonismo e alucinações)",
    "Demência Frontotemporal (mudanças de conduta social, linguagem e desinibição)",
    "Demência Mista (associação frequente entre Alzheimer e lesões vasculares)",
    "Hidrocefalia de Pressão Normal (HPN - causa tratável que afeta a marcha e o controle urinário)",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Diagnóstico Diferencial",
      description: "Precisão clínica para identificar a origem específica do declínio cognitivo.",
    },
    {
      number: "02",
      title: "Controle de Sintomas",
      description: "Manejo farmacológico especializado para alterações de comportamento.",
    },
    {
      number: "03",
      title: "Proteção Geriátrica",
      description: "Medidas protetoras ambientais e metabólicas para frear a deterioração.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Outras
            <br />
            Demências
          </>
        }
        description="Diagnóstico diferencial e acompanhamento clínico individualizado para síndromes demenciais vasculares, frontotemporais e mistas."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Classificação</span>
              <p className={styles.sidebarText}>
                Síndromes demenciais de etiologias diversas (vascular, degenerativa, metabólica).
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Diferencial</span>
              <p className={styles.sidebarText}>
                Avaliação interdisciplinar de exames de imagem e exames laboratoriais detalhados.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Entender com precisão qual área do cérebro está sendo afetada permite que o médico
                e a família antecipem necessidades e evitem medicações inadequadas.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Principais demências investigadas e acompanhadas:
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
              <h2 className={styles.sectionHeading}>Prevenção de Complicações</h2>
              <p className={styles.paragraph}>
                Ao focar na manutenção da autonomia do paciente, o Dr. Adilson Silvestre avalia os
                riscos de interações medicamentosas negativas, adapta o ambiente doméstico para
                prevenir quedas e planeja estímulos cognitivos contínuos, proporcionando estabilidade
                e suporte integral aos familiares e cuidadores.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/demencia" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de avaliação neurocognitiva?"
        description="Fale com a nossa equipe no WhatsApp para escolher entre atendimento presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

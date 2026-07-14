import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Insônia & Sono | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba por que dormimos mal com o avanço da idade e como tratar a insônia sem dependência de calmantes tarja preta em Maringá e Paranavaí.",
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

export default function InsoniaPage() {
  const paragraphs = [
    "Ter uma noite de sono fragmentada ou sofrer com insônia crônica não deve ser aceito como padrão normal do envelhecimento. O sono de qualidade é essencial para a consolidação da memória, saúde cardiovascular e renovação imunológica.",
    "Na tentativa de dormir, muitos idosos recorrem à automedicação com calmantes tarja preta (benzodiazepínicos como clonazepam ou diazepam). A longo prazo, essas substâncias causam dependência física, lapsos de memória cumulativos e elevam drasticamente o risco de quedas noturnas.",
    "A abordagem do Dr. Adilson foca em identificar as causas biológicas da insônia (como apneia do sono, dores crônicas, refluxo ou polifarmácia) e implementar a Higiene do Sono aliada ao desmame seguro e guiado dessas medicações nocivas.",
  ];

  const listItems = [
    "Dificuldade persistente para iniciar o sono após se deitar na cama",
    "Sono fragmentado (acordar múltiplas vezes durante a noite e ter dificuldade para dormir novamente)",
    "Despertar precoce involuntário (acordar de madrugada e não conseguir mais conciliar o sono)",
    "Ronco alto e pausas respiratórias noturnas frequentes (sinais de Apneia do Sono)",
    "Uso contínuo de calmantes de tarja preta (Rivotril, Lexotan, Frontal, Valium) com efeitos colaterais cognitivos",
    "Sonolência excessiva diurna, fadiga física, dores de cabeça matinais e irritabilidade",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Exame do Sono",
      description: "Estudo do sono para diagnóstico de apneia obstrutiva e distúrbios respiratórios.",
    },
    {
      number: "02",
      title: "Higiene do Sono",
      description: "Técnicas comportamentais e de rotina para regular o relógio biológico naturalmente.",
    },
    {
      number: "03",
      title: "Desmame Orientado",
      description: "Retirada gradual e segura de benzodiazepínicos e indutores de dependência.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Insônia &
            <br />
            Distúrbios do Sono
          </>
        }
        description="Recupere a qualidade do seu repouso. Diagnóstico de apneia, higiene do sono e desmame supervisionado de medicamentos de tarja preta."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Impacto</span>
              <p className={styles.sidebarText}>
                O sono ruim afeta a cognição, favorecendo lapsos de atenção e aumentando a ansiedade.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tratamento</span>
              <p className={styles.sidebarText}>
                Higiene comportamental do sono, fitoterapia, suplementos e suporte na substituição medicamentosa.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Substituir calmantes nocivos por hábitos saudáveis e tratar a apneia do sono é o
                caminho correto para restaurar a clareza mental e a disposição diária.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Sintomas de alerta que exigem avaliação médica:
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
              <h2 className={styles.sectionHeading}>Apneia do Sono e Saúde Cardiovascular</h2>
              <p className={styles.paragraph}>
                A apneia do sono reduz a oxigenação noturna e sobrecarrega o coração, elevando o risco
                de infarto, AVC e hipertensão resistente. O diagnóstico adequado permite realizar
                intervenções eficazes, devolvendo um sono profundo e seguro para o paciente maduro.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/insonia" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma avaliação médica do seu sono?"
        description="Fale com a nossa equipe no WhatsApp para agendar seu atendimento em consultório, domiciliar ou por vídeo."
      />

      <Footer />
    </main>
  );
}

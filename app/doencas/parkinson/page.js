import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Doença de Parkinson | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba mais sobre a Doença de Parkinson: diagnóstico clínico, controle de tremores e rigidez, e reabilitação para manter a autonomia e a qualidade de vida do idoso.",
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

export default function ParkinsonPage() {
  const paragraphs = [
    "A Doença de Parkinson é uma condição neurológica crônica e progressiva que afeta principalmente a coordenação motora e o controle dos movimentos, decorrente da perda gradual de neurônios produtores de dopamina no cérebro.",
    "Embora o tremor de repouso seja o sintoma mais conhecido, o Parkinson também causa rigidez muscular, lentidão nos movimentos (bradicinesia) e instabilidade postural, elevando significativamente o risco de quedas.",
    "O diagnóstico da doença é essencialmente clínico, realizado pelo geriatra por meio de um exame neurológico detalhado. O acompanhamento geriátrico foca no ajuste preciso de medicações dopaminérgicas e na reabilitação global para preservar ao máximo a autonomia e a independência do idoso.",
  ];

  const listItems = [
    "Tremor involuntário em repouso, frequentemente iniciando em um dos membros superiores",
    "Bradicinesia (lentidão acentuada na realização de movimentos simples e no caminhar)",
    "Rigidez muscular dolorosa ou sensação de membros presos ou pesados",
    "Instabilidade postural (perda de reflexos de equilíbrio, favorecendo quedas recorrentes)",
    "Sintomas não motores, como alterações do sono, constipação crônica, lentidão de pensamento ou depressão",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Tratamento Clínico",
      description: "Prescrição de precursores de dopamina e agonistas dopaminérgicos ajustados individualmente.",
    },
    {
      number: "02",
      title: "Fisioterapia Motora",
      description: "Indicação de reabilitação com foco em equilíbrio, marcha e prevenção de quedas.",
    },
    {
      number: "03",
      title: "Suporte Cognitivo",
      description: "Prevenção e acompanhamento de alterações de humor e memória associadas à evolução da doença.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Doença de
            <br />
            Parkinson
          </>
        }
        description="Diagnóstico neurológico, controle de tremores e rigidez muscular por meio de terapias medicamentosas e reabilitação integrada para manter a autonomia."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tipo de Doença</span>
              <p className={styles.sidebarText}>
                Distúrbio neurodegenerativo progressivo com perda de dopamina.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Foco Geriátrico</span>
              <p className={styles.sidebarText}>
                Preservação da marcha, independência funcional, sono saudável e prevenção de quedas.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “O tratamento do Parkinson vai além do controle dos tremores. Trata-se de reabilitar o paciente para que continue no comando de sua própria vida.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>Principais Sintomas Clínicos:</h2>
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
              <h2 className={styles.sectionHeading}>A Importância do Tratamento Multiprofissional</h2>
              <p className={styles.paragraph}>
                Ao lado das medicações ajustadas pelo geriatra para regular a dopamina no cérebro, a reabilitação motora e fonoaudiológica é indispensável. Fisioterapia especializada previne quedas, enquanto a terapia ocupacional ajuda na adaptação do lar. O geriatra atua como coordenador desse cuidado para manter a qualidade de vida.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/parkinson" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma avaliação neurológica e de marcha?"
        description="Agende uma consulta com o Dr. Adilson Silvestre pelo WhatsApp para planejar o tratamento ideal."
      />

      <Footer />
    </main>
  );
}

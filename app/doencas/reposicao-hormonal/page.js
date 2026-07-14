import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Rastreio e Reposição Hormonal | Dr. Adilson Silvestre - Geriatria",
  description:
    "Entenda sobre a terapia de reposição hormonal na longevidade: indicações éticas, riscos, benefícios e acompanhamento médico individualizado para homens e mulheres.",
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

export default function ReposicaoHormonalPage() {
  const paragraphs = [
    "A reposição hormonal na maturidade e longevidade é um tema complexo que exige extrema responsabilidade médica, rigor científico e personalização. Com o avanço da idade, a queda natural na produção de hormônios sexuais (estrogênio/progesterona nas mulheres durante a menopausa, e testosterona nos homens durante a andropausa) pode impactar significativamente a qualidade de vida.",
    "A terapia de reposição hormonal (TRH) não deve ser adotada como uma fórmula genérica de 'rejuvenescimento', mas sim como uma intervenção terapêutica precisa para tratar sintomas específicos e debilitantes, como ondas de calor severas, perda acelerada de massa óssea (osteoporose), declínio acentuado de libido, fadiga crônica e distúrbios de humor.",
    "No consultório do Dr. Adilson Silvestre, a abordagem inicia com um rastreio metabólico e hormonal minucioso por meio de exames laboratoriais detalhados, avaliando contraindicações estritas. A decisão pela reposição baseia-se na relação de risco e benefício individualizada, visando sempre a segurança cardiovascular e oncológica do paciente.",
  ];

  const listItems = [
    "Ondas de calor (fogachos) persistentes que prejudicam o sono e a rotina diária em mulheres",
    "Perda rápida de densidade mineral óssea (osteopenia/osteoporose refratária)",
    "Fadiga profunda, perda inexplicável de força e perda severa de massa muscular",
    "Declínio clínico acentuado da libido e distúrbios de humor na menopausa ou andropausa",
    "Indicação médica precisa após exclusão de contraindicações absolutas (cardíacas, hepáticas ou oncológicas)",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Rastreio Completo",
      description: "Exames de sangue detalhados e avaliação física para mapeamento hormonal preciso.",
    },
    {
      number: "02",
      title: "Indicação Ética",
      description: "Prescrição baseada em diretrizes das sociedades médicas de geriatria e endocrinologia.",
    },
    {
      number: "03",
      title: "Monitoramento",
      description: "Acompanhamento laboratorial periódico para ajuste fino de doses e segurança do paciente.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Reposição
            <br />
            Hormonal
          </>
        }
        description="Avaliação ética e acompanhamento seguro da reposição hormonal na menopausa e andropausa, visando à melhora dos sintomas e à preservação óssea."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tipo de Terapia</span>
              <p className={styles.sidebarText}>
                Intervenção hormonal terapêutica focada no alívio de sintomas da menopausa/andropausa.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Segurança Médica</span>
              <p className={styles.sidebarText}>
                Acompanhamento contínuo dos marcadores cardiovasculares, hepáticos e oncológicos de rotina.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “A reposição hormonal é uma ferramenta potente para a qualidade de vida, contanto que seja feita com indicação ética e sob criteriosa vigilância médica.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>Principais Indicações sob Avaliação:</h2>
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
              <h2 className={styles.sectionHeading}>Medicina Baseada em Evidências e Longevidade</h2>
              <p className={styles.paragraph}>
                Muitas informações falsas sobre hormônios circulam na internet, prometendo fórmulas mágicas de juventude. Na prática, a reposição hormonal correta é feita com hormônios homólogos ou bioidênticos na menor dose efetiva e pelo menor tempo necessário. O Dr. Adilson coordena exames de controle e exames preventivos (como mamografia e PSA) antes e durante todo o tratamento, garantindo total segurança.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/reposicao-hormonal" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma avaliação hormonal personalizada?"
        description="Agende uma consulta com o Dr. Adilson Silvestre no WhatsApp para analisar suas taxas laboratoriais."
      />

      <Footer />
    </main>
  );
}

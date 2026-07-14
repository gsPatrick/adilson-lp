import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Osteoporose | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba tudo sobre a osteoporose: diagnóstico precoce, prevenção de fraturas e tratamentos com reposição de nutrientes e terapias injetáveis em Maringá.",
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

export default function OsteoporosePage() {
  const paragraphs = [
    "A osteoporose é uma condição metabólica silenciosa que enfraquece gradualmente a estrutura óssea, elevando expressivamente o risco de fraturas mesmo diante de quedas leves ou pequenos traumas cotidianos.",
    "Como raramente manifesta sintomas ou dor física antes de ocorrer uma ruptura óssea, o diagnóstico precoce por meio da densitometria óssea é o padrão de ouro para identificar a perda mineral antes de um evento grave.",
    "Na geriatria, a prevenção foca na proteção de áreas críticas como o fêmur, a coluna vertebral e o punho. A fratura de fêmur é especialmente perigosa em idosos, exigindo internação, cirurgia rápida e cuidados intensivos.",
  ];

  const listItems = [
    "Redução dos hormônios sexuais (comum após a menopausa em mulheres ou andropausa em homens)",
    "Deficiências crônicas de cálcio alimentar e falta de níveis ótimos de Vitamina D corporal",
    "Uso contínuo e prolongado de certos medicamentos, como corticoides (glicocorticoides)",
    "Falta de estímulo de impacto físico esquelético causado por hábitos sedentários",
    "Histórico familiar genético de osteoporose, fraturas na bacia ou no fêmur",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Densitometria Óssea",
      description: "Exame de imagem computadorizado para mensurar o teor mineral dos ossos.",
    },
    {
      number: "02",
      title: "Nutrição e Fixação",
      description: "Ajuste e suplementação ativa de Cálcio, Vitamina D e fixadores minerais.",
    },
    {
      number: "03",
      title: "Terapias Injetáveis",
      description: "Aplicação ética de medicações modernas para remodelamento e ganho de massa óssea.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Osteoporose
          </>
        }
        description="Fortalecimento ósseo e prevenção inteligente de fraturas por meio de exames, reposição nutricional e medicamentos modernos de remodelamento."
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
                Distúrbio metabólico sistêmico de desmineralização óssea.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Estratégia Geriátrica</span>
              <p className={styles.sidebarText}>
                Prevenção de quedas, fortalecimento muscular associado e terapias injetáveis biológicas.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Prevenir fraturas de fêmur e coluna por meio da mineralização adequada dos ossos é
                essencial para preservar a mobilidade ativa e a autonomia na terceira idade.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Fatores de risco para a fragilidade óssea:
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
              <h2 className={styles.sectionHeading}>Abordagem e Tratamento Moderno</h2>
              <p className={styles.paragraph}>
                O plano terapêutico do Dr. Adilson engloba o ajuste fino da ingestão de Cálcio e
                síntese de Vitamina D, associado ao ganho de massa muscular (sarcopenia) para dar
                suporte mecânico ao esqueleto. Em casos de alto risco, administram-se terapias
                injetáveis com excelente resposta e segurança clínica para reverter a porosidade óssea.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/osteoporose" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja avaliar a saúde dos seus ossos e prevenir fraturas?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

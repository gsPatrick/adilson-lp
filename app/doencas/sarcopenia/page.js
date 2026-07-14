import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Sarcopenia (Perda de Massa) | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba mais sobre a sarcopenia: o que é a perda de massa muscular no idoso, como é feito o diagnóstico por bioimpedância e o tratamento para ganho de força.",
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

export default function SarcopeniaPage() {
  const paragraphs = [
    "A sarcopenia é caracterizada pela perda progressiva e involuntária de massa magra, força e funcionalidade muscular esquelética. É uma condição muito comum na longevidade e um dos principais fatores que levam à perda de autonomia em idosos.",
    "A perda de força muscular compromete a estabilidade corporal, aumentando o risco de quedas, fraturas e perda de independência. Felizmente, a sarcopenia pode ser prevenida e revertida através de intervenções médicas, nutricionais e físicas direcionadas.",
    "O diagnóstico precoce é realizado de forma objetiva no consultório do Dr. Adilson por meio do exame de bioimpedanciometria, que afere o percentual de massa muscular e gordura corporal de maneira rápida e segura.",
  ];

  const listItems = [
    "Dificuldade progressiva para realizar tarefas básicas de força (carregar compras, abrir potes)",
    "Lentidão visível ao caminhar ou subir lances de escadas",
    "Falta de equilíbrio corporal ao se levantar, girar ou mudar de postura",
    "Perda involuntária de peso corporal e flacidez muscular acentuada",
    "Sensação de fadiga crônica, fraqueza geral e cansaço físico persistente",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Bioimpedanciometria",
      description: "Exame tecnológico para aferir precisamente a massa muscular e magra corporal.",
    },
    {
      number: "02",
      title: "Suplementação Focada",
      description: "Prescrição de proteínas, aminoácidos e vitamina D para síntese muscular.",
    },
    {
      number: "03",
      title: "Exercícios Resistidos",
      description: "Orientação e prescrição de atividades de força para ganho de massa.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Sarcopenia
            <br />
            (Perda de Massa)
          </>
        }
        description="Preservação da força e da autonomia. Diagnóstico tecnológico e tratamentos integrados para a reposição de massa muscular."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tipo de Condição</span>
              <p className={styles.sidebarText}>
                Síndrome geriátrica caracterizada pela perda de massa, força e função do músculo.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Diagnóstico</span>
              <p className={styles.sidebarText}>
                Bioimpedanciometria no consultório, testes de preensão manual e exames laboratoriais.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Manter a massa muscular esquelética ativa é a principal vacina contra a fragilidade,
                garantindo que você continue se movendo e controlando sua própria vida.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Sinais que sugerem perda de força e massa muscular:
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
              <h2 className={styles.sectionHeading}>Tratamento e Longevidade Ativa</h2>
              <p className={styles.paragraph}>
                O plano de reabilitação muscular combina o aporte nutricional adequado (prescrição de
                proteínas de alta absorção e aminoácidos essenciais), reposição hormonal quando indicada
                clinicamente, e a prática regular de exercícios de força (como musculação terapêutica).
                Essa estratégia previne a fragilidade e devolve a vitalidade ao paciente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/sarcopenia" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar o exame de bioimpedância e avaliação de força?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Plano de Emagrecimento Saudável | Dr. Adilson Silvestre - Geriatria",
  description:
    "Conheça nosso plano de emagrecimento com equipe multidisciplinar: nutricionista, bioimpedância periódica, plataforma de videoaulas e uso seguro de medicamentos como a Tirzepatida.",
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

export default function EmagrecimentoPage() {
  const paragraphs = [
    "O tratamento da obesidade e do sobrepeso no consultório do Dr. Adilson Silvestre é baseado no entendimento de que o ganho de peso é uma condição multifatorial complexa, que envolve fatores genéticos, metabólicos, comportamentais e hormonais. Nosso foco é promover um emagrecimento saudável, seguro e sustentável no longo prazo.",
    "Para alcançar resultados duradouros, estruturamos um plano integrado com equipe multidisciplinar. O acompanhamento combina a avaliação médica do Dr. Adilson com o suporte ativo de nossa Nutricionista parceira, garantindo que o plano alimentar seja perfeitamente adaptado ao seu metabolismo e rotina.",
    "Adicionalmente, os pacientes têm acesso exclusivo à nossa plataforma de videoaulas sobre metabolismo, nutrição e alimentação prática. O progresso corporal é mensurado periodicamente no consultório através de exames de bioimpedância detalhados, avaliando a perda de gordura e a preservação de massa muscular. Em casos indicados, avaliamos e acompanhamos o uso seguro de medicações modernas, como a Tirzepatida, sempre com ética e foco no bem-estar.",
  ];

  const listItems = [
    "Acompanhamento médico coordenado e individualizado com o Dr. Adilson Silvestre",
    "Consultoria e planejamento alimentar focado com nossa Nutricionista parceira",
    "Acesso à nossa plataforma exclusiva de videoaulas sobre funcionamento do metabolismo e nutrição",
    "Exame de bioimpedanciometria de alta precisão para monitorar a composição corporal",
    "Avaliação criteriosa e acompanhamento do uso de medicações modernas (ex: tirzepatida, semaglutida)",
    "Foco contínuo na saúde metabólica, preservação da massa magra e prevenção cardiovascular",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Equipe Multidisciplinar",
      description: "Consultas coordenadas com médico e suporte de nutricionista dedicada.",
    },
    {
      number: "02",
      title: "Educação Alimentar",
      description: "Vídeos e conteúdos práticos na plataforma online sobre hábitos saudáveis.",
    },
    {
      number: "03",
      title: "Monitoramento de Massa",
      description: "Avaliação constante por bioimpedância para evitar perda muscular.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Linhas de Cuidado"
        title={
          <>
            Plano de
            <br />
            Emagrecimento
          </>
        }
        description="Emagrecimento saudável e sustentável por meio de suporte médico, nutricional, plataforma de educação em saúde e tecnologias de bioimpedância."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tipo de Abordagem</span>
              <p className={styles.sidebarText}>
                Plano integrado de controle de peso com equipe multidisciplinar e suporte tecnológico.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tecnologia de Apoio</span>
              <p className={styles.sidebarText}>
                Bioimpedância in loco, plataforma de videoaulas e terapia farmacológica moderna.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “O emagrecimento definitivo não acontece cortando calorias de forma radical, mas sim educando o metabolismo e preservando a força do seu corpo.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>Diferenciais do nosso plano de emagrecimento:</h2>
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
              <h2 className={styles.sectionHeading}>O Papel do Acompanhamento Médico e Farmacológico</h2>
              <p className={styles.paragraph}>
                Atualmente, existem opções farmacológicas muito eficazes para auxiliar no controle do apetite e na melhora da sensibilidade à insulina, como a Tirzepatida. Contudo, esses medicamentos nunca devem ser utilizados sem indicação precisa e acompanhamento constante. No nosso plano, avaliamos se há recomendação clínica para o seu caso e acompanhamos as dosagens e marcadores de saúde para garantir um emagrecimento seguro e sem riscos de desnutrição.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja iniciar sua jornada de emagrecimento saudável?"
        description="Fale com a nossa equipe no WhatsApp para tirar dúvidas sobre o funcionamento do plano e agendar sua consulta."
      />

      <Footer />
    </main>
  );
}

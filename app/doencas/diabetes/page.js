import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Diabetes Mellitus no Idoso | Dr. Adilson Silvestre - Geriatria",
  description:
    "Entenda como tratar o diabetes na terceira idade: metas glicêmicas personalizadas, controle seguro e prevenção de neuropatias em Maringá.",
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

export default function DiabetesPage() {
  const paragraphs = [
    "O controle do Diabetes Mellitus na terceira idade requer metas individualizadas. O envelhecimento do organismo reduz a tolerância a episódios de hipoglicemia (queda acentuada de açúcar no sangue), que podem provocar tonturas, quedas, arritmias e desmaios.",
    "Complicando a saúde de forma silenciosa, o diabetes sem monitoramento adequado eleva o risco de derrames (AVC), insuficiência renal e danos nos nervos periféricos (neuropatia), diminuindo a sensibilidade nos pés e favorecendo o aparecimento de lesões graves.",
    "A geriatria atua equilibrando a medicação para manter a glicose sob controle seguro, simplificando os esquemas de insulina ou comprimidos e garantindo que o paciente mantenha a qualidade de vida sem restrições alimentares extremas que induzam desnutrição.",
  ];

  const listItems = [
    "Uso de medicações modernas e seguras que evitem quedas bruscas de glicose (hipoglicemias)",
    "Rastreio preventivo anual de complicações microvasculares (rins, retina e circulação periférica)",
    "Avaliação sistemática e exame físico periódico da sensibilidade dos pés (prevenção do pé diabético)",
    "Ajuste flexível de metas de hemoglobina glicada conforme o grau de funcionalidade e saúde do paciente",
    "Planejamento alimentar prático adaptado à rotina familiar, priorizando a nutrição balanceada",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Metas Individuais",
      description: "Definição de alvos glicêmicos seguros que protejam contra a hipoglicemia e tonturas.",
    },
    {
      number: "02",
      title: "Rastreio e Cuidado",
      description: "Exame detalhado de sensibilidade nos pés para evitar feridas e complicações vasculares.",
    },
    {
      number: "03",
      title: "Apoio Nutricional",
      description: "Orientação alimentar que alia satisfação e equilíbrio metabólico.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Diabetes
            <br />
            Mellitus
          </>
        }
        description="Controle metabólico seguro e personalizado para idosos, focando na prevenção de lesões vasculares e na proteção contra hipoglicemia."
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
                Distúrbio metabólico crônico caracterizado por altos níveis de glicose no sangue.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Foco Geriátrico</span>
              <p className={styles.sidebarText}>
                Prevenção de complicações vasculares e renais e segurança no uso de insulinas.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “No idoso, tratar o diabetes de forma segura significa equilibrar os níveis de
                glicose sem impor regimes rígidos demais que ameacem a autonomia e a nutrição.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Estratégias para controle seguro do diabetes:
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
              <h2 className={styles.sectionHeading}>Prevenção Multidisciplinar</h2>
              <p className={styles.paragraph}>
                Ao centralizar as condutas, o Dr. Adilson Silvestre atua alinhando a nutrição, o estímulo
                a atividades físicas orientadas e a proteção renal do paciente diabético. Esse controle
                coordenado evita a progressão silenciosa das complicações cardiovasculares, mantendo o
                paciente seguro e ativo em seu lar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/diabetes" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de acompanhamento de diabetes?"
        description="Fale com a nossa equipe no WhatsApp para escolher entre atendimento presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

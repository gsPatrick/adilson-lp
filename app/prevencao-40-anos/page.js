import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import OtherConsultations from "@/components/organisms/OtherConsultations/OtherConsultations";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./prevencao.module.css";

export const metadata = {
  title: "Prevenção aos 40 Anos | Dr. Adilson Silvestre - Geriatria",
  description:
    "Descubra por que o acompanhamento preventivo com um geriatra a partir dos 40 anos é fundamental para envelhecer com saúde, autonomia e disposição.",
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

export default function Prevencao40AnosPage() {
  const listItems = [
    "Controle precoce de condições crônicas (como hipertensão, diabetes e colesterol)",
    "Avaliação e rastreio de queixas de memória ou risco de demências",
    "Prevenção ativa da perda de massa e força muscular (sarcopenia)",
    "Investigação de distúrbios do sono e equilíbrio hormonal",
    "Revisão detalhada e simplificação de receitas médicas (polifarmácia)",
    "Apoio no controle de ansiedade, depressão e estresse no envelhecimento",
    "Planejamento preventivo global de estilo de vida para manter a autonomia",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Prevenção Precoce",
      description: "Intervenção ativa antes que os sintomas clínicos apareçam.",
    },
    {
      number: "02",
      title: "Abordagem Global",
      description: "Avaliação integrada de exames, sono e cognição.",
    },
    {
      number: "03",
      title: "Autonomia Futura",
      description: "Ações focadas em manter a independência e vitalidade.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Dynamic Hero with side image */}
      <Hero
        subtitle="Quando Consultar"
        title={
          <>
            Prevenção aos
            <br />
            40 Anos
          </>
        }
        description="Iniciar o cuidado preventivo de forma organizada a partir dos 40 anos é o melhor caminho para envelhecer com saúde, disposição e autonomia ao lado da família."
        imageSrc={null}
        showScrollytelling={false}
      />

      {/* Visual Bridge Divider Banner */}
      <TransitionBanner items={bannerItems} />

      {/* Editorial Reading Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Foco do Cuidado</span>
              <p className={styles.sidebarText}>
                Prevenção primária, diagnóstico precoce e planejamento de
                longevidade saudável.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Atendimento Geriátrico</span>
              <p className={styles.sidebarText}>
                Presencial em Maringá e Paranavaí, domiciliar ou telemedicina.
              </p>
            </div>
          </aside>

          {/* Reading Column */}
          <div className={styles.readingCol}>
            
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Muitas pessoas acreditam que o geriatra é um médico indicado apenas para
                idades muito avançadas. Na prática, não existe uma idade inicial rígida,
                mas sim o momento em que você decide organizar a sua saúde para o futuro.”
              </p>
              <p className={styles.paragraph}>
                O envelhecimento biológico é um processo contínuo que se inicia muito antes da
                terceira idade. A partir dos 40 anos, o organismo começa a apresentar pequenas
                e silenciosas alterações metabólicas, hormonais e estruturais. Se ignoradas,
                essas mudanças aumentam o risco de desenvolver condições limitantes mais tarde.
              </p>
              <p className={styles.paragraph}>
                O médico geriatra é o profissional capacitado para acompanhar essa transição de
                forma preventiva e global. Ao contrário de consultas fragmentadas que olham
                apenas para sintomas ou órgãos isolados, a abordagem geriátrica analisa a pessoa
                como um todo: seu estilo de vida, cognição, sono, equilíbrio, além da carga genética.
              </p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Áreas de acompanhamento e prevenção:
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
              <h2 className={styles.sectionHeading}>Diferenciais da Avaliação Global</h2>
              <p className={styles.paragraph}>
                Na avaliação geriátrica, cada aspecto da sua rotina é integrado em um plano de
                cuidados individualizado. Investigamos a fundo a necessidade de suplementação,
                sinais precoces de fadiga ou perda de força física, e organizamos sua rotina de
                exames periódicos para evitar intervenções desnecessárias. O objetivo final é
                garantir que você permaneça no controle de sua própria vida e continue
                aproveitando o que há de melhor ao lado de sua família.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Other topics slider */}
      <OtherConsultations currentPageLink="/prevencao-40-anos" />

      {/* CTA section */}
      <CTASection
        eyebrow="Agendamento"
        title="Deseja estruturar sua longevidade?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor horário de consulta com o Dr. Adilson Silvestre."
      />

      <Footer />
    </main>
  );
}

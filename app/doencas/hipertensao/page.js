import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Hipertensão Arterial no Idoso | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba como controlar a pressão alta na terceira idade de forma segura, prevenindo infarto e AVC sem provocar tonturas e quedas em Maringá.",
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

export default function HipertensaoPage() {
  const paragraphs = [
    "A Hipertensão Arterial Sistêmica é um dos principais fatores de risco para infarto, insuficiência cardíaca e acidente vascular cerebral (AVC). Com o passar dos anos, as artérias enrijecem naturalmente, exigindo um controle rigoroso e preventivo da pressão arterial.",
    "O tratamento da pressão no paciente idoso, contudo, deve ser conduzido com extrema cautela. Reduções exageradas da pressão podem provocar tonturas persistentes, fraquezas e quedas ao se colocar de pé (hipotensão postural), ameaçando a integridade física do paciente.",
    "O geriatra ajusta as dosagens e os horários das medicações de forma personalizada, avaliando a pressão arterial em diferentes posições físicas para garantir que o coração e o cérebro recebam fluxo sanguíneo seguro.",
  ];

  const listItems = [
    "Uso de anti-hipertensivos com perfil de segurança favorável, diminuindo efeitos colaterais",
    "Monitoramento sistemático da pressão arterial em pé e deitado para prevenir hipotensão postural",
    "Avaliação e acompanhamento regular da saúde dos rins e do funcionamento do músculo cardíaco",
    "Orientações para restrição equilibrada de sódio na dieta sem induzir perda de apetite no idoso",
    "Estímulo e planejamento de atividades físicas aeróbicas leves para melhorar a flexibilidade dos vasos",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Prevenção Vascular",
      description: "Manutenção da pressão em limites seguros para proteção contra infarto e derrames (AVC).",
    },
    {
      number: "02",
      title: "Segurança de Fluxo",
      description: "Evitar tonturas, desmaios e quedas associados ao uso excessivo de remédios de pressão.",
    },
    {
      number: "03",
      title: "Cuidado com os Rins",
      description: "Acompanhamento da função renal, que sofre impacto direto dos níveis de pressão arterial.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Hipertensão
            <br />
            Arterial
          </>
        }
        description="Controle cardiovascular personalizado para idosos, focando na prevenção de AVC e infarto com segurança contra tonturas."
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
                Doença crônica caracterizada pela pressão elevada do sangue nas artérias.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Estratégia</span>
              <p className={styles.sidebarText}>
                Monitoramento residencial (MRPA), exames metabólicos e exercícios orientados.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Na geriatria, controlar a pressão alta de forma inteligente é proteger o cérebro
                e os rins do idoso sem induzir fraquezas e tonturas limitantes.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Diretrizes de tratamento seguro da hipertensão:
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
              <h2 className={styles.sectionHeading}>Acompanhamento Global</h2>
              <p className={styles.paragraph}>
                Ao centralizar e coordenar as receitas de múltiplos especialistas, o Dr. Adilson
                Silvestre evita dosagens duplicadas de anti-hipertensivos e orienta adaptações
                nutricionais sustentáveis, proporcionando segurança cardiovascular e envelhecimento
                ativo no ambiente familiar.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/hipertensao" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja avaliar e regularizar a sua pressão arterial?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

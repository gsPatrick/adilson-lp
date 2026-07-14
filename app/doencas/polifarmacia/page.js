import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Polifarmácia e Revisão de Remédios | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba os riscos do uso excessivo de medicamentos em idosos e entenda como a revisão de receitas (desprescrição) previne tonturas e quedas em Maringá.",
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

export default function PolifarmaciaPage() {
  const paragraphs = [
    "A polifarmácia, definida pelo uso diário de cinco ou mais medicamentos de uso contínuo, é um cenário comum em idosos que consultam múltiplos médicos. Sem uma coordenação unificada, essa sobreposição eleva expressivamente os riscos de interações medicamentosas graves e iatrogenias.",
    "Muitos sintomas frequentemente atribuídos ao envelhecimento natural — como sonolência crônica, tonturas, boca seca, esquecimentos e confusão mental — são, na realidade, efeitos colaterais provocados pelo conflito químico de remédios desnecessários.",
    "A desprescrição é o processo clínico estruturado e seguro de retirar gradualmente substâncias com potencial nocivo, utilizando critérios científicos internacionais (como os Critérios de Beers) para simplificar a receita e proteger a saúde do paciente.",
  ];

  const listItems = [
    "Tomar múltiplos medicamentos prescritos por profissionais diferentes que não conhecem a receita completa",
    "Apresentar sonolência diurna excessiva, tontura contínua ou boca extremamente seca",
    "Piora perceptível de memória ou confusão mental recente após a inclusão de uma nova medicação",
    "Ocorrência de quedas noturnas recorrentes da própria altura ou episódios súbitos de fraqueza",
    "Dificuldade crônica em organizar a caixa de comprimidos e cumprir todos os horários indicados",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Desprescrição Segura",
      description: "Retirada orientada e lenta de medicamentos de risco ou que já perderam a indicação de uso.",
    },
    {
      number: "02",
      title: "Uso de Critérios",
      description: "Aplicação das regras científicas de Beers para selecionar fórmulas seguras para idosos.",
    },
    {
      number: "03",
      title: "Simplificação Geriátrica",
      description: "Organização da rotina de tomadas para diminuir o número de pílulas diárias.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Polifarmácia
            <br />
            (Revisão de Receita)
          </>
        }
        description="Simplificação e segurança nas suas prescrições. Revisão detalhada de medicamentos para eliminar conflitos, efeitos colaterais e proteger a memória."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Definição</span>
              <p className={styles.sidebarText}>
                Uso concomitante de múltiplos medicamentos que aumenta a toxicidade do organismo.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Benefício</span>
              <p className={styles.sidebarText}>
                Redução de efeitos colaterais cognitivos, renais e prevenção imediata de quedas.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Menos é mais: simplificar uma receita sobrecarregada devolve lucidez, apetite e
                segurança na locomoção para o idoso.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Sinais de alerta de que a receita necessita de revisão médica:
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
              <h2 className={styles.sectionHeading}>Iatrogenia e a Cascade de Prescrições</h2>
              <p className={styles.paragraph}>
                Muitas vezes, um novo remédio é receitado apenas para combater o efeito colateral de
                um remédio anterior. Esse ciclo (cascata de prescrição) é desfeito pelo geriatra ao
                reorganizar a terapêutica de maneira ética e lógica, priorizando a segurança e a
                autonomia do paciente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/polifarmacia" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de revisão completa de medicamentos?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

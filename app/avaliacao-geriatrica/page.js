import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import OtherConsultations from "@/components/organisms/OtherConsultations/OtherConsultations";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css"; // Reuse the clean editorial layout CSS

export const metadata = {
  title: "Avaliação Geriátrica Global | Dr. Adilson Silvestre - Geriatria",
  description:
    "Entenda como funciona a Avaliação Geriátrica Global: uma análise multidimensional e integrada da saúde de adultos maduros e idosos.",
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

export default function AvaliacaoGeriatricaPage() {
  const paragraphs = [
    "A consulta com um médico geriatra vai muito além do tratamento de uma queixa isolada. O envelhecimento saudável exige um olhar preventivo amplo, focado em compreender todas as particularidades físicas, metabólicas, emocionais e sociais do paciente.",
    "A Avaliação Geriátrica Global é um processo diagnóstico multidimensional utilizado para determinar a capacidade funcional, a saúde cognitiva, a mobilidade e as condições clínicas gerais do paciente. Esse mapeamento permite antecipar riscos e planejar cuidados contínuos de forma altamente coordenada.",
    "Esse tipo de atendimento é indicado tanto para adultos maduros que desejam estruturar sua prevenção, quanto para idosos que possuem múltiplos diagnósticos e necessitam simplificar e organizar sua rotina de tratamentos e medicamentos.",
  ];

  const listItems = [
    "Mapeamento e simplificação de receitas médicas complexas (polifarmácia)",
    "Avaliação cognitiva aprofundada (triagem de memória, atenção e foco)",
    "Exame de força muscular, sarcopenia e risco de quedas (equilíbrio)",
    "Investigação de dores crônicas, fadiga física e distúrbios de sono",
    "Monitoramento de fatores metabólicos e hormonais preventivos",
    "Orientações personalizadas para estilo de vida e manutenção da autonomia",
    "Apoio e treinamento contínuo para familiares e cuidadores",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Investigação Completa",
      description: "Análise clínica, cognitiva, funcional e farmacológica unificada.",
    },
    {
      number: "02",
      title: "Foco na Autonomia",
      description: "Ações direcionadas para manter o paciente no controle da sua rotina.",
    },
    {
      number: "03",
      title: "Plano Coordenado",
      description: "Prescrições integradas com foco na redução de exames desnecessários.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Dynamic Hero with side image */}
      <Hero
        subtitle="Quando Consultar"
        title={
          <>
            Avaliação
            <br />
            Geriátrica Global
          </>
        }
        description="Uma investigação detalhada e multidisciplinar para compreender o conjunto da sua saúde e planejar um envelhecimento com máxima autonomia."
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
              <span className={styles.sidebarLabel}>Especialidade</span>
              <p className={styles.sidebarText}>
                Abordagem geriátrica preventiva e centrada nas necessidades globais do indivíduo.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Locais de Atendimento</span>
              <p className={styles.sidebarText}>
                Maringá-PR e Paranavaí-PR, visitas em domicílio ou telemedicina para todo o país.
              </p>
            </div>
          </aside>

          {/* Reading Column */}
          <div className={styles.readingCol}>
            
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “A medicina geriátrica não foca apenas na ausência de doenças, mas sim na
                preservação da sua capacidade de decidir e realizar as atividades que trazem
                significado para a sua vida.”
              </p>
              <p className={styles.paragraph}>
                {paragraphs[0]}
              </p>
              <p className={styles.paragraph}>
                {paragraphs[1]}
              </p>
              <p className={styles.paragraph}>
                {paragraphs[2]}
              </p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Pillars da Avaliação Geriátrica:
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
              <h2 className={styles.sectionHeading}>Organização do Cuidado e Independência</h2>
              <p className={styles.paragraph}>
                Um dos principais diferenciais da Avaliação Geriátrica Global é a prevenção da
                iatrogenia — problemas causados pelo excesso de tratamentos desconectados. Ao
                centralizar o histórico do paciente, o Dr. Adilson coordena as decisões de saúde,
                garantindo prescrições mais limpas, seguras e eficazes, preservando a dignidade
                e a autonomia em todas as etapas da vida.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Other topics slider */}
      <OtherConsultations currentPageLink="/avaliacao-geriatrica" />

      {/* CTA section */}
      <CTASection
        eyebrow="Agendamento"
        title="Agende uma consulta de avaliação global"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor horário presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

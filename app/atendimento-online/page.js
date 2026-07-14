import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import OtherConsultations from "@/components/organisms/OtherConsultations/OtherConsultations";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css"; // Reuse clean editorial layout CSS

export const metadata = {
  title: "Atendimento Online & Domiciliar | Dr. Adilson Silvestre - Geriatria",
  description:
    "Escolha o melhor formato para sua consulta: atendimento em consultório (Maringá e Paranavaí), visitas domiciliares ou telemedicina para todo o Brasil.",
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

export default function AtendimentoOnlinePage() {
  const paragraphs = [
    "A saúde e o bem-estar dos pacientes maduros e idosos dependem muito da acessibilidade ao cuidado médico. Compreendendo que as necessidades de mobilidade e conforto variam, o Dr. Adilson Silvestre oferece três modalidades flexíveis de atendimento clínico.",
    "Para pacientes ativos e familiares que buscam uma consulta clínica presencial estruturada, o atendimento é realizado em consultórios modernos e acessíveis nas cidades de Maringá-PR e Paranavaí-PR.",
    "Para idosos com dificuldades de locomoção, pacientes acamados ou em pós-operatório, a consulta domiciliar leva toda a estrutura da avaliação geriátrica para o conforto do lar. Além disso, a telemedicina permite o acompanhamento contínuo e preventivo de pacientes de qualquer local do Brasil, garantindo agilidade e segurança.",
  ];

  const listItems = [
    "Consultórios estruturados e com acessibilidade física completa em Maringá e Paranavaí",
    "Atendimento domiciliar humanizado para pacientes acamados ou com mobilidade reduzida",
    "Telemedicina (consulta online) com prontuário digital seguro e receitas enviadas por SMS",
    "Apoio direto e orientação detalhada para familiares e cuidadores durante o tratamento",
    "Consultas com tempo dedicado, garantindo que todas as queixas e dúvidas sejam esclarecidas",
    "Suporte contínuo para ajuste de dosagens e dúvidas de receitas pelo WhatsApp",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Em Consultório",
      description: "Estrutura confortável e segura em Maringá e Paranavaí.",
    },
    {
      number: "02",
      title: "Em Domicílio",
      description: "Toda a atenção geriátrica no conforto e segurança do seu lar.",
    },
    {
      number: "03",
      title: "Telemedicina",
      description: "Consultas online seguras e dinâmicas para todo o Brasil.",
    },
  ];

  return (
    <main className={styles.main}>
      {/* Dynamic Hero with side image */}
      <Hero
        subtitle="Quando Consultar"
        title={
          <>
            Atendimento
            <br />
            Online & Domiciliar
          </>
        }
        description="Escolha o melhor formato para a sua consulta: atendimento confortável no consultório, visitas no conforto do lar ou telemedicina para todo o Brasil."
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
              <span className={styles.sidebarLabel}>Abrangência</span>
              <p className={styles.sidebarText}>
                Presencial regional no Paraná e atendimento por vídeo para pacientes de todo o território nacional.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Flexibilidade</span>
              <p className={styles.sidebarText}>
                Fácil agendamento e canais de contato direto para suporte pós-consulta.
              </p>
            </div>
          </aside>

          {/* Reading Column */}
          <div className={styles.readingCol}>
            
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “A saúde de quem amamos não deve ser limitada pela distância física ou pela
                dificuldade de locomoção. O cuidado médico precisa ir onde o paciente estiver.”
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
                Diferenciais das modalidades de atendimento:
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
              <h2 className={styles.sectionHeading}>Cuidado Sem Fronteiras e Suporte Familiar</h2>
              <p className={styles.paragraph}>
                Na consulta domiciliar, o Dr. Adilson não apenas examina o paciente, mas também realiza uma
                avaliação ambiental para prevenir quedas no domicílio. Na consulta online (telemedicina),
                os familiares que moram em outras cidades ou estados podem participar ativamente da chamada por
                vídeo, acompanhando as decisões de tratamento em tempo real, gerando tranquilidade e
                alinhamento familiar.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* Other topics slider */}
      <OtherConsultations currentPageLink="/atendimento-online" />

      {/* CTA section */}
      <CTASection
        eyebrow="Agendamento"
        title="Agende sua consulta no formato ideal"
        description="Fale com a nossa equipe no WhatsApp para escolher entre atendimento presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

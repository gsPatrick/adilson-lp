import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Doença de Alzheimer | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba mais sobre a Doença de Alzheimer: diagnóstico precoce, tratamento preventivo e suporte integral para pacientes e cuidadores em Maringá e Paranavaí.",
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

export default function AlzheimerPage() {
  const paragraphs = [
    "A Doença de Alzheimer é a forma mais prevalente de demência neurodegenerativa em idosos. Ela causa a perda progressiva da memória, do raciocínio lógico e da capacidade funcional. O diagnóstico e as intervenções coordenadas precoces são essenciais para retardar a evolução dos sintomas.",
    "Na geriatria, o tratamento foca na estabilização cognitiva e no manejo de alterações comportamentais (como agitação, insônia ou apatia), combinando terapias medicamentosas avançadas com estratégias não-farmacológicas personalizadas.",
    "Além do cuidado direto com o paciente, o suporte familiar é um pilar crucial da abordagem do Dr. Adilson Silvestre, orientando cuidadores sobre como adaptar a rotina e a comunicação para reduzir o estresse diário no convívio doméstico.",
  ];

  const listItems = [
    "Lapsos de memória recorrentes (esquecer fatos recentes, compromissos ou nomes)",
    "Dificuldade em realizar tarefas cotidianas antes simples (como cozinhar ou pagar contas)",
    "Desorientação no tempo ou no espaço (confundir datas, caminhos conhecidos ou cômodos)",
    "Desafios de comunicação (esquecer palavras no meio de frases ou repetir perguntas)",
    "Mudanças comportamentais ou de humor (isolamento, desconfiança ou irritabilidade)",
    "Dificuldade em tomar decisões, avaliar riscos ou gerenciar a própria rotina",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Diagnóstico Precoce",
      description: "Identificação rápida para iniciar o tratamento protetor do cérebro.",
    },
    {
      number: "02",
      title: "Estímulo Cognitivo",
      description: "Estratégias para preservar as conexões neurais e funções mentais.",
    },
    {
      number: "03",
      title: "Suporte Familiar",
      description: "Treinamento e acolhimento contínuo para os cuidadores primários.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Doença de
            <br />
            Alzheimer
          </>
        }
        description="Diagnóstico especializado, tratamento para preservação cognitiva e acolhimento completo para o paciente e sua família."
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
                Demência neurodegenerativa crônica e progressiva.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Foco do Tratamento</span>
              <p className={styles.sidebarText}>
                Controle de sintomas, reabilitação neuropsicológica e segurança no lar.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Cuidar de alguém com Alzheimer é um ato de afeto que exige paciência,
                adaptações contínuas e uma equipe médica presente para dar suporte à família.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Sinais de alerta para ficar atento:
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
              <h2 className={styles.sectionHeading}>Cuidado Multidisciplinar Integrado</h2>
              <p className={styles.paragraph}>
                O planejamento de cuidados abrange o ajuste de medicações que auxiliam a memória, a
                organização ambiental para prevenir quedas ou episódios de confusão, e orientações
                sobre atividades físicas e estímulos cognitivos. O objetivo é adiar a perda de
                autonomia e garantir que o paciente viva com a melhor dignidade possível.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/alzheimer" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de avaliação cognitiva?"
        description="Fale com a nossa equipe para escolher o melhor formato presencial, online ou de visita domiciliar."
      />

      <Footer />
    </main>
  );
}

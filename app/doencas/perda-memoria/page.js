import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Perda de Memória | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba a diferença entre o esquecimento normal da idade e os lapsos patológicos que exigem avaliação geriátrica para diagnóstico precoce em Maringá.",
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

export default function PerdaMemoriaPage() {
  const paragraphs = [
    "Esquecer pequenos detalhes ocasionalmente faz parte do envelhecimento celular natural. No entanto, quando os esquecimentos passam a impactar a autonomia e geram preocupação em familiares, torna-se essencial realizar uma investigação clínica detalhada.",
    "Muitos quadros de perda de memória têm origem em causas perfeitamente reversíveis — tais como deficiência de vitamina B12, distúrbios da tireoide, depressão, estresse crônico ou mesmo interações e efeitos colaterais de medicamentos de uso contínuo.",
    "A avaliação geriátrica aplica testes cognitivos estruturados e solicita exames laboratoriais e de imagem específicos para traçar um diagnóstico preciso, descartando ou confirmando o início de processos demenciais de forma segura.",
  ];

  const listItems = [
    "Esquecer informações importantes recentemente aprendidas ou datas de compromissos",
    "Repetir a mesma pergunta ou contar a mesma história várias vezes seguidas",
    "Dificuldade crônica em encontrar palavras comuns para formular frases simples",
    "Perder-se em locais habituais ou de convívio familiar regular",
    "Dificuldade repentina para gerenciar rotinas financeiras ou o uso correto de receitas",
    "Mudanças perceptíveis de iniciativa, isolamento social ou apatia mental",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Causas Reversíveis",
      description: "Pesquisa de carências nutricionais, tireoide e fatores de estresse.",
    },
    {
      number: "02",
      title: "Testes Validados",
      description: "Aplicação de escalas neuropsicológicas precisas para avaliar a cognição.",
    },
    {
      number: "03",
      title: "Estratégia Preventiva",
      description: "Treinamentos, ajuste de hábitos e medicação protetora cerebral.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Perda de
            <br />
            Memória
          </>
        }
        description="Avaliação clínica detalhada para investigar a origem dos esquecimentos e estruturar estratégias de reabilitação e proteção cognitiva."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Tipo de Queixa</span>
              <p className={styles.sidebarText}>
                Alteração cognitiva comum que necessita de diferenciação diagnóstica.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Abordagem</span>
              <p className={styles.sidebarText}>
                Exames metabólicos, exames de imagem cerebral e testes de desempenho mental.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “Identificar a perda de memória precocemente permite tratar o que é reversível e
                proteger o cérebro contra perdas futuras de forma ativa.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Quando os lapsos de memória exigem investigação médica:
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
              <h2 className={styles.sectionHeading}>Preservação da Autonomia</h2>
              <p className={styles.paragraph}>
                Ao determinar a causa real da queixa de memória, o Dr. Adilson Silvestre atua
                removendo fatores agressores ao sistema nervoso e incentivando a prática de exercícios
                físicos, alimentação adequada e exercícios de reabilitação cognitiva, mantendo o
                paciente lúcido e independente pelo maior tempo possível.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/perda-memoria" />

      <CTASection
        eyebrow="Agendamento"
        title="Agende uma consulta para investigar queixas de esquecimento"
        description="Agendamento rápido para consultório em Maringá e Paranavaí, atendimento no domicílio ou telemedicina."
      />

      <Footer />
    </main>
  );
}

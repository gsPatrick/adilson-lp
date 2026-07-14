import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import InnerContent from "@/components/organisms/InnerContent/InnerContent";
import OtherDiseases from "@/components/organisms/OtherDiseases/OtherDiseases";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

export const metadata = {
  title: "Ansiedade & Depressão | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba como a ansiedade e a depressão se manifestam na maturidade e na velhice, e conheça o tratamento geriátrico integrado em Maringá e Paranavaí.",
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

export default function AnsiedadeDepressaoPage() {
  const paragraphs = [
    "A ansiedade e a depressão no envelhecimento frequentemente se manifestam de forma diferente das fases mais jovens da vida. Em vez de queixas diretas de tristeza, os idosos tendem a expressar o sofrimento psíquico por meio de sintomas corporais vagos e persistentes.",
    "A depressão não tratada pode simular quadros demenciais (pseudodemência), causando severos lapsos de memória, falta de atenção e isolamento social. Fatores como a perda de papéis sociais na aposentadoria, o luto e o surgimento de limitações físicas agravam a vulnerabilidade emocional.",
    "O tratamento clínico especializado do Dr. Adilson Silvestre analisa a saúde de forma integrada, prescrevendo medicamentos modernos que aliviam os sintomas sem induzir sonolência excessiva, tonturas ou aumentar o risco de quedas.",
  ];

  const listItems = [
    "Queixas frequentes de dores difusas pelo corpo, tonturas ou azia sem causa orgânica identificada",
    "Preocupação desproporcional com a própria saúde, finanças ou bem-estar de familiares",
    "Sentimento de apatia, desânimo persistente e falta de interesse em atividades de lazer habituais",
    "Tendência ao isolamento social, recusando passeios, telefonemas ou visitas de parentes",
    "Dificuldade de concentração, raciocínio lento e lapsos temporários de memória recente",
    "Alterações significativas no padrão de sono (insônia noturna ou hipersonia diurna) e apetite",
  ];

  const bannerItems = [
    {
      number: "01",
      title: "Diagnóstico Diferencial",
      description: "Diferenciação clara entre depressão do idoso (pseudodemência) e declínios cognitivos orgânicos.",
    },
    {
      number: "02",
      title: "Uso Seguro de Fármacos",
      description: "Escolha cuidadosa de antidepressivos modernos que preservem o equilíbrio físico.",
    },
    {
      number: "03",
      title: "Suporte Emocional",
      description: "Orientação focada na reintegração social, estilo de vida ativo e psicoterapia.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Doenças Tratadas"
        title={
          <>
            Ansiedade &
            <br />
            Depressão
          </>
        }
        description="Apoio emocional e tratamento clínico especializado. Diagnóstico preciso, manejo farmacológico seguro e reintegração da qualidade de vida."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Manifestação</span>
              <p className={styles.sidebarText}>
                Quadros comumente marcados por somatização (sintomas físicos) e isolamento progressivo.
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Abordagem Geriátrica</span>
              <p className={styles.sidebarText}>
                Medicamentos seguros, atividades físicas assistidas e apoio à socialização.
              </p>
            </div>
          </aside>

          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              <p className={styles.highlightParagraph}>
                “A depressão na velhice é uma condição médica real e tratável, que merece escuta
                atenta e intervenções adequadas para restaurar a alegria de viver.”
              </p>
              <p className={styles.paragraph}>{paragraphs[0]}</p>
              <p className={styles.paragraph}>{paragraphs[1]}</p>
              <p className={styles.paragraph}>{paragraphs[2]}</p>
            </article>

            <div className={styles.listBlock}>
              <h2 className={styles.sectionHeading}>
                Sinais físicos e emocionais que sugerem depressão ou ansiedade:
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
              <h2 className={styles.sectionHeading}>Combate ao Isolamento Social</h2>
              <p className={styles.paragraph}>
                Além do ajuste químico das receitas, o plano de saúde mental do idoso deve incluir
                estratégias comportamentais, fomento a redes de apoio familiar e comunitário, e o
                incentivo a práticas de lazer coletivas, devolvendo pertencimento e vitalidade ao
                paciente.
              </p>
            </article>
          </div>
        </div>
      </section>

      <OtherDiseases currentPageLink="/doencas/ansiedade-depressao" />

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta de suporte e avaliação emocional?"
        description="Fale com a nossa equipe no WhatsApp para escolher entre atendimento presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

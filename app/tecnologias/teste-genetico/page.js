import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./teste-genetico.module.css";

export const metadata = {
  title: "Teste Genético Preditivo | Dr. Adilson Silvestre - Geriatria",
  description:
    "Saiba como o teste genético de DNA auxilia na personalização de medicamentos, dosagens, suplementos e estilo de vida em Maringá e Paranavaí.",
};

function DNAIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 10.5C4.5 10.5 7.5 4.5 12 4.5C16.5 4.5 19.5 10.5 19.5 10.5C19.5 10.5 16.5 16.5 12 16.5C7.5 16.5 4.5 10.5 4.5 10.5Z" />
      <circle cx="12" cy="10.5" r="3" />
      <path d="M12 16.5V21" />
      <path d="M9 19H15" />
    </svg>
  );
}

export default function TesteGeneticoPage() {
  const bannerItems = [
    {
      number: "01",
      title: "Variantes de DNA",
      description: "Mapeamento genético focado em prever predisposições patológicas.",
    },
    {
      number: "02",
      title: "Farmacogenética",
      description: "Identificação exata de medicamentos compatíveis com o seu DNA.",
    },
    {
      number: "03",
      title: "Nutrição de Precisão",
      description: "Identificação de sensibilidades a até 216 tipos de alimentos.",
    },
  ];

  const analysisAreas = [
    {
      title: "Saúde Cardiovascular",
      description: "Predisposições genéticas a infartos, AVCs, tromboses, hipertensão e distúrbios lipídicos.",
    },
    {
      title: "Absorção de Vitaminas",
      description: "Como seu DNA influencia na absorção, estoque e metabolismo de vitaminas essenciais.",
    },
    {
      title: "Farmacogenética",
      description: "Análise de compatibilidade e toxicidade medicamentosa baseada no seu metabolismo genético.",
    },
    {
      title: "Neurogenética",
      description: "Pesquisa de marcadores associados à predisposição a Alzheimer e outras demências.",
    },
    {
      title: "Metabolismo Energético",
      description: "Análise da sensibilidade ao peso corporal, ganho de gordura e síntese de massa magra.",
    },
    {
      title: "Cannabis Medicinal",
      description: "Mapeamento genético da tolerabilidade, dosagens e resposta a compostos canabinoides.",
    },
    {
      title: "Saúde Mental",
      description: "Como seu DNA metaboliza fármacos indicados para o tratamento de ansiedade e depressão.",
    },
    {
      title: "Saúde por Gênero",
      description: "Avaliação do equilíbrio hormonal e metabolismo de estrogênio ou testosterona.",
    },
    {
      title: "Desempenho Esportivo",
      description: "Capacidade muscular de força, resposta ao exercício físico e tempo de regeneração de lesões.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Tecnologias"
        title={
          <>
            Teste Genético
            <br />
            Preditivo
          </>
        }
        description="A ciência da medicina de precisão aplicada à sua longevidade. Analise seu DNA para planejar sua suplementação, treinos e medicamentos."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          
          {/* Introduction Split */}
          <div className={styles.introSplit}>
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>Medicina de Precisão</span>
              <h2 className={styles.sectionTitle}>
                Seu código genético como guia de saúde
              </h2>
              <p className={styles.highlightParagraph}>
                “O teste genético é uma ferramenta definitiva para antecipar riscos de saúde e
                desenhar um estilo de vida focado na longevidade ativa.”
              </p>
              <p className={styles.paragraph}>
                O teste genético analisa variações no seu DNA que influenciam diretamente o seu
                metabolismo, o risco de desenvolvimento de patologias e a resposta a medicações. Com
                essas informações integradas, o Dr. Adilson Silvestre consegue personalizar com
                extrema precisão as estratégias de prevenção, reposição vitamínica e estilo de vida.
              </p>
              <p className={styles.paragraph}>
                Realizado por meio de uma simples coleta de saliva no consultório, o painel estuda
                a detecção de variantes genéticas em 144 genes essenciais para a saúde metabólica,
                cardiológica e cognitiva.
              </p>
            </div>

            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <div className={styles.dnaIllustration}>
                  {/* CSS-based double helix simulation using SVG icon */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <DNAIcon />
                  </div>
                  <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '12px' }}>
                    DNA Mapped
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DNA Grid Section */}
          <div className={styles.techSection}>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              Áreas analisadas no teste genético:
            </h2>
            <div className={styles.grid}>
              {analysisAreas.map((area, idx) => (
                <div key={idx} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <DNAIcon />
                  </div>
                  <h3 className={styles.cardTitle}>{area.title}</h3>
                  <p className={styles.cardText}>{area.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar o mapeamento genético do seu DNA?"
        description="Fale com a nossa equipe no WhatsApp para tirar dúvidas e agendar sua coleta presencial em Maringá ou Paranavaí."
      />

      <Footer />
    </main>
  );
}

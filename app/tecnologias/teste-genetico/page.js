import Image from "next/image";
import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./teste-genetico.module.css";

export const metadata = {
  title: "Teste Genético Preditivo | Dr. Adilson Silvestre - Geriatria",
  description:
    "Mapeamento genético avançado e medicina preditiva de precisão. Conheça nossos testes: Câncer Hereditário, LifeCode e Hipersensibilidade Alimentar IgG.",
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

export default function TesteGeneticoPage() {
  const bannerItems = [
    {
      number: "01",
      title: "Câncer Hereditário",
      description: "Antecipação de riscos genéticos de neoplasias com a linha Precision.",
    },
    {
      number: "02",
      title: "LifeCode Completo",
      description: "Painel genômico com 300 variantes nutrigenéticas para saúde global.",
    },
    {
      number: "03",
      title: "Hipersensibilidade",
      description: "Mapeamento imunológico de intolerância alimentar para 216 insumos.",
    },
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Exames e Diagnósticos"
        title={
          <>
            Teste Genético
            <br />
            Preditivo
          </>
        }
        description="A ciência da medicina de precisão aplicada à sua saúde. Analise seu DNA para planejar sua prevenção oncológica, metabolismo alimentar, suplementação e estilo de vida."
        imageSrc="/images/dna_analysis_tech.png"
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
                Seu código genético como guia definitivo de saúde
              </h2>
              <p className={styles.highlightParagraph}>
                “Os exames preditivos são a ferramenta definitiva da atualidade para antecipar riscos de saúde e guiar escolhas precisas e individualizadas.”
              </p>
              <p className={styles.paragraph}>
                Os testes genéticos analisam variantes moleculares no seu DNA que influenciam diretamente no risco do desenvolvimento de patologias, nas tolerâncias gastrointestinais e nas respostas a nutrientes ou medicações. A coleta é realizada de forma extremamente simples e totalmente indolor, feita através de uma rápida fricção de <strong>swab oral (coleta de saliva) ou por coleta de sangue periférico</strong>, a depender do exame genético específico escolhido.
              </p>
              <p className={styles.paragraph}>
                No consultório do Dr. Adilson Silvestre, trabalhamos com o portfólio oficial do nosso laboratório parceiro, a <strong>Bioma Genetics</strong>, garantindo relatórios genômicos estruturados e baseados em evidências científicas de ponta.
              </p>
            </div>
          </div>

          {/* Structured Tests Grid / List */}
          <div className={styles.productsSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Nossos Testes Disponíveis</span>
              <h2 className={styles.sectionTitle}>Os 3 principais exames de mapeamento de DNA</h2>
              <p className={styles.lead}>
                Conheça o que cada teste genético analisa e como as informações são utilizadas na sua rotina:
              </p>
            </div>

            <div className={styles.productsList}>
              
              {/* Product 1: Câncer Hereditário */}
              <div className={styles.productBlock}>
                <div className={styles.productText}>
                  <span className={styles.productBadge}>Linha Precision</span>
                  <h3 className={styles.productTitle}>Teste Genético de Câncer Hereditário</h3>
                  <p className={styles.productDesc}>
                    O Painel de Câncer Hereditário identifica variantes genéticas germinativas associadas à predisposição hereditária a tumores, permitindo um mapeamento minucioso do risco pessoal e do histórico familiar.
                  </p>
                  <p className={styles.productDesc}>
                    Realizado através de Sequenciamento de Nova Geração (NGS), este exame é indicado para apoiar condutas de rastreamento precoce e planejamento preventivo individualizado.
                  </p>
                  <ul className={styles.productFeatures}>
                    <li><CheckIcon /> <span>Investigação de síndromes de câncer familiar precoce</span></li>
                    <li><CheckIcon /> <span>Sequenciamento molecular de altíssima cobertura (NGS)</span></li>
                    <li><CheckIcon /> <span>Rastreamento preventivo sob medida e orientação de hábitos</span></li>
                  </ul>
                </div>
                <div className={styles.productImageCol}>
                  <Image
                    src="/images/bioma-cancer.jpeg"
                    alt="Kit Painel de Câncer Hereditário Bioma Genetics"
                    width={400}
                    height={300}
                    className={styles.productImg}
                  />
                </div>
              </div>

              {/* Product 2: LifeCode (Reversed) */}
              <div className={`${styles.productBlock} ${styles.reverse}`}>
                <div className={styles.productText}>
                  <span className={styles.productBadge}>Linha Longevity</span>
                  <h3 className={styles.productTitle}>Teste Genético LifeCode</h3>
                  <p className={styles.productDesc}>
                    O LifeCode é um painel nutrigenético abrangente que analisa 300 variantes genéticas em seu DNA. O exame fornece um guia completo de condutas personalizadas em saúde metabólica, esportiva e de bem-estar.
                  </p>
                  <p className={styles.productDesc}>
                    Ele engloba todas as áreas vitais mapeadas pela genética moderna, gerando insights precisos para guiar sua alimentação diária e exames preventivos.
                  </p>
                  <ul className={styles.productFeatures}>
                    <li><CheckIcon /> <span><strong>Cardiovascular e Metabólico:</strong> Predisposição a hipertensão, infartos e AVCs</span></li>
                    <li><CheckIcon /> <span><strong>Neurogenética e Saúde Mental:</strong> Marcadores de risco para Alzheimer e farmacogenética</span></li>
                    <li><CheckIcon /> <span><strong>Nutrição e Performance:</strong> Resposta a nutrientes, vitaminas, força e fadiga muscular</span></li>
                    <li><CheckIcon /> <span><strong>Cannabis Medicinal:</strong> Tolerabilidade e dosagens recomendadas</span></li>
                  </ul>
                </div>
                <div className={styles.productImageCol}>
                  <Image
                    src="/images/bioma-lifecode.jpeg"
                    alt="Kit LifeCode Bioma Genetics"
                    width={400}
                    height={300}
                    className={styles.productImg}
                  />
                </div>
              </div>

              {/* Product 3: Hipersensibilidade Alimentar */}
              <div className={styles.productBlock}>
                <div className={styles.productText}>
                  <span className={styles.productBadge}>Linha Longevity</span>
                  <h3 className={styles.productTitle}>Hipersensibilidade Alimentar IgG (216 Alimentos)</h3>
                  <p className={styles.productDesc}>
                    Este teste mapeia a presença de anticorpos IgG específicos contra 216 alimentos diferentes no seu organismo, revelando reações imunológicas tardias de hipersensibilidade.
                  </p>
                  <p className={styles.productDesc}>
                    Diferente de alergias agudas, as hipersensibilidades causam distúrbios silenciosos que se manifestam horas ou dias após a refeição, sendo causas comuns de estufamento abdominal, fadiga crônica e enxaquecas.
                  </p>
                  <ul className={styles.productFeatures}>
                    <li><CheckIcon /> <span>Análise abrangente de tolerância para 216 insumos alimentares</span></li>
                    <li><CheckIcon /> <span>Identificação precisa de alimentos gatilhos e inflamatórios</span></li>
                    <li><CheckIcon /> <span>Apoio ao planejamento dietético sem restrições desnecessárias</span></li>
                  </ul>
                </div>
                <div className={styles.productImageCol}>
                  <Image
                    src="/images/bioma-hipersensibilidade.jpeg"
                    alt="Kit de Hipersensibilidade Alimentar Bioma Genetics"
                    width={400}
                    height={300}
                    className={styles.productImg}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar o mapeamento genético do seu DNA?"
        description="Fale com a nossa equipe no WhatsApp para tirar dúvidas e agendar sua coleta de swab oral em Maringá ou Paranavaí."
      />

      <Footer />
    </main>
  );
}

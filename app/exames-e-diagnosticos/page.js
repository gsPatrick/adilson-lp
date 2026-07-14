import Image from "next/image";
import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "@/app/tecnologias/teste-genetico/teste-genetico.module.css";

export const metadata = {
  title: "Exames e Diagnósticos | Dr. Adilson Silvestre - Geriatria",
  description:
    "Conheça nossos exames de bioimpedanciometria InBody de alta precisão, polissonografia domiciliar para apneia do sono e terapias injetáveis no consultório.",
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
      style={{ color: "#c5a880", flexShrink: 0, marginTop: "2px" }}
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ExamesEDiagnosticosPage() {
  const bannerItems = [
    {
      number: "01",
      title: "InBody de Precisão",
      description: "Bioimpedanciometria de alta precisão, referência mundial no mercado.",
    },
    {
      number: "02",
      title: "Polissonografia",
      description: "Exame respiratório completo e monitoramento do sono em ambiente domiciliar.",
    },
    {
      number: "03",
      title: "Infusões Injetáveis",
      description: "Terapias injetáveis para reposição ética e segura de vitaminas e nutrientes.",
    },
  ];

  const scaleIndications = [
    "Avaliação e rastreamento de Sarcopenia (perda de massa magra e força muscular)",
    "Acompanhamento metabólico preciso em planos de emagrecimento saudável",
    "Monitoramento de desnutrição em pacientes oncológicos ou idosos frágeis",
    "Avaliação detalhada da retenção de líquidos e inchaço corporal",
  ];

  const sleepIndications = [
    "Ronco frequente e sensação de sufocamento durante o descanso noturno",
    "Sonolência excessiva diurna, cansaço crônico e fadiga sem causa aparente",
    "Hipertensão arterial de difícil controle (resistente a medicamentos)",
    "Despertares frequentes associados a engasgos ou palpitações cardíacas",
  ];

  const therapyIndications = [
    "Má absorção intestinal secundária (pós-cirurgia bariátrica ou doenças inflamatórias intestinais)",
    "Anemias ferroprivas severas e refratárias ao tratamento com comprimidos orais",
    "Deficiências severas e crônicas de Vitamina B12 ou Vitamina D",
    "Tratamento complementar de osteoporose e osteopenia graves",
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Exames e Diagnósticos"
        title={
          <>
            Exames &
            <br />
            Diagnósticos
          </>
        }
        description="Mapeamento metabólico e funcional completo realizado em nosso consultório ou no conforto do seu lar, com equipamentos e exames de alto padrão de precisão."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          
          {/* Section Header */}
          <div className={styles.sectionHeader} style={{ textAlign: "center", marginBottom: "20px" }}>
            <span className={styles.eyebrow}>Linhas de Diagnóstico</span>
            <h2 className={styles.sectionTitle}>Investigação e Acompanhamento Clínico</h2>
            <p className={styles.lead}>
              Estrutura tecnológica de ponta para a prevenção e personalização do tratamento da longevidade.
            </p>
          </div>

          <div className={styles.productsList}>
            
            {/* Block 1: Bioimpedanciometria InBody (With Image on the Right) */}
            <div className={styles.productBlock} id="bioimpedancia">
              <div className={styles.productText}>
                <span className={styles.productBadge}>Composição Corporal</span>
                <h3 className={styles.productTitle}>Bioimpedanciometria InBody</h3>
                <p className={styles.productDesc}>
                  A bioimpedanciometria é um exame clínico indispensável na avaliação metabólica e da longevidade. Em nosso consultório, utilizamos a plataforma <strong>InBody</strong>, reconhecida mundialmente como uma das melhores e mais precisas tecnologias do mercado de saúde.
                </p>
                <p className={styles.productDesc}>
                  Diferente de balanças de impedância simplificadas, o sistema InBody realiza uma varredura segmentar multifrequência direta, gerando relatórios de alta precisão sobre a massa magra (músculos) e gordura presentes em cada membro (braços, pernas e tronco), além dos níveis de água corporal. É essencial para guiar condutas contra a perda de força muscular (sarcopenia) e otimizar planos de emagrecimento sustentável.
                </p>
                <ul className={styles.productFeatures}>
                  {scaleIndications.map((item, idx) => (
                    <li key={idx}><CheckIcon /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className={styles.productImageCol}>
                <Image
                  src="/images/inbody-exame.jpeg"
                  alt="Relatório e Balança de Bioimpedanciometria InBody"
                  width={400}
                  height={300}
                  className={styles.productImg}
                />
              </div>
            </div>

            {/* Block 2: Polissonografia Domiciliar (Reversed, With Image on the Left) */}
            <div className={`${styles.productBlock} ${styles.reverse}`} id="polissonografia">
              <div className={styles.productText}>
                <span className={styles.productBadge}>Saúde do Sono</span>
                <h3 className={styles.productTitle}>Polissonografia Domiciliar</h3>
                <p className={styles.productDesc}>
                  A apneia obstrutiva do sono e a fragmentação do descanso noturno são condições clínicas sérias associadas a um risco elevado de AVC (derrame), infarto do miocárdio e declínio cognitivo em idosos.
                </p>
                <p className={styles.productDesc}>
                  A polissonografia domiciliar permite rastrear e monitorar os padrões respiratórios, saturação de oxigênio e frequência cardíaca do paciente de maneira prática e não invasiva, com todo o conforto de dormir em seu próprio leito, evitando o estresse e os eletrodos de laboratórios de sono convencionais.
                </p>
                <ul className={styles.productFeatures}>
                  {sleepIndications.map((item, idx) => (
                    <li key={idx}><CheckIcon /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className={styles.productImageCol}>
                <Image
                  src="/images/polissonografia-exame.jpeg"
                  alt="Aparelho de Polissonografia Domiciliar"
                  width={400}
                  height={300}
                  className={styles.productImg}
                />
              </div>
            </div>

            {/* Block 3: Terapias Injetáveis (With Image on the Right) */}
            <div className={styles.productBlock} id="terapias">
              <div className={styles.productText}>
                <span className={styles.productBadge}>Nutrologia e Absorção</span>
                <h3 className={styles.productTitle}>Terapias Injetáveis</h3>
                <p className={styles.productDesc}>
                  Com o avançar da idade, ou em pacientes submetidos a cirurgias bariátricas e indivíduos com doenças gastrointestinais inflamatórias crônicas, a capacidade de absorver nutrientes e medicamentos por via oral pode decair de forma drástica.
                </p>
                <p className={styles.productDesc}>
                  As terapias injetáveis e infusões intramusculares ou endovenosas garantem a entrega rápida, segura e com 100% de aproveitamento biológico de ferro, vitaminas essenciais (como as do complexo B) e indutores de remodelação óssea para o tratamento de osteoporose severa.
                </p>
                <ul className={styles.productFeatures}>
                  {therapyIndications.map((item, idx) => (
                    <li key={idx}><CheckIcon /> <span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className={styles.productImageCol}>
                <Image
                  src="/images/terapias-injetaveis-exame.jpeg"
                  alt="Terapias Injetáveis no consultório"
                  width={400}
                  height={300}
                  className={styles.productImg}
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar exames diagnósticos ou terapias?"
        description="Fale com a nossa equipe no WhatsApp para tirar dúvidas e agendar sua consulta com o Dr. Adilson Silvestre."
      />

      <Footer />
    </main>
  );
}

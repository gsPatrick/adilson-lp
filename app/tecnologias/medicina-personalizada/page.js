import Image from "next/image";
import Hero from "@/components/organisms/Hero/Hero";
import TransitionBanner from "@/components/organisms/TransitionBanner/TransitionBanner";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./medicina-personalizada.module.css";

export const metadata = {
  title: "Medicina Personalizada | Dr. Adilson Silvestre - Geriatria",
  description:
    "Conheça as tecnologias aplicadas do nosso consultório: Bioimpedância para sarcopenia, Exame do Sono para apneia e Terapias Injetáveis em Maringá.",
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
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

function SleepIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
      <path d="M12 11v6" />
      <path d="M18 11v6" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
    </svg>
  );
}

function TherapyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 22 1-1" />
      <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3v4c0 1.7 1.3 3 3 3s3-1.3 3-3V5Z" />
      <path d="M14 12V22" />
      <path d="M10 18H18" />
    </svg>
  );
}

export default function MedicinaPersonalizadaPage() {
  const bannerItems = [
    {
      number: "01",
      title: "Polissonografia",
      description: "Diagnóstico e controle clínico da apneia obstrutiva do sono.",
    },
    {
      number: "02",
      title: "Bioimpedância",
      description: "Mapeamento corporal preciso para controle de sarcopenia e massa magra.",
    },
    {
      number: "03",
      title: "Terapias Injetáveis",
      description: "Repositor de nutrientes e vitaminas em situações de baixa absorção intestinal.",
    },
  ];

  const sleepIndications = [
    "Ronco alto, frequente e pausas respiratórias durante o sono",
    "Sonolência excessiva diurna, cansaço matinal e fadiga física",
    "Sono fragmentado (despertares noturnos constantes)",
    "Insônia persistente e agitação motora noturna",
  ];

  const scaleIndications = [
    "Investigação precoce e acompanhamento de sarcopenia (perda de músculo)",
    "Mapeamento de gordura corporal, gordura visceral e massa magra",
    "Avaliação de desnutrição em pacientes maduros e idosos fragilizados",
    "Planejamento nutricional focado em ganho de massa funcional",
  ];

  const therapyIndications = [
    "Pacientes submetidos a cirurgia bariátrica com dificuldade de absorção de nutrientes",
    "Distúrbios inflamatórios crônicos do estômago ou intestinos",
    "Deficiências severas de ferro ou vitamina B12 refratárias ao tratamento oral",
    "Tratamento complementar protetor de osteoporose e osteopenia",
  ];

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Exames e Diagnósticos"
        title={
          <>
            Medicina
            <br />
            Personalizada
          </>
        }
        description="A ciência e a tecnologia unidas em prol da sua saúde. Conheça as ferramentas de diagnóstico e tratamentos biológicos avançados do nosso consultório."
        imageSrc={null}
        showScrollytelling={false}
      />

      <TransitionBanner items={bannerItems} />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          
          {/* Block 1: Bioimpedanciometria */}
          <div className={styles.techBlock} id="bioimpedancia">
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>Composição Corporal</span>
              <h2 className={styles.blockTitle}>Exame de Bioimpedanciometria</h2>
              <p className={styles.paragraph}>
                Embora bastante conhecida no acompanhamento da perda de peso, a bioimpedanciometria é
                um exame clínico indispensável na geriatria. Ela permite aferir precisamente os níveis
                de massa magra (músculos) em cada membro do corpo.
              </p>
              <p className={styles.paragraph}>
                Essa ferramenta fornece dados cruciais para a prevenção e reversão da sarcopenia
                (perda de força e massa muscular), possibilitando intervenções rápidas e
                suplementações adequadas para preservar a capacidade funcional do idoso.
              </p>
              
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>Principais indicações de realização:</h3>
                <ul className={styles.list}>
                  {scaleIndications.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.visualCol}>
              <Image
                src="/images/body_composition_scale.png"
                alt="Mapeamento de Massa Magra por Bioimpedanciometria"
                width={480}
                height={360}
                className={styles.techImage}
              />
            </div>
          </div>

          {/* Block 2: Polissonografia Domiciliar (Reversed) */}
          <div className={`${styles.techBlock} ${styles.reverse}`} id="polissonografia">
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>Saúde do Sono</span>
              <h2 className={styles.blockTitle}>Polissonografia Domiciliar</h2>
              <p className={styles.paragraph}>
                A apneia obstrutiva do sono ocorre quando há interrupções repetidas da respiração à
                noite, reduzindo a oxigenação sanguínea e sobrecarregando o sistema cardiovascular. É uma
                condição silenciosa que eleva drasticamente o risco de infartos, AVCs e hipertensão.
              </p>
              <p className={styles.paragraph}>
                O exame do sono domiciliar monitora e registra os padrões respiratórios do paciente no
                conforto do seu próprio lar, avaliando também a presença de insônia crônica, sono
                fragmentado e fadiga no dia seguinte de forma muito prática.
              </p>
              
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>Sinais que indicam a necessidade do exame:</h3>
                <ul className={styles.list}>
                  {sleepIndications.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.visualCol}>
              <Image
                src="/images/exame-sono.png"
                alt="Avaliação de Oxigenação e Exame do Sono Domiciliar"
                width={480}
                height={360}
                className={styles.techImage}
              />
            </div>
          </div>

          {/* Block 3: Terapias Injetáveis */}
          <div className={styles.techBlock} id="terapias">
            <div className={styles.textCol}>
              <span className={styles.eyebrow}>Suplementação Biológica</span>
              <h2 className={styles.blockTitle}>Terapias Injetáveis</h2>
              <p className={styles.paragraph}>
                Alguns pacientes apresentam dificuldades severas de absorção intestinal de vitaminas e
                ferro por via oral — como operados de cirurgias bariátricas, oncológicos ou indivíduos
                com doenças inflamatórias gastrintestinais.
              </p>
              <p className={styles.paragraph}>
                As terapias injetáveis são prescritas após avaliação detalhada e exames de sangue,
                garantindo a infusão segura, ética e rápida de nutrientes essenciais, além de oferecer
                tratamentos protetores modernos contra a osteoporose.
              </p>
              
              <div className={styles.listContainer}>
                <h3 className={styles.listTitle}>Quem pode se beneficiar do tratamento:</h3>
                <ul className={styles.list}>
                  {therapyIndications.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.visualCol}>
              <Image
                src="/images/terapias-injetaveis.png"
                alt="Suporte Nutricional Rápido e Terapias Injetáveis"
                width={480}
                height={360}
                className={styles.techImage}
              />
            </div>
          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar exames diagnósticos ou reposição de nutrientes?"
        description="Fale com a nossa equipe no WhatsApp para tirar dúvidas e agendar sua consulta com o Dr. Adilson Silvestre."
      />

      <Footer />
    </main>
  );
}

import Image from "next/image";
import styles from "./ProvideSection.module.css";

const SERVICES = [
  "Consulta domiciliar",
  "Consulta ambulatorial",
  "Avaliação médica detalhada",
  "Solicitação de exames",
];

const BENEFITS = [
  "Autonomia e independência",
  "Qualidade de vida",
  "Bem-estar",
  "Longevidade",
  "Muita saúde e disposição para brincar com seus netos e viver intensamente",
];

function ArrowheadIcon() {
  return (
    <svg
      viewBox="0 0 10 20"
      width="8"
      height="14"
      fill="none"
      className={styles.arrowhead}
      aria-hidden="true"
    >
      <path
        d="M0 0L10 10L0 20"
        stroke="#7CA4A1"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 22 16"
      width="16"
      height="12"
      fill="none"
      className={styles.check}
      aria-hidden="true"
    >
      <path
        d="M20 2L7.625 14.375L2 8.75"
        stroke="#7CA4A1"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProvideSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Left Column: Services list in a card */}
        <div className={styles.leftCol}>
          <div className={styles.servicesCard}>
            <div className={styles.cardGlow} aria-hidden="true" />
            <h3 className={styles.cardTitle}>Serviços Disponíveis</h3>
            <ul className={styles.servicesList}>
              {SERVICES.map((srv, idx) => (
                <li key={idx} className={styles.serviceItem}>
                  <ArrowheadIcon />
                  <span className={styles.serviceText}>{srv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Column: Doctor Portrait */}
        <div className={styles.middleCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/dr-adilson-sobre-desk.jpeg"
              alt="Dr. Adilson Silvestre no consultório"
              width={405}
              height={454}
              className={styles.doctorImage}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
        </div>

        {/* Right Column: Title and checklist */}
        <div className={styles.rightCol}>
          <h2 className={styles.title}>Quero te proporcionar</h2>
          <ul className={styles.benefitsList}>
            {BENEFITS.map((bnf, idx) => (
              <li key={idx} className={styles.benefitItem}>
                <div className={styles.checkWrapper}>
                  <CheckIcon />
                </div>
                <span className={styles.benefitText}>{bnf}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

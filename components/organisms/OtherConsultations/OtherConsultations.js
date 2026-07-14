import Link from "next/link";
import styles from "./OtherConsultations.module.css";

const CONSULTATIONS = [
  {
    title: "Avaliação Geriátrica Global",
    description:
      "Uma análise multidimensional e integrada da saúde, avaliando cognição, mobilidade, medicamentos, autonomia e bem-estar do paciente.",
    link: "/avaliacao-geriatrica",
    label: "Geriátria Integral",
  },
  {
    title: "Consulta Online & Domiciliar",
    description:
      "Conforto e acessibilidade com atendimento em consultório, consultas domiciliares para acamados ou online para todo o Brasil.",
    link: "/atendimento-online",
    label: "Modalidades de Atendimento",
  },
  {
    title: "Prevenção aos 40 Anos",
    description:
      "Descubra por que iniciar o cuidado preventivo de forma organizada a partir dos 40 anos é a chave para um envelhecimento ativo e saudável.",
    link: "/prevencao-40-anos",
    label: "Longevidade Ativa",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function OtherConsultations({ currentPageLink = "" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Explorar Mais</span>
          <h2 className={styles.title}>Outros motivos para consultar</h2>
          <p className={styles.lead}>
            Continue lendo sobre como a medicina preventiva e geriátrica auxilia nas diferentes fases da vida.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {CONSULTATIONS.map((item, index) => {
            const isCurrent = item.link === currentPageLink;
            
            return (
              <div
                key={index}
                className={`${styles.card} ${isCurrent ? styles.currentCard : ""}`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardLabel}>{item.label}</span>
                  {isCurrent && <span className={styles.currentBadge}>Você está aqui</span>}
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  {isCurrent ? (
                    <span className={styles.currentLinkText}>Artigo Atual</span>
                  ) : (
                    <Link href={item.link} className={styles.link}>
                      <span>Ler Artigo</span>
                      <ArrowIcon />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

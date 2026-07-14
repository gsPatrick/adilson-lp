import Link from "next/link";
import styles from "./OtherDiseases.module.css";

const DISEASES = [
  {
    title: "Doença de Alzheimer",
    description: "Abordagem com foco em diagnóstico precoce, suporte familiar e terapias de estimulação cognitiva contínuas.",
    link: "/doencas/alzheimer",
    label: "Cognição",
  },
  {
    title: "Sarcopenia",
    description: "Prevenção e tratamento da perda de massa muscular, força e capacidade física com a longevidade.",
    link: "/doencas/sarcopenia",
    label: "Saúde Muscular",
  },
  {
    title: "Osteoporose",
    description: "Mapeamento de densidade óssea, reposição de nutrientes e prevenção de fraturas de fêmur e coluna.",
    link: "/doencas/osteoporose",
    label: "Saúde Óssea",
  },
  {
    title: "Prevenção de Quedas",
    description: "Orientações de mobilidade, equilíbrio e adaptação do ambiente para evitar acidentes domésticos.",
    link: "/doencas/prevencao-quedas",
    label: "Mobilidade",
  },
  {
    title: "Insônia & Sono",
    description: "Avaliação global dos distúrbios de sono, higiene do sono e ajuste inteligente de medicamentos indutores.",
    link: "/doencas/insonia",
    label: "Qualidade de Vida",
  },
  {
    title: "Polifarmácia",
    description: "Revisão e simplificação de receitas com múltiplos medicamentos para evitar efeitos colaterais (iatrogenia).",
    link: "/doencas/polifarmacia",
    label: "Segurança Farmacológica",
  },
];

const ADDITIONAL_DISEASES = [
  { title: "Perda de Memória", link: "/doencas/perda-memoria" },
  { title: "Outras Demências", link: "/doencas/demencia" },
  { title: "Ansiedade & Depressão", link: "/doencas/ansiedade-depressao" },
  { title: "Diabetes Mellitus", link: "/doencas/diabetes" },
  { title: "Hipertensão Arterial", link: "/doencas/hipertensao" },
  { title: "Doença de Parkinson", link: "/doencas/parkinson" },
  { title: "Reposição Hormonal", link: "/doencas/reposicao-hormonal" },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
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

export default function OtherDiseases({ currentPageLink = "" }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Tratamentos</span>
          <h2 className={styles.title}>Principais condições acompanhadas</h2>
          <p className={styles.lead}>
            Explore outras áreas de atuação da geriatria preventiva e longevidade ativa.
          </p>
        </div>

        {/* Major Diseases Grid */}
        <div className={styles.grid}>
          {DISEASES.map((item, index) => {
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

        {/* Additional Diseases Link List */}
        <div className={styles.additionalSection}>
          <h3 className={styles.additionalTitle}>Outras condições tratadas no consultório:</h3>
          <div className={styles.linksRow}>
            {ADDITIONAL_DISEASES.map((item, index) => {
              const isCurrent = item.link === currentPageLink;
              
              if (isCurrent) {
                return (
                  <span key={index} className={styles.additionalLinkCurrent}>
                    {item.title} (Atual)
                  </span>
                );
              }
              
              return (
                <Link key={index} href={item.link} className={styles.additionalLink}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

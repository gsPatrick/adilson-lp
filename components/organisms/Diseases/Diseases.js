import Link from "next/link";
import styles from "./Diseases.module.css";

const DISEASES = [
  {
    slug: "alzheimer",
    title: "Doença de Alzheimer",
    description: "Prevenção, diagnóstico precoce e acompanhamento da principal causa de demência em idosos.",
  },
  {
    slug: "parkinson",
    title: "Doença de Parkinson",
    description: "Diagnóstico neurológico, controle de tremores e rigidez para preservação da mobilidade.",
  },
  {
    slug: "sarcopenia",
    title: "Sarcopenia",
    description: "Tratamento especializado para perda progressiva e involuntária de força e massa muscular.",
  },
  {
    slug: "osteoporose",
    title: "Osteoporose",
    description: "Fortalecimento da densidade mineral óssea para prevenir fraturas e perda de mobilidade.",
  },
  {
    slug: "prevencao-quedas",
    title: "Prevenção de Quedas",
    description: "Avaliação do equilíbrio corporal e riscos estruturais no ambiente doméstico do paciente.",
  },
  {
    slug: "insonia",
    title: "Insônia e Distúrbios do Sono",
    description: "Abordagem clínica e diagnóstico de apneia do sono e fragmentação do descanso noturno.",
  },
  {
    slug: "ansiedade-depressao",
    title: "Ansiedade e Depressão",
    description: "Suporte especializado focado no equilíbrio emocional e na saúde mental durante o envelhecimento.",
  },
  {
    slug: "polifarmacia",
    title: "Polifarmácia",
    description: "Revisão e ajuste seguro de receitas com múltiplos medicamentos para evitar interações nocivas.",
  },
  {
    slug: "perda-memoria",
    title: "Perda de Memória",
    description: "Investigação detalhada do esquecimento para diferenciar envelhecimento natural de demência.",
  },
  {
    slug: "demencia",
    title: "Outras Demências",
    description: "Diagnóstico e suporte integrado para demência vascular, corpos de Lewy, frontotemporal e senil.",
  },
  {
    slug: "diabetes",
    title: "Diabetes Mellitus",
    description: "Controle glicêmico coordenado e preventivo para evitar complicações renais e vasculares.",
  },
  {
    slug: "hipertensao",
    title: "Hipertensão Arterial",
    description: "Monitoramento e cuidado cardiovascular focado na longevidade e proteção dos vasos.",
  },
  {
    slug: "reposicao-hormonal",
    title: "Reposição Hormonal",
    description: "Avaliação criteriosa e reposição hormonal segura para controle de sintomas e bem-estar.",
  },
  {
    slug: "emagrecimento",
    title: "Plano de Emagrecimento",
    description: "Abordagem multidisciplinar com nutricionista, bioimpedância e suporte metabólico focado.",
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Diseases() {
  return (
    <section className={styles.section} id="doencas-tratadas">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Quando Procurar um Geriatra</p>
          <h2 className={styles.title}>
            Se você tem algumas dessas doenças, <br />
            <em className={styles.titleAccent}>procure um médico geriatra</em>
          </h2>
          <p className={styles.lead}>
            Consulte as principais condições tratadas pelo Dr. Adilson Silvestre. Clique no card de cada doença para ver formas de prevenção e tratamentos nas páginas internas.
          </p>
        </div>

        {/* Grid of clean typographic cards */}
        <div className={styles.grid}>
          {DISEASES.map((disease) => (
            <Link
              key={disease.slug}
              href={disease.slug === "emagrecimento" ? "/emagrecimento" : `/doencas/${disease.slug}`}
              className={styles.card}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{disease.title}</h3>
              </div>
              <p className={styles.cardDesc}>{disease.description}</p>
              <div className={styles.cardLink}>
                <span>Ver Detalhes</span>
                <ArrowRightIcon />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

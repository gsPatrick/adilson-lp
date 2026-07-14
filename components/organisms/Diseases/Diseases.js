import Link from "next/link";
import styles from "./Diseases.module.css";

const DISEASES = [
  {
    slug: "alzheimer",
    title: "Doença de Alzheimer",
    description: "Prevenção, diagnóstico precoce e acompanhamento da principal causa de demência em idosos.",
  },
  {
    slug: "sarcopenia",
    title: "Sarcopenia (Perda de Músculo)",
    description: "Tratamento especializado para perda progressiva e involuntária de força e massa muscular.",
  },
  {
    slug: "osteoporose",
    title: "Osteoporose",
    description: "Prevenção ativa da perda mineral óssea para evitar fraturas, dores e perda de mobilidade.",
  },
  {
    slug: "prevencao-quedas",
    title: "Prevenção de Quedas",
    description: "Avaliação da marcha, equilíbrio corporal e riscos estruturais do ambiente domiciliar.",
  },
  {
    slug: "insonia",
    title: "Insônia e Sono",
    description: "Diagnóstico e tratamento de apneia obstrutiva, roncos e fragmentação do sono.",
  },
  {
    slug: "ansiedade-depressao",
    title: "Ansiedade e Depressão",
    description: "Suporte especializado focado na saúde mental e equilíbrio emocional no envelhecimento.",
  },
  {
    slug: "polifarmacia",
    title: "Polifarmácia",
    description: "Revisão e desprescrição de receitas com múltiplos medicamentos para evitar interações perigosas.",
  },
  {
    slug: "perda-memoria",
    title: "Perda de Memória",
    description: "Investigação minuciosa do esquecimento para diferenciar envelhecimento natural de demência.",
  },
  {
    slug: "demencia",
    title: "Outras Demências",
    description: "Diagnóstico e suporte para demência vascular, corpos de Lewy, frontotemporal e senil.",
  },
  {
    slug: "diabetes",
    title: "Diabetes Mellitus",
    description: "Controle glicêmico coordenado para evitar complicações vasculares e renais em idosos.",
  },
  {
    slug: "hipertensao",
    title: "Hipertensão Arterial",
    description: "Acompanhamento cardiovascular preventivo com foco na manutenção de vasos sanguíneos saudáveis.",
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
          <p className={styles.eyebrow}>Doenças Tratadas</p>
          <h2 className={styles.title}>
            Resumo das condições acompanhadas no consultório
          </h2>
          <p className={styles.lead}>
            Clique em cada uma para ver as informações detalhadas, formas de prevenção e tratamentos nas páginas internas.
          </p>
        </div>

        {/* Grid of clean typographic cards */}
        <div className={styles.grid}>
          {DISEASES.map((disease) => (
            <Link
              key={disease.slug}
              href={`/doencas/${disease.slug}`}
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

import Link from "next/link";
import styles from "./ServiceLocations.module.css";

const LOCATIONS = [
  {
    slug: "maringa",
    city: "Maringá",
    state: "PR",
    type: "Consultório Presencial",
    description:
      "Consultas presenciais individualizadas com avaliação geriátrica global completa, exame físico detalhado e bioimpedanciometria.",
    tags: ["Consulta Presencial", "Avaliação Geriátrica", "Bioimpedanciometria"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    slug: "paranavai",
    city: "Paranavaí",
    state: "PR",
    type: "Consultório Presencial",
    description:
      "Atendimento no coração do interior paranaense. Agenda semanal com foco em geriatria preventiva para adultos maduros e idosos da região.",
    tags: ["Consulta Presencial", "Geriatria Preventiva", "Interior do PR"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    slug: "visita-domiciliar",
    city: "Visita Domiciliar",
    state: "Maringá e Região",
    type: "Atendimento em Casa",
    description:
      "Para pacientes com mobilidade reduzida, acamados ou em pós-operatório. O médico se desloca até a residência do paciente com toda a estrutura necessária.",
    tags: ["Atendimento em Casa", "Paciente Acamado", "Mobilidade Reduzida"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    slug: "telemedicina",
    city: "Todo o Brasil",
    state: "Telemedicina Online",
    type: "Consulta por Videochamada",
    description:
      "Teleconsulta com receita digital, pedidos de exames e laudos enviados por SMS ou e-mail, válidos em qualquer farmácia e laboratório do país.",
    tags: ["Telemedicina", "Todo o Brasil", "Receita Digital"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ServiceLocations() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Locais de Atendimento</span>
          <h2 className={styles.title}>
            Onde o Dr. Adilson <br />
            <em className={styles.titleEm}>atende você</em>
          </h2>
          <p className={styles.lead}>
            Atendimento presencial em Maringá e Paranavaí, visita domiciliar para pacientes com mobilidade reduzida e telemedicina para qualquer cidade do Brasil.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {LOCATIONS.map((loc, i) => (
            <Link
              key={i}
              href={`/locais-de-atendimento/${loc.slug}`}
              className={styles.card}
            >
              <div className={styles.cardIconWrapper}>
                {loc.icon}
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardType}>{loc.type}</span>
                <h3 className={styles.cardCity}>
                  {loc.city}
                  {loc.state && <span className={styles.cardState}> — {loc.state}</span>}
                </h3>
                <p className={styles.cardDesc}>{loc.description}</p>
                <div className={styles.tagRow}>
                  {loc.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardArrow}>
                <ArrowIcon />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Row */}
        <div className={styles.ctaRow}>
          <Link href="/locais-de-atendimento" className={styles.ctaLink}>
            Ver todos os locais de atendimento
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

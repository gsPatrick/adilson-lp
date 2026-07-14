import Link from "next/link";
import styles from "./Diseases.module.css";

const DISEASES = [
  {
    slug: "alzheimer",
    title: "Doença de Alzheimer",
  },
  {
    slug: "parkinson",
    title: "Doença de Parkinson",
  },
  {
    slug: "sarcopenia",
    title: "Sarcopenia (Perda de Músculo)",
  },
  {
    slug: "osteoporose",
    title: "Osteoporose",
  },
  {
    slug: "prevencao-quedas",
    title: "Prevenção de Quedas e Fraturas",
  },
  {
    slug: "insonia",
    title: "Insônia e Distúrbios do Sono",
  },
  {
    slug: "ansiedade-depressao",
    title: "Ansiedade e Depressão",
  },
  {
    slug: "polifarmacia",
    title: "Polifarmácia (Múltiplos Remédios)",
  },
  {
    slug: "perda-memoria",
    title: "Perda de Memória e Esquecimento",
  },
  {
    slug: "demencia",
    title: "Outras Demências (Vascular, Lewy, Senil)",
  },
  {
    slug: "diabetes",
    title: "Diabetes Mellitus",
  },
  {
    slug: "hipertensao",
    title: "Hipertensão Arterial",
  },
  {
    slug: "reposicao-hormonal",
    title: "Rastreio e Reposição Hormonal",
  },
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
      className={styles.itemArrow}
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
        
        {/* Section Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Quando Consultar</p>
          <h2 className={styles.title}>
            Se você tem algumas dessas doenças, <br />
            <em className={styles.titleAccent}>procure um médico geriatra</em>
          </h2>
        </div>

        {/* Written List Layout */}
        <div className={styles.listWrapper}>
          <ul className={styles.listGrid}>
            {DISEASES.map((d) => (
              <li key={d.slug} className={styles.listItem}>
                <Link href={`/doencas/${d.slug}`} className={styles.listLink}>
                  <span className={styles.bullet} />
                  <span className={styles.diseaseName}>{d.title}</span>
                  <ArrowIcon />
                </Link>
              </li>
            ))}
            {/* The final 'e muito mais' non-clickable visual placeholder */}
            <li className={`${styles.listItem} ${styles.moreItem}`}>
              <span className={styles.bulletMore} />
              <span className={styles.moreText}>... e muito mais!</span>
            </li>
          </ul>
        </div>

        {/* Final Section CTA */}
        <div className={styles.footerCTA}>
          <p className={styles.footerLead}>
            O geriatra realiza o acompanhamento integrado da saúde na longevidade, organizando receitas e prevenindo complicações.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar Consulta
          </a>
        </div>

      </div>
    </section>
  );
}

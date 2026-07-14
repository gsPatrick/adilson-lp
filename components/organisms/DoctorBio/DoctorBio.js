import Image from "next/image";
import styles from "./DoctorBio.module.css";

const TIMELINE_CARDS = [
  {
    text: "Formado pela Universidade de Marília - 2011",
  },
  {
    text: "Pós-graduado em Nutrologia pela ABRAN - 2015",
  },
  {
    text: "Residência Médica em Clínica Médica - 2020",
  },
  {
    text: "Residência Médica em Geriatria - 2022",
  },
];

function GraduationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 57 57"
      fill="none"
      className={styles.gradIcon}
    >
      <rect y="0.496582" width="56.3267" height="56.3267" rx="8" fill="#7CA4A1" />
      <path
        d="M46.2863 38.221V26.8016L46.6122 26.6119C47.3038 26.2104 47.7163 25.494 47.7163 24.6951C47.7163 23.8962 47.3038 23.1785 46.6122 22.777L29.8963 13.0667C28.4897 12.2472 26.7393 12.2486 25.3327 13.0667L8.61545 22.7784C7.9252 23.1799 7.5127 23.8962 7.5127 24.6951C7.5127 25.494 7.9252 26.2104 8.61545 26.6132L13.6837 29.5585V36.4046C13.6837 37.9941 14.5389 39.4722 15.9139 40.2656L22.8907 44.2875C24.3468 45.1262 25.9803 45.547 27.6138 45.547C29.2473 45.547 30.8794 45.1276 32.3369 44.2875L39.3123 40.2656C40.6887 39.4736 41.5439 37.9941 41.5439 36.4046V29.5571L43.8113 28.2399V38.221C43.2297 38.617 42.8474 39.2839 42.8474 40.0415C42.8474 41.257 43.8333 42.2429 45.0488 42.2429C46.2643 42.2429 47.2502 41.257 47.2502 40.0415C47.2502 39.2852 46.8679 38.6184 46.2863 38.221ZM39.0703 36.4032H39.0689C39.0689 37.11 38.6908 37.7672 38.0776 38.1192L31.1022 42.1411C28.9517 43.38 26.2773 43.38 24.1282 42.1411L17.1514 38.1192C16.5396 37.7672 16.1601 37.11 16.1601 36.4032V30.9954L25.3327 36.3249C26.0367 36.7332 26.8259 36.9381 27.6152 36.9381C28.4044 36.9381 29.1937 36.7346 29.8977 36.3249L39.0703 30.9954V36.4032ZM28.6533 34.1854C28.0126 34.558 27.2164 34.558 26.5757 34.1854L10.2421 24.6951L26.5743 15.2049C27.2151 14.8322 28.0112 14.8322 28.6519 15.2049L44.9856 24.6937L28.6533 34.1854Z"
        fill="white"
      />
    </svg>
  );
}

export default function DoctorBio() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Timeline block */}
        <div className={styles.timelineContainer}>
          {/* The 4 boxes */}
          <div className={styles.timelineGrid}>
            {TIMELINE_CARDS.map((card, index) => (
              <div key={index} className={styles.timelineCard}>
                <div className={styles.iconWrapper}>
                  <GraduationIcon />
                </div>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>

          {/* Progress bar line at the bottom */}
          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBarSegment} />
            <div className={styles.progressBarSegment} />
            <div className={styles.progressBarSegment} />
            <div className={styles.progressBarSegment} />
          </div>
        </div>

      </div>
    </section>
  );
}

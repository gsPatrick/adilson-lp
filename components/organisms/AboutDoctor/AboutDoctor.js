import styles from "./AboutDoctor.module.css";

const PILLARS = [
  {
    id: "conhecimento",
    text: "Conhecimento baseado no que há de mais moderno na medicina e tratamentos de acordo com a necessidade de cada indivíduo.",
  },
  {
    id: "acompanhamento",
    text: "Você será acompanhado, do início ao fim, por um médico experiente e com amplo conhecimento para te ajudar a ser uma pessoa saudável e independente.",
  },
  {
    id: "investigacao",
    text: "Investigação detalhada para compreender seu problema e buscar as melhores soluções.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill="none"
      aria-hidden="true"
      className={styles.checkIcon}
    >
      <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.12)" />
      <path
        d="M13 20.5L17.5 25L27 15"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 448 512" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  );
}

export default function AboutDoctor() {
  return (
    <section className={styles.section} id="sobre-o-medico">
      <div className={styles.container}>

        {/* Left — bio copy */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Sobre o Médico</p>
          <h2 className={styles.title}>
            Uma medicina mais próxima das pessoas
          </h2>

          <div className={styles.bio}>
            <p>
              Formado pela Universidade de Marília em 2011, o Dr. Adilson
              Silvestre possui pós-graduação em Nutrologia pela ABRAN (2015),
              Residência Médica em Clínica Médica (2020) e Residência Médica
              em Geriatria (2022).
            </p>
            <p>
              Especialista em envelhecimento, geriatria e medicina preventiva,
              o Dr. Adilson acredita que envelhecer bem é uma conquista que se
              constrói com prevenção, acompanhamento médico individualizado e
              qualidade de vida.
            </p>
            <p>
              Com atuação em Maringá e Paranavaí, oferece consultas
              ambulatoriais e domiciliares, sempre com foco na autonomia e
              independência do paciente — independente da idade.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span className={styles.ctaInner}>
              Agendar Consulta
              <WhatsAppIcon />
            </span>
          </a>
        </div>

        {/* Right — pillar cards */}
        <div className={styles.pillarsCol}>
          {PILLARS.map((pillar, index) => (
            <div key={pillar.id} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>
                <CheckIcon />
              </div>
              <p className={styles.pillarText}>{pillar.text}</p>
              {/* Subtle decorative number */}
              <span className={styles.pillarNumber} aria-hidden="true">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

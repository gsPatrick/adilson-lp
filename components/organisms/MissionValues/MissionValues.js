import styles from "./MissionValues.module.css";

const VALUES = [
  {
    id: "tenacidade",
    label: "Tenacidade",
    text: "Não medir esforços para desenvolver um modelo novo, sempre dinâmico e evolutivo na arte de cuidar do ser humano.",
  },
  {
    id: "honestidade",
    label: "Honestidade",
    text: "Ofertar cuidados referenciados pelo mais alto nível científico, tanto em segurança, quanto em efetividade.",
  },
  {
    id: "humanidade",
    label: "Humanidade",
    text: "Desenvolver uma forma de cuidados individuais, entendedendo a unicidade de cada indivíduo.",
  },
  {
    id: "respeito",
    label: "Respeito",
    text: "Cuidar de quem sempre cuidou da gente e contribuiu para a evolução de nossa sociedade como a conhecemos hoje.",
  },
];

export default function MissionValues() {
  return (
    <section className={styles.section} id="missao-visao-valores">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Propósito</p>
          <h2 className={styles.title}>
            Os princípios que guiam cada consulta
          </h2>
        </div>

        {/* Grid: left stack + right tall card */}
        <div className={styles.grid}>

          {/* Left: Missão + Visão stacked */}
          <div className={styles.leftStack}>
            <div className={styles.card}>
              <div className={styles.cardBg} aria-hidden="true" />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Missão</h3>
                <p className={styles.cardText}>
                  Cuidar das pessoas para a promoção da saúde e longevidade,
                  por meio de uma medicina individualizada, pautada no mais
                  alto nível da ciência médica, baseada em evidências, ética e
                  responsabilidade.
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardBg} aria-hidden="true" />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Visão</h3>
                <p className={styles.cardText}>
                  Buscar a compreensão sobre a saúde de cada indivíduo, de
                  forma ampla, atendendo todas as necessidades que o paciente
                  possa apresentar, no intuito de lhe garantir longevidade com
                  qualidade.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Valores — tall card */}
          <div className={`${styles.card} ${styles.cardTall}`}>
            <div className={styles.cardBg} aria-hidden="true" />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Valores</h3>
              <div className={styles.valuesList}>
                {VALUES.map((v, i) => (
                  <div key={v.id} className={styles.valueItem}>
                    {i > 0 && <div className={styles.divider} />}
                    <p className={styles.valueLabel}>{v.label}</p>
                    <p className={styles.valueText}>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

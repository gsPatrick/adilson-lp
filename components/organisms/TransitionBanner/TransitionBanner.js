import styles from "./TransitionBanner.module.css";

export default function TransitionBanner({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {items.map((item, idx) => (
          <div key={idx} className={styles.item}>
            {item.number && <span className={styles.number}>{item.number}</span>}
            {item.icon && <div className={styles.icon}>{item.icon}</div>}
            <div className={styles.textWrapper}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            {idx < items.length - 1 && (
              <div className={styles.verticalDivider} aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

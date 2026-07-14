"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Scrollytelling.module.css";

const DEFAULT_STATEMENTS = [
  "O envelhecimento é um processo biológico complexo e individual. Nossa missão é compreender as particularidades de cada paciente para promover um envelhecer saudável.",
  "Unindo avaliação clínica minuciosa, nutrologia e medicina personalizada, traçamos estratégias de prevenção de alta precisão para manter sua vitalidade e autonomia ao longo dos anos.",
  "Através de um plano de acompanhamento integrado e individualizado, ajudamos você a viver mais e melhor, focando na saúde preventiva e na manutenção da independência."
];

export default function Scrollytelling({
  statements = DEFAULT_STATEMENTS,
  label = "Nossa Filosofia"
}) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      setProgress(scrollable > 0 ? scrolled / scrollable : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const count = statements.length;
  const scaled = progress * count;
  const active = Math.min(count - 1, Math.floor(scaled));
  const local = scaled - active; // 0..1 progress within the active statement

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.head}>
          <span className={styles.label}>{label}</span>
        </div>

        <div className={styles.body}>
          <div className={styles.progress}>
            <div
              className={styles.progressBar}
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          <div className={styles.content}>
            <aside className={styles.index}>
              <span>{String(active + 1).padStart(2, "0")}</span>
              <span className={styles.indexDivider}>/</span>
              <span className={styles.indexTotal}>
                {String(count).padStart(2, "0")}
              </span>
            </aside>

            <div className={styles.main}>
              {statements.map((statement, si) => {
                const isActive = si === active;
                const chars = statement.split("");
                const revealCount = isActive
                  ? local * chars.length
                  : si < active
                  ? chars.length
                  : 0;

                return (
                  <p
                    key={si}
                    className={styles.statement}
                    style={{ opacity: isActive ? 1 : 0 }}
                    aria-hidden={!isActive}
                  >
                    {chars.map((ch, i) => (
                      <span
                        key={i}
                        className={styles.char}
                        style={{ opacity: i < revealCount ? 1 : 0.28 }}
                      >
                        {ch}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

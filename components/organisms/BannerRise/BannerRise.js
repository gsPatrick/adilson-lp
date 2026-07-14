"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./BannerRise.module.css";

// Exact same constants pattern as Coordinator.js in remake-general-intelligence
// Section is min-height: 3000px; banner starts rising at px 1800, finishes at px 2800
const HANDOFF_START = 1800;
const HANDOFF_LENGTH = 1000;

export default function BannerRise() {
  const containerRef = useRef(null);
  const [handoffProgress, setHandoffProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      // scrolled = how many px we've scrolled past the top of this container
      const scrolled = Math.max(-container.getBoundingClientRect().top, 0);
      const handoff = Math.min(
        Math.max((scrolled - HANDOFF_START) / HANDOFF_LENGTH, 0),
        1
      );
      setHandoffProgress(handoff);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const contentOpacity = 1 - handoffProgress;
  const contentBlur = handoffProgress * 6;

  return (
    <div
      id="banner-rise-container"
      ref={containerRef}
      className={styles.scrollContainer}
    >
      <section
        id="banner-rise-section"
        className={styles.section}
      >
        {/* Sticky panel — holds the fading bg text AND the rising banner */}
        <div
          className={`${styles.stickyPanel} ${
            handoffProgress > 0 ? styles.stickyPanelHandoff : ""
          }`}
        >
          {/* Background content that dims as banner rises */}
          <div
            className={styles.bgContent}
            style={{
              opacity: contentOpacity,
              filter: `blur(${contentBlur}px)`,
              pointerEvents: handoffProgress > 0.4 ? "none" : "auto",
              visibility: handoffProgress > 0.92 ? "hidden" : "visible",
            }}
          >
            <div className={styles.bgInner}>
              <span className={styles.chip}>Envelhecimento &amp; Saúde</span>
              <p className={styles.bgSubtitle}>
                Acompanhamento geriátrico especializado a partir dos 40 anos.
              </p>
            </div>
          </div>

          {/* The banner that rises from the bottom — same transform as cofounderWrap */}
          <div
            className={styles.bannerWrap}
            style={{
              transform:
                handoffProgress > 0
                  ? `translateX(-50%) translateY(${(1 - handoffProgress) * 100}%)`
                  : `translateY(${(1 - handoffProgress) * 100}%)`,
              pointerEvents: handoffProgress > 0.15 ? "auto" : "none",
            }}
          >
            {/* Gradient mask above banner — fades in as banner rises */}
            <div
              className={styles.bannerGradient}
              style={{ opacity: handoffProgress * 0.6 }}
              aria-hidden="true"
            />

            {/* The actual banner card */}
            <div className={styles.bannerCard}>
              {/* Photo covers entire card (positioned right) */}
              <div className={styles.bannerPhotoWrap}>
                <Image
                  src="/images/group_4614.webp"
                  alt="Idosa com dor de cabeça, representando doenças crônicas"
                  fill
                  className={styles.bannerPhoto}
                  priority
                />
                {/* Gradient: solid teal left → transparent right, blending photo in */}
                <div className={styles.bannerPhotoOverlay} aria-hidden="true" />
              </div>

              {/* Text on top — z-index above photo layers */}
              <div className={styles.bannerLeft}>
                <h2 className={styles.bannerTitle}>
                  Você sabia que cerca de 70% da população idosa sofre de algum
                  tipo de doença crônica, como diabetes e hipertensão?
                </h2>
                <p className={styles.bannerBody}>
                  O médico Geriatra pode te ajudar a prevenir e tratar diversas
                  doenças.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bannerCta}
                >
                  <span className={styles.ctaInner}>
                    Agendar Consulta
                    <WhatsAppIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll runway — the section needs to be tall enough to scroll through */}
        <div
          className={styles.scrollRunway}
          aria-hidden="true"
        />
      </section>
    </div>
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

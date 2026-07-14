"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Scrollytelling from "../Scrollytelling/Scrollytelling";
import styles from "./Hero.module.css";

export default function Hero({
  subtitle = (
    <>
      DR. ADILSON SILVESTRE &nbsp;|&nbsp; CRM 31.470 PR
      <br />
      GERIATRA EM MARINGÁ E PARANAVAÍ - PR
    </>
  ),
  title = (
    <>
      Referência em
      <br />
      envelhecimento
      <br />
      saudável
    </>
  ),
  description = "Cuidado especializado para adultos e idosos que desejam envelhecer com autonomia, força e qualidade de vida.",
  imageSrc = "/images/AD0035-683x1024.jpg.webp",
  showScrollytelling = true,
  scrollytellingStatements,
  scrollytellingLabel
}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setExpanded(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Framed Background that expands on scroll */}
      <div className={styles.videoBg}>
        <div className={`${styles.frame} ${expanded ? styles.expandedFrame : ""}`}>
          <div className={styles.canvas} />
        </div>
      </div>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <div className={`${styles.containerInner} ${!imageSrc ? styles.noPhoto : ""}`}>
          {/* Left Column: Content */}
          <div className={styles.contentCol}>
            {/* Logo */}
            <div className={styles.logoWrapper}>
              <Image
                src="/images/instituto_longeviver-logotipo_horizontal-fundo_transparente@5x-2.webp"
                alt="Instituto Longeviver Logo"
                width={253}
                height={90}
                priority
                className={styles.logoImage}
              />
            </div>

            {/* Subtitle / CRM */}
            <div className={styles.subtitleWrapper}>
              <h3 className={styles.subtitle}>
                {subtitle}
              </h3>
            </div>

            {/* Title */}
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                {title}
              </h1>
            </div>

            {/* Paragraph */}
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                {description}
              </p>
            </div>

            {/* CTA Button */}
            <div className={styles.buttonWrapper}>
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

          {/* Right Column: Photo (conditional) */}
          {imageSrc && (
            <div className={styles.photoCol}>
              <div className={styles.photoWrapper}>
                <Image
                  src={imageSrc}
                  alt="Dr. Adilson Silvestre"
                  width={683}
                  height={1024}
                  priority
                  className={styles.heroPhoto}
                />
              </div>
            </div>
          )}
        </div>

        {/* Scrollytelling section */}
        {showScrollytelling && (
          <Scrollytelling
            statements={scrollytellingStatements}
            label={scrollytellingLabel}
          />
        )}
      </div>
    </section>
  );
}

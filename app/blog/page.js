"use client";

import { useState } from "react";
import Link from "next/link";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import { ARTICLES } from "@/data/articles";
import styles from "./blog.module.css";

const CATEGORIES = ["Todos", "Cognição", "Saúde Muscular", "Sono", "Prevenção"];

function ArrowRightIcon() {
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
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function MiniBanner({ category, title, isCompact = false }) {
  return (
    <div className={`${styles.miniBanner} ${isCompact ? styles.gridCardBanner : ""}`}>
      {/* Background image layer */}
      <div className={styles.bannerBg} />
      <div className={styles.bannerOverlay} />
      
      {/* Content */}
      <div className={styles.bannerContent}>
        <div className={styles.bannerLogoWrapper}>
          <img
            src="/images/instituto_longeviver-logotipo_horizontal-fundo_transparente@5x-2.webp"
            alt="Instituto Longeviver Logo"
            className={styles.bannerLogo}
          />
        </div>
        <span className={styles.bannerBadge}>Artigo | {category}</span>
        <h2 className={styles.bannerTitle}>{title}</h2>
      </div>
    </div>
  );
}

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filter articles based on active category
  const filteredArticles = ARTICLES.filter((art) => {
    if (activeCategory === "Todos") return true;
    return art.category === activeCategory;
  });

  // Extract featured and recent lists
  const featuredArticle = filteredArticles[0];
  const recentArticles = filteredArticles.slice(1);

  return (
    <main className={styles.main}>
      {/* Editorial Header */}
      <header className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <span className={styles.eyebrow}>Artigos & Informação</span>
          <h1 className={styles.title}>Saúde & Longevidade Ativa</h1>
          <p className={styles.lead}>
            Conteúdo médico detalhado e baseado em evidências científicas sobre geriatria, prevenção e envelhecimento funcional.
          </p>

          {/* Filtering row */}
          <div className={styles.filterRow}>
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.activeFilter : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid of Articles */}
      <section className={styles.blogSection}>
        <div className={styles.blogContainer}>
          {filteredArticles.length === 0 ? (
            <div className={styles.noResults}>
              <p>Nenhum artigo encontrado nesta categoria.</p>
            </div>
          ) : (
            <>
              {/* Featured Article Card */}
              {featuredArticle && (
                <div className={styles.featuredCard}>
                  {/* Left Side: Mini Banner with Logo & Title */}
                  <MiniBanner
                    category={featuredArticle.category}
                    title={featuredArticle.title}
                    isCompact={false}
                  />
                  
                  {/* Right Side: Description & Link */}
                  <div className={styles.featuredContent}>
                    <div className={styles.metaRow}>
                      <span className={styles.date}>
                        {featuredArticle.date} &nbsp;•&nbsp; {featuredArticle.readingTime}
                      </span>
                    </div>
                    <p className={styles.excerpt}>{featuredArticle.excerpt}</p>
                    <div style={{ marginTop: "10px" }}>
                      <Link
                        href={`/blog/${featuredArticle.slug}`}
                        className={styles.readLink}
                        style={{ fontSize: "14.5px" }}
                      >
                        <span>Ler Artigo Completo</span>
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of remaining articles */}
              {recentArticles.length > 0 && (
                <div className={styles.grid}>
                  {recentArticles.map((art, idx) => (
                    <article key={idx} className={styles.card}>
                      {/* Top: Mini Banner with Logo & Title */}
                      <div className={styles.cardVisual}>
                        <MiniBanner
                          category={art.category}
                          title={art.title}
                          isCompact={true}
                        />
                      </div>
                      
                      {/* Bottom: Description & Link */}
                      <div className={styles.cardBody}>
                        <div className={styles.metaRow}>
                          <span className={styles.badge}>{art.category}</span>
                          <span className={styles.date}>{art.date}</span>
                        </div>
                        <p className={styles.cardExcerpt}>{art.excerpt}</p>
                      </div>
                      <div className={styles.cardFooter}>
                        <Link href={`/blog/${art.slug}`} className={styles.readLink}>
                          <span>Ler Artigo</span>
                          <ArrowRightIcon />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Deseja realizar uma consulta ou avaliação preventiva?"
        description="Fale com a nossa equipe no WhatsApp para escolher o melhor formato presencial, domiciliar ou online."
      />

      <Footer />
    </main>
  );
}

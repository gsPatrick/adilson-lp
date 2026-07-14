import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/organisms/Hero/Hero";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import { ARTICLES } from "@/data/articles";
import styles from "@/app/prevencao-40-anos/prevencao.module.css";

// Configure dynamic pre-rendering parameters for static compilation
export async function generateStaticParams() {
  return ARTICLES.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((art) => art.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Dr. Adilson Silvestre`,
    description: article.excerpt,
  };
}

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
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

export default async function ArticleDetailsPage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((art) => art.slug === slug);
  if (!article) {
    notFound();
  }

  // Get other articles for navigation
  const otherArticles = ARTICLES.filter((art) => art.slug !== slug).slice(0, 3);

  return (
    <main className={styles.main}>
      {/* Centered Editorial Hero */}
      <Hero
        subtitle={`Artigo | ${article.category}`}
        title={article.title}
        description={article.subtitle}
        imageSrc={null}
        showScrollytelling={false}
      />

      {/* Editorial Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Autor</span>
              <p className={styles.sidebarText} style={{ fontWeight: "700" }}>
                Dr. Adilson Silvestre
              </p>
              <p className={styles.sidebarText} style={{ fontSize: "12px", marginTop: "4px" }}>
                Geriatra | CRM 31.470 PR
              </p>
            </div>
            <div className={styles.sidebarCard}>
              <span className={styles.sidebarLabel}>Publicação</span>
              <p className={styles.sidebarText}>
                {article.date} &nbsp;•&nbsp; {article.readingTime}
              </p>
            </div>
          </aside>

          {/* Reading Column */}
          <div className={styles.readingCol}>
            <article className={styles.textBlock}>
              {article.paragraphs.map((p, idx) => {
                if (idx === 0) {
                  return (
                    <p key={idx} className={styles.highlightParagraph}>
                      {p}
                    </p>
                  );
                }
                return (
                  <p key={idx} className={styles.paragraph}>
                    {p}
                  </p>
                );
              })}
            </article>

            {/* In-article CTA divider */}
            <div style={{ margin: "60px 0 40px", padding: "40px", border: "1px solid rgba(68, 97, 95, 0.1)", borderRadius: "20px", background: "#fcfbfc" }}>
              <h3 style={{ fontFamily: "var(--font-family)", fontSize: "20px", fontWeight: "700", color: "#44615f", marginBottom: "8px" }}>
                Ficou com alguma dúvida sobre o assunto?
              </h3>
              <p style={{ fontFamily: "var(--font-family)", fontSize: "14.5px", color: "#556262", margin: "0 0 20px 0", lineHeight: "1.5" }}>
                Você pode agendar uma avaliação presencial ou telemedicina para discutir seu histórico clínico com o Dr. Adilson.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-family)",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#ffffff",
                  backgroundColor: "#44615f",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  transition: "background-color 0.2s ease"
                }}
              >
                <span>Falar com a Equipe no WhatsApp</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Other Articles Row */}
      {otherArticles.length > 0 && (
        <section style={{ backgroundColor: "#f6f9f8", padding: "80px 0", borderTop: "1px solid rgba(68, 97, 95, 0.08)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>
            <h2 style={{ fontFamily: "var(--font-family)", fontSize: "28px", fontWeight: "700", color: "#44615f", marginBottom: "40px" }}>
              Leia também outros artigos:
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {otherArticles.map((art, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(68, 97, 95, 0.08)",
                    borderRadius: "20px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "220px",
                    boxShadow: "0 10px 30px rgba(10, 22, 21, 0.03)"
                  }}
                >
                  <div>
                    <span style={{ fontFamily: "var(--font-family)", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#7ca4a1", letterSpacing: "1px" }}>
                      {art.category}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-family)", fontSize: "17px", fontWeight: "700", color: "#44615f", margin: "8px 0 12px 0", lineHeight: "1.3" }}>
                      {art.title}
                    </h3>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(68, 97, 95, 0.08)", paddingTop: "14px", marginTop: "auto" }}>
                    <Link
                      href={`/blog/${art.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: "var(--font-family)",
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#44615f"
                      }}
                    >
                      <span>Ler Artigo</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA section */}
      <CTASection />

      <Footer />
    </main>
  );
}

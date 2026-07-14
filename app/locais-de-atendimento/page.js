import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import styles from "./locais.module.css";

export const metadata = {
  title: "Locais de Atendimento | Dr. Adilson Silvestre — Geriatra em Maringá e Paranavaí",
  description:
    "O Dr. Adilson Silvestre atende presencialmente em Maringá-PR e Paranavaí-PR, realiza visitas domiciliares e atende por telemedicina em todo o Brasil. Consulte um geriatra experiente perto de você.",
  keywords: [
    "geriatra Maringá",
    "geriatra Paranavaí",
    "médico geriatra interior Paraná",
    "consulta geriátrica presencial",
    "telemedicina geriatra",
    "visita domiciliar geriatra",
    "Dr Adilson Silvestre geriatra",
    "clínica geriatria Maringá PR",
  ],
  openGraph: {
    title: "Locais de Atendimento — Dr. Adilson Silvestre, Geriatra",
    description:
      "Presencial em Maringá e Paranavaí, visita domiciliar e telemedicina para todo o Brasil.",
    type: "website",
  },
};

const LOCATIONS = [
  {
    id: "maringa",
    city: "Maringá",
    state: "Paraná",
    type: "Consultório Presencial",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR",
    tagline: "Principal sede de atendimento",
    description:
      "O consultório de Maringá é a sede principal do Dr. Adilson Silvestre. Localizado em estrutura confortável e acessível, oferece consultas individualizadas de longa duração (60 a 90 minutos) com avaliação geriátrica global completa, exame físico e a tecnologia de bioimpedanciometria in loco para medição precisa de composição corporal.",
    bullets: [
      "Avaliação Geriátrica Global (AGG)",
      "Exame de bioimpedanciometria",
      "Revisão e desprescrição de medicamentos",
      "Acompanhamento de doenças crônicas",
      "Diagnóstico de sarcopenia e osteoporose",
      "Planejamento de longevidade ativa",
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Região Metropolitana de Maringá"],
    mapEmbed:
      "https://maps.google.com/maps?q=Maringá,PR&output=embed",
    icon: "📍",
  },
  {
    id: "paranavai",
    city: "Paranavaí",
    state: "Paraná",
    type: "Consultório Presencial",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR",
    tagline: "Atendimento no interior do PR",
    description:
      "Reconhecendo a necessidade de acesso à geriatria especializada no interior do estado, o Dr. Adilson mantém agenda regular em Paranavaí, atendendo pacientes do Noroeste do Paraná que buscam acompanhamento médico de qualidade sem precisar se deslocar até a capital.",
    bullets: [
      "Mesma estrutura de consulta da sede em Maringá",
      "Agenda disponível em dias específicos da semana",
      "Ideal para pacientes do Noroeste do Paraná",
      "Consultas de 60 a 90 minutos",
      "Laudos e relatórios médicos completos",
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá", "Noroeste do Paraná"],
    icon: "📍",
  },
  {
    id: "domiciliar",
    city: "Visita Domiciliar",
    state: "Paranavaí, Maringá e Região",
    type: "Atendimento em Casa",
    tagline: "O médico vai até você",
    description:
      "Para pacientes com limitações severas de mobilidade, acamados, em pós-operatório ou em cuidados paliativos, o Dr. Adilson realiza visitas médicas domiciliares com toda a estrutura necessária para uma avaliação geriátrica completa. O atendimento em casa reduz o estresse do deslocamento e permite uma avaliação do ambiente em que o paciente vive.",
    bullets: [
      "Indicado para pacientes acamados ou com cadeira de rodas",
      "Avaliação do ambiente domiciliar and risco de quedas",
      "Cuidados paliativos e suporte à família",
      "Revisão de medicamentos em domicílio",
      "Atendimento em Maringá e municípios próximos",
    ],
    icon: "🏠",
  },
  {
    id: "telemedicina",
    city: "Todo o Brasil",
    state: "Via Telemedicina",
    type: "Consulta Online",
    tagline: "Geriatria onde você estiver",
    description:
      "Através da telemedicina regulamentada pelo CFM, o Dr. Adilson atende pacientes em qualquer cidade do Brasil por videochamada segura e sigilosa. A consulta online é ideal para moradores de cidades sem acesso a geriatra, brasileiros que residem no exterior e para retornos e acompanhamentos de rotina de pacientes já estabelecidos.",
    bullets: [
      "Videochamada em plataforma médica certificada",
      "Receitas com assinatura digital válidas em todo o Brasil",
      "Pedidos de exames enviados por SMS/e-mail",
      "Atestados e laudos emitidos digitalmente",
      "Ideal para cidades sem geriatra disponível",
      "Atende brasileiros residentes no exterior",
    ],
    icon: "💻",
  },
];

export default function ServiceLocationsPage() {
  return (
    <main className={styles.main}>
      <Hero
        subtitle="Locais de Atendimento"
        title={
          <>
            Onde o Dr. Adilson
            <br />
            Silvestre atende
          </>
        }
        description="Presencial em Maringá e Paranavaí, visita domiciliar para pacientes com mobilidade reduzida e consulta online por telemedicina para todo o Brasil."
        imageSrc={null}
        showScrollytelling={false}
      />

      {/* Overview Section */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            {[
              { label: "Cidades de atendimento", value: "2+" },
              { label: "Estados atendidos online", value: "27" },
              { label: "Formato de visita domiciliar", value: "✓" },
              { label: "Anos de experiência em geriatria", value: "15+" },
            ].map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Location Cards */}
      <section className={styles.locationsSection}>
        <div className={styles.container}>
          {LOCATIONS.map((loc, i) => (
            <article key={loc.id} id={loc.id} className={styles.locationCard}>
              <div className={styles.locationHeader}>
                <div className={styles.locationMeta}>
                  <span className={styles.locationType}>{loc.type}</span>
                  <h2 className={styles.locationCity}>
                    {loc.icon} {loc.city}
                    <span className={styles.locationState}> — {loc.state}</span>
                  </h2>
                  {loc.address && (
                    <p className={styles.locationAddress}>
                      <strong>Endereço:</strong> {loc.address}
                    </p>
                  )}
                  <p className={styles.locationTagline}>{loc.tagline}</p>
                </div>
              </div>

              <div className={styles.locationBody}>
                <div className={styles.locationDesc}>
                  <p>{loc.description}</p>

                  {/* Bullets */}
                  <ul className={styles.bulletList}>
                    {loc.bullets.map((b, j) => (
                      <li key={j} className={styles.bulletItem}>
                        <span className={styles.bulletDot} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Region keywords for SEO */}
                  {loc.regionKeywords && (
                    <div className={styles.regionRow}>
                      <span className={styles.regionLabel}>Regiões atendidas: </span>
                      {loc.regionKeywords.map((r, k) => (
                        <span key={k} className={styles.regionTag}>{r}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Schema.org local business (structured data for SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Adilson Silvestre — Geriatra",
            medicalSpecialty: "Geriatrics",
            description:
              "Médico geriatra com atendimento presencial em Maringá-PR e Paranavaí-PR, visita domiciliar e telemedicina para todo o Brasil.",
            areaServed: ["Maringá", "Paranavaí", "Brasil"],
            availableChannel: [
              {
                "@type": "ServiceChannel",
                serviceType: "Presencial",
                availableLanguage: "Portuguese",
                serviceLocation: {
                  "@type": "Place",
                  name: "Consultório Maringá",
                  address: { "@type": "PostalAddress", addressLocality: "Maringá", addressRegion: "PR", addressCountry: "BR" },
                },
              },
              {
                "@type": "ServiceChannel",
                serviceType: "Telemedicina",
                availableLanguage: "Portuguese",
                serviceUrl: "https://institutolongeviver.com.br/atendimento-online",
              },
            ],
            sameAs: ["https://institutolongeviver.com.br"],
          }),
        }}
      />

      <CTASection
        eyebrow="Agendar Consulta"
        title="Pronto para começar seu acompanhamento geriátrico?"
        description="Escolha a modalidade que melhor se adapta à sua necessidade e agende diretamente pelo WhatsApp."
      />

      <Footer />
    </main>
  );
}

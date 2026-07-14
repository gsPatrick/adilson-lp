import { notFound } from "next/navigation";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import styles from "./local.module.css";

const LOCATIONS_DATA = {
  maringa: {
    city: "Maringá",
    state: "PR",
    type: "Consultório Presencial",
    heroSubtitle: "Consultório em Maringá — PR",
    heroTitle: <>Geriatria presencial<br />em Maringá</>,
    heroDesc:
      "Consultas individualizadas de 60 a 90 minutos, avaliação geriátrica global, bioimpedanciometria e plano de longevidade personalizado.",
    seoTitle: "Geriatra em Maringá-PR | Dr. Adilson Silvestre — Instituto Longeviver",
    seoDesc:
      "Consulte um geriatra especialista em Maringá-PR. Dr. Adilson Silvestre realiza avaliação geriátrica global, bioimpedanciometria e acompanhamento de doenças crônicas. Agende sua consulta.",
    intro:
      "O consultório de Maringá é a sede principal do Instituto Longeviver e o local onde o Dr. Adilson Silvestre realiza a maior parte de seus atendimentos presenciais. Com estrutura confortável, acessível e focada no bem-estar do paciente idoso, cada consulta tem duração entre 60 e 90 minutos — tempo necessário para uma investigação clínica completa e humanizada.",
    sections: [
      {
        title: "O que acontece na consulta presencial em Maringá",
        items: [
          "Avaliação Geriátrica Global (AGG) — anamnese completa com histórico médico e funcional",
          "Exame físico detalhado, incluindo avaliação da marcha e equilíbrio",
          "Bioimpedanciometria para medir massa muscular, gordura e hidratação",
          "Revisão de todos os medicamentos em uso (desprescrição quando necessário)",
          "Rastreamento cognitivo (Mini-Mental, MoCA e outros instrumentos validados)",
          "Diagnóstico de sarcopenia, osteoporose e fragilidade",
          "Planejamento de longevidade ativa com metas individuais",
        ],
      },
      {
        title: "Quando consultar um geriatra em Maringá",
        items: [
          "Adultos com 40+ anos que desejam prevenir o envelhecimento acelerado",
          "Idosos que usam 5 ou mais medicamentos por dia (polifarmácia)",
          "Pacientes com perda de memória, queda de força ou alterações de marcha",
          "Pós-hospitalização ou pós-cirurgia para reabilitação funcional",
          "Diagnóstico ou suspeita de Alzheimer, demência ou Parkinson",
          "Pacientes com diabetes, hipertensão ou doenças crônicas múltiplas",
        ],
      },
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu", "Região Metropolitana de Maringá"],
    schemaCity: "Maringá",
  },
  paranavai: {
    city: "Paranavaí",
    state: "PR",
    type: "Consultório Presencial",
    heroSubtitle: "Consultório em Paranavaí — PR",
    heroTitle: <>Geriatria presencial<br />em Paranavaí</>,
    heroDesc:
      "Atendimento geriátrico especializado no Noroeste do Paraná, com a mesma qualidade e estrutura da sede em Maringá.",
    seoTitle: "Geriatra em Paranavaí-PR | Dr. Adilson Silvestre — Instituto Longeviver",
    seoDesc:
      "Consulte um geriatra em Paranavaí-PR. Dr. Adilson Silvestre atende no interior do Paraná com agenda semanal. Avaliação geriátrica global e acompanhamento de idosos. Agende agora.",
    intro:
      "Reconhecendo a necessidade de acesso à medicina especializada no interior do estado, o Dr. Adilson Silvestre mantém agenda regular no consultório de Paranavaí para atender pacientes do Noroeste do Paraná que buscam um geriatra de confiança sem precisar se deslocar até a capital ou até Maringá.",
    sections: [
      {
        title: "Serviços disponíveis no consultório de Paranavaí",
        items: [
          "Avaliação Geriátrica Global (AGG) completa",
          "Consulta de 60 a 90 minutos — mesma estrutura da sede em Maringá",
          "Revisão e desprescrição de medicamentos",
          "Rastreamento de demência, Alzheimer e declínio cognitivo",
          "Acompanhamento de diabetes, hipertensão e doenças crônicas",
          "Laudos e relatórios médicos completos",
        ],
      },
      {
        title: "Ideal para pacientes da região de Paranavaí",
        items: [
          "Evita deslocamentos longos para cidades maiores",
          "Agenda em dias específicos da semana — consulte disponibilidade",
          "Atende adultos maduros (40+) e idosos de toda a região",
          "Familiares podem participar integralmente da consulta",
        ],
      },
    ],
    regionKeywords: ["Paranavaí", "Terra Rica", "Tamboara", "Loanda", "Guairaçá", "Alto Paraná", "Amaporã", "Noroeste do Paraná"],
    schemaCity: "Paranavaí",
  },
  "visita-domiciliar": {
    city: "Visita Domiciliar",
    state: "Maringá e Região",
    type: "Atendimento em Casa",
    heroSubtitle: "Atendimento Domiciliar",
    heroTitle: <>O médico vai<br />até você</>,
    heroDesc:
      "Para pacientes com mobilidade reduzida, acamados ou em cuidados paliativos. O Dr. Adilson se desloca com toda a estrutura necessária para uma consulta geriátrica completa.",
    seoTitle: "Visita Domiciliar Geriatra | Dr. Adilson Silvestre em Maringá e Região",
    seoDesc:
      "O Dr. Adilson Silvestre realiza visitas médicas domiciliares para idosos acamados, pacientes com mobilidade reduzida e cuidados paliativos em Maringá e região. Agende agora.",
    intro:
      "Para pacientes que não conseguem se deslocar até um consultório por limitações físicas, o Dr. Adilson Silvestre realiza atendimentos na residência do próprio paciente. A visita domiciliar permite, além da avaliação médica, uma análise do ambiente em que o idoso vive — identificando riscos de quedas, barreiras arquitetônicas e a dinâmica familiar ao redor do cuidado.",
    sections: [
      {
        title: "Indicações para visita domiciliar",
        items: [
          "Pacientes acamados ou com cadeira de rodas",
          "Pós-operatório com restrição de deslocamento",
          "Pacientes em cuidados paliativos avançados",
          "Idosos com demência severa que se agitam em consultórios",
          "Dificuldade de transporte ou ausência de cuidadores disponíveis",
        ],
      },
      {
        title: "O que é avaliado na visita domiciliar",
        items: [
          "Avaliação médica clínica completa",
          "Revisão de todos os medicamentos em uso",
          "Avaliação do risco de quedas no ambiente domiciliar",
          "Orientações para adaptação da moradia",
          "Suporte e orientações para cuidadores e familiares",
          "Encaminhamentos e laudos quando necessário",
        ],
      },
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Região Metropolitana de Maringá"],
    schemaCity: "Maringá",
  },
  telemedicina: {
    city: "Telemedicina",
    state: "Todo o Brasil",
    type: "Consulta Online",
    heroSubtitle: "Telemedicina — Todo o Brasil",
    heroTitle: <>Geriatria online<br />onde você estiver</>,
    heroDesc:
      "Videochamada segura com receita digital, exames e laudos enviados instantaneamente. Válido em qualquer farmácia e laboratório do Brasil.",
    seoTitle: "Geriatra Online por Telemedicina | Dr. Adilson Silvestre — Todo o Brasil",
    seoDesc:
      "Consulte um geriatra online por telemedicina com o Dr. Adilson Silvestre. Receitas e exames com assinatura digital. Atende todo o Brasil. Ideal para cidades sem geriatra disponível.",
    intro:
      "Através da telemedicina regulamentada pelo CFM (Conselho Federal de Medicina), o Dr. Adilson Silvestre atende pacientes em qualquer cidade do Brasil — e também brasileiros residentes no exterior — por videochamada em plataforma médica segura e sigilosa. A consulta online oferece a mesma qualidade de raciocínio clínico e planejamento de saúde da consulta presencial.",
    sections: [
      {
        title: "Como funciona a teleconsulta",
        items: [
          "Agendamento pelo WhatsApp ou formulário online",
          "Acesso por videochamada em plataforma certificada e segura",
          "Duração de 60 a 90 minutos — mesma qualidade da consulta presencial",
          "Receitas com assinatura digital válidas em farmácias de todo o Brasil",
          "Pedidos de exames enviados por SMS ou e-mail imediatamente",
          "Atestados e laudos médicos emitidos digitalmente",
        ],
      },
      {
        title: "Para quem é indicada a telemedicina geriátrica",
        items: [
          "Moradores de cidades sem geriatra disponível",
          "Brasileiros residentes no exterior",
          "Retornos e acompanhamentos de rotina de pacientes já estabelecidos",
          "Pacientes que preferem não sair de casa por questões de saúde",
          "Famílias que desejam participar de qualquer localidade do Brasil",
        ],
      },
    ],
    regionKeywords: [],
    schemaCity: "Brasil",
  },
};

export async function generateStaticParams() {
  return Object.keys(LOCATIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = LOCATIONS_DATA[slug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDesc,
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const data = LOCATIONS_DATA[slug];
  if (!data) notFound();

  return (
    <main className={styles.main}>
      <Hero
        subtitle={data.heroSubtitle}
        title={data.heroTitle}
        description={data.heroDesc}
        imageSrc={null}
        showScrollytelling={false}
      />

      {/* Intro */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introBox}>
            <span className={styles.introType}>{data.type}</span>
            <h2 className={styles.introCity}>
              {data.city}
              {data.state && <span className={styles.introState}> — {data.state}</span>}
            </h2>
            <p className={styles.introText}>{data.intro}</p>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className={styles.detailSection}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            {data.sections.map((sec, i) => (
              <div key={i} className={styles.detailCard}>
                <h3 className={styles.detailTitle}>{sec.title}</h3>
                <ul className={styles.bulletList}>
                  {sec.items.map((item, j) => (
                    <li key={j} className={styles.bulletItem}>
                      <span className={styles.bulletDot} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Region keywords for SEO */}
          {data.regionKeywords.length > 0 && (
            <div className={styles.regionRow}>
              <span className={styles.regionLabel}>Regiões atendidas:</span>
              {data.regionKeywords.map((r, k) => (
                <span key={k} className={styles.regionTag}>{r}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Adilson Silvestre — Geriatra",
            medicalSpecialty: "Geriatrics",
            description: data.seoDesc,
            areaServed: data.schemaCity,
            availableChannel: {
              "@type": "ServiceChannel",
              serviceType: data.type,
              availableLanguage: "Portuguese",
              serviceLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: data.schemaCity,
                  addressRegion: "PR",
                  addressCountry: "BR",
                },
              },
            },
          }),
        }}
      />

      <CTASection
        eyebrow="Agendar Consulta"
        title={`Agende sua consulta ${data.type === "Consulta Online" ? "online" : "presencial"} agora`}
        description="Fale diretamente com nossa equipe no WhatsApp para escolher o horário ideal para você."
      />

      <Footer />
    </main>
  );
}

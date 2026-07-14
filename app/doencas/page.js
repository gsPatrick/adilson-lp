import Link from "next/link";
import Hero from "@/components/organisms/Hero/Hero";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./doencas.module.css";

export const metadata = {
  title: "Doenças Tratadas | Dr. Adilson Silvestre - Geriatra",
  description:
    "Veja todas as condições e doenças acompanhadas pelo Dr. Adilson Silvestre, médico geriatra em Maringá e Paranavaí. Alzheimer, Parkinson, Sarcopenia, Osteoporose, Diabetes e muito mais.",
};

const categories = [
  {
    label: "Cognição e Movimento",
    diseases: [
      { name: "Doença de Alzheimer", href: "/doencas/alzheimer" },
      { name: "Doença de Parkinson", href: "/doencas/parkinson" },
      { name: "Perda de Memória", href: "/doencas/perda-memoria" },
      { name: "Outras Demências", href: "/doencas/demencia" },
    ],
  },
  {
    label: "Força e Equilíbrio",
    diseases: [
      { name: "Sarcopenia (Perda de Massa Muscular)", href: "/doencas/sarcopenia" },
      { name: "Osteoporose", href: "/doencas/osteoporose" },
      { name: "Prevenção de Quedas", href: "/doencas/prevencao-quedas" },
      { name: "Fragilidade e Perda de Autonomia", href: "/doencas/sarcopenia" },
    ],
  },
  {
    label: "Sono, Mente e Hormônios",
    diseases: [
      { name: "Insônia e Distúrbios do Sono", href: "/doencas/insonia" },
      { name: "Ansiedade e Depressão", href: "/doencas/ansiedade-depressao" },
      { name: "Reposição Hormonal", href: "/doencas/reposicao-hormonal" },
      { name: "Cansaço Excessivo e Fadiga Crônica", href: "/doencas/sarcopenia" },
    ],
  },
  {
    label: "Metabolismo e Clínica",
    diseases: [
      { name: "Diabetes Mellitus", href: "/doencas/diabetes" },
      { name: "Hipertensão Arterial", href: "/doencas/hipertensao" },
      { name: "Polifarmácia (Revisão de Medicamentos)", href: "/doencas/polifarmacia" },
      { name: "Emagrecimento e Controle de Peso", href: "/emagrecimento" },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.arrowIcon}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function DoencasPage() {
  return (
    <main className={styles.main}>
      <Hero
        subtitle="Especialidades Clínicas"
        title={
          <>
            Doenças
            <br />
            Tratadas
          </>
        }
        description="Conheça as principais condições acompanhadas pelo Dr. Adilson Silvestre. Cada paciente recebe um plano de acompanhamento individualizado, de acordo com suas necessidades clínicas."
        imageSrc={null}
        showScrollytelling={false}
      />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>

          <div className={styles.intro}>
            <p className={styles.introText}>
              O médico geriatra é o especialista preparado para acompanhar o processo de envelhecimento de forma global e preventiva — avaliando medicamentos, exames, estilo de vida, cognição, mobilidade e qualidade de vida. Abaixo estão as principais condições tratadas no consultório:
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className={styles.categoryCard}>
                <h2 className={styles.categoryTitle}>{cat.label}</h2>
                <ul className={styles.diseaseList}>
                  {cat.diseases.map((disease, diseaseIdx) => (
                    <li key={diseaseIdx} className={styles.diseaseItem}>
                      <Link href={disease.href} className={styles.diseaseLink}>
                        <span>{disease.name}</span>
                        <ArrowIcon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.moreNote}>
            <p className={styles.moreText}>
              e muito mais — entre em contato para saber se sua condição é acompanhada pelo Dr. Adilson.
            </p>
          </div>

        </div>
      </section>

      <CTASection
        eyebrow="Agendamento"
        title="Quer saber se sua condição é acompanhada?"
        description="Fale com nossa equipe pelo WhatsApp. A consulta inicial é o momento ideal para avaliar suas necessidades e montar seu plano de acompanhamento."
      />

      <Footer />
    </main>
  );
}

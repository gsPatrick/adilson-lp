"use client";

import { useState } from "react";
import Hero from "@/components/organisms/Hero/Hero";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import styles from "./faq.module.css";

const FAQS = [
  {
    question: "O que faz um geriatra e quando devo começar a consultar?",
    answer:
      "O geriatra é o médico especialista no envelhecimento e na saúde global de adultos maduros e idosos. O acompanhamento preventivo ideal inicia-se por volta dos 40 anos, com foco em planejar a longevidade ativa, a preservação da força muscular e da capacidade cognitiva. No entanto, pacientes de qualquer idade que utilizem múltiplos medicamentos ou apresentem sinais de fragilidades de saúde beneficiam-se muito da consulta.",
  },
  {
    question: "Quais são os locais de atendimento do Dr. Adilson Silvestre?",
    answer:
      "O Dr. Adilson realiza consultas presenciais em consultórios confortáveis nas cidades de Maringá-PR e Paranavaí-PR. Adicionalmente, oferece consultas domiciliares (visita médica em casa) para pacientes com limitações severas de mobilidade ou acamados, e consultas online por telemedicina atendendo pacientes em todo o Brasil.",
  },
  {
    question: "O Dr. Adilson Silvestre atende por convênio médico?",
    answer:
      "As consultas são realizadas exclusivamente em caráter particular. Isso garante o tempo dedicado indispensável (entre 1h e 1h30) para uma investigação geriátrica global completa e humanizada. A nossa equipe emite relatórios detalhados e recibos fiscais para que o paciente possa solicitar reembolso junto ao seu convênio médico, se disponível.",
  },
  {
    question: "Como funciona a consulta por telemedicina (online)?",
    answer:
      "A consulta ocorre por chamada de vídeo em uma plataforma de telessaúde segura e sigilosa. O paciente e seus familiares participam de forma integrada. As receitas, pedidos de exames e atestados médicos são assinados com assinatura digital certificada e enviados na hora por SMS ou e-mail, válidos em farmácias e laboratórios de todo o Brasil.",
  },
  {
    question: "O que é o exame de bioimpedanciometria realizado no consultório?",
    answer:
      "É uma avaliação tecnológica rápida e indolor da composição corporal que mensura a quantidade exata de massa magra (músculos), gordura corporal total, gordura visceral e hidratação. Na geriatria, ela é fundamental para diagnosticar precocemente a sarcopenia (perda de músculo) e monitorar os ganhos de força nos tratamentos.",
  },
  {
    question: "O que é a polifarmácia e como geriatra pode ajudar?",
    answer:
      "Polifarmácia é o uso simultâneo de cinco ou mais medicamentos por dia. O geriatra avalia todas as receitas para identificar interações perigosas, remédios redundantes ou fórmulas com alto potencial de efeitos colaterais em idosos. O processo de desprescrição consiste na retirada gradual e segura de fármacos desnecessários, melhorando a clareza mental e prevenindo quedas.",
  },
];

function ChevronDownIcon({ isOpen }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className={styles.main}>
      <Hero
        subtitle="Dúvidas Comuns"
        title={
          <>
            Perguntas
            <br />
            Frequentes
          </>
        }
        description="Encontre respostas rápidas para as principais dúvidas sobre atendimento presencial, domiciliar, exames, convênios e a especialidade de geriatria."
        imageSrc={null}
        showScrollytelling={false}
      />

      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          {FAQS.map((faq, index) => {
            const isOpen = !!openIndexes[index];

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqHeader}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <ChevronDownIcon isOpen={isOpen} />
                </button>
                <div
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                  style={{ maxHeight: isOpen ? "500px" : "0" }}
                >
                  <div className={styles.faqBody}>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        eyebrow="Fale Conosco"
        title="Ainda tem alguma pergunta sobre os atendimentos?"
        description="Fale diretamente com o nosso suporte no WhatsApp. Estamos prontos para ajudar você e sua família."
      />

      <Footer />
    </main>
  );
}

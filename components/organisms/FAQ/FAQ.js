"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    id: "geriatria",
    question: "O que é geriatria e para que serve?",
    answer:
      "A Geriatria é a especialidade médica que se dedica ao cuidado da saúde das pessoas a partir dos 40 anos. Abrange a prevenção, diagnóstico, tratamento e reabilitação de doenças. O objetivo da Geriatria é promover a saúde, a independência e a qualidade de vida, levando em consideração as particularidades do envelhecimento.",
  },
  {
    id: "quando-procurar",
    question: "Quando procurar um geriatra?",
    answer:
      "É recomendado procurar um geriatra quando ocorrem alterações na saúde ou funcionalidades por volta dos 40 anos, pois é nessa idade que o corpo começa a sofrer alterações físicas e, em muitos casos, há perda de rendimento e até mesmo redução da libido. Idosos devem ir ao geriatra para tratar doenças crônicas, diminuição da capacidade funcional, necessidade na revisão dos medicamentos em uso e orientações sobre vacinação, estilo de vida e envelhecimento, dentre outros.",
  },
  {
    id: "diferenca",
    question: "Qual a diferença entre geriatra e clínico geral?",
    answer:
      "O geriatra é o médico especializado no cuidado preventivo, por volta dos 40 anos, e pessoas na terceira idade. O clínico geral atende pacientes de todas as idades. O geriatra possui treinamento específico em questões relacionadas ao envelhecimento, condições médicas comuns em idosos e cuidados integrados. O clínico geral tem uma formação mais abrangente e atende pacientes de todas as faixas etárias.",
  },
  {
    id: "primeira-consulta",
    question: "O que falar na primeira consulta com o geriatra?",
    answer:
      "Na primeira consulta com um geriatra, é importante fornecer um histórico médico completo, incluindo informações sobre condições pré-existentes, medicamentos em uso, alergias e cirurgias anteriores. Durante a consulta, o geriatra realizará uma avaliação abrangente, que pode envolver testes de função física e cognitiva, exames laboratoriais e discussão sobre estilo de vida. É essencial comunicar abertamente suas preocupações, sintomas atuais e expectativas, para que o geriatra possa desenvolver um plano de cuidados personalizado.",
  },
];

function PlusIcon({ open }) {
  return (
    <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
        <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line
          x1="5" y1="12" x2="19" y2="12"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
          className={styles.iconHBar}
        />
      </svg>
    </span>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Dúvidas Frequentes</p>
          <h2 className={styles.title}>Perguntas frequentes</h2>
          <p className={styles.subtitle}>
            Tire suas dúvidas sobre a geriatria e o acompanhamento médico especializado.
          </p>
        </div>

        {/* Accordion */}
        <div className={styles.accordion} role="list">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                role="listitem"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                >
                  <span className={styles.questionNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.question}>{faq.question}</span>
                  <PlusIcon open={isOpen} />
                </button>

                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={styles.panel}
                  style={{ "--panel-height": isOpen ? "auto" : "0" }}
                  hidden={!isOpen}
                >
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

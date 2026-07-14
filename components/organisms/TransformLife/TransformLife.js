"use client";

import { useState } from "react";
import styles from "./TransformLife.module.css";

const ITEMS = [
  {
    id: "envelhecimento",
    title: "Envelhecimento saudável",
    description:
      "A Geriatria e Medicina Preventiva visam ajudá-lo a envelhecer de forma saudável e ativa. Por meio de uma abordagem personalizada, nossos especialistas trabalham em conjunto com você para identificar e abordar os fatores de risco individuais, ajudando a prevenir ou gerenciar problemas de saúde relacionados à idade.",
  },
  {
    id: "qualidade-vida",
    title: "Qualidade de vida aprimorada",
    description:
      "Ao investir na sua saúde desde cedo, você pode desfrutar de uma qualidade de vida aprimorada à medida que envelhece. A Geriatria e Medicina Preventiva se concentram em promover a funcionalidade física, cognitiva e emocional, permitindo que você continue a desfrutar das atividades que ama e mantenha sua independência.",
  },
  {
    id: "prevencao-doencas",
    title: "Prevenção de doenças",
    description:
      "A prevenção é fundamental na Geriatria e Medicina Preventiva. Nossos especialistas estão comprometidos em identificar e gerenciar os fatores de risco que podem levar ao desenvolvimento de doenças crônicas. Por meio de exames regulares, monitoramento de saúde e intervenções adequadas, trabalhamos para prevenir ou retardar o surgimento de condições como doenças cardíacas, diabetes, osteoporose e demência.",
  },
  {
    id: "bem-estar",
    title: "Promoção do bem-estar físico e mental",
    description:
      "A Geriatria e Medicina Preventiva se preocupam não apenas com a saúde física, mas também com o bem-estar mental e emocional. Nossos profissionais compreendem a importância da saúde mental na qualidade de vida global e trabalham para identificar e tratar problemas como depressão, ansiedade e cognição prejudicada, garantindo assim uma abordagem holística para o seu bem-estar.",
  },
  {
    id: "longevidade",
    title: "Aumento da longevidade saudável",
    description:
      "Com a Geriatria e Medicina Preventiva, você tem a oportunidade de viver uma vida mais longa e saudável. Ao adotar uma abordagem proativa em relação à sua saúde, você pode reduzir os riscos de doenças e complicações relacionadas à idade, aproveitando ao máximo cada fase da sua vida.",
  },
];

function HeartbeatIcon() {
  return (
    <svg
      viewBox="0 0 300 40"
      width="100%"
      height="30"
      fill="none"
      className={styles.heartbeat}
      aria-hidden="true"
    >
      {/* Background static line */}
      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(124, 164, 161, 0.15)" strokeWidth="1" />
      {/* Heartbeat pulse path */}
      <path
        d="M 0 20 L 80 20 L 90 20 L 95 10 L 100 30 L 105 2 L 110 38 L 115 15 L 120 20 L 130 20 L 300 20"
        stroke="url(#heartbeat-grad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="heartbeat-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(124, 164, 161, 0.15)" />
          <stop offset="25%" stopColor="rgba(124, 164, 161, 0.2)" />
          <stop offset="35%" stopColor="#7ca4a1" />
          <stop offset="42%" stopColor="rgba(124, 164, 161, 0.2)" />
          <stop offset="100%" stopColor="rgba(124, 164, 161, 0.15)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DropdownIcon({ open }) {
  return (
    <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TransformLife() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Um médico experiente pode transformar sua vida
          </h2>
        </div>

        {/* Accordion List */}
        <div className={styles.accordion} role="list">
          {ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                role="listitem"
              >
                <button
                  id={`transform-btn-${item.id}`}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={`transform-panel-${item.id}`}
                  onClick={() => toggle(item.id)}
                >
                  <span className={styles.itemTitle}>{item.title}</span>
                  <div className={styles.heartbeatWrapper}>
                    <HeartbeatIcon />
                  </div>
                  <DropdownIcon open={isOpen} />
                </button>

                <div
                  id={`transform-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`transform-btn-${item.id}`}
                  className={styles.panel}
                  style={{ "--panel-height": isOpen ? "auto" : "0" }}
                  hidden={!isOpen}
                >
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

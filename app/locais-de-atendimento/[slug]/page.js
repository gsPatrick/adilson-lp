import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/organisms/CTASection/CTASection";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import styles from "./local.module.css";

const REGION_LINKS = {
  "Maringá": "maringa",
  "Sarandi": "sarandi",
  "Paiçandu": "paicandu",
  "Mandaguaçu": "mandaguacu",
  "Marialva": "marialva",
  "Iguaraçu": "iguaracu",
  "Região Metropolitana de Maringá": "regiao-metropolitana-de-maringa",
  "Paranavaí": "paranavai",
  "Tamboara": "tamboara",
  "Terra Rica": "terra-rica",
  "Loanda": "loanda",
  "Guairaçá": "guairaca",
  "Noroeste do Paraná": "noroeste-do-parana"
};

const LOCATIONS_DATA = {
  maringa: {
    city: "Maringá",
    state: "PR",
    type: "Consultório Presencial",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR",
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
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR",
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
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá", "Noroeste do Paraná"],
    schemaCity: "Paranavaí",
  },
  "visita-domiciliar": {
    city: "Visita Domiciliar",
    state: "Paranavaí, Maringá e Região",
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
  sarandi: {
    city: "Sarandi",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Sarandi — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Sarandi</>,
    heroDesc: "Acesso facilitado a consultas de excelência na vizinha Maringá ou visita médica domiciliar diretamente em Sarandi.",
    seoTitle: "Geriatra em Sarandi-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Precisa de um médico geriatra em Sarandi-PR? O Dr. Adilson Silvestre atende moradores de Sarandi presencialmente na sede em Maringá ou através de visitas domiciliares.",
    intro: "Para pacientes que residem em Sarandi-PR, o Dr. Adilson Silvestre oferece atendimento de referência em geriatria e nutrologia. As consultas presenciais acontecem na sede principal do consultório em Maringá (localizado a poucos minutos de Sarandi), com a opção de atendimento domiciliar para pacientes acamados ou com mobilidade reduzida.",
    sections: [
      {
        title: "Opções de atendimento para moradores de Sarandi",
        items: [
          "Consulta Presencial: Atendimento na sede estruturada de Maringá",
          "Atendimento Domiciliar: Visita médica completa em sua residência em Sarandi",
          "Avaliação Geriátrica Global (AGG)",
          "Investigação detalhada de memória, sarcopenia, osteoporose e dores"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu"],
    schemaCity: "Sarandi"
  },
  paicandu: {
    city: "Paiçandu",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Paiçandu — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Paiçandu</>,
    heroDesc: "Consultas de excelência na vizinha Maringá ou visita médica domiciliar diretamente em Paiçandu.",
    seoTitle: "Geriatra em Paiçandu-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Procurando médico geriatra em Paiçandu-PR? Dr. Adilson Silvestre oferece consultas de 60 a 90 minutos em Maringá ou visita médica em domicílio em Paiçandu.",
    intro: "Moradores de Paiçandu contam com a proximidade da sede de Maringá para realizar consultas presenciais completas com o Dr. Adilson Silvestre. Pacientes acamados ou impossibilitados de viajar também podem agendar visitas geriátricas domiciliares no próprio município de Paiçandu.",
    sections: [
      {
        title: "Opções de atendimento para moradores de Paiçandu",
        items: [
          "Consulta Presencial: Atendimento completo no consultório em Maringá",
          "Atendimento Domiciliar: O geriatra vai até a sua residência em Paiçandu",
          "Avaliação de medicamentos (polifarmácia) e geriatria preventiva",
          "Acompanhamento atencioso e humanizado"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu"],
    schemaCity: "Paiçandu"
  },
  mandaguacu: {
    city: "Mandaguaçu",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Mandaguaçu — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Mandaguaçu</>,
    heroDesc: "Consultas presenciais na sede de Maringá ou atendimento domiciliar em Mandaguaçu.",
    seoTitle: "Geriatra em Mandaguaçu-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Atendimento geriátrico especializado para Mandaguaçu-PR. Dr. Adilson Silvestre atende no consultório próximo em Maringá ou por visita em domicílio.",
    intro: "O Dr. Adilson Silvestre oferece atendimento de geriatria de ponta para a população de Mandaguaçu-PR. Pacientes ativos podem se consultar presencialmente na clínica em Maringá, enquanto idosos com limitações contam com o serviço de visitas domiciliares sob medida.",
    sections: [
      {
        title: "Serviços para a região de Mandaguaçu",
        items: [
          "Acesso fácil à estrutura de bioimpedanciometria e exames em Maringá",
          "Visitas domiciliares agendadas diretamente em Mandaguaçu",
          "Controle de hipertensão, diabetes, Alzheimer e osteoporose"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu"],
    schemaCity: "Mandaguaçu"
  },
  marialva: {
    city: "Marialva",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Marialva — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Marialva</>,
    heroDesc: "Acompanhamento da saúde física e cognitiva para a população de Marialva.",
    seoTitle: "Geriatra em Marialva-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Médico geriatra para Marialva-PR. Consultas presenciais no consultório em Maringá ou visitas médicas agendadas na residência do paciente em Marialva.",
    intro: "Pacientes da 'Capital da Uva' contam com o atendimento do Dr. Adilson Silvestre em seu consultório de referência em Maringá ou através de consultas domiciliares atenciosas em Marialva, ideais para pacientes com restrição de mobilidade.",
    sections: [
      {
        title: "Atendimento para a população de Marialva",
        items: [
          "Consultas presenciais confortáveis na clínica próxima em Maringá",
          "Atendimento domiciliar humanizado em Marialva",
          "Foco em envelhecimento ativo, nutrologia e reabilitação funcional"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu"],
    schemaCity: "Marialva"
  },
  iguaracu: {
    city: "Iguaraçu",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Iguaraçu — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Iguaraçu</>,
    heroDesc: "Consultas presenciais detalhadas em Maringá ou visitas médicas domiciliares em Iguaraçu.",
    seoTitle: "Geriatra em Iguaraçu-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Atendimento geriátrico e de nutrologia para Iguaraçu-PR. Dr. Adilson Silvestre atende no consultório em Maringá e realiza visitas domiciliares.",
    intro: "O Dr. Adilson Silvestre disponibiliza atendimento médico humanizado focado no envelhecimento saudável para moradores de Iguaraçu-PR, com consultas presenciais estruturadas e atendimento domiciliar personalizado.",
    sections: [
      {
        title: "Serviços médicos em Iguaraçu",
        items: [
          "Consultas no consultório Clinic Garden em Maringá",
          "Atendimento domiciliar para maior conforto do idoso em Iguaraçu",
          "Prevenção e controle de problemas comuns da idade"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu"],
    schemaCity: "Iguaraçu"
  },
  "regiao-metropolitana-de-maringa": {
    city: "Região Metropolitana de Maringá",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden - Maringá - PR",
    heroSubtitle: "Atendimento na Grande Maringá",
    heroTitle: <>Geriatria especializada<br />na Grande Maringá</>,
    heroDesc: "Estrutura completa de atendimento presencial em Maringá e visitas médicas em toda a região metropolitana.",
    seoTitle: "Geriatra na Região Metropolitana de Maringá-PR | Dr. Adilson Silvestre",
    seoDesc: "Consulte um médico geriatra na Região Metropolitana de Maringá-PR. Dr. Adilson Silvestre atende presencialmente na clínica e realiza visitas em domicílio.",
    intro: "Toda a Região Metropolitana de Maringá tem acesso às soluções integradas de geriatria preventiva e nutrologia do Dr. Adilson Silvestre. O atendimento pode ser presencial na clínica sede ou domiciliar sob agendamento prévio.",
    sections: [
      {
        title: "Cidades atendidas na Região Metropolitana",
        items: [
          "Maringá, Sarandi, Paiçandu, Mandaguaçu, Marialva e Iguaraçu",
          "Atendimento domiciliar para pacientes impossibilitados de locomoção",
          "Avaliação de polifarmácia, equilíbrio, sono e declínio de força"
        ]
      }
    ],
    regionKeywords: ["Maringá", "Sarandi", "Paiçandu", "Mandaguaçu", "Marialva", "Iguaraçu", "Região Metropolitana de Maringá"],
    schemaCity: "Maringá"
  },
  tamboara: {
    city: "Tamboara",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Tamboara — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Tamboara</>,
    heroDesc: "Consultas de alta qualidade em Paranavaí ou visita médica no próprio município de Tamboara.",
    seoTitle: "Geriatra em Tamboara-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Precisa de geriatra em Tamboara-PR? Dr. Adilson Silvestre atende no consultório em Paranavaí ou realiza visitas domiciliares em Tamboara. Agende agora.",
    intro: "Moradores de Tamboara-PR contam com atendimento do geriatra Dr. Adilson Silvestre de forma presencial no consultório de Paranavaí ou por meio de visitas médicas atenciosas no próprio domicílio do paciente em Tamboara.",
    sections: [
      {
        title: "Opções de saúde para Tamboara",
        items: [
          "Consultas a apenas alguns minutos de distância, na clínica em Paranavaí",
          "Atendimento geriátrico e nutrológico domiciliar em Tamboara",
          "Diagnóstico e prevenção de perda de força física e memória"
        ]
      }
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá"],
    schemaCity: "Tamboara"
  },
  "terra-rica": {
    city: "Terra Rica",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Terra Rica — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Terra Rica</>,
    heroDesc: "Atendimento presencial em Paranavaí ou visitas domiciliares completas em Terra Rica.",
    seoTitle: "Geriatra em Terra Rica-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Busca geriatra em Terra Rica-PR? Dr. Adilson Silvestre realiza consultas em consultório em Paranavaí e oferece visitas domiciliares para pacientes acamados.",
    intro: "O Dr. Adilson Silvestre oferece consultas presenciais estruturadas no consultório de Paranavaí e realiza visitas em domicílio em Terra Rica-PR para pacientes idosos com dificuldades de locomoção, reduzindo o estresse do deslocamento rodoviário.",
    sections: [
      {
        title: "Atendimento especializado em Terra Rica",
        items: [
          "Consulta no consultório do Instituto Longeviver em Paranavaí",
          "Visita domiciliar atenta na comodidade da sua casa em Terra Rica",
          "Controle de doenças crônicas como hipertensão e diabetes"
        ]
      }
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá"],
    schemaCity: "Terra Rica"
  },
  loanda: {
    city: "Loanda",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Loanda — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Loanda</>,
    heroDesc: "Consulta médica de referência em Paranavaí ou visita domiciliar na cidade de Loanda.",
    seoTitle: "Geriatra em Loanda-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Atendimento médico geriatra para Loanda-PR. Dr. Adilson Silvestre atende presencialmente na clínica em Paranavaí e em domicílio em Loanda.",
    intro: "O Dr. Adilson Silvestre atende a população de Loanda-PR por meio de consultas programadas no consultório de Paranavaí ou visitas domiciliares completas para idosos com restrição grave de locomoção.",
    sections: [
      {
        title: "Como se consultar residindo em Loanda",
        items: [
          "Agende consulta presencial na clínica de Paranavaí",
          "Solicite atendimento domiciliar atencioso diretamente em Loanda",
          "Revisão de polifarmácia e exames clínicos preventivos"
        ]
      }
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá"],
    schemaCity: "Loanda"
  },
  guairaca: {
    city: "Guairaçá",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR (Consultório de Referência)",
    heroSubtitle: "Atendimento em Guairaçá — PR",
    heroTitle: <>Geriatria e Nutrologia<br />para Guairaçá</>,
    heroDesc: "Atendimento médico humanizado na clínica de Paranavaí ou visita domiciliar em Guairaçá.",
    seoTitle: "Geriatra em Guairaçá-PR | Dr. Adilson Silvestre — Consulta e Visita Domiciliar",
    seoDesc: "Dr. Adilson Silvestre atende pacientes de Guairaçá-PR com consultas presenciais em Paranavaí e visitas domiciliares sob agendamento.",
    intro: "Moradores de Guairaçá-PR contam com a comodidade das consultas médicas presenciais no consultório em Paranavaí ou podem usufruir da visita geriátrica domiciliar sob agendamento prévio.",
    sections: [
      {
        title: "Serviços médicos para Guairaçá",
        items: [
          "Consultas presenciais de 60 a 90 minutos no consultório",
          "Visita domiciliar preventiva diretamente em Guairaçá",
          "Prevenção de quedas, ajuste seguro de receitas e promoção de autonomia"
        ]
      }
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá"],
    schemaCity: "Guairaçá"
  },
  "noroeste-do-parana": {
    city: "Noroeste do Paraná",
    state: "PR",
    type: "Atendimento Presencial e Domiciliar",
    address: "Rua Getúlio Vargas n455, Centro, Instituto Longeviver - Paranavaí-PR",
    heroSubtitle: "Atendimento no Noroeste do Estado",
    heroTitle: <>Geriatria especializada<br />no Noroeste do PR</>,
    heroDesc: "Estrutura de consultas de referência em Paranavaí e atendimento domiciliar em toda a região.",
    seoTitle: "Geriatra no Noroeste do Paraná-PR | Dr. Adilson Silvestre",
    seoDesc: "Consulte um geriatra especialista no Noroeste do Paraná-PR. Dr. Adilson Silvestre atende presencialmente na clínica e faz visitas domiciliares regionais.",
    intro: "Toda a região do Noroeste do Paraná conta com o suporte especializado do Dr. Adilson Silvestre para acompanhamento geriátrico, nutrologia e reabilitação de idosos, seja em consultório ou em domicílio.",
    sections: [
      {
        title: "Cidades atendidas no Noroeste do PR",
        items: [
          "Paranavaí, Tamboara, Terra Rica, Loanda e Guairaçá",
          "Visitas domiciliares para pacientes com mobilidade reduzida",
          "Avaliação diagnóstica completa e acompanhamento preventivo"
        ]
      }
    ],
    regionKeywords: ["Paranavaí", "Tamboara", "Terra Rica", "Loanda", "Guairaçá", "Noroeste do Paraná"],
    schemaCity: "Paranavaí"
  }
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
            {data.address && (
              <p className={styles.introAddress}>
                <strong>Endereço:</strong> {data.address}
              </p>
            )}
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
              {data.regionKeywords.map((r, k) => {
                const targetSlug = REGION_LINKS[r];
                if (targetSlug) {
                  return (
                    <Link key={k} href={`/locais-de-atendimento/${targetSlug}`} className={styles.regionTag}>
                      {r}
                    </Link>
                  );
                }
                return <span key={k} className={styles.regionTag}>{r}</span>;
              })}
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

import Link from "next/link";
import styles from "./Footer.module.css";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato">

      {/* Hero background image layer */}
      <div className={styles.bgLayer} aria-hidden="true" />

      {/* Dark overlay for legibility */}
      <div className={styles.bgOverlay} aria-hidden="true" />

      {/* Content */}
      <div className={styles.container}>

        {/* Big CTA block — GI style centered */}
        <div className={styles.ctaBlock}>
          <p className={styles.eyebrow}>Atendimento em Maringá e Paranavaí</p>
          <h2 className={styles.heading}>
            Cuide da sua saúde com quem entende do envelhecimento
          </h2>
          <p className={styles.subText}>
            Envie sua mensagem pelo WhatsApp. Nossa equipe entrará em contato o mais breve possível.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <span className={styles.ctaInner}>
              Agendar Consulta
              <WhatsAppIcon />
            </span>
          </a>
        </div>

        {/* Hairline divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Footers Links Grid */}
        <div className={styles.linksGrid}>
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Navegação</h3>
            <ul className={styles.colList}>
              <li><Link href="/" className={styles.colLink}>Home</Link></li>
              <li><Link href="/sobre" className={styles.colLink}>Sobre o Médico</Link></li>
              <li><Link href="/blog" className={styles.colLink}>Artigos / Blog</Link></li>
              <li><Link href="/perguntas-frequentes" className={styles.colLink}>Perguntas Frequentes</Link></li>
            </ul>
          </div>
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quando Consultar</h3>
            <ul className={styles.colList}>
              <li><Link href="/prevencao-40-anos" className={styles.colLink}>Prevenção aos 40 Anos</Link></li>
              <li><Link href="/avaliacao-geriatrica" className={styles.colLink}>Avaliação Geriátrica Global</Link></li>
              <li><Link href="/atendimento-online" className={styles.colLink}>Atendimento Domiciliar & Online</Link></li>
            </ul>
          </div>
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Físico & Cognição</h3>
            <ul className={styles.colList}>
              <li><Link href="/doencas/alzheimer" className={styles.colLink}>Doença de Alzheimer</Link></li>
              <li><Link href="/doencas/perda-memoria" className={styles.colLink}>Perda de Memória</Link></li>
              <li><Link href="/doencas/demencia" className={styles.colLink}>Outras Demências</Link></li>
              <li><Link href="/doencas/sarcopenia" className={styles.colLink}>Sarcopenia (Perda de Massa)</Link></li>
              <li><Link href="/doencas/osteoporose" className={styles.colLink}>Osteoporose</Link></li>
              <li><Link href="/doencas/prevencao-quedas" className={styles.colLink}>Prevenção de Quedas</Link></li>
            </ul>
          </div>
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Qualidade & Crônicas</h3>
            <ul className={styles.colList}>
              <li><Link href="/doencas/insonia" className={styles.colLink}>Insônia & Sono</Link></li>
              <li><Link href="/doencas/ansiedade-depressao" className={styles.colLink}>Ansiedade & Depressão</Link></li>
              <li><Link href="/doencas/diabetes" className={styles.colLink}>Diabetes Mellitus</Link></li>
              <li><Link href="/doencas/hipertensao" className={styles.colLink}>Hipertensão Arterial</Link></li>
              <li><Link href="/doencas/polifarmacia" className={styles.colLink}>Polifarmácia (Revisão)</Link></li>
            </ul>
          </div>
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Exames e Diagnósticos</h3>
            <ul className={styles.colList}>
              <li><Link href="/tecnologias/teste-genetico" className={styles.colLink}>Testes Genéticos</Link></li>
              <li><Link href="/tecnologias/medicina-personalizada#bioimpedancia" className={styles.colLink}>Bioimpedância</Link></li>
              <li><Link href="/tecnologias/medicina-personalizada#polissonografia" className={styles.colLink}>Polissonografia Domiciliar</Link></li>
              <li><Link href="/tecnologias/medicina-personalizada#terapias" className={styles.colLink}>Terapias Injetáveis</Link></li>
              <li><Link href="/doencas/reposicao-hormonal" className={styles.colLink}>Reposição Hormonal</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar — social + copyright + credits */}
        <div className={styles.bottom}>
          <div className={styles.social}>
            <a
              className={styles.socialBtn}
              href="https://www.instagram.com/dr.adilson.silvestre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Dr. Adilson Silvestre"
            >
              <InstagramIcon />
            </a>
            <a
              className={styles.socialBtn}
              href="https://api.whatsapp.com/send?phone=5544997013040"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do Dr. Adilson Silvestre"
            >
              <WhatsAppIcon />
            </a>
          </div>

          <div className={styles.bottomMeta}>
            <p className={styles.copy}>
              © {currentYear} Dr. Adilson Silvestre — Médico Geriatra. CRM-PR 31.470 | RQE 28.536
            </p>
            <p className={styles.developerCredits}>
              Desenvolvido por:{" "}
              <a
                href="https://codebypatrick.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.devLink}
              >
                Patrick.Developer
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

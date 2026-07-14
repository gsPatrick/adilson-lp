"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Navigation Menu */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            
            <li className={styles.navItem}>
              <Link href="/sobre" className={styles.navLink}>
                Sobre o Médico
              </Link>
            </li>

            {/* Dropdown 1: Quando Consultar */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <span className={styles.navLink}>
                Quando Consultar
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="12" height="12">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link href="/prevencao-40-anos" className={styles.dropdownLink}>
                    Prevenção após os 40 Anos
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/avaliacao-geriatrica" className={styles.dropdownLink}>
                    Avaliação Geriátrica Global
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/atendimento-online" className={styles.dropdownLink}>
                    Atendimento Online & Domiciliar
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown 2: Doenças Tratadas (Mega Dropdown Layout) */}
            <li className={`${styles.navItem} ${styles.hasDropdown} ${styles.megaNavItem}`}>
              <span className={styles.navLink}>
                Doenças Tratadas
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="12" height="12">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              
              {/* Mega Dropdown Panel */}
              <div className={styles.megaDropdown}>
                <div className={styles.megaGrid}>
                  {/* Column 1 */}
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaColTitle}>Cognição e Movimento</h4>
                    <ul className={styles.megaList}>
                      <li>
                        <Link href="/doencas/alzheimer" className={styles.megaLink}>
                          Doença de Alzheimer
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/parkinson" className={styles.megaLink}>
                          Doença de Parkinson
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/perda-memoria" className={styles.megaLink}>
                          Perda de Memória
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/demencia" className={styles.megaLink}>
                          Outras Demências
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaColTitle}>Força e Equilíbrio</h4>
                    <ul className={styles.megaList}>
                      <li>
                        <Link href="/doencas/sarcopenia" className={styles.megaLink}>
                          Sarcopenia (Perda de Massa)
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/osteoporose" className={styles.megaLink}>
                          Osteoporose
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/prevencao-quedas" className={styles.megaLink}>
                          Prevenção de Quedas
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaColTitle}>Sono, Mente e Hormônios</h4>
                    <ul className={styles.megaList}>
                      <li>
                        <Link href="/doencas/insonia" className={styles.megaLink}>
                          Insônia e Distúrbios do Sono
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/ansiedade-depressao" className={styles.megaLink}>
                          Ansiedade e Depressão
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/reposicao-hormonal" className={styles.megaLink}>
                          Reposição Hormonal
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div className={styles.megaCol}>
                    <h4 className={styles.megaColTitle}>Metabolismo e Clínica</h4>
                    <ul className={styles.megaList}>
                      <li>
                        <Link href="/doencas/diabetes" className={styles.megaLink}>
                          Diabetes Mellitus
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/hipertensao" className={styles.megaLink}>
                          Hipertensão Arterial
                        </Link>
                      </li>
                      <li>
                        <Link href="/doencas/polifarmacia" className={styles.megaLink}>
                          Polifarmácia (Revisão)
                        </Link>
                      </li>
                      <li>
                        <Link href="/emagrecimento" className={styles.megaLink}>
                          Plano de Emagrecimento
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Dropdown 3: Exames & Diagnósticos */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <span className={styles.navLink}>
                Exames e Diagnósticos
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="12" height="12">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/teste-genetico" className={styles.dropdownLink}>
                    Testes Genéticos
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/medicina-personalizada#bioimpedancia" className={styles.dropdownLink}>
                    Bioimpedância
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/medicina-personalizada#polissonografia" className={styles.dropdownLink}>
                    Polissonografia Domiciliar
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/medicina-personalizada#terapias" className={styles.dropdownLink}>
                    Terapias Injetáveis
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/doencas/reposicao-hormonal" className={styles.dropdownLink}>
                    Reposição Hormonal
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink}>
                Artigos
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a
            href="https://api.whatsapp.com/send?phone=5544997013040&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.mobileToggleActive : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>
    </header>
  );
}

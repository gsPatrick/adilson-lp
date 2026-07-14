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
        {/* Brand Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logoLink}>
            <img
              src="/images/instituto_longeviver-logotipo_horizontal-fundo_transparente@5x-2.webp"
              alt="Instituto Longeviver"
              className={styles.logoImage}
            />
          </Link>
        </div>

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

            {/* Dropdown 2: Doenças Tratadas (with Nested Sub-Dropdowns) */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <span className={styles.navLink}>
                Doenças Tratadas
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="12" height="12">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              <ul className={styles.dropdownMenu}>
                {/* Sub-dropdown A */}
                <li className={`${styles.dropdownItem} ${styles.hasSubDropdown}`}>
                  <span className={styles.dropdownLink}>
                    Distúrbios Cognitivos
                    <svg className={styles.arrowSubIcon} viewBox="0 0 24 24" width="12" height="12">
                      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </span>
                  <ul className={styles.subDropdownMenu}>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/alzheimer" className={styles.subDropdownLink}>
                        Doença de Alzheimer
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/perda-memoria" className={styles.subDropdownLink}>
                        Perda de Memória
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/demencia" className={styles.subDropdownLink}>
                        Outras Demências
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Sub-dropdown B */}
                <li className={`${styles.dropdownItem} ${styles.hasSubDropdown}`}>
                  <span className={styles.dropdownLink}>
                    Saúde Muscular & Óssea
                    <svg className={styles.arrowSubIcon} viewBox="0 0 24 24" width="12" height="12">
                      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </span>
                  <ul className={styles.subDropdownMenu}>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/sarcopenia" className={styles.subDropdownLink}>
                        Sarcopenia (Perda de Massa)
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/osteoporose" className={styles.subDropdownLink}>
                        Osteoporose
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/prevencao-quedas" className={styles.subDropdownLink}>
                        Prevenção de Quedas
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Sub-dropdown C */}
                <li className={`${styles.dropdownItem} ${styles.hasSubDropdown}`}>
                  <span className={styles.dropdownLink}>
                    Sono & Saúde Mental
                    <svg className={styles.arrowSubIcon} viewBox="0 0 24 24" width="12" height="12">
                      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </span>
                  <ul className={styles.subDropdownMenu}>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/insonia" className={styles.subDropdownLink}>
                        Insônia & Distúrbios do Sono
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/ansiedade-depressao" className={styles.subDropdownLink}>
                        Ansiedade & Depressão
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Sub-dropdown D */}
                <li className={`${styles.dropdownItem} ${styles.hasSubDropdown}`}>
                  <span className={styles.dropdownLink}>
                    Doenças Crônicas
                    <svg className={styles.arrowSubIcon} viewBox="0 0 24 24" width="12" height="12">
                      <path fill="currentColor" d="M10 17l5-5-5-5v10z" />
                    </svg>
                  </span>
                  <ul className={styles.subDropdownMenu}>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/diabetes" className={styles.subDropdownLink}>
                        Diabetes Mellitus
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/hipertensao" className={styles.subDropdownLink}>
                        Hipertensão Arterial
                      </Link>
                    </li>
                    <li className={styles.subDropdownItem}>
                      <Link href="/doencas/polifarmacia" className={styles.subDropdownLink}>
                        Polifarmácia (Revisão de Medicamentos)
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Dropdown 3: Exames & Tecnologias */}
            <li className={`${styles.navItem} ${styles.hasDropdown}`}>
              <span className={styles.navLink}>
                Tecnologias
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="12" height="12">
                  <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                </svg>
              </span>
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/teste-genetico" className={styles.dropdownLink}>
                    Teste Genético Preditivo
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/tecnologias/medicina-personalizada" className={styles.dropdownLink}>
                    Medicina Personalizada
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

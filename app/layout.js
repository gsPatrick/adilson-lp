import { Montserrat } from "next/font/google";
import Header from "@/components/organisms/Header/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://dradilsonsilvestre.com.br"),
  title: {
    default: "Dr. Adilson Silvestre | Geriatra em Maringá e Paranavaí - PR",
    template: "%s | Dr. Adilson Silvestre - Geriatra",
  },
  description:
    "Médico Geriatra e pós-graduado em Nutrologia. Referência em envelhecimento saudável, autonomia, tratamento de Alzheimer, osteoporose, diabetes e emagrecimento.",
  keywords: [
    "geriatra maringa",
    "geriatra paranavai",
    "médico geriatra paraná",
    "consulta geriatria",
    "médico idoso maringá",
    "tratamento alzheimer",
    "tratamento parkinson",
    "reposição hormonal",
    "bioimpedanciometria inbody maringá",
    "polissonografia domiciliar maringá",
    "nutrologia maringá",
    "dr adilson silvestre geriatra",
    "envelhecimento saudável"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://dradilsonsilvestre.com.br",
    siteName: "Dr. Adilson Silvestre | Geriatra & Nutrologia",
    images: [
      {
        url: "/images/dr-adilson-sobre-desk.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Adilson Silvestre no consultório",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Adilson Silvestre | Geriatra em Maringá e Paranavaí",
    description: "Referência em envelhecimento saudável, geriatria preventiva e nutrologia.",
    images: ["/images/dr-adilson-sobre-desk.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://dradilsonsilvestre.com.br/#physician",
        "name": "Dr. Adilson Silvestre - Geriatra & Nutrologia",
        "url": "https://dradilsonsilvestre.com.br",
        "telephone": "+5544997013040",
        "medicalSpecialty": ["Geriatrics", "Nutrology"],
        "description": "Médico Geriatra e pós-graduado em Nutrologia em Maringá e Paranavaí. Especialista no envelhecimento ativo, autonomia, diabetes, osteoporose e Alzheimer.",
        "image": "https://dradilsonsilvestre.com.br/images/dr-adilson-sobre-desk.jpeg",
        "sameAs": [
          "https://www.instagram.com/dr.adilson.silvestre/"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "R. Olímpio Totti, 38 Jardim Das Nações, Clinic Garden",
            "addressLocality": "Maringá",
            "addressRegion": "PR",
            "postalCode": "87015-050",
            "addressCountry": "BR"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Rua Getúlio Vargas n455, Centro, Instituto Longeviver",
            "addressLocality": "Paranavaí",
            "addressRegion": "PR",
            "postalCode": "87702-000",
            "addressCountry": "BR"
          }
        ]
      }
    ]
  };

  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

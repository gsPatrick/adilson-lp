import { Montserrat } from "next/font/google";
import Header from "@/components/organisms/Header/Header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Dr. Adilson Silvestre",
  description: "Referência em envelhecimento saudável - Cuidado especializado para adultos e idosos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}



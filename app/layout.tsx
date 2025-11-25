import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Dra. Natalia Sacco | Dermatología & Estética",
  description:
    "Consultorio de la Dra. Natalia Sacco en Villa Urquiza. Dermatología clínica, quirúrgica y estética con protocolos personalizados y resultados naturales.",
  metadataBase: new URL("https://dranataliasacco.com"),
  openGraph: {
    title: "Dra. Natalia Sacco | Dermatología & Estética",
    description:
      "Cuidado integral de la piel, tratamientos estéticos personalizados y control clínico de patologías cutáneas.",
    url: "https://dranataliasacco.com",
    siteName: "Dra. Natalia Sacco",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

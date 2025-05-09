import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anahtarcı Osman | Elektronik Anahtar & Çilingirlik Hizmetleri",
  description: "Erdemli'de 7/24 çilingir hizmeti, oto anahtar, kasa açma, kumanda tamiri ve kilit sistemleri. Osman Levent Kaya güvencesiyle.",
  keywords: "anahtarcı, çilingir, erdemli, mersin, oto anahtar, kasa açma, kumanda tamiri, kilit sistemleri, osman levent kaya, anahtarci osman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-100 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}

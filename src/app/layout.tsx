import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anahtarcı Osman | Elektronik Anahtar & Çilingirlik Hizmetleri",
  description: "Erdemli'de 7/24 çilingir hizmeti, oto anahtar, kasa açma, kumanda tamiri ve kilit sistemleri. Osman Levent Kaya güvencesiyle.",
  keywords: "anahtarcı, çilingir, erdemli, mersin, oto anahtar, kasa açma, kumanda tamiri, kilit sistemleri, osman levent kaya, anahtarci osman",
  openGraph: {
    title: "Anahtarcı Osman | Elektronik Anahtar & Çilingirlik Hizmetleri",
    description: "Erdemli'de 7/24 profesyonel çilingir ve anahtarcılık hizmetleri.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.anahtarciosman-erdemli.com", // Replace with your actual domain when deployed
    siteName: "Anahtarcı Osman",
    images: [
      {
        url: "/logo.png", // Path to your logo in the public folder
        width: 200, // Actual width of your logo.png
        height: 200, // Actual height of your logo.png
        alt: "Anahtarcı Osman Logo",
      },
      // You can add a more specific OG image here if you have one (e.g., 1200x630)
      // {
      //   url: "/og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Anahtarcı Osman Hizmetleri",
      // },
    ],
  },
  // Optional: Add Twitter card metadata as well
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Anahtarcı Osman | Elektronik Anahtar & Çilingirlik Hizmetleri",
  //   description: "Erdemli'de 7/24 profesyonel çilingir ve anahtarcılık hizmetleri.",
  //   images: ["/logo.png"], // Or your specific Twitter image
  // },
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

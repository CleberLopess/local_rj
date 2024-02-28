import Layout from "@/components/sections/layout/layout";
import { ImoveisProvider } from "@/context/imoveis/imoveis";
import { ImagensHomeProvider } from "@/context/imagensHome/imagensHome";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "@/public/default-favicon.ico";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Local RJ",
  description: "Local Negócios Imobiliários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ImoveisProvider>
      <ImagensHomeProvider>
        <html lang="pt-br">
          <head>
            <link rel="shortcut icon" href={favicon.src} />
          </head>
          <body className={inter.className}>
            <Layout>{children}</Layout>
          </body>
        </html>
      </ImagensHomeProvider>
    </ImoveisProvider>
  );
}

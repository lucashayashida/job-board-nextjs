import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import {Maven_Pro, Barriecito} from "next/font/google";

const mavenPro = Maven_Pro({
  subsets: ['latin'], 
  weight: "variable", 
  variable:"--font-maven-pro"
});

const barriecito = Barriecito({
  subsets: ['latin'],
  weight: "400",
  variable:"--font-barriecito"
})



export const metadata: Metadata = {
  title: "CodanteVagas",
  description: "O CodanteVagas conecta candidatos a empregos ideias, oferecendo funcionalidades intuitivas para a busca e gerenciamento de vagas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={(mavenPro.variable, barriecito.variable)}>
  <body>
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex">{children}</main>
      <Footer />
    </div>
  </body>
</html>
  );
}

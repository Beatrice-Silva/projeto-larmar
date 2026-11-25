
import "./globals.css";
import Cabecalho from "@/components/Cabecalho/cabecalho";"";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" 
    className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        
        <Cabecalho />
        
      <main className="conteudo">{children}</main>  
      </body>
    </html>
  );
}

/*
Carregando: 

  <Suspense fallback={<Carregando />}>
        <Cabecalho />
        </Suspense>
*/
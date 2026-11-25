
import { useState } from "react";
//import Image from "next/image";
import { USUARIOS, SERVICOS } from "@/dados/exemplo";
import cardServico from "@/components/CardServico/CardServico";
import Mensagem from "@/components/Mensagem/mensagem";
import Cabecalho from "@/components/Cabecalho/cabecalho";
import styles from "./page.module.css";

//lista de servicos com o filtro


export default function Home() {
  return (
    <>
    
    <div className={styles.page}>
      <header ></header>

      
      <main className={styles.main}>
          
          
        </main>
    
    <footer></footer>
    
    </div>
    </>
  );
}

import { SERVICOS } from "@/dados/exemplo";
import styles from "./cardServico.module.css"
import  Link from "next/link";

"use client";

import { useState } from "react";
// import Image from "next/image";
import { servicos, categorias } from "@/dados/exemplo";
import CardServico from "@/components/CardServico/CardServico";

export default function cardServico ({servico}){

    return(
      <li>
      
        <link href={`/servicos/${servico.id}`} className={styles.card}>
        <span className={styles.categoria}>{servico.categoria}</span>
        <p className={styles.info}>
          {servico.tempo} min - {servico.categoria} categorias
        </p>
        </link>
      </li>
    )


}


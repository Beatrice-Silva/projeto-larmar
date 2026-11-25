import { SERVICOS } from "@/dados/exemplo";
import styles from "./cardServico.module.css"
import  Link from "next/link";


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


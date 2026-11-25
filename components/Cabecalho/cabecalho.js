"use client";

import Link from "next/link";
import styles from "./cabecalho.module.css"
import { USUARIOS } from "@/dados/exemplo";



export default function Cabecalho({}) {
    return (
        <header className={styles.Cabecalho}>
            <Link href="/" className={styles.home}>Resort LarMar</Link>
            <p>Agendamentos fluídos e práticos</p>
            <nav className={styles.menu}>
            {LINKS.map((link) => (
            
            <Link key={link.href} href={link.href} 
            className={caminho === link.href ? styles.ativo : styles.link}>
            {link.texto}
            </Link>
            ))}
            {usuario ? (
                <button type="button" className="botao-secundario" onClick={fazerLogout}>
                Deslogar ({usuario.nome})

                </button>

            ) : ( 
                <Link href="/login" className={styles.link}>
                    Entrar
                </Link>
            )}
            </nav>
        </header>
  
    );
  }

  
  
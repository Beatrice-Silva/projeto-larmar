"use client";

import styles from "./Categorias.module.css";
import { useState } from "react";
import Campo from "@/components/Campo/campo";
import Botao from "@/components/botao/botao";
import Mensagem from "@/components/Mensagem/mensagem";
import { useSessao } from "@/context/SessaoContext";
 
export default function Categorias() {
    
    const { usuario } = useSessao();
    const [categorias, setCategorias] = useState(categoriasExemplo);
    const [nome, setNome] = useState("");
    const [erro , setErro] = useState("");
    const [sucesso, setSucesso] = useState("");



    const adicionarCategoria = () => {
        if (nome.trim()) {
            const novaCategoria = {
                id: categorias.length + 1,
                nome: nome.trim()
            };
            setCategorias([...categorias, novaCategoria]);
            setNome("");
            setSucesso("Categoria adicionada com sucesso!");
            setErro("");
        } else {
            setErro("Por favor, informe o nome da categoria.");
            setSucesso("");
        }
    };

    return (
        <>
        <h1>Categorias</h1>
        {categorias.length === 0 && <Mensagem>
            Nenhuma categoria cadastrada.
        </Mensagem>}
        <ul className={styles.lista}>
            {categorias.map((categoria) => (
                <li key={categoria.id} className={styles.item}>
                    {categoria.nome}
                </li>
            ))}
        </ul>

        {usuario && (
            <form className={styles.formulario} onSubmit={cadastrar} noValidate> 
                <h2>Nova Categoria</h2>
                <Mensagem tipo="erro">{erro}</Mensagem>
                <Mensagem tipo="sucesso">{sucesso}</Mensagem>
                
                <Campo
                    rotulo="Nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <Botao type="submit">Cadastrar</Botao>
            </form>
        )}
        </>        
    )
}
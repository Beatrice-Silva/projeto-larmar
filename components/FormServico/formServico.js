"use client";

import { useState } from "react";
import Campo from "../Campo/campo";
import Botao from "../botao/botao";
import Mensagem from "../Mensagem/mensagem";
import styles from "./FormServico/formServico.module.css"

const VAZIO = {   
    nome: "",
    duracaoMi: "",
    preco: "",
    status: "",
    imagem_url: ""}

    //Form cadastrar e editar
    //Comeca vazio; recebe o servico e comeca preenchido
    //aoSalvar e da pagina
    export default function FormServico({
        categorias, servicoInicial = VAZIO, aoSalvar
    }) {
        const [ dados, setDados] = useState(servicoInicial)
        const [ erros, setErros] = useState({})
        const [ mensagem, setMensagem] = useState("")
        const [ salvando, setSalvando ] = useState(false)

        //
        const mudar = (event) => {
            const{ name, value} = event.target;
            setDados({ ...dados, [name]: value})
        }
    

    const enviar = async (event) =>{
        event.preventDefault()
        const novos = validar()
        setErros(novos)
        if(Object.keys(novos).length > 0) return //erro = para

        setSalvando(true)
        setMensagem("")

        try{
            await aoSalvar(dados)
                
            }catch (erro){
                setMensagem(erro.message)
                setSalvando(false)
            }
        }

        return (
            <form className={styles.form} onSubmit={enviar}
            noValidate>
                <Mensagem tipo="erro">{erro}</Mensagem>
            <Campo
            id="Nome"
            name="nome"
            value={dados.nome}
            onChange={mudar}
            erro={erros.nome}
            />

            <Campo
            id="Duração mínima"
            name="duracaoMin"
            value={dados.duracaoMin}
            onChange={mudar}
            erro={erros.duracaoMin}
            />
            
            <Campo
            id="Preço"
            name="preco"
            value={dados.preco}
            onChange={mudar}
            erro={erros.preco}
            />
            
            <Campo
            id="Status"
            name="status"
            value={dados.status}
            onChange={mudar}
            erro={erros.status}
            />

            <Campo
            id="Categoria"
            name="categoria"
            value={dados.categoria}
            onChange={mudar}
            erro={erros.categoria}
            />
            </form>
        )

    
    }

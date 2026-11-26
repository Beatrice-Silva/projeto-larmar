"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Campo from "@/components/Campo/Campo";
import Botao from "@/components/Botao/Botao";
import Mensagem from "@/components/Mensagem/Mensagem";
import styles from "./cadastro.module.css";

// Rota "/cadastro" criar conta (nome, e-mail e senha), no mesmo jeito do login.
export default function Cadastro() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const enviar = (event) => {
    event.preventDefault();
    if (nome.trim() === "" || email.trim() === "" || senha === "") {
      setErro("Preencha nome, e-mail e senha.");
      return;
    }
    // etapa 3: a API responde 409 se o e-mail já existe
    router.replace("/login");
  };

  return (
    <form className={styles.cadastro} onSubmit={enviar} noValidate>
      <h1>Criar conta</h1>
      <Mensagem tipo="erro">{erro}</Mensagem>
      <Campo
        rotulo="Nome"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Campo
        rotulo="E-mail"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Campo
        rotulo="Senha"
        id="senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Botao type="submit">Criar conta</Botao>
    </form>
  ); 
}
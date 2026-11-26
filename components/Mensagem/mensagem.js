import styles from ".mensagem.module.css";

export default function Mensagem({ tipo = "info", children }) {
  if (!children) return null;

  return (
    <p className={styles[tipo]} role={tipo === "erro" ? "alert" : "status"}>
      {children}
    </p>
  );
}


/*
<Mensagem tipo="erro">{erro}</Mensagem>
<Mensagem tipo="sucesso">Categoria cadastrada!</Mensagem>
{itens.lenght === 0 && <Mensagem>Nenhum item nesta categoria.</Mensagem>}
 
 */
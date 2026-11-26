
import { Children } from "react"
import styles from "./formServico.module.css"

export default function formServico({
    id, 
    nome,
    duracaoMin,
    preco,
    status,
    imagem_url
}) {

    let Tag = "input"
    if(multilinha) Tag = "textarea"
    if(children) Tag = "select"

    return(
        <div className={styles.formServico}>
            <label htmlFor={id}>{rotulo}</label>
        <Tag
        id={id}
        className={erro ? styles.comErro : styles.entrada}
        aria-invalid={erro ? true : undefined}
        nome={nome}
        duracaoMin={duracaoMin}
        preco={preco}
        status={status}
        imagem_url={imagem_url}
        >
            {children}
        </Tag>
        {erro && <span className={styles.erro}>{erro}</span>}
        
        </div>
    )
}
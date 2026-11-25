import styles from "./filtro.module.css"
//0 = todas
export default function filtroCategoria({categorias, selecionada, aoMudar}){


    return(
        <div className={styles.filtro}>
            
            
            <button key={categoria.id}
            type="button" className={selecionada === categoria.id
                ? styles.ativo : styles.opcao}
                onClick={() => aoMudar(categoria.id)}

            >{categoria.nome}
            </button>
        </div>
    )
}
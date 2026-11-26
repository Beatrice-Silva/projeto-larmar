
import { useState } from "react";
//import Image from "next/image";
import { servicos, categorias } from "@/dados/exemplo";
import CardServico from "@/components/CardServico/CardServico";
import FiltroCategorias from "@/components/FiltroCategorias/FiltroCategorias";
import Mensagem from "@/components/Mensagem/mensagem";
import Cabecalho from "@/components/Cabecalho/cabecalho";
import styles from "./page.module.css";

//lista de servicos com o filtro
// Rota "/" a listagem

// A página guarda o filtro; os componentes só mostram.
export default function PaginaInicial() {
  const [categoria, setCategoria] = useState(0); // 0 = todas

  // derivar em vez de guardar
  // a lista filtrada é calculada a cada render
  const visiveis =
    categoria === 0 ? servicos : servicos.filter((s) => s.categoriaId === categoria);

  return (
    <>
      <h1>Serviços</h1>
      <FiltroCategorias
        categorias={categorias}
        selecionada={categoria}
        aoMudar={setCategoria}
      />
      {visiveis.length === 0 && <Mensagem>Nenhum serviço nesta categoria.</Mensagem>}
      <ul className={styles.grade}>
        {visiveis.map((servico) => (
          <CardServico key={servico.id} servico={servico} />
        ))}
      </ul>
    </>
  );
}

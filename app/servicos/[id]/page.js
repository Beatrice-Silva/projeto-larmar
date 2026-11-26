"use client"

import styles from "./detalhe.module.css";
import { useParams, useRouter } from "react";
import FormServico from "@/components/FormServico/FormServico";
import RotaProtegida from "@/components/RotaProtegida/RotaProtegida";
import  Mensagem  from "@/components/Mensagem/Mensagem";
import { servicos, categorias } from "@/dados/exemplo";   


//90 vira '1h 30m', 60 vira '1h 0m', 45 vira '45m', 120 vira '2h 0m'
function formatarDuracao(minutos) {
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    if (horas === 0) return `${resto}m`;
    if (horas === 0) return `${resto}m`;
    return `${horas}h${String(resto).padStart(2, "0")}`;
}

    //Number() porque a API pode devolver o preço como texto("100.00") 
    function formatarPreco(valor) {
        return Number(valor).toLocaleString("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        });
    }
 
    export default function DetalheServico(){
    const { id } = useParams();
    const router = useRouter();
    const { usuario } = useSessao();
    const [carregando, setCarregando] = useState(false);

    const servico = servicos.find((s) => s.id === Number(id));

    if(!servico) {
          <>
        <Mensagem tipo="erro">Serviço não encontrado.</Mensagem>
        <Link href="/">Voltar para a lista</Link>
      </>
    }

    return(
       <article className={styles.detalhe}>
      <span className={styles.categoria}>{servico.categoria}</span>
      <h1>{servico.nome}</h1>
      <p className={styles.info}>
        {formatarDuracao(servico.duracaoMin)} · {formatarPreco(servico.preco)}
      </p>

      <div className={styles.acoes}>
        <Botao variante="secundario" type="button" onClick={() => router.back()}>
          ← Voltar
        </Botao>
        {usuario && (
          <>
            <Link href={`/servicos/${servico.id}/editar`} className={styles.editar}>
              Editar
            </Link>
            <Botao variante="perigo" type="button" onClick={() => setConfirmando(true)}>
              Excluir
            </Botao>
          </>
        )}
      </div>

      <ModalConfirmacao
        aberto={confirmando}
        titulo="Excluir serviço?"
        aoConfirmar={excluir}
        aoCancelar={() => setConfirmando(false)}
      >
        <p>&quot;{servico.nome}&quot; vai ser excluído. Não dá para desfazer.</p>
      </ModalConfirmacao>
    </article>
    )

    }


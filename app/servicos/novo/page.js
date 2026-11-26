"use client"

import { useRouter } from "next/navigation";
import RotaProtegida from "@/components/RotaProtegida/rotaProtegida";
import FormServico from "@/components/FormServico/formServico";
import { categorias } from "@/dados/exemplo";

//Rota /servicos/novo; ganha da pasta [id]
export default function NovoServico() {
    const router = useRouter();

    const salvar = async (dados) => {
        //Adicionar a lógica para salvar os dados do novo serviço
        console.log("Salvar:", dados);
        // Redirecionar para a página de serviços após salvar
        router.push("/");
    }

    return(
        <RotaProtegida>
            <h1>Novo Serviço</h1>
            <FormServico
                categorias={categorias}
                aoSalvar={salvar}
            />
        </RotaProtegida>
    )

} 
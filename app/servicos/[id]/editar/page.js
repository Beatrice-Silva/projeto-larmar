"use client"

import { useParams, useRouter } from "react";
import FormServico from "@/components/FormServico/formServico";
import RotaProtegida from "@/components/RotaProtegida/rotaProtegida";
import Mensagem from "@/components/Mensagem/mensagem";
import { servicos, categorias } from "@/dados/exemplo";   


export default function EditarServico() {
    const { id } = useParams();
    const router = useRouter();
    const servico = servicos.find((s) => s.id === parseInt(id));

    const salvar = async (dados) => {

        //salvar os dados do serviço editado
        console.log("Dados do serviço editado:", dados);
        // Redirecionar para a página de serviços após salvar
        router.push(`/servicos/${id}`);
    }
 
    return (
        <RotaProtegida>
            <h1>Editar Serviço</h1>
            {servico ? (
                <FormServico
                    categorias={categorias}
                    servicoInicial={servico}
                    aoSalvar={salvar}
                />
            ) : (
                <Mensagem tipo="erro">Serviço não encontrado.</Mensagem>
            )}
        </RotaProtegida>

    )
 }
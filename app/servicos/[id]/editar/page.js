"use client"

import styles from "@/app/detalhe/detalhe.module.css";
import { useParams, useRouter } from "react";
import FormServico from "@/components/FormServico/FormServico";
import RotaProtegida from "@/components/RotaProtegida/RotaProtegida";
import  Mensagem  from "@/components/Mensagem/Mensagem";
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
                    servicoinicial={servico}
                    aoSalvar={salvar}
                />
            ) : (
                <Mensagem tipo="erro">Serviço não encontrado.</Mensagem>
            )}
        </RotaProtegida>

    )
 }
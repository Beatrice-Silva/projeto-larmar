import{
    categoria as categoriasIniciais,
    
    servico as servicosIniciais,
    
} from "@/dados/exemplo"

import { pegarToken } from "@/lib/sessao"

const CHAVES = {
    categorias: "banco-categorias",
    servicos: "banco-servicos",
    usuarios: "banco-usuarios"
}

function ler(chave, inicial){
    try{
        const texto = localStorage.getItem(chave)
        return texto ? JSON.parse(texto) : inicial
    }catch{
        return inicial  //JSON estragado : comeca denovo
    }
}

function gravar(chave, dados){
    localStorage.setItem(chave, JSON.stringify(dados))
}

function erro(status, mensagem){
    const e = new Error(mensagem)
    e.status = status
    return e
}

//"Carregando" aparece
const esperar = (ms = 300) => new Promise((resolver) => setTimeout(resolver, ms))

function usuarioLogado(){
    const token = pegarToken()
    const usuario = ler(CHAVES.usuarios, []).find((u) => u.token && u.token === token)
    if(!usuario) throw erro(401, "Faça login para continuar.")
        return usuario
}

export async function listarCategorias() {
    await esperar()
    return ler(CHAVES.categorias, categoriasIniciais)
}

export async function criarCategoria({nome}){
    await esperar()
    usuarioLogado()
    if(!nome || nome.trim === "")
        throw erro(400, "O nome da categoria é obrigatório.")
    const categorias = ler(CHAVES.categorias, categoriasIniciais)
    const nova = {id: Date.now(), nome: nome.trim()}
    gravar(CHAVES.categorias, [...categorias, nova])
    return nova
}

export async function listarServicos({nome}){
    await esperar()
    return ler(CHAVES.servicos, servicosIniciais)
}
export async function buscarServico(id){
    await esperar()
    const servico = ler(CHAVES.servicos, servicosIniciais).find(
    (r) => r.id === Number(id)
    )
    if(!servico) throw erro(404, "Serviço não econtrado.")
    return servico
    
}

function montarServico(dados){
    if(!dados.nome || dados.nome.trim() === "")
        throw erro(400, "O nome é obrigatório.")
    if(!dados.servico_id) throw erro(400, "A categoria e obrigatória.")
    const categoria = ler(CHAVES.categorias, categoriasIniciais).find(
        (c) => c.id === Number(dados.categoria_id)
    )
    if(!categoria) throw erro(400, "Categoria inválida.")
        return{
    
        }


}

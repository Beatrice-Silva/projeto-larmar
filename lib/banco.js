import{
    categoria as categoriaIniciais,
    
    servico as servicoInicial,
    
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
    const categorias = ler(CHAVES.categorias, categoriaIniciais)
    const nova = {id: Date.now(), nome: nome.trim()}
    gravar(CHAVES.categorias, [...categorias, nova])
}

export async function criarCategoria({nome}){
    await esperar()
    usuarioLogado()
}
export async function criarCategoria({nome}){
    await esperar()
    usuarioLogado()
}

function montarServico(dados){

}

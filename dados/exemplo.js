const [id, nome, duracaoMin, preco, imagem_url] = useState([])
const [carregando, setCarregando] = useState([true])
const [erro, setErro] = useState("")

useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/servicos")
    .then((resposta) =>{
        if (!resposta.ok) throw new Error("Não foi possível carregar.")
       })
       .then((dados) => setServico(dados))
       .catch((e) => setErro(e.message))
       .finally(() => setCarregando(false))

}, [])


export const categorias = [
  { id: 1, 
    nome: "Spa" },
  { id: 2, 
    nome: "Gastronomia" },
  { id: 3, 
    nome: "Lazer" },
  { id: 4, 
    nome: "Passeios" },
];

export const servicos = [
  { id: 1, nome: "Massagem relaxante", 
    duracaoMin: 60, preco: 180, status: "ativo",
    categoriaId: 1, categoria: "Spa" },
  { id: 2, nome: "Day use no spa", 
    duracaoMin: 240, preco: 320, status: "ativo",
    categoriaId: 1, categoria: "Spa" },
  { id: 3, nome: "Jantar à beira-mar", 
    duracaoMin: 120, preco: 280, status: "ativo",
    categoriaId: 2, categoria: "Gastronomia" },
  { id: 4, nome: "Café da manhã na varanda", 
    duracaoMin: 60, preco: 95, status: "ativo",
    categoriaId: 2, categoria: "Gastronomia" },
  { id: 5, nome: "Aula de stand-up paddle", 
    duracaoMin: 90, preco: 150, status: "ativo",
    categoriaId: 3, categoria: "Lazer" },
  { id: 6, nome: "Quadra de beach tennis", 
    duracaoMin: 60, preco: 80, status: "ativo",
    categoriaId: 3, categoria: "Lazer" },
  { id: 7, nome: "Passeio de barco", 
    duracaoMin: 180, preco: 350, status: "ativo",
    categoriaId: 4, categoria: "Passeios" },
  { id: 8, nome: "Trilha ecológica guiada", 
    duracaoMin: 135, preco: 120, status: "ativo",
    categoriaId: 4, categoria: "Passeios" },
];
 